"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { LatLng, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false
});


export function HowItWorksSection() {
  const routeCoordinates = [
    new LatLng(19.0760, 72.8777), // Mumbai
    new LatLng(12.9716, 77.5946)  // Bangalore
  ];

  return (
    <section id="how-it-works" className="py-20 mt-[80px]"> {/* Adjusted top margin */}
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How YatraGPT Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One platform to plan and book your entire journey - from start to destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="text-primary text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Tell Us Your Preferences</h3>
            <p className="text-muted-foreground">
              Enter your starting point, destination, and preferences for cost, comfort, and speed.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="text-primary text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Generates Routes</h3>
            <p className="text-muted-foreground">
              Our AI engine creates personalized multi-modal routes considering availability, real-time data, and your preferences.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="text-primary text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Book Everything at Once</h3>
            <p className="text-muted-foreground">
              Book your entire journey with a single click - auto, train, flight, bus, and more, all in one place.
            </p>
          </div>
        </div>

        <div className="mt-16 p-6 bg-card rounded-xl max-w-4xl mx-auto border border-border shadow">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
              <div className="text-primary pb-6 font-mono mb-2">YatraGPT {`>`} I want to go from Mumbai to Bangalore</div>
              <div className="p-4 bg-background rounded-lg border border-border shadow-sm">
                <p className="text-foreground mb-2 font-medium">Your optimal route from Mumbai to Bangalore:</p>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded mr-2 border border-blue-500/20">Cab</span>
                    <span>Bandra to Mumbai Airport (45 min)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-500/10 text-indigo-400 text-xs px-2 py-1 rounded mr-2 border border-indigo-500/20">Flight</span>
                    <span>Mumbai to Bangalore (1h 40m)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-500/10 text-purple-400 text-xs px-2 py-1 rounded mr-2 border border-purple-500/20">Metro</span>
                    <span>Airport to Majestic (35 min)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded mr-2 border border-blue-500/20">Auto</span>
                    <span>Majestic to Koramangala (25 min)</span>
                  </li>
                </ol>
                <p className="text-sm text-primary mt-4 font-medium">Total: ₹5,245 · 4h 15m · Comfort: High</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-[400px] h-[350px] md:h-[350px] rounded-xl shadow-xl overflow-hidden mt-6 md:mt-0 z-0">
                <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

