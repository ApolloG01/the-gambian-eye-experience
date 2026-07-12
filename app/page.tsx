import { Sparkles, Gem, ShieldCheck } from "lucide-react";
import TripPlanner from "./components/TripPlanner";
import HeroSection from "./components/HeroSection";
import ValueProps from "./components/ValueProps";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />
      {/* Value Props */}
      <ValueProps />

      <TripPlanner />
    </>
  );
}
