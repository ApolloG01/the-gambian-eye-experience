"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

// Immagini slideshow
const heroImages = [
  { src: "/images/makasutu_sld2.jpg", alt: "Makasutu" },
  { src: "/images/monkey_park.png", alt: "Monkey Park" },
  {
    src: "/images/crockodile_pool.png",
    alt: "Kachikally Crocodile Pool",
  },
  { src: "/images/makasutu2_sld.jpg", alt: "Lamine Lodge" },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  // Timer per lo Slideshow automatico
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Animazioni GSAP per il testo all'ingresso
  useEffect(() => {
    const ctx = gsap.context(() => {
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
            stagger: 0.15,
          },
          "-=0.2",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Slideshow con transizione Crossfade */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            } transition-transform duration-[6000ms]`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay per garantire leggibilità al testo */}
      <div className="absolute inset-0 bg-gambia-blue/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 text-center">
        <p
          ref={taglineRef}
          className="text-sm uppercase tracking-widest text-gambia-red/70 mb-4 font-semibold"
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
          Tailor-made excursions with Ousman Baldeh — transport and entrance
          fees always included, no hidden costs, no tourist traps.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            ref={cta1Ref}
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gambia-green text-white px-8 py-4 rounded-full font-medium shadow-lg"
          >
            <span className="absolute inset-0 bg-gambia-red-dark translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full" />
            <span className="relative z-10">Book via WhatsApp</span>
          </a>
          <Link
            ref={cta2Ref}
            href="/tours"
            className="group relative overflow-hidden border border-white text-white px-8 py-4 rounded-full font-medium shadow-lg"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full" />
            <span className="relative z-10 group-hover:text-gambia-blue transition-colors duration-300">
              Browse Tours
            </span>
          </Link>
        </div>

        {/* Indicatori Pallini dello Slideshow */}
        <div className="mt-12 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 bg-gambia-green"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
