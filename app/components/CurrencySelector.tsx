"use client";

import { useState, useEffect } from "react";
import { useCurrency } from "@/app/context/CurrencyContext";
import { Globe, ChevronDown } from "lucide-react";

export default function CurrencySelector() {
  const { activeCurrency } = useCurrency();
  const [mounted, setMounted] = useState(false);

  // Evita che il server e il client renderizzino valori diversi da localStorage/state
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative inline-block">
      <button type="button" className="...">
        <Globe className="w-3.5 h-3.5 text-black/50 shrink-0" />

        {/* Mostra il codice solo se montato lato client, altrimenti fallback pulito */}
        <span>{mounted ? activeCurrency?.code : "GBP"}</span>
        <span className="text-black/40">
          ({mounted ? activeCurrency?.symbol : "£"})
        </span>

        <ChevronDown className="..." />
      </button>
    </div>
  );
}
