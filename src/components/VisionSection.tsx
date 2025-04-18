import { Card, CardContent } from "@/components/ui/card";

export function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            YatraGPT is building the infrastructure layer that will power the future of travel in India and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border shadow-lg bg-card overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">API Licensing</h3>
              <p className="text-muted-foreground">
                Powering online travel platforms, logistics companies, and transportation apps with our intelligent routing engine.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border shadow-lg bg-card overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart City Integration</h3>
              <p className="text-muted-foreground">
                Partnering with governments and transit authorities to optimize transportation networks and reduce congestion.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border shadow-lg bg-card overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Expansion</h3>
              <p className="text-muted-foreground">
                Starting with India's complex transport landscape, then scaling our solution to other emerging markets globally.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground max-w-3xl mx-auto">
            "From autorickshaws to airlines, we stitch India's chaotic transport mesh into a seamless travel intelligence platform."
          </blockquote>
          <p className="mt-4 text-muted-foreground">YatraGPT Team</p>
        </div>
      </div>
    </section>
  );
} 