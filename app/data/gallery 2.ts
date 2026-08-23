export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  src: string; // Percorso della foto o dell'immagine di copertina (thumbnail) per il video
  videoUrl?: string; // URL del file video (.mp4 o YouTube/Cloudinary)
  title: string;
  category:
    | "wildlife"
    | "culture"
    | "beaches"
    | "guests"
    | "reviews"
    | "history"
    | "nightlife";
  caption?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "photo",
    src: "/images/abuko_nature_reserve.jpg",
    title: "Abuko Nature Reserve Walk",
    category: "wildlife",
    caption: "Getting close to native monkey species with Ousman.",
  },
  {
    id: "2",
    type: "video",
    src: "/images/walk_with_lions1.png", // Video Cover image
    videoUrl:
      "https://res.cloudinary.com/i0mcgvnd/video/upload/v1786116232/walking_with_lions_part2_te5prv.mp4",
    title: "Walking with Lions",
    category: "wildlife",
    caption: "Cross into Senegal for a full safari at Fathala",
  },
  {
    id: "3",
    type: "photo",
    src: "/images/hard_rock.jpg",
    title: "Nightlife",
    category: "nightlife",
    caption:
      "Tropical beats, cold drinks, and good vibes. The Smiling Coast comes alive after dark! 🌴🍹.",
  },
  {
    id: "4",
    type: "video",
    src: "/images/river_gambia1.jpg",
    videoUrl:
      "https://res.cloudinary.com/i0mcgvnd/video/upload/v1786116217/Gambian_River_Story2_zf4tlm.mp4",
    title: "River Gambia",
    category: "history",
    caption:
      "Gliding through the heart of The Gambia — where hippos, mangroves, and history meet",
  },

  {
    id: "5",
    type: "photo",
    src: "/images/crockodile_pool1_sld.jpg",
    title: "Kachikally Crocodile Pool",
    category: "culture",
    caption: "Cultural history and tradition in Bakau.",
  },
  {
    id: "6",
    type: "video",
    src: "/images/monkey_park.png", // Video Cover
    videoUrl:
      "https://res.cloudinary.com/i0mcgvnd/video/upload/v1786116241/monkey_park_video_post_xcsdjb.mp4",
    title: "Monkey Park",
    category: "wildlife",
    caption:
      "A peaceful walk through Bijilo Forest Park with some curious friends. 🐒🌿",
  },
  {
    id: "7",
    type: "video",
    src: "/images/adebayo_BBC_promo_dxcuv5.jpg", // Video Cover
    videoUrl:
      "https://res.cloudinary.com/i0mcgvnd/video/upload/v1786116219/adebayo_BBC_promo_dxcuv5.mp4",
    title: "Adebayo (BBC Radio 5) x The Gambian Eye",
    category: "reviews",
    caption:
      "BBC Radio 5 Host Dotun Adebayo Shares His Experience with Ousman Baldeh",
  },
];
