"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency, Currency } from "@/app/context/CurrencyContext";
import { ChevronDown, Globe } from "lucide-react";

const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: "GBP", symbol: "£", label: "GBP (£)" },
  { code: "EUR", symbol: "€", label: "EUR (€)" },
  { code: "USD", symbol: "$", label: "USD ($)" },
  { code: "GMD", symbol: "D", label: "GMD (D)" },
];

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeCurrency = CURRENCIES.find((c) => c.code === currency);

  return (
    <div
      className="relative inline-flex items-center text-left"
      ref={dropdownRef}
    >
      {/* Trigger Button con h-[38px] o py-2 per riprendere la stessa altezza visiva di "Book Now" / pillole */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-black/10 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-gambia-blue transition-all focus:outline-none leading-none"
        aria-label="Select Currency"
      >
        <Globe className="w-3.5 h-3.5 text-black/50 shrink-0" />
        <span>{activeCurrency?.code}</span>
        <span className="text-black/40">({activeCurrency?.symbol})</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-black/40 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Menu a tendina Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 rounded-2xl bg-white shadow-xl border border-black/10 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                setCurrency(c.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-slate-50 transition-colors ${
                currency === c.code
                  ? "text-gambia-blue font-bold bg-slate-50"
                  : "text-black/70"
              }`}
            >
              <span>{c.label}</span>
              {currency === c.code && (
                <span className="w-1.5 h-1.5 rounded-full bg-gambia-green" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
