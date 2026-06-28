import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gambia-blue text-gambia-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-lg font-semibold">The Gambian Eye</p>
          <p className="text-sm mt-2 text-white/70">
            Private tours with Usman Baldeh.
            <br />
            Senegambia Strip, Kololi, The Gambia
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <p className="font-medium mb-1">Explore</p>
          <Link
            href="/tours"
            className="text-white/70 hover:text-white transition-colors"
          >
            Tours
          </Link>
          <Link
            href="/about"
            className="text-white/70 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white/70 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="text-sm text-white/70">
          <p className="font-medium text-white mb-1">Get in touch</p>

          <a
            href="https://wa.me/2209984010"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp Usman
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-white/40 py-4">
        © {new Date().getFullYear()} The Gambian Eye. All rights reserved.
      </div>
    </footer>
  );
}
