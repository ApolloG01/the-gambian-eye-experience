"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Compass, Camera, Video, Sparkles } from "lucide-react";
import { galleryItems, GalleryItem } from "@/app/data/gallery";

type FilterType = "all" | "photo" | "video";

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-gambia-blue/10 text-gambia-blue text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-gambia-red" />
            Authentic Moments
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gambia-blue mb-4">
            Life Through Ousman's Lens
          </h1>
          <p className="text-black/60 text-sm sm:text-base leading-relaxed">
            Unfiltered glimpses of wildlife encounters, cultural traditions, and
            real traveler experiences across The Gambia and Senegal.
          </p>
        </div>

        {/* Tab Filtri */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              filter === "all"
                ? "bg-gambia-blue text-white shadow-md"
                : "bg-white text-black/70 hover:bg-gray-100 border border-black/5"
            }`}
          >
            <Compass className="w-4 h-4" /> All Media
          </button>
          <button
            type="button"
            onClick={() => setFilter("photo")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              filter === "photo"
                ? "bg-gambia-blue text-white shadow-md"
                : "bg-white text-black/70 hover:bg-gray-100 border border-black/5"
            }`}
          >
            <Camera className="w-4 h-4" /> Photos
          </button>
          <button
            type="button"
            onClick={() => setFilter("video")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              filter === "video"
                ? "bg-gambia-blue text-white shadow-md"
                : "bg-white text-black/70 hover:bg-gray-100 border border-black/5"
            }`}
          >
            <Video className="w-4 h-4" /> Video Stories
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer bg-slate-200 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Badge Video / Photo */}
              <div className="absolute top-4 left-4 z-10">
                {item.type === "video" ? (
                  <span className="bg-gambia-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <Play className="w-3 h-3 fill-white" /> Raw Reel
                  </span>
                ) : (
                  <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Photo
                  </span>
                )}
              </div>

              {/* Icona Play al centro se è un video */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 bg-white/90 group-hover:bg-gambia-green text-gambia-blue group-hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Testo in basso */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-white/70 line-clamp-2">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col">
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {selectedMedia.type === "video" && selectedMedia.videoUrl ? (
                <video
                  src={selectedMedia.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            <div className="p-6 bg-slate-900 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-gambia-red mb-1 block">
                {selectedMedia.category}
              </span>
              <h2 className="text-xl font-bold mb-2">{selectedMedia.title}</h2>
              {selectedMedia.caption && (
                <p className="text-xs text-white/70 leading-relaxed">
                  {selectedMedia.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
