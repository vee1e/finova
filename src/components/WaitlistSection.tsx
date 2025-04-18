"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";

export function WaitlistSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thank you for joining our waitlist! We'll be in touch soon.");
  };

  return (
    <section id="waitlist" className="py-24 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Waitlist</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be among the first to experience the future of travel planning in India
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-3">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg py-6"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-3">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg py-6"
                required
              />
            </div>
            
            <div>
              <label htmlFor="city" className="block text-lg font-medium mb-3">
                City
              </label>
              <Input
                id="city"
                type="text"
                placeholder="Mumbai"
                className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg py-6"
                required
              />
            </div>
            
            <div>
              <label className="block text-lg font-medium mb-3">
                I mostly travel for:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="business" 
                    name="travel_purpose" 
                    className="h-5 w-5 text-primary border-border focus:ring-primary bg-background"
                    required
                  />
                  <label htmlFor="business" className="ml-3 text-base">Business</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="leisure" 
                    name="travel_purpose" 
                    className="h-5 w-5 text-primary border-border focus:ring-primary bg-background"
                  />
                  <label htmlFor="leisure" className="ml-3 text-base">Leisure</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="education" 
                    name="travel_purpose" 
                    className="h-5 w-5 text-primary border-border focus:ring-primary bg-background"
                  />
                  <label htmlFor="education" className="ml-3 text-base">Education</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="other" 
                    name="travel_purpose" 
                    className="h-5 w-5 text-primary border-border focus:ring-primary bg-background"
                  />
                  <label htmlFor="other" className="ml-3 text-base">Other</label>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-xl"
            >
              Join Waitlist
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              By joining, you agree to receive updates about YatraGPT. 
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
} 