"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Banknote,
  ShieldCheck,
  Sun,
  Compass,
  HeartHandshake,
} from "lucide-react";

interface FaqItem {
  id: string;
  category: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "currency",
    category: "Money & Payments",
    icon: <Banknote className="w-4 h-4 text-gambia-green" />,
    question: "What currency is used in The Gambia, and can I use cards?",
    answer:
      "The local currency is the Gambian Dalasi (GMD). Cash is king in The Gambia—ATMs are available in coastal resort areas (Banjul, Senegambia, Kotu), but cards are rarely accepted at local markets or smaller venues. It's recommended to carry cash in Euros, British Pounds, or US Dollars, which can easily be exchanged locally at good rates.",
  },
  {
    id: "visa",
    category: "Entry & Visas",
    icon: <ShieldCheck className="w-4 h-4 text-gambia-blue" />,
    question: "Do I need a visa to visit The Gambia?",
    answer:
      "Tourists from the UK, EU, Commonwealth countries, and many ECOWAS nations do not require a visa for stays up to 90 days. Always double-check entry regulations with your local Gambian embassy prior to departure.",
  },
  {
    id: "season",
    category: "Weather & Timing",
    icon: <Sun className="w-4 h-4 text-gambia-red" />,
    question: "When is the best time of year to visit?",
    answer:
      "The dry season runs from November through May, offering guaranteed sunshine, comfortable temperatures (25°C–32°C), and low humidity—ideal for beach days, river cruises, and safari excursions. The green/rainy season (July to October) brings lush landscapes and excellent opportunities for birdwatching.",
  },
  {
    id: "customs",
    category: "Culture & Etiquette",
    icon: <HeartHandshake className="w-4 h-4 text-gambia-green" />,
    question: "What local customs or dress codes should I keep in mind?",
    answer:
      "Gambians are famous for their hospitality ('The Smiling Coast of Africa'). While beachwear is standard in hotel pools and coastal resorts, modest attire (covering shoulders and knees) is respectful when visiting local villages, traditional markets, or religious sites. Greeting people with 'Salaam Aleikum' or 'N'nga def' (Wolof) is always appreciated!",
  },
  {
    id: "tours",
    category: "Tour Logistics",
    icon: <Compass className="w-4 h-4 text-gambia-blue" />,
    question: "Are private tours customizable, and is hotel pickup included?",
    answer:
      "Yes! All private tours with Ousman include hotel or lodge pickup along the main tourist strip (Senegambia, Kotu, Kololi, Fajara, Cape Point, and Bakau). Routes, departure times, and lunch stops can be tailored to your group's preferences.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("currency");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 bg-white border-t border-black/5">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gambia-red bg-gambia-red/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Essential Travel Info
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gambia-blue mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-black/60 max-w-xl mx-auto">
            Practical advice to help you prepare for your journey to The Gambia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/80 border-gambia-blue/20 ring-1 ring-gambia-blue/10 shadow-sm"
                    : "bg-white border-black/5 hover:border-black/15"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl border border-black/5 shrink-0 shadow-xs">
                      {faq.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-wider block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="font-bold text-gambia-blue text-base sm:text-lg leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? "bg-gambia-blue text-white border-gambia-blue rotate-180"
                        : "bg-slate-50 border-black/10 text-black/60"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-black/5 text-sm sm:text-base text-black/70 leading-relaxed pl-14 sm:pl-16">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
