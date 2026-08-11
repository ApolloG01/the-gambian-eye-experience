"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { useCurrency } from "@/app/context/CurrencyContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourName: string;
  tourPrice: number; // Prezzo base in GBP
}

export default function BookingModal({
  isOpen,
  onClose,
  tourName,
  tourPrice,
}: BookingModalProps) {
  const { formatPrice, currency } = useCurrency();
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const totalBaseGBP = tourPrice * guests;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedTotal = formatPrice(totalBaseGBP);

    const currentUrl =
      typeof window !== "undefined" ? window.location.href : "";

    const message =
      `Hello Ousman! I would like to book the following excursion:\n\n` +
      `📌 *Tour:* ${tourName}\n` +
      `👤 *Guests:* ${guests}\n` +
      `📅 *Preferred Date:* ${date || "To be agreed"}\n` +
      `💰 *Estimated Total:* ${formattedTotal} (${currency})\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : "") +
      (currentUrl ? `🔗 *Link:* ${currentUrl}\n` : "") +
      `\nCould you please confirm availability?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2209984010?text=${encodedMessage}`, "_blank");
    onClose();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    /* Overlay: cliccando qui fuori la modale si chiude */
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      {/* Modale: e.stopPropagation() impedisce al click interno di chiudere la finestra */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border border-black/5"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute right-5 top-5 text-black/40 hover:text-black p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-gambia-blue mb-1">
          Book Excursion
        </h3>
        <p className="text-xs text-black/50 mb-6">{tourName}</p>

        <form onSubmit={handleWhatsAppBooking} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-black/70 mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              min={1}
              max={20}
              value={guests}
              onChange={(e) =>
                setGuests(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-full px-4 py-2.5 bg-slate-50 border border-black/10 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gambia-blue/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-black/70 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-black/10 rounded-xl text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-gambia-blue/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-black/70 mb-1">
              Special Requests / Pick-up location
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Hotel name, dietary needs..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-black/10 rounded-xl text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-gambia-blue/20"
            />
          </div>

          {/* Prezzo totale convertito al volo */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-black/5 my-2">
            <div>
              <span className="text-xs text-black/50 block font-medium">
                Total Estimate
              </span>
              <span className="text-xs text-black/40">
                {formatPrice(tourPrice)} × {guests} guest{guests > 1 ? "s" : ""}
              </span>
            </div>
            <span className="text-2xl font-black text-gambia-green">
              {formatPrice(totalBaseGBP)}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-6 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Send className="w-4 h-4" />
            Send Booking via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
