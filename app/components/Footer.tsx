import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gambia-blue border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-lg font-semibold">The Gambian Eye</p>
          <p className="text-sm mt-2 text-black/50">
            Private tours with Usman Baldeh.
            <br />
            Senegambia Strip, Kololi, The Gambia
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <p className="font-medium mb-1">Explore</p>
          <Link
            href="/tours"
            className="text-black/50 hover:text-gambia-blue transition-colors"
          >
            Tours
          </Link>
          <Link
            href="/about"
            className="text-black/50 hover:text-gambia-blue transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-black/50 hover:text-gambia-blue transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="text-sm text-black/50">
          <p className="font-medium text-black mb-1">Get in touch</p>

          <a
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gambia-blue transition-colors"
          >
            WhatsApp Usman
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-black/50 py-4">
        © {new Date().getFullYear()} The Gambian Eye. All rights reserved.
      </div>
    </footer>
  );
}
