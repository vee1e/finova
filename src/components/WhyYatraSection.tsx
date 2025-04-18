import { Card, CardContent } from "@/components/ui/card";

export function WhyYatraSection() {
  return (
    <section id="why" className="py-20 bg-zinc-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why YatraGPT?</h2>
          <p className="text-lg text-zinc-700 max-w-2xl mx-auto">
            The first AI-native pan-India intermodal travel planner
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 bg-emerald-600"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Personalized Intelligence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Learns your preferences and adapts recommendations over time</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Balance cost, comfort, and speed according to your priorities</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Natural language interface - just chat about your travel needs</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 bg-emerald-600"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Multimodal Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Combines auto, metro, train, bus, flight, and walking in one route</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Direct integration with major transport providers across India</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Smart transfers with built-in buffer time for connections</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 bg-emerald-600"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Real-Time Intelligence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Live availability data across all transit modes</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Dynamic re-routing in case of delays or cancellations</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Traffic-aware routing for road segments of your journey</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 bg-emerald-600"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">End-to-End Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Single payment for your entire journey</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">All tickets and bookings in one place - no juggling apps</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-zinc-700">Step-by-step navigation and real-time updates during travel</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 