import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gambia-blue/70" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Private guide · The Gambia & Senegal
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The real Gambia, seen through local eyes.
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            A tailor-made, authentic Gambian experience — no hidden costs, no
            tourist traps. Every trip is shaped around you by Ousman Baldeh —
            transport and entrance fees always included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2209984010"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gambia-green text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book via WhatsApp
            </a>
            <Link
              href="/tours"
              className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gambia-blue transition-colors"
            >
              Browse Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
