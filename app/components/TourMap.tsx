"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import type { MapStop } from "./TourMapInner";

// Dynamic import with SSR disabled
const TourMapInner = dynamic(() => import("./TourMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 sm:h-96 bg-slate-100 rounded-2xl animate-pulse flex items-center justify-center text-xs font-semibold text-black/40">
      Loading Interactive Route Map...
    </div>
  ),
});

export default function TourMap({ stops }: { stops: MapStop[] }) {
  return (
    <div className="bg-white p-5 rounded-3xl border border-black/5 shadow-sm my-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gambia-red/10 rounded-xl text-gambia-red">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gambia-blue text-base">
              Tour Route & Stops
            </h3>
            <p className="text-xs text-black/50">
              {stops.length} locations on this itinerary
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-black/5">
        <TourMapInner stops={stops} />
      </div>
    </div>
  );
}
