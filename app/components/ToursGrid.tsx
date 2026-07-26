"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import { tours } from "@/app/data/tours";
import type { Interest } from "@/app/data/tours";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const allInterests: Interest[] = [
  "Wildlife & Safari",
  "Bird Watching",
  "History & Heritage",
  "Local Culture",
  "Beach & Relaxation",
  "Boat & River",
];

export default function ToursGrid() {
  const [activeInterest, setActiveInterest] = useState<Interest | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeInterest
    ? tours.filter((t) => t.interests.includes(activeInterest))
    : tours;

  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".tour-card");
      if (!cards) return;

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, [filtered]);

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-zinc-50 border-b border-black/10 px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveInterest(null)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
              activeInterest === null
                ? "bg-gambia-navy text-white border-gambia-navy"
                : "border-black/20 text-black/60 hover:border-gambia-navy hover:text-gambia-navy"
            }`}
          >
            All tours
          </button>
          {allInterests.map((interest) => (
            <button
              key={interest}
              onClick={() => setActiveInterest(interest)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                activeInterest === interest
                  ? "bg-gambia-navy text-white border-gambia-navy"
                  : "border-black/20 text-black/60 hover:border-gambia-navy hover:text-gambia-navy"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-black/50">
            No tours match that interest yet.
          </p>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((tour) => (
              <div
                key={tour.id}
                className="tour-card bg-white rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Gradient top block */}
                <div
                  className={`bg-gradient-to-br ${tour.gradient} h-44 w-full`}
                />

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* Duration + price */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-gambia-red/10 text-gambia-red px-3 py-1 rounded-full">
                      {tour.duration}
                    </span>
                    <span className="text-sm font-semibold text-gambia-blue">
                      From {tour.currency === "GBP" ? "£" : "D"}
                      {tour.priceFrom}
                      <span className="text-xs font-normal text-black/40">
                        {" "}
                        /person
                      </span>
                    </span>
                  </div>

                  {/* Name */}
                  <h2 className="text-lg font-bold text-gambia-blue leading-snug">
                    {tour.name}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-black/50 leading-relaxed">
                    {expandedId === tour.id
                      ? tour.description
                      : tour.description.slice(0, 100) + "..."}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === tour.id ? null : tour.id)
                    }
                    className="text-xs text-gambia-red-dark font-medium hover:underline text-left"
                  >
                    {expandedId === tour.id ? "Read less" : "Read more"}
                  </button>

                  {/* Locations */}
                  <div className="flex items-center gap-2 text-xs text-black/40">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-gambia-red" />
                    <span className="line-clamp-1">
                      {tour.locations.join(" · ")}
                    </span>
                  </div>

                  {/* Inclusions */}
                  <ul className="flex flex-col gap-1.5">
                    {tour.inclusions.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-black/50"
                      >
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 text-gambia-green" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/5">
                    <div className="flex flex-wrap gap-1">
                      {tour.interests.slice(0, 2).map((i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-gambia-surface text-black/50"
                        >
                          {i}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/2209984010?text=${encodeURIComponent(
                        `Hi Usman! I'm interested in the "${tour.name}" tour. Could you tell me more?`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gambia-green text-white px-4 py-2 rounded-full text-xs font-medium hover:opacity-90 transition-opacity shrink-0 ml-2"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
