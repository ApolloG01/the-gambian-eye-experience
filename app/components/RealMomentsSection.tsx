"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X, ArrowRight, ShieldCheck } from "lucide-react";
import { galleryItems, GalleryItem } from "@/app/data/gallery";

export default function RealMomentsSection() {
  const [activeVideo, setActiveVideo] = useState<GalleryItem | null>(null);

  // Filtra solo i media di tipo video
  const videoReels = galleryItems.filter((item) => item.type === "video");

  return (
    <section className="py-16 bg-white border-y border-black/5 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Sezione */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-gambia-green/10 text-gambia-green text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> 100% Unfiltered & Authentic
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gambia-blue">
              Real Moments from the Field
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold text-gambia-blue hover:text-gambia-red transition-colors shrink-0"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Contenitore Video Centrato */}
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-6 w-full max-w-5xl mx-auto">
            {videoReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveVideo(reel)}
                className="group relative aspect-[9/16] w-[220px] sm:w-[240px] shrink-0 rounded-3xl overflow-hidden cursor-pointer border border-black/10 shadow-md hover:shadow-xl transition-all"
              >
                <Image
                  src={reel.src}
                  alt={reel.title}
                  fill
                  sizes="240px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 group-hover:bg-gambia-red text-gambia-blue group-hover:text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Title & Tag */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <span className="text-[10px] font-bold text-gambia-green uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm mb-1 inline-block">
                    Raw Reel
                  </span>
                  <p className="text-xs font-bold text-white leading-snug line-clamp-2">
                    {reel.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pop-up Player per il Video */}
      {activeVideo && activeVideo.videoUrl && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative aspect-[9/16] max-h-[85vh] w-full max-w-sm rounded-3xl overflow-hidden bg-black shadow-2xl">
            <video
              src={activeVideo.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
