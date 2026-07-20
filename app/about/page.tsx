import { MapPin, Globe, Clock } from "lucide-react";

export const metadata = {
  title: "About | The Gambian Eye",
  description:
    "Meet Usman Baldeh — your private local guide in The Gambia. Authentic experiences, local knowledge, no tourist traps.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gambia-red-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Meet Usman</h1>
        <p className="text-white/70 max-w-xl mx-auto">
          Your guide, your local, your Gambia.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo placeholder */}
          <div className="bg-gambia-blue/10 rounded-2xl aspect-[3/4] flex items-center justify-center text-gambia-blue/30 text-sm">
            Photo of Usman coming soon
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gambia-blue mb-4">
                Usman Baldeh
              </h2>
              <p className="text-black/60 leading-relaxed mb-4">
                Born and raised in The Gambia, Usman has spent years showing
                visitors the side of his country that never makes it into
                guidebooks — the villages, the river, the people, the food.
              </p>
              <p className="text-black/60 leading-relaxed">
                Every trip is private and built around you. No groups of
                strangers, no fixed routes, no tourist traps. Just you, Usman,
                and the real Gambia.
              </p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-black/60">
                <MapPin className="w-4 h-4 shrink-0 text-gambia-red" />
                <span>Based in Kololi, Senegambia Strip, The Gambia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-black/60">
                <Globe className="w-4 h-4 shrink-0 text-gambia-red" />
                <span>Covers The Gambia and border areas of Senegal</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-black/60">
                <Clock className="w-4 h-4 shrink-0 text-gambia-red" />
                <span>Available for half day and full day excursions</span>
              </div>
            </div>

            {/* CTA */}

            <a
              href="https://wa.me/2209984010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gambia-green text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
            >
              Message Usman on WhatsApp
            </a>
          </div>
        </div>

        {/* Why book local */}
        <div className="mt-20 border-t border-black/10 pt-16">
          <h2 className="text-2xl font-bold text-gambia-red mb-8 text-center">
            Why book with a local guide?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="font-semibold text-gambia-blue mb-2">Real access</p>
              <p className="text-sm text-black/60 leading-relaxed">
                Locals go places tourists can't. Usman knows which villages
                welcome visitors, which markets are worth your time, and which
                restaurants locals actually eat at.
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gambia-blue mb-2">
                Fair pricing
              </p>
              <p className="text-sm text-black/60 leading-relaxed">
                No inflated tourist prices, no surprise extras. What you see is
                what you pay — transport and entrance fees always included.
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gambia-blue mb-2">
                Your money stays local
              </p>
              <p className="text-sm text-black/60 leading-relaxed">
                Booking directly with Usman means your money goes straight to a
                Gambian family — not a foreign-owned tour operator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
