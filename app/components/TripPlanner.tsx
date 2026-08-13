"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TripPlanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Controllo di sicurezza: se il DOM non è pronto, interrompi
    if (!containerRef.current) return;

    // Esegui l'animazione in sicurezza sul container o sui suoi figli
    const ctx = gsap.context(() => {
      gsap.from(".planner-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
      });
    }, containerRef);

    // Pulizia essenziale per React 18 / Next.js (evita memory leak e target null)
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="planner-card">...</div>
    </div>
  );
}
