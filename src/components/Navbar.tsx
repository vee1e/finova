"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const sectionIds = [
  "problem",
  "how-it-works",
  "why",
  "use-cases",
  "vision",
  "waitlist",
];

export function Navbar() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

const linkClass = (id: string) =>
  `text-base transition-colors ${
    activeId === id
      ? "text-primary font-semibold tracking-wide nav-link-glow nav-link-glow-active nav-link-underlined nav-link-underlined-active"
      : "text-foreground hover:text-primary nav-link-glow"
  }`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-primary">
            YatraGPT
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          {sectionIds.slice(0, 5).map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {{
                problem: "Problem",
                "how-it-works": "How It Works",
                why: "Why YatraGPT",
                "use-cases": "Use Cases",
                vision: "Vision",
              }[id]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#waitlist">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6 py-3">
              Join Waitlist
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

