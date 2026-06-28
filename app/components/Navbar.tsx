import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white text-gambia-blue border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          The Gambian Eye
        </Link>
        <nav className="flex items-center gap-6 text-sm">
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
      </div>
    </header>
  );
}
