"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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
  const [currency, setCurrencyState] = useState<Currency>("GBP");

  // Recupera la valuta salvata al montaggio del componente
  useEffect(() => {
    const saved = localStorage.getItem("preferred_currency") as Currency;
    if (saved && rates[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("preferred_currency", newCurrency);
  };

  const getConvertedPrice = (amountInGBP: number) => {
    const { rate } = rates[currency];
    return Math.round(amountInGBP * rate);
  };

  const formatPrice = (amountInGBP: number) => {
    const { symbol } = rates[currency];
    const converted = getConvertedPrice(amountInGBP);

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
