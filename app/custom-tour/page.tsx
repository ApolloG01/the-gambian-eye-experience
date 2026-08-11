"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Plus,
  Minus,
  Sparkles,
  Users,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { tours, Tour } from "@/app/data/tours";
import { useCurrency } from "@/app/context/CurrencyContext";

const DISCOUNT_RATE = 0.1; // 10% di sconto
const MIN_TOURS_FOR_DISCOUNT = 2; // Soglia minima di escursioni per lo sconto
const WHATSAPP_NUMBER = "2209984010"; // Numero WhatsApp di Ousman

export default function CustomTripClient() {
  const { formatPrice } = useCurrency();
  const [selectedTourIds, setSelectedTourIds] = useState<string[]>([]);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [preferredDate, setPreferredDate] = useState<string>("");

  // Gestione selezione/deselezione tour
  const toggleTour = (tourId: string) => {
    setSelectedTourIds((prev) =>
      prev.includes(tourId)
        ? prev.filter((id) => id !== tourId)
        : [...prev, tourId],
    );
  };

  // Ottieni gli oggetti tour selezionati
  const selectedTours = useMemo(() => {
    return tours.filter((t) => selectedTourIds.includes(t.id));
  }, [selectedTourIds]);

  // Calcoli finanziari
  const basePricePerPerson = useMemo(() => {
    return selectedTours.reduce((sum, t) => sum + t.priceFrom, 0);
  }, [selectedTours]);

  const subtotal = basePricePerPerson * guestCount;
  const isDiscountEligible = selectedTours.length >= MIN_TOURS_FOR_DISCOUNT;
  const discountAmount = isDiscountEligible ? subtotal * DISCOUNT_RATE : 0;
  const finalTotal = subtotal - discountAmount;

  // Generazione del messaggio WhatsApp
  const whatsappUrl = useMemo(() => {
    let message = `Hello Ousman, I would like to book a custom package for ${guestCount} guest(s).\n\n`;

    if (preferredDate) {
      message += `📅 Preferred Date: ${preferredDate}\n\n`;
    }

    message += `📋 Selected Excursions (${selectedTours.length}):\n`;
    selectedTours.forEach((t) => {
      message += `• ${t.name} (${formatPrice(t.priceFrom)}/person)\n`;
    });

    message += `\n💰 Subtotal: ${formatPrice(subtotal)}`;

    if (isDiscountEligible) {
      message += `\n🎉 Package Discount (10% OFF): -${formatPrice(discountAmount)}`;
    }

    message += `\n🏷️ Total Quoted Price: ${formatPrice(finalTotal)}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [
    selectedTours,
    guestCount,
    preferredDate,
    subtotal,
    isDiscountEligible,
    discountAmount,
    finalTotal,
    formatPrice,
  ]);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation */}
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 text-xs font-bold text-gambia-blue hover:text-gambia-red transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Excursions
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
            Build Your Custom Gambia Trip
          </h1>
          <p className="text-sm text-black/70 max-w-2xl">
            Select 2 or more excursions to automatically unlock a{" "}
            <span className="font-bold text-emerald-600">20% discount</span> on
            your entire custom itinerary package!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column: Tour Selection */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-black mb-2">
              Select Excursions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tours.map((tour) => {
                const isSelected = selectedTourIds.includes(tour.id);
                return (
                  <div
                    key={tour.id}
                    onClick={() => toggleTour(tour.id)}
                    className={`relative cursor-pointer rounded-2xl border p-4 transition-all bg-white flex flex-col justify-between ${
                      isSelected
                        ? "border-gambia-blue ring-2 ring-gambia-blue/20 shadow-md"
                        : "border-black/10 hover:border-black/20 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="relative h-36 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
                        {tour.image && (
                          <Image
                            src={tour.image}
                            alt={tour.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 300px"
                          />
                        )}
                        <div
                          className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-gambia-blue text-white"
                              : "bg-white/80 text-black/40 backdrop-blur-sm"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </div>

                      <h3 className="font-bold text-sm text-black mb-1 line-clamp-1">
                        {tour.name}
                      </h3>
                      <p className="text-xs text-black/60 line-clamp-2 mb-3">
                        {tour.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-black/5 pt-3">
                      <span className="text-xs font-semibold text-black/50">
                        {tour.duration}
                      </span>
                      <span className="text-sm font-bold text-gambia-blue">
                        {formatPrice(tour.priceFrom)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar: Summary & Discount Price Box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-black/10 p-6 shadow-sm sticky top-6 space-y-6">
              <h2 className="text-xl font-bold text-black border-b border-black/5 pb-4">
                Trip Summary
              </h2>

              {/* Guest Count Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-black/70 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gambia-blue" /> Number of
                  Guests
                </label>
                <div className="flex items-center justify-between bg-slate-50 border border-black/10 rounded-xl p-2">
                  <button
                    type="button"
                    onClick={() =>
                      setGuestCount((prev) => Math.max(1, prev - 1))
                    }
                    className="p-2 hover:bg-white rounded-lg transition-colors text-black/70"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm text-black">
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount((prev) => prev + 1)}
                    className="p-2 hover:bg-white rounded-lg transition-colors text-black/70"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Optional Date Picker */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-black/70 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gambia-blue" /> Preferred
                  Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-50 border border-black/10 rounded-xl p-2.5 text-xs text-black focus:outline-none focus:ring-2 focus:ring-gambia-blue/20"
                />
              </div>

              {/* Selected Tours List */}
              <div className="space-y-2 pt-2 border-t border-black/5">
                <span className="text-xs font-bold text-black/70">
                  Selected Excursions ({selectedTours.length})
                </span>
                {selectedTours.length === 0 ? (
                  <p className="text-xs text-black/40 italic py-2">
                    No tours selected yet. Choose at least one to get started.
                  </p>
                ) : (
                  <ul className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {selectedTours.map((tour) => (
                      <li
                        key={`summary-${tour.id}`}
                        className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded-lg"
                      >
                        <span className="font-medium text-black/80 truncate max-w-[160px]">
                          {tour.name}
                        </span>
                        <span className="font-bold text-black/60">
                          {formatPrice(tour.priceFrom)}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Discount Status Banner */}
              {selectedTours.length > 0 && (
                <div
                  className={`p-3 rounded-2xl text-xs flex items-center gap-2 border transition-all ${
                    isDiscountEligible
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-amber-50 border-amber-200 text-amber-800"
                  }`}
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  {isDiscountEligible ? (
                    <span>
                      <strong>10% Discount Unlocked!</strong> You saved{" "}
                      {formatPrice(discountAmount)}!
                    </span>
                  ) : (
                    <span>
                      Add <strong>1 more excursion</strong> to get 10% off your
                      total package!
                    </span>
                  )}
                </div>
              )}

              {/* Pricing breakdown */}
              {selectedTours.length > 0 && (
                <div className="space-y-2 border-t border-black/5 pt-4 text-xs">
                  <div className="flex justify-between text-black/60">
                    <span>Subtotal ({guestCount} guests)</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>

                  {isDiscountEligible && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Package Discount (10%)</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-base font-bold text-black border-t border-black/5 pt-2">
                    <span>Total Price</span>
                    <span className="text-gambia-blue">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <a
                href={selectedTours.length > 0 ? whatsappUrl : "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (selectedTours.length === 0) {
                    e.preventDefault();
                  }
                }}
                className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-3.5 px-4 rounded-xl transition-all text-center ${
                  selectedTours.length > 0
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Book Custom Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
