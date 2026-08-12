import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/app/context/CurrencyContext";
import Navbar from "@/app/components/Navbar";

//  l'URL base del sito
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ousmanbaldeh.tours";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "The Gambian Eye Experience | Authentic Private Tours & Trips",
    template: "%s | The Gambian Eye Experience",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Explore The Gambia with Ousman. Private, tailor-made excursions, wildlife tours, and authentic cultural experiences across the Smiling Coast of Africa.",
  keywords: [
    "Gambia tours",
    "Gambia excursions",
    "Private guide Gambia",
    "Ousman Gambia tours",
    "Senegambia travel",
    "Gambia wildlife explorer",
  ],
  authors: [{ name: "Usman & The Gambian Eye Team" }],
  creator: "The Gambian Eye Experience",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    title: "The Gambian Eye Experience | Authentic Private Tours",
    description:
      "Book custom private excursions in The Gambia with expert local guide Usman. No upfront payments required.",
    siteName: "The Gambian Eye Experience",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Gambian Eye Experience - Excursions in The Gambia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gambian Eye Experience | Authentic Private Tours",
    description: "Tailor-made private trips and excursions in The Gambia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased bg-slate-50 text-gambia-blue">
        <CurrencyProvider>
          <Navbar />
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
