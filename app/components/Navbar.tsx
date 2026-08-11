"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "./Logo";
import CurrencySelector from "./CurrencySelector";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white text-gambia-blue border-b border-black/10 relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand / Logo Link */}
        <Link
          href="/"
          className="shrink-0 flex items-center hover:opacity-95 transition-opacity"
        >
          <Logo className="scale-90" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/tours"
            className="hover:text-gambia-green transition-colors font-medium"
          >
            Tours
          </Link>
          <Link
            href="/custom-tour"
            className="inline-flex items-center gap-1.5 bg-gambia-blue/10 hover:bg-gambia-blue/20 text-gambia-blue px-3 py-1.5 rounded-full text-xs font-bold transition-all border border-gambia-blue/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-gambia-red" />
            Build Custom Trip
          </Link>
          <Link
            href="/about"
            className="hover:text-gambia-green transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="hover:text-gambia-green transition-colors font-medium"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-gambia-green transition-colors font-medium"
          >
            Contact
          </Link>

          {/* ✅ Selettore Valuta Desktop Pulito */}
          <CurrencySelector />

          <a
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gambia-green text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gambia-blue focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 px-6 py-6 flex flex-col gap-4 text-base bg-white shadow-lg">
          <Link
            href="/tours"
            onClick={() => setOpen(false)}
            className="hover:text-gambia-green transition-colors font-medium"
          >
            Tours
          </Link>
          <Link
            href="/custom-tour"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 text-gambia-blue font-bold"
          >
            <Sparkles className="w-4 h-4 text-gambia-red" />
            Build Custom Trip
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-gambia-green transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-gambia-green transition-colors font-medium"
          >
            Contact
          </Link>

          {/* Selettore Valuta Mobile */}
          <div className="pt-3 border-t border-black/5 flex items-center justify-between">
            <span className="text-xs font-semibold text-black/50">
              Currency:
            </span>
            <CurrencySelector />
          </div>

          <a
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gambia-green text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity text-center mt-2"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
