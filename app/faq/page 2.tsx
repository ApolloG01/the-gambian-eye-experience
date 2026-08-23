import { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ & Contact | The Gambian Eye Experience",
  description:
    "Frequently asked questions about booking private tours, payments, pickup, and direct contact details for Ousman.",
};

const faqs = [
  {
    icon: CreditCard,
    question: "How and when do I pay for the excursions?",
    answer:
      "No upfront payment or credit card is required to book! You pay in cash directly to Ousman on the day of the tour. We accept Dalasi (GMD), Euros (€), British Pounds (£), or US Dollars ($).",
  },
  {
    icon: MapPin,
    question: "Where do you pick us up for the tour?",
    answer:
      "We offer direct hotel pickup and drop-off from all major hotels and lodges along the Senegambia coastline (Kotu, Kololi, Cape Point, Fajara, Bijilo, Brufut) as well as the cruise port.",
  },
  {
    icon: Calendar,
    question: "What is your cancellation or date adjustment policy?",
    answer:
      "We understand travel plans change. Since there are no booking fees or deposits required, you can cancel or reschedule your date freely via WhatsApp with at least 24 hours notice.",
  },
  {
    icon: ShieldCheck,
    question: "Are entrance fees, transport, and guide services included?",
    answer:
      "Yes! All quoted prices include private air-conditioned vehicle transportation, fuel, driver, licensed local guide services, and official park entry tickets unless specified otherwise.",
  },
];

export default function FAQPage() {
  const whatsappUrl = `https://wa.me/2209984010?text=${encodeURIComponent("Hello Ousman, I have a question about booking a tour.")}`;

  // Dati strutturati Schema.org FAQPage per Google
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gambia-blue/10 text-gambia-blue">
            <HelpCircle className="w-3.5 h-3.5" /> Support & Information
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-black/60 max-w-xl mx-auto">
            Everything you need to know about booking private excursions across
            The Gambia with Ousman.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            return (
              <div
                key={`faq-${idx}`}
                className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-gambia-blue">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-black">
                  {faq.question}
                </h3>
                <p className="text-xs text-black/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Cards Section */}
        <div className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-black">
              Have More Questions?
            </h2>
            <p className="text-xs text-black/60">
              Reach out directly to plan your custom trip or request special
              arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* WhatsApp Contact */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-800">
                  Quick Chat on WhatsApp
                </p>
                <p className="text-sm font-bold text-black group-hover:text-emerald-700">
                  +220 998 4010
                </p>
              </div>
            </a>

            {/* Direct Phone / Email */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-black/5 bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-gambia-blue text-white flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-black/50">
                  Direct Line & Local Contact
                </p>
                <p className="text-sm font-bold text-black">Ousman Baldeh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
