"use client";

import { useState } from "react";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import { tours } from "@/app/data/tours";
import type { Interest } from "@/app/data/tours";

const allInterests: Interest[] = [
  "Adventure",
  "Nature & Wildlife",
  "Seaside",
  "Art & Culture",
  "Party",
  "Boat Trips",
  "Food & Drink",
  "History",
  "Bird Watching",
  "Chillax",
];

export default function ToursGrid() {
  const [activeInterest, setActiveInterest] = useState<Interest | null>(null);

  const filtered = activeInterest
    ? tours.filter((t) => t.interests.includes(activeInterest))
    : tours;

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-zinc-50 border-b border-black/10 px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveInterest(null)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
              activeInterest === null
                ? "bg-gambia-blue text-white border-gambia-blue"
                : "border-black/20 text-black/60 hover:border-gambia-blue hover:text-gambia-blue"
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
                  ? "bg-gambia-blue text-white border-gambia-blue"
                  : "border-black/20 text-black/60 hover:border-gambia-blue hover:text-gambia-blue"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((tour) => (
              <div
                key={tour.id}
                className="border border-black/10 rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="bg-gambia-blue/5 px-6 pt-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium bg-gambia-blue/10 text-gambia-blue px-3 py-1 rounded-full">
                      {tour.duration}
                    </span>
                    <span className="text-sm font-semibold text-gambia-blue">
                      From {tour.currency === "GBP" ? "£" : ""}
                      {tour.priceFrom}{" "}
                      <span className="text-xs font-normal text-black/40">
                        per person
                      </span>
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-gambia-blue leading-snug">
                    {tour.name}
                  </h2>
                </div>

                {/* Card body */}
                <div className="px-6 py-4 flex flex-col gap-4 flex-1">
                  <p className="text-sm text-black/60 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Locations */}
                  <div className="flex items-start gap-2 text-sm text-black/50">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gambia-red" />
                    <span>{tour.locations.join(" · ")}</span>
                  </div>

                  {/* Inclusions */}
                  <ul className="flex flex-col gap-1">
                    {tour.inclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-black/60"
                      >
                        <CheckCircle className="w-4 h-4 shrink-0 text-gambia-green" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Interests tags */}
                  <div className="flex flex-wrap gap-1 mt-auto pt-2">
                    {tour.interests.map((i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-gambia-green/10 text-gambia-green"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/2209984010?text=${encodeURIComponent(
                      `Hi Usman! I'm interested in the "${tour.name}" tour. Could you tell me more?`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gambia-green text-white py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Book this tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
