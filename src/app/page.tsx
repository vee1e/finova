import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyYatraSection } from "@/components/WhyYatraSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { VisionSection } from "@/components/VisionSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <WhyYatraSection />
      <UseCasesSection />
      <VisionSection />
      <WaitlistSection />
      <Footer />
    </>
  );
}

