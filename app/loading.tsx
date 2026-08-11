import { Compass } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="relative flex items-center justify-center mb-4">
        {/* Glow effect */}
        <div className="absolute w-16 h-16 bg-gambia-blue/20 rounded-full blur-xl animate-pulse" />

        {/* Animated Compass */}
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-black/5 flex items-center justify-center relative z-10">
          <Compass
            className="w-8 h-8 text-gambia-blue animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest text-gambia-blue/60 animate-pulse">
        Loading Excursions...
      </p>
    </div>
  );
}
