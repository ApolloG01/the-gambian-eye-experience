import { MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "Contact | The Gambian Eye",
  description:
    "Get in touch with Usman Baldeh to plan your private tour in The Gambia.",
};

export default function ContactPage() {
  return (
    <div>
      ù{" "}
      <div className="bg-gambia-blue text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Get in touch</h1>
        <p className="text-white/70 max-w-xl mx-auto">
          Ready to plan your trip? Message Usman directly on WhatsApp or fill in
          the form below.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-gambia-blue mb-4">
                Contact details
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 text-sm text-black/60">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gambia-red" />
                  <span>Senegambia Strip, Kololi, The Gambia</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-black/60">
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-gambia-green" />
                  <span>
                    Available on WhatsApp — fastest way to reach Usman
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/2209984010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gambia-green text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div>
            <h2 className="text-xl font-bold text-gambia-blue mb-6">
              Send a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
