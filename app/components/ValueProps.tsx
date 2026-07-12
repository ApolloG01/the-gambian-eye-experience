"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Gem, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = [
  {
    icon: Sparkles,
    color: "text-gambia-blue",
    bg: "bg-gambia-blue/10",
    title: "Tailor Made",
    description:
      "Tell Usman what you love and he builds a trip around your personality and interests — never a fixed, packaged route.",
  },
  {
    icon: Gem,
    color: "text-gambia-green",
    bg: "bg-gambia-green/10",
    title: "Hidden Gems",
    description:
      "Off-the-beaten-path villages, beaches and forests a visitor would never find alone — the places locals actually go.",
  },
  {
    icon: ShieldCheck,
    color: "text-gambia-red",
    bg: "bg-gambia-red/10",
    title: "No Surprises",
    description:
      "Transparent pricing with no inflated costs or surprise extras. Transport and entrance fees are always included.",
  },
];

export default function ValueProps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".value-card");
    if (!cards) return;

    gsap.from(cards, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div
        ref={cardsRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {props.map(({ icon: Icon, color, bg, title, description }) => (
          <div
            key={title}
            className="value-card flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-black/10"
          >
            <div className={`${bg} p-4 rounded-full`}>
              <Icon className={`${color} w-6 h-6`} />
            </div>
            <h2 className="text-xl font-semibold text-gambia-blue">{title}</h2>
            <p className="text-black/60 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
