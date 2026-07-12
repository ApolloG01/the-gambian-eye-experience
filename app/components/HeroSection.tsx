"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(taglineRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        subRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        [cta1Ref.current, cta2Ref.current],
        {
          opacity: 0,
          scale: 0.85,
          duration: 0.7,
          ease: "back.out(1.7)",
          stagger: 0.45,
        },
        "-=0.2",
      );
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      <div className="absolute inset-0 bg-gambia-blue/70" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <p
          ref={taglineRef}
          className="text-sm uppercase tracking-widest text-white/70 mb-4"
        >
          Private guide · The Gambia & Senegal
        </p>
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          The real Gambia, seen through local eyes.
        </h1>
        <p
          ref={subRef}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto"
        >
          Tailor-made excursions with Usman Baldeh — transport and entrance fees
          always included, no hidden costs, no tourist traps.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a
            ref={cta1Ref}
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gambia-green text-white px-8 py-4 rounded-full font-medium hover:opacity-90 "
          >
            Book via WhatsApp
          </a>
          <Link
            ref={cta2Ref}
            href="/tours"
            className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gambia-blue transition-colors"
          >
            Browse Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
