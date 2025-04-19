"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const genAI = new GoogleGenerativeAI("AIzaSyD3_DyoFiECmNRa5mInLbhI5KZALGpc4ww");

// Types for API responses and function parameters
interface StationSearchResponse {
  data?: Array<{
    station_name: string;
    station_code: string;
  }>;
  error?: string;
}

interface TrainSearchResponse {
  data?: Array<{
    train_number: string;
    train_name: string;
    from_station_name: string;
    to_station_name: string;
    from_sta: string;
    to_sta: string;
    duration: string;
    class: string[];
  }>;
  error?: string;
}

interface FareResponse {
  data?: {
    distance: string;
    fare: Record<string, number>;
  };
  error?: string;
}

interface TrainWithFare {
  train_number: string;
  train_name: string;
  departure: string;
  arrival: string;
  duration: string;
  duration_minutes: number;
  fares: Record<string, number>;
}

interface SearchParams {
  src: string;
  dest: string;
  date: string;
}

interface SearchResult {
  trains: Omit<TrainWithFare, "duration_minutes">[];
  error?: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Where do you want to go?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ellipses, setEllipses] = useState("");

  // Animated ellipses effect
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setEllipses(prev => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading]);

  /**
   * Converts duration string (HH:MM) to minutes for sorting
   */
  const durationToMinutes = (durationStr: string): number => {
    try {
      const parts = durationStr.split(":");
      if (parts.length === 2) {
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        return hours * 60 + minutes;
      }
      return 0;
    } catch {
      return 0;
    }
  };

  /**
   * Validates if the date string is in YYYY-MM-DD format
   */
  const validateDateFormat = (dateStr: string): boolean => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateStr)) return false;
    
    const date = new Date(dateStr);
    return date instanceof Date && !isNaN(date.getTime());
  };

  /**
   * Finds station code by station name
   */
  const findStationCode = async (stationName: string): Promise<string> => {
    try {
      const response = await axios.get<StationSearchResponse>(
        `https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${encodeURIComponent(stationName)}`,
        {
          headers: {
            'x-rapidapi-key': '09b3989b0bmsh3ef75ad308a9264p1d37e5jsn593a31023ee6',
            'x-rapidapi-host': 'irctc1.p.rapidapi.com'
          }
        }
      );

      if (response.data.data && response.data.data.length > 0) {
        return response.data.data[0].station_code;
      }
      throw new Error(`Station code not found for ${stationName}`);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error finding station code: ${error.message}`);
      }
      throw new Error('Unknown error occurred while finding station code');
    }
  };

  /**
   * Searches for trains between two stations on a specific date
   */
  const searchTrains = async (
    fromStationCode: string,
    toStationCode: string,
    travelDate: string
  ): Promise<TrainSearchResponse> => {
    try {
      const response = await axios.get<TrainSearchResponse>(
        `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromStationCode}&toStationCode=${toStationCode}&dateOfJourney=${travelDate}`,
        {
          headers: {
            'x-rapidapi-key': '0ac855de1bmshdec063eed1fbc2bp1c6950jsn3e071d58ae8f',
            'x-rapidapi-host': 'irctc1.p.rapidapi.com'
          }
        }
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error searching trains: ${error.message}`);
      }
      throw new Error('Unknown error occurred while searching trains');
    }
  };

  /**
   * Gets fare information for a train journey
   */
  const getTrainFare = async (
    trainNo: string,
    fromStationCode: string,
    toStationCode: string
  ): Promise<FareResponse> => {
    try {
      const response = await axios.get<FareResponse>(
        `https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=${trainNo}&fromStationCode=${fromStationCode}&toStationCode=${toStationCode}`,
        {
          headers: {
            'x-rapidapi-key': '09b3989b0bmsh3ef75ad308a9264p1d37e5jsn593a31023ee6',
            'x-rapidapi-host': 'irctc1.p.rapidapi.com'
          }
        }
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error getting fare: ${error.message}`);
      }
      throw new Error('Unknown error occurred while getting fare information');
    }
  };

  /**
   * Main function to search for trains and get top 3 by duration with fares
   */
  const getTopTrainsByDuration = async (params: SearchParams): Promise<SearchResult> => {
    try {
      const { src, dest, date } = params;
      
      // Validate inputs
      if (!src || !dest || !date) {
        return { 
          trains: [],
          error: "Missing required parameters: src, dest, date" 
        };
      }
      
      if (!validateDateFormat(date)) {
        return { 
          trains: [],
          error: "Invalid date format. Please use YYYY-MM-DD format." 
        };
      }
      
      // Determine if input is station code or name
      let sourceCode = src;
      let destinationCode = dest;
      
      // If not a station code (3-4 characters), try to find the code
      if (src.length !== 3 && src.length !== 4) {
        sourceCode = await findStationCode(src);
      }
      
      if (dest.length !== 3 && dest.length !== 4) {
        destinationCode = await findStationCode(dest);
      }
      
      // Search for trains
      const trainsData = await searchTrains(sourceCode, destinationCode, date);
      
      if (!trainsData.data || trainsData.data.length === 0) {
        return { 
          trains: [],
          error: "No trains found for the specified route and date" 
        };
      }
      
      // Process trains and get fares
      const trainPromises = trainsData.data.map(async (train) => {
        const trainInfo: TrainWithFare = {
          train_number: train.train_number,
          train_name: train.train_name,
          departure: train.from_sta,
          arrival: train.to_sta,
          duration: train.duration,
          duration_minutes: durationToMinutes(train.duration),
          fares: {}
        };
        
        // Get fare information
        try {
          const fareData = await getTrainFare(trainInfo.train_number, sourceCode, destinationCode);
          
          if (fareData.data && fareData.data.fare) {
            trainInfo.fares = fareData.data.fare;
          }
        } catch (error) {
          // Continue even if fare retrieval fails for a train
          console.error(`Failed to get fare for train ${trainInfo.train_number}: ${error}`);
        }
        
        return trainInfo;
      });
      
      // Wait for all fare requests to complete
      const trainList = await Promise.all(trainPromises);
      
      // Sort trains by duration (shortest first)
      const sortedTrains = trainList.sort((a, b) => a.duration_minutes - b.duration_minutes);
      
      // Get top 3 trains
      const topTrains = sortedTrains.slice(0, 3);
      
      // Remove duration_minutes from output
      const result = topTrains.map(train => {
        const { duration_minutes, ...rest } = train;
        return rest;
      });
      
      return { trains: result };
      
    } catch (error) {
      if (error instanceof Error) {
        return { 
          trains: [],
          error: error.message 
        };
      }
      return { 
        trains: [],
        error: "An unknown error occurred" 
      };
    }
  };

  const validateAndBeautifyJSON = (jsonString: string): { valid: boolean; content: string } => {
    try {
      const parsed = JSON.parse(jsonString);
      return {
        valid: true,
        content: JSON.stringify(parsed)
      };
    } catch (error) {
      return {
        valid: false,
        content: `Invalid JSON: ${jsonString} ${(error as Error).message}`
      };
    }
  };

  const formatTrainResults = (result: SearchResult): string => {
    if (result.error) {
      return `Error: ${result.error}`;
    }

    if (result.trains.length === 0) {
      return "No trains found for this route and date.";
    }

    let formattedResponse = "🚆 Here are the top trains for your journey:\n\n";

    result.trains.forEach((train, index) => {
      formattedResponse += `**Train ${index + 1}: ${train.train_name} (${train.train_number})**\n`;
      formattedResponse += `Departure: ${train.departure} | Arrival: ${train.arrival} | Duration: ${train.duration}\n`;
      
      if (Object.keys(train.fares).length > 0) {
        formattedResponse += "Fares:\n";
        Object.entries(train.fares).forEach(([classType, fare]) => {
          formattedResponse += `- ${classType}: ₹${fare}\n`;
        });
      } else {
        formattedResponse += "Fare information not available\n";
      }
      
      formattedResponse += "\n";
    });

    return formattedResponse;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    
    try {
      // Step 1: Get travel details from Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const systemPrompt = `Respond only in JSON with the format: {"src": src, "dest": dest, "date": YYYY-MM-DD}. Extract both locations from the input and respond with their railway station city codes in the JSON. If input is irrelevant, respond with empty JSON. Today's date is (${new Date().toISOString().split('T')[0]}). DO NOT PRINT BACKTICKS EVER, JUST RAW JSON.`;
      const generationResult = await model.generateContent([systemPrompt, userMessage].join("\n"));
      const response = await generationResult.response;
      const text = response.text();
      
      // Validate and parse JSON
      const { valid, content } = validateAndBeautifyJSON(text);
      
      if (!valid) {
        setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I couldn't understand your travel plans. Please try again with a clearer request." }]);
        return;
      }

      // Add intermediate message to show we're processing
      setMessages(prev => [...prev, { role: "assistant", content: `I found your travel details. Looking for trains...` }]);
      
      // Step 2: Use the JSON to fetch train information
      const travelDetails = JSON.parse(content);
      
      // Check if we have valid travel details
      if (!travelDetails.src || !travelDetails.dest || !travelDetails.date) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "I couldn't extract complete travel information. Please provide both source and destination locations along with a travel date." 
        }]);
        return;
      }
      
      // Step 3: Fetch train information
      const trainResults = await getTopTrainsByDuration(travelDetails);
      
      // Step 4: Format and display the results
      const formattedResults = formatTrainResults(trainResults);
      
      // Update the last message with the train results
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { role: "assistant", content: formattedResults };
        return newMessages;
      });
      
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error while fetching train information. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">YatraGPT Demo</h1>
        <Card className="p-4 mb-4 h-[60vh] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground ml-auto max-w-[80%]"
                  : "bg-muted max-w-[80%]"
              }`}
            >
              <pre className={`whitespace-pre-wrap ${message.role === "assistant" ? "font-mono text-sm" : ""}`}>
                {message.content}
              </pre>
            </div>
          ))}
          {isLoading && (
            <div className="text-center">
              <span className="text-muted-foreground animate-pulse font-medium text-lg relative">
                <span className="inline-block">Thinking</span>
                <span className="inline-block">{ellipses}</span>
                <span className="absolute inset-0 blur-[0px] opacity-70 text-primary animate-pulse">
                  Thinking{ellipses}
                </span>
              </span>
            </div>
          )}
        </Card>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
