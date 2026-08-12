import { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours } from "@/app/data/tours";
import TourDetailClient from "./TourDetailClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return { title: "Tour Not Found | The Gambian Eye Experience" };
  }

  const title = `${tour.name} — Excursion in The Gambia`;
  const description = `${tour.duration} tour. ${tour.description.slice(0, 150)}... From ${tour.currency} ${tour.priceFrom}.`;

  const imageUrl = tour.image.startsWith("http")
    ? tour.image
    : `https://www.ousmanbaldeh.tours${tour.image}`;

  return {
    title,
    description,
    openGraph: {
      title: `${tour.name} | The Gambian Eye Experience`,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: tour.name }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  // Struttura Dati Schema.org (TouristTrip)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    image: tour.image,
    touristType: ["Adventure travel", "Cultural tourism"],
    offers: {
      "@type": "Offer",
      price: tour.priceFrom,
      priceCurrency: tour.currency || "GBP",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    provider: {
      "@type": "TravelAgency",
      name: "The Gambian Eye Experience",
      url: "https://usmanbaldeh.com",
      telephone: "+2209984010",
    },
    itinerary: tour.locations?.map((loc, idx) => ({
      "@type": "ItemListUnnumbered",
      position: idx + 1,
      name: loc,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TourDetailClient tour={tour} />
    </>
  );
}
