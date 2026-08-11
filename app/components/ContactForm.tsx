"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-semibold text-gambia-blue mb-2">
          Message sent!
        </p>
        <p className="text-black/60">
          Ousman will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gambia-blue"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="border border-black/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-gambia-blue transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gambia-blue"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="border border-black/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-gambia-blue transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-gambia-blue"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell Ousman when you're visiting, how many people, and what you're interested in..."
          className="border border-black/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-gambia-blue transition-colors resize-none"
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-gambia-red">
          Something went wrong. Please try again or message Ousman directly on
          WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="bg-gambia-blue text-white py-4 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {formState === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
