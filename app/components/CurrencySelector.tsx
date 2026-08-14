"use client";

import { useState, useSyncExternalStore } from "react";
import { useCurrency, Currency } from "@/app/context/CurrencyContext";
import { Globe, ChevronDown } from "lucide-react";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

const CURRENCIES: Currency[] = ["GBP", "EUR", "USD", "GMD"];

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const isClient = useIsClient();

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-black/70 transition-colors"
      >
        <Globe className="w-3.5 h-3.5 text-black/50 shrink-0" />
        <span>{isClient ? currency : "GBP"}</span>
        <ChevronDown className="w-3 h-3 text-black/40 shrink-0" />
      </button>

      {isOpen && (
        <>
          {/* Overlay trasparente per chiudere al click fuori */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-1 w-24 py-1 bg-white rounded-lg shadow-lg border border-slate-100 z-50">
            {CURRENCIES.map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => {
                  setCurrency(curr);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 text-xs font-medium transition-colors ${
                  currency === curr
                    ? "bg-slate-100 text-black font-bold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
