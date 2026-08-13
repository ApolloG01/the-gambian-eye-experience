"use client";

import { useSyncExternalStore } from "react";
import { useCurrency } from "@/app/context/CurrencyContext";
import { Globe } from "lucide-react";

// Helper per verificare se siamo lato client
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function CurrencySelector() {
  const { currency } = useCurrency();
  const isClient = useIsClient();

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-black/70"
      >
        <Globe className="w-3.5 h-3.5 text-black/50 shrink-0" />
        <span>{isClient ? currency : "GBP"}</span>
      </button>
    </div>
  );
}
