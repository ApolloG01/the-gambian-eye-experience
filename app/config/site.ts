// app/config/site.ts

export const SITE_CONFIG = {
  name: "The Gambian Eye",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2209984010",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
};
