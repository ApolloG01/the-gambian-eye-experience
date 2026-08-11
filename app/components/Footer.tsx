import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 text-gambia-blue">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <Logo />
          <p className="text-sm text-black/50 leading-relaxed">
            Private tours with Ousman Baldeh.
            <br />
            Senegambia Strip, Kololi, The Gambia.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold mb-3">Explore</p>
          <div className="flex flex-col gap-2">
            <Link
              href="/tours"
              className="text-sm text-black/50 hover:text-gambia-blue transition-colors"
            >
              Tours
            </Link>
            <Link
              href="/about"
              className="text-sm text-black/50 hover:text-gambia-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-sm text-black/50 hover:text-gambia-blue transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm text-black/50 hover:text-gambia-blue transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold mb-3">Get in touch</p>

          <a
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black/50 hover:text-gambia-blue transition-colors"
          >
            WhatsApp Ousman
          </a>
        </div>
      </div>

      <div className="border-t border-black/10 text-center text-xs text-black/30 py-4">
        © {new Date().getFullYear()} The Gambian Eye. All rights reserved.
      </div>
    </footer>
  );
}
