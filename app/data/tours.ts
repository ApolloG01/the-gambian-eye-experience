export type Interest =
  | "Wildlife & Safari"
  | "Bird Watching"
  | "History & Heritage"
  | "Local Culture"
  | "Beach & Relaxation"
  | "Boat & River"
  | "Adventure"
  | "Nature & Wildlife"
  | "Chillax at the Seaside"
  | "Boat Trips";

export type Duration = "Half day" | "Full day" | "2 days" | "Multi-day";

export type Tour = {
  id: string;
  slug: string;
  name: string;
  description: string;
  locations: string[];
  duration: Duration;
  inclusions: string[];
  priceFrom: number;
  currency: string;
  interests: Interest[];
  image: string;
};

export const tours: Tour[] = [
  {
    id: "fathala-safari",
    slug: "fathala-safari",
    image: "/images/walk_with_lions1.png",
    name: "Fathala Wildlife Reserve & Lion Walk (2-in-1), Senegal",
    description:
      "Cross the border into Senegal for an unforgettable full-day safari at Fathala Wildlife Reserve. Spot giraffes, rhinos, antelopes, and zebras roaming freely, then experience the thrilling Walking with Lions activity.",
    locations: ["Banjul Ferry Terminal", "Fathala Wildlife Reserve, Senegal"],
    duration: "Full day",
    inclusions: [
      "Hotel pick-up & drop-off",
      "Private transport",
      "Banjul–Senegal ferry crossing",
      "Safari entrance ticket",
      "Local lunch",
      "Bottled water",
    ],
    priceFrom: 169.5,
    currency: "GBP",
    interests: ["Wildlife & Safari"],
  },

  {
    id: "kartong-snake-farm",
    slug: "kartong-snake-farm",
    image: "/images/kartong_snake_farm.jpeg",
    name: "Kartong Snake Farm & South Coast Discovery",
    description:
      "Journey down to the southern border with Senegal to visit Kartong Snake Farm, one of The Gambia's most unique reptile conservation spots. Experience guided educational handling and enjoy scenic views along the quiet southern coastline.",
    locations: ["Kartong Snake Farm", "Kartong Beach", "South Coast"],
    duration: "Full day",
    inclusions: [
      "Hotel pick-up & drop-off",
      "Private transport",
      "Snake farm entrance ticket",
      "Bottled water",
    ],
    priceFrom: 64,
    currency: "GBP",
    interests: ["Wildlife & Safari"],
  },
  {
    id: "river-safari",
    slug: "river-safari",
    image: "/images/river_gambia1.jpg",
    name: "River Gambia Safari & Wassu Stone Circles",
    description:
      "A scenic two-day overland and river journey into real Gambia. Cruise past Janjanbureh and the Baboon Islands to spot hippos and chimpanzees, visit the UNESCO-listed Wassu Stone Circles, and experience authentic village life along the way.",
    locations: [
      "Hotel stay",
      "Janjanbureh",
      "Baboon Islands",
      "Wassu Stone Circles",
      "Kuntaur",
    ],
    duration: "2 days",
    inclusions: [
      "Overnight accommodation",
      "Private transport",
      "River boat cruise",
      "Stone Circles entrance ticket",
      "Bottled water",
    ],
    priceFrom: 220,
    currency: "GBP",
    interests: ["Wildlife & Safari", "Bird Watching", "Boat & River"],
  },
  {
    id: "bintang-bolong",
    slug: "bintang-bolong",
    image: "/images/bb_birdwatching.jpeg",
    name: "Bintang Bolong Bird Watching Experience",
    description:
      "Discover one of West Africa's premier birdwatching destinations. Cruise along quiet mangrove-lined creeks home to kingfishers, herons, and rare migratory birds in a tranquil natural sanctuary.",
    locations: ["Bintang Bolong Lodge", "Bintang Creek"],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Guided boat cruise",
      "Lodge access",
      "Bottled water",
    ],
    priceFrom: 106,
    currency: "GBP",
    interests: ["Bird Watching", "Boat & River"],
  },
  {
    id: "tanji-fishing",
    slug: "tanji-fishing",
    image: "/images/tanji_fishing_village.jpg",
    name: "Tanji Fishing Village & Smokehouses",
    description:
      "Witness the vibrant energy of West Africa's busiest coastal fishing community. Watch colorful pirogues return with the day's catch, learn about traditional fish-smoking techniques, and spot coastal birdlife at nearby Tanji Reserve.",
    locations: ["Tanji Fishing Village", "Tanji Bird Reserve"],
    duration: "Half day",
    inclusions: ["Private transport", "Local guide", "Bottled water"],
    priceFrom: 51,
    currency: "GBP",
    interests: ["Bird Watching", "Local Culture"],
  },
  {
    id: "roots-history",
    slug: "roots-history",
    image: "/images/kunta_kinteh_island.jpg",
    name: "Kunta Kinteh Island & Roots Heritage Tour",
    description:
      "Trace powerful history on a journey to UNESCO-listed Kunta Kinteh Island and the historic village of Juffureh. Explore the heritage of the transatlantic slave trade guided by local insights.",
    locations: ["Kunta Kinteh Island", "Juffureh", "Albreda"],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Boat crossing ticket",
      "Museum entrance ticket",
      "Breakfast",
      "Bottled water",
    ],
    priceFrom: 72,
    currency: "GBP",
    interests: ["History & Heritage", "Boat & River"],
  },
  {
    id: "banjul-city",
    slug: "banjul-city",
    image: "/images/banjul3.jpg",
    name: "Banjul Capital City & Albert Market Tour",
    description:
      "Discover the capital city of Banjul with Ousman. Panoramic views from Arch 22, historical sights, and an immersive walk through the bustling Albert Market for craft shopping and local spices.",
    locations: ["Banjul", "Albert Market", "Arch 22"],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Local guide",
      "All entrance tickets",
      "Bottled water",
    ],
    priceFrom: 68,
    currency: "GBP",
    interests: ["History & Heritage", "Local Culture"],
  },
  {
    id: "serrekunda-day",
    slug: "serrekunda-day",
    image: "/images/crocodile_pool2.jpeg",
    name: "Serrekunda Highlights & Culture (4-in-1)",
    description:
      "Get beyond the resorts for a full cultural immersion. Visit the sacred Kachikally Crocodile Pool, navigate vibrant Serrekunda Market, stop at Musu Kebba Drammeh Batik Factory, and browse authentic craft markets.",
    locations: [
      "Kachikally Crocodile Pool",
      "Serrekunda Market",
      "Musu Kebba Drammeh Batik Factory",
      "Craft Markets",
    ],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Crocodile Pool entrance ticket",
      "Local guide",
      "All entrance tickets",
      "Bottled water",
    ],
    priceFrom: 73,
    currency: "GBP",
    interests: ["Local Culture", "History & Heritage"],
  },
  {
    id: "makasutu-forest",
    slug: "makasutu-forest",
    image: "/images/makasutu_cuktural_forest.jpg",
    name: "Makasutu Cultural Forest & Brikama Craft Market",
    description:
      "Take a guided forest walk and creek boat trip in sacred Makasutu, spot wild baboons, and discover traditional herbal customs. Finish at Brikama, home to The Gambia's premier woodcarving and craft market.",
    locations: [
      "Makasutu Cultural Forest",
      "Brikama Wood Market",
      "Brikama Craft Market",
    ],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Forest entrance ticket",
      "Local guide",
      "Buffet lunch",
      "Forest boat trip",
      "Bottled water",
    ],
    priceFrom: 72,
    currency: "GBP",
    interests: ["Local Culture", "Wildlife & Safari"],
  },
  {
    id: "senegambia-strip",
    slug: "senegambia-strip",
    image: "/images/senegambi_strip_village.jpg",
    name: "Senegambia Strip, Kololi Beach & Village Walk",
    description:
      "Experience the heart of coastal Gambia like a local. Stroll through Senegambia craft market, enjoy relaxing ocean views at Kololi Beach, and explore everyday life on a laid-back half-day outing with Ousman.",
    locations: ["Senegambia Strip", "Kololi Beach", "Senegambia Craft Market"],
    duration: "Half day",
    inclusions: ["Private transport", "Local guide", "Bottled water"],
    priceFrom: 51,
    currency: "GBP",
    interests: ["Beach & Relaxation", "Local Culture"],
  },
  {
    id: "beach-day",
    slug: "beach-day",
    image: "/images/paradise_beach.jpg",
    name: "Paradise Beach Day Escape",
    description:
      "Escape the resort crowds and spend a relaxing day on the pristine golden sands of Paradise Beach. Enjoy tranquil ocean waters, fresh coastal breeze, and true Atlantic relaxation.",
    locations: ["Paradise Beach", "Sanyang Beach"],
    duration: "Full day",
    inclusions: ["Private transport", "Bottled water"],
    priceFrom: 47,
    currency: "GBP",
    interests: ["Beach & Relaxation"],
  },
  {
    id: "sunset-pirogue",
    slug: "sunset-pirogue",
    image: "/images/lamine_lodge.jpg",
    name: "Lamin Lodge & Sunset Pirogue Cruise",
    description:
      "Unwind on a traditional wooden pirogue cruise through calm mangrove creeks near Lamin Lodge. Watch the sun set over the River Gambia with cold refreshments—the ideal finish to your day.",
    locations: ["River Gambia", "Oyster Creek", "Lamin Lodge"],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Pirogue boat hire",
      "Soft drinks & refreshments",
      "Sunset snacks",
      "Bottled water",
    ],
    priceFrom: 73,
    currency: "GBP",
    interests: ["Boat & River", "Beach & Relaxation"],
  },
  {
    id: "abuko-nature",
    slug: "abuko-nature",
    image: "/images/Gambia_abuko_001.jpg",
    name: "Abuko Nature Reserve Forest Walk",
    description:
      "Explore a lush, compact tropical forest reserve home to over 270 bird species, monkeys, and native flora. A tranquil and accessible nature walk just minutes outside the main resort areas.",
    locations: ["Abuko Nature Reserve"],
    duration: "Half day",
    inclusions: [
      "Hotel pick-up & drop-off",
      "Private transport",
      "Reserve entrance ticket",
      "Bottled water",
    ],
    priceFrom: 50,
    currency: "GBP",
    interests: ["Wildlife & Safari", "Bird Watching"],
  },
];
