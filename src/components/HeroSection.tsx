"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-card/20 opacity-70"></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
        <Image src="/chat.png" alt="Chat" width={300} height={300} className="h-[70vh] w-auto object-contain pt-10" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              <span className="text-primary">India&apos;s First</span> AI Travel Agent
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-10">
              YatraGPT plans your end-to-end journeys across multiple transport modes.
              From autorickshaws to airlines, we stitch India&apos;s chaotic transport mesh into a seamless experience.
            </p>
            <Link href="#waitlist">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-14 py-9 text-xl">
                Join the Waitlist
              </Button>
            </Link>
            <p className="text-muted-foreground mt-6 text-lg">Currently in beta - 750+ users on waitlist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

