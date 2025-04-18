"use client";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Example Use Case</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kolkata to Manipal: Auto → Train → Flight → Bus → Cab – We plan it all
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-card shadow-xl rounded-xl overflow-hidden border border-border">
          <div className="bg-primary py-6 px-8">
            <div className="text-primary-foreground font-mono mb-2">YatraGPT {`>`} Plan a journey from Kolkata (Saltlake) to Manipal University</div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div>
                <div className="text-sm text-muted-foreground">START</div>
                <div className="font-semibold">Kolkata, Saltlake</div>
                <div className="text-muted-foreground">June 15, 8:00 AM</div>
              </div>
              <div className="hidden md:block py-4">
                <div className="w-48 h-0.5 bg-primary relative">
                  <div className="absolute -top-2 left-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="absolute -top-2 right-0 w-4 h-4 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-sm text-muted-foreground">DESTINATION</div>
                <div className="font-semibold">Manipal University</div>
                <div className="text-muted-foreground">June 15, 6:45 PM</div>
              </div>
            </div>
            
            <div className="relative pl-8 border-l-2 border-dashed border-border">
              <div className="mb-10 relative">
                <div className="absolute -left-[2.1rem] top-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2v5a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0017 7h-2V4a1 1 0 00-1-1H3z" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Auto to Kolkata Railway Station</h3>
                <p className="text-muted-foreground mb-2">8:00 AM - 8:40 AM (40 min)</p>
                <div className="bg-background rounded px-4 py-2 inline-block text-sm text-muted-foreground border border-border">
                  ₹180 · Comfort: Medium
                </div>
              </div>
              
              <div className="mb-10 relative">
                <div className="absolute -left-[2.1rem] top-0 w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 1.58l-4 4H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.58l-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Train to Kolkata Airport</h3>
                <p className="text-muted-foreground mb-2">9:15 AM - 10:05 AM (50 min)</p>
                <div className="bg-background rounded px-4 py-2 inline-block text-sm text-muted-foreground border border-border">
                  ₹45 · Comfort: Medium · IRCTC
                </div>
              </div>
              
              <div className="mb-10 relative">
                <div className="absolute -left-[2.1rem] top-0 w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Flight to Mangalore</h3>
                <p className="text-muted-foreground mb-2">11:45 AM - 2:15 PM (2h 30m)</p>
                <div className="bg-background rounded px-4 py-2 inline-block text-sm text-muted-foreground border border-border">
                  ₹4,120 · Comfort: High · IndiGo
                </div>
              </div>
              
              <div className="mb-10 relative">
                <div className="absolute -left-[2.1rem] top-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                    <path d="M12 4a1 1 0 00-1 1v10.05a2.5 2.5 0 014.9 0H17a1 1 0 001-1V5a1 1 0 00-1-1h-5z" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Bus to Udupi</h3>
                <p className="text-muted-foreground mb-2">3:00 PM - 5:15 PM (2h 15m)</p>
                <div className="bg-background rounded px-4 py-2 inline-block text-sm text-muted-foreground border border-border">
                  ₹280 · Comfort: Medium · RedBus
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[2.1rem] top-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2v5a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0017 7h-2V4a1 1 0 00-1-1H3z" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Cab to Manipal University</h3>
                <p className="text-muted-foreground mb-2">5:30 PM - 6:45 PM (1h 15m)</p>
                <div className="bg-background rounded px-4 py-2 inline-block text-sm text-muted-foreground border border-border">
                  ₹620 · Comfort: High · Uber
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-background rounded-lg border border-border">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">TOTAL TRAVEL TIME</div>
                  <div className="font-semibold">10h 45m</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">TOTAL COST</div>
                  <div className="font-semibold">₹5,245</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">MODES OF TRANSPORT</div>
                  <div className="font-semibold">5</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">COMFORT RATING</div>
                  <div className="font-semibold">Medium-High</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 