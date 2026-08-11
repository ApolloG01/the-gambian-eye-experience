"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowLeft, CheckCircle2, Check } from "lucide-react";
import { Tour } from "@/app/data/tours";
import BookingModal from "@/app/components/BookingModal";
import { useCurrency } from "@/app/context/CurrencyContext";

interface TourDetailClientProps {
  tour: Tour;
}

export default function TourDetailClient({ tour }: TourDetailClientProps) {
  const { formatPrice } = useCurrency();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back navigation */}
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 text-xs font-bold text-gambia-blue hover:text-gambia-red transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Excursions
        </Link>

        <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
          {/* Header Image */}
          <div className="relative h-72 sm:h-96 w-full bg-slate-100">
            {tour.image && (
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
                {tour.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/90">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gambia-red" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gambia-red" />
                  {tour.locations.length} Stops
                </span>
              </div>
            </div>
          </div>
          {/* Details Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-slate-50 rounded-2xl border border-black/5">
              <div>
                <p className="text-xs text-black/50 font-semibold uppercase tracking-wider">
                  Price per person
                </p>
                <p className="text-2xl font-bold text-gambia-blue">
                  From {formatPrice(tour.priceFrom)}*
                </p>
              </div>

              <a
                href={`https://wa.me/2209984010?text=${encodeURIComponent(
                  `Hello Ousman, I would like to book the ${tour.name} excursion.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gambia-blue hover:bg-gambia-blue/90 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-sm text-center"
              >
                Book This Excursion
              </a>
            </div>
            <div className="bg-slate-50 border border-black/10 rounded-2xl p-5 space-y-2.5 text-xs text-black/70 leading-relaxed">
              <h3 className="font-bold text-sm text-black flex items-center gap-2">
                <span>💡</span> Tour Pricing & Currency Notes
              </h3>
              <p>
                We make every effort to keep all prices listed on this website
                accurate and updated. However, exact final quotes may
                occasionally vary due to local economic factors:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>CFA Franc & Currency Fluctuations:</strong> Due to
                  regional trade dynamics and cross-border operations, local
                  fuel prices, vehicle maintenance, and park fees are linked to
                  the West African CFA Franc (XOF) exchange rate against the
                  Gambian Dalasi (GMD).
                </li>
                <li>
                  <strong>Seasonal Rate Adjustments:</strong> High-season
                  demand, ferry tariffs, and seasonal entrance fees can affect
                  overall trip costs at different times of the year.
                </li>
              </ul>
              <p className="font-medium text-black/90 pt-1">
                To get the exact, locked-in price for your specific dates,
                simply confirm your itinerary directly with Ousman on WhatsApp
                before booking.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-black">Overview</h2>
              <p className="text-sm text-black/70 leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Stops & Locations */}
            {tour.locations && tour.locations.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-black/5">
                <h2 className="text-xl font-bold text-black">
                  Key Highlights & Stops
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.locations.map((loc, idx) => (
                    <li
                      key={`stop-${idx}`}
                      className="flex items-center gap-2 text-xs font-medium text-black/80 bg-slate-50 p-3 rounded-xl border border-black/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gambia-green shrink-0" />
                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* INCLUSIONS SECTION HERE */}
            {tour.inclusions && tour.inclusions.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-black/5">
                <h2 className="text-xl font-bold text-black">
                  What's Included
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.inclusions.map((item, idx) => (
                    <li
                      key={`inc-${idx}`}
                      className="flex items-center gap-2 text-xs font-medium text-black/80 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {isBookingOpen && (
        <BookingModal
          tourName={tour.name}
          priceFrom={tour.priceFrom}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
    </main>
  );
}
