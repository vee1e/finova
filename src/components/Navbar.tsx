"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-primary">YatraGPT</Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="#problem" className="text-base font-medium hover:text-primary transition-colors">
            Problem
          </Link>
          <Link href="#how-it-works" className="text-base font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#why" className="text-base font-medium hover:text-primary transition-colors">
            Why YatraGPT
          </Link>
          <Link href="#use-cases" className="text-base font-medium hover:text-primary transition-colors">
            Use Cases
          </Link>
          <Link href="#vision" className="text-base font-medium hover:text-primary transition-colors">
            Vision
          </Link>
        </nav>
        <Link href="#waitlist">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6 py-3">Join Waitlist</Button>
        </Link>
      </div>
    </div>
  );
} 