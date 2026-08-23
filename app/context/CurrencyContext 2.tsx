"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "GBP" | "EUR" | "USD" | "GMD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amountInGBP: number) => string;
  getConvertedPrice: (amountInGBP: number) => number;
}

const rates: Record<Currency, { rate: number; symbol: string }> = {
  GBP: { rate: 1, symbol: "£" },
  EUR: { rate: 1.18, symbol: "€" },
  USD: { rate: 1.28, symbol: "$" },
  GMD: { rate: 87, symbol: "D" },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  // Inizializzazione lazy dello stato: legge localStorage al primo render senza bisogno di useEffect
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred_currency") as Currency;
      if (saved && rates[saved]) {
        return saved;
      }
    }
    return "GBP";
  });

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_currency", newCurrency);
    }
  };

  const getConvertedPrice = (amountInGBP: number) => {
    const validAmount = Number(amountInGBP) || 0;
    const currentRate = rates[currency]?.rate ?? 1;
    return Math.round(validAmount * currentRate);
  };

  const formatPrice = (amountInGBP: number) => {
    const validAmount = Number(amountInGBP) || 0;
    const { symbol } = rates[currency] || { symbol: "£" };
    const converted = getConvertedPrice(validAmount);

    if (currency === "GMD") {
      return `${converted.toLocaleString()} ${symbol}`;
    }
    return `${symbol}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, formatPrice, getConvertedPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
