import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem With Travel Planning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            India's travel ecosystem is fragmented. Planning a trip requires jumping between multiple apps and platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-border shadow-lg bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fragmented Experience</h3>
              <p className="text-muted-foreground">
                IRCTC for trains, RedBus for buses, Ola/Uber for cabs, MakeMyTrip for flights. Too many apps for a single journey.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border shadow-lg bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Consuming</h3>
              <p className="text-muted-foreground">
                Hours spent checking prices, availability, comparing options, and coordinating connections between different modes of transport.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border shadow-lg bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sub-optimal Journeys</h3>
              <p className="text-muted-foreground">
                No platform looks at your entire journey. You may miss better route combinations that save time, money, or increase comfort.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 