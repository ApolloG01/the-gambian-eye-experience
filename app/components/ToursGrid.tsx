"use client";

import { useMemo, useState, Suspense, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  ArrowRight,
  Filter,
  Compass,
  Search,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";
import { tours, Interest } from "@/app/data/tours";
import BookingModal from "@/app/components/BookingModal";
import { useCurrency } from "@/app/context/CurrencyContext";

function ToursGridContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { formatPrice } = useCurrency();

  const maxAvailablePrice = useMemo(() => {
    return Math.max(...tours.map((t) => t.priceFrom), 100);
  }, []);

  const selectedInterest = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("q") || "";
  const maxPrice = Number(searchParams.get("maxPrice")) || maxAvailablePrice;

  const [activeBookingTour, setActiveBookingTour] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const updateParams = useCallback(
    (updates: { category?: string; q?: string; maxPrice?: number }) => {
      const params = new URLSearchParams(searchParams.toString());

      const newCategory =
        updates.category !== undefined ? updates.category : selectedInterest;
      const newQuery = updates.q !== undefined ? updates.q : searchQuery;
      const newMaxPrice =
        updates.maxPrice !== undefined ? updates.maxPrice : maxPrice;

      if (newCategory && newCategory !== "All") {
        params.set("category", newCategory);
      } else {
        params.delete("category");
      }

      if (newQuery.trim()) {
        params.set("q", newQuery.trim());
      } else {
        params.delete("q");
      }

      if (newMaxPrice < maxAvailablePrice) {
        params.set("maxPrice", newMaxPrice.toString());
      } else {
        params.delete("maxPrice");
      }

      const queryString = params.toString();
      const newPath = queryString ? `/tours?${queryString}` : "/tours";

      router.replace(newPath, { scroll: false });
    },
    [
      searchParams,
      selectedInterest,
      searchQuery,
      maxPrice,
      maxAvailablePrice,
      router,
    ],
  );

  const categories = useMemo(() => {
    const set = new Set<string>();
    tours.forEach((tour) => {
      tour.interests?.forEach((interest) => set.add(interest));
    });
    return ["All", ...Array.from(set)];
  }, []);

  const filteredTours = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return tours.filter((tour) => {
      const matchesCategory =
        selectedInterest === "All" ||
        tour.interests?.includes(selectedInterest as Interest);

      const matchesSearch =
        !query ||
        tour.name.toLowerCase().includes(query) ||
        tour.description.toLowerCase().includes(query) ||
        tour.locations.some((loc) => loc.toLowerCase().includes(query));

      const matchesPrice = tour.priceFrom <= maxPrice;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedInterest, searchQuery, maxPrice]);

  const resetFilters = () => {
    router.replace("/tours", { scroll: false });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm mb-10 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="relative md:col-span-2">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="Search by tour name, keyword, or stop (e.g. Abuko, safari)..."
              value={searchQuery}
              onChange={(e) => updateParams({ q: e.target.value })}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl border border-black/5 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-gambia-blue/20 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2 bg-slate-50 p-3.5 rounded-2xl border border-black/5">
            <div className="flex items-center justify-between text-xs font-semibold text-gambia-blue">
              <span className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gambia-red" />
                Max Price:
              </span>
              <span className="text-sm font-bold text-gambia-blue">
                {formatPrice(maxPrice)}
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={maxAvailablePrice}
              step={5}
              value={maxPrice}
              onChange={(e) =>
                updateParams({ maxPrice: Number(e.target.value) })
              }
              className="w-full accent-gambia-blue cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-black/5">
          <div className="flex items-center gap-2 text-gambia-blue font-semibold text-xs shrink-0">
            <Filter className="w-4 h-4 text-gambia-red" />
            <span>Categories:</span>
          </div>

          {/* Explicit unique keys for categories */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((category, idx) => {
              const isActive = selectedInterest === category;
              return (
                <button
                  key={`category-${category}-${idx}`}
                  type="button"
                  onClick={() => updateParams({ category })}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gambia-blue text-white shadow-sm scale-105"
                      : "bg-slate-100 text-black/70 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {filteredTours.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-black/5 flex flex-col items-center gap-3">
          <Compass className="w-10 h-10 text-gambia-red/40 animate-pulse" />
          <p className="text-black/60 font-medium text-sm">
            No excursions match your current filter settings.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 text-xs text-gambia-blue font-bold bg-gambia-blue/10 px-4 py-2 rounded-full hover:bg-gambia-blue/20 transition-all mt-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset all filters
          </button>
        </div>
      ) : (
        /* Explicit unique keys for tour items */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, idx) => (
            <article
              key={tour.slug ? `tour-${tour.slug}` : `tour-idx-${idx}`}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full bg-slate-100">
                {tour.image ? (
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-black/20">
                    <Compass className="w-12 h-12" />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gambia-blue border border-black/5">
                  From {formatPrice(tour.priceFrom)}*
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-black hover:text-gambia-blue transition-colors">
                    <Link href={`/tours/${tour.slug}`}>{tour.name}</Link>
                  </h2>
                  <p className="text-xs text-black/60 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-black/5">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-black/60 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gambia-red" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gambia-red" />
                      {tour.locations.length} stops
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-black/10 text-xs font-semibold text-black hover:bg-slate-50 transition-all"
                    >
                      Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {/* Modifica il pulsante Book Tour dentro filteredTours.map */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveBookingTour({
                          name: tour.name,
                          price: tour.priceFrom ?? (tour as any).price ?? 0,
                        })
                      }
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gambia-blue text-white text-xs font-semibold hover:bg-gambia-blue/90 shadow-sm transition-all cursor-pointer"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeBookingTour && (
        <BookingModal
          tourName={activeBookingTour.name}
          tourPrice={activeBookingTour.price}
          onClose={() => setActiveBookingTour(null)}
        />
      )}
    </section>
  );
}

export default function ToursGrid() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-sm text-black/50">
          Loading tours...
        </div>
      }
    >
      <ToursGridContent />
    </Suspense>
  );
}
