"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyD3_DyoFiECmNRa5mInLbhI5KZALGpc4ww");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const systemPrompt = `Respond only in JSON with the format: {"src": src, "dest": dest, "date": YYYY-MM-DD}. Extract both locations from the input and respond with their railway station city codes in the JSON. If input is irrelevant, respond with empty JSON. Today's date is (${new Date().toISOString().split('T')[0]}). DO NOT PRINT BACKTICKS EVER, JUST RAW JSON.`;
      const generationResult = await model.generateContent([systemPrompt, userMessage].join("\n"));
      const response = await generationResult.response;
      const text = response.text();
      // Validate and beautify JSON
      const { valid, content } = validateAndBeautifyJSON(text);
      setMessages(prev => [...prev, { role: "assistant", content: content }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again." }]);
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
