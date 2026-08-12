import { Sparkles, Gem, ShieldCheck } from "lucide-react";
import TripPlanner from "./components/TripPlanner";
import HeroSection from "./components/HeroSection";
import ValueProps from "./components/ValueProps";
import RealMomentsSection from "./components/RealMomentsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Typescript Value Props */}
      <ValueProps />
      <TripPlanner />
      <RealMomentsSection />
      <Footer />
    </>
  );
}
