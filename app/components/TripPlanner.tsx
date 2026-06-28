"use client";

import { useState } from "react";

type Traveller = "Family" | "Couples" | "Groups";
type Interest =
  | "Adventure"
  | "Nature & Wildlife"
  | "Seaside"
  | "Art & Culture"
  | "Party"
  | "Boat Trips"
  | "Food & Drink"
  | "History"
  | "Bird Watching"
  | "Chillax";

const travellers: Traveller[] = ["Family", "Couples", "Groups"];
const interests: Interest[] = [
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

export default function TripPlanner() {
  const [selectedTraveller, setSelectedTraveller] = useState<Traveller | null>(
    null,
  );
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);

  function toggleInterest(interest: Interest) {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  }

  function buildWhatsAppMessage() {
    const parts: string[] = [
      "Hi Usman! I'd like to plan a trip in The Gambia.",
    ];
    if (selectedTraveller) parts.push(`Travelling as: ${selectedTraveller}.`);
    if (selectedInterests.length > 0)
      parts.push(`Interests: ${selectedInterests.join(", ")}.`);
    return `https://wa.me/2209984010?text=${encodeURIComponent(parts.join(" "))}`;
  }

  return (
    <section className="bg-zinc-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gambia-blue mb-2">
          Plan your trip
        </h2>
        <p className="text-black/60 mb-10">
          Tell Usman who's coming and what you love — we'll start a WhatsApp
          message with your choices so planning is effortless.
        </p>

        {/* Traveller type */}
        <p className="text-sm font-medium text-gambia-blue mb-4 uppercase tracking-wide">
          Who's travelling?
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {travellers.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTraveller(t)}
              className={`px-6 py-3 rounded-full border text-sm font-medium transition-colors ${
                selectedTraveller === t
                  ? "bg-gambia-blue text-white border-gambia-blue"
                  : "border-black/20 text-black/60 hover:border-gambia-blue hover:text-gambia-blue"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Interests */}
        <p className="text-sm font-medium text-gambia-blue mb-4 uppercase tracking-wide">
          What are you into?
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {interests.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                selectedInterests.includes(interest)
                  ? "bg-gambia-green text-white border-gambia-green"
                  : "border-black/20 text-black/60 hover:border-gambia-green hover:text-gambia-green"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>

        {/* CTA */}

        <a
          href={buildWhatsAppMessage()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gambia-green text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Send my trip on WhatsApp
        </a>
      </div>
    </section>
  );
}
