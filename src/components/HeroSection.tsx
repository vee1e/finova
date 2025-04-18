import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-card/20 opacity-70"></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">India&apos;s First</span> AI Travel Agent
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            YatraGPT plans your end-to-end journeys across multiple transport modes. 
            From autorickshaws to airlines, we stitch India&apos;s chaotic transport mesh into a seamless experience.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
            Join the Waitlist
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">Currently in beta - 750+ users on waitlist</p>
        </div>
      </div>
    </section>
  );
} 