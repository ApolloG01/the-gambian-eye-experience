"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white text-gambia-blue border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-wide shrink-0"
        >
          The Gambian Eye
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/tours"
            className="hover:text-gambia-green transition-colors"
          >
            Tours
          </Link>
          <Link
            href="/about"
            className="hover:text-gambia-green transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gambia-green transition-colors"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gambia-green text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gambia-blue"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 px-4 py-4 flex flex-col gap-4 text-sm">
          <Link
            href="/tours"
            onClick={() => setOpen(false)}
            className="hover:text-gambia-green transition-colors"
          >
            Tours
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-gambia-green transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-gambia-green transition-colors"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gambia-green text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-fit"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
