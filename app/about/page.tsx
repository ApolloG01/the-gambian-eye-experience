import Image from "next/image";
import { MapPin, Globe, Clock } from "lucide-react";

export const metadata = {
  title: "About Ousman | The Gambian Eye",
  description:
    "Meet Ousman Baldeh — your private local guide in The Gambia. Discover authentic experiences, deep local knowledge, and zero tourist traps.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gambia-surface text-black py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Meet Ousman</h1>
        <p className="text-gambia-blue/70 max-w-xl mx-auto">
          Your guide, your local insider, your Gambia.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Ousman's Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
            <Image
              src="/images/about_me.jpg"
              alt="Ousman Baldeh - Local Tour Guide in The Gambia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gambia-blue mb-4">
                Ousman Baldeh
              </h2>
              <p className="text-black/60 leading-relaxed mb-4">
                Born and raised in The Gambia, Ousman has spent over 25 years
                showing visitors the side of his country that never makes it
                into guidebooks — authentic villages, pristine river trips,
                local traditions, and real Gambian cuisine.
              </p>
              <p className="text-black/60 leading-relaxed mb-4">
                Every tour is completely private and tailored around your
                schedule. No crowded buses, no rigid itineraries, and no tourist
                traps. Just you, Ousman, and the warmth of Africa’s Smiling
                Coast.
              </p>
              <blockquote className="border-l-2 border-gambia-green pl-4 text-sm italic text-black/70 font-medium">
                As I like to say: The more you smile in The Gambia, the brighter
                the sun seems to shine!
              </blockquote>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-black/60">
                <MapPin className="w-4 h-4 shrink-0 text-gambia-red" />
                <span>Based in Kololi, Senegambia Strip, The Gambia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-black/60">
                <Globe className="w-4 h-4 shrink-0 text-gambia-red" />
                <span>Covers The Gambia and border regions of Senegal</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-black/60">
                <Clock className="w-4 h-4 shrink-0 text-gambia-red" />
                <span>
                  Available for half-day, full-day, and multi-day tours
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/2209984010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gambia-green text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-center mt-2"
            >
              Message Ousman on WhatsApp
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
              <p className="font-semibold text-gambia-blue mb-2">
                Authentic Access
              </p>
              <p className="text-sm text-black/60 leading-relaxed">
                Experience places tourist buses miss. Ousman knows which
                villages genuinely welcome guests, which markets offer authentic
                crafts, and where locals actually dine.
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gambia-blue mb-2">
                Transparent Pricing
              </p>
              <p className="text-sm text-black/60 leading-relaxed">
                No hidden charges or unexpected add-ons. Clear, honest pricing
                with transport and entrance fees clearly communicated upfront.
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gambia-blue mb-2">
                Direct Community Support
              </p>
              <p className="text-sm text-black/60 leading-relaxed">
                Booking directly ensures your money directly benefits local
                Gambian families and community businesses rather than foreign
                agencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
