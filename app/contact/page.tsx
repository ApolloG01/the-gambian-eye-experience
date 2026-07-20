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
      {" "}
      <div className="bg-gambia-red-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Get in touch</h1>
        <p className="text-white/70 max-w-xl mx-auto">
          Ready to plan your trip? Message Usman directly on WhatsApp or fill in
          the form below.
        </p>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto px-4 py-8 text-center items-center">
        <h2 className=" text-xl font-bold text-gambia-blue mb-4">
          Contact details
        </h2>
        <div className="flex flex-col gap-4 justify-center ">
          <div className="flex items-center justify-center gap-3 text-sm text-black/60">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gambia-red" />
            <span>Senegambia Strip, Kololi, The Gambia</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-black/60">
            <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-gambia-green" />
            <span>
              WhatsApp is the fastest way to reach Usman — he typically replies
              within a few hours.
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-auto max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left — contact info */}
          <div className="flex flex-col mt-auto h-full gap-6">
            {/* Extra info */}
            <div className="border border-black/10 rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold text-gambia-blue mb-1">
                  Availability
                </p>
                <p className="text-sm text-black/50">
                  Half day and full day excursions, seven days a week. Subject
                  to seasonal availability — the rainy season runs June to
                  October.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gambia-blue mb-1">
                  Group size
                </p>
                <p className="text-sm text-black/50">
                  All tours are private — individuals, couples, families and
                  groups all welcome.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gambia-blue mb-1">
                  Languages
                </p>
                <p className="text-sm text-black/50">
                  English, Mandinka, Wolof.
                </p>
              </div>
            </div>
            <div className="md:border-l md:border-black/10 md:pl-12 flex flex-col mt-auto ">
              <a
                href="https://wa.me/2209984010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gambia-green text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:border-l md:border-black/10 md:pl-12 flex flex-col mt-auto h-full">
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
