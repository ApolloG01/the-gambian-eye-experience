export type Interest =
  | "Wildlife & Safari"
  | "Bird Watching"
  | "History & Heritage"
  | "Local Culture"
  | "Beach & Relaxation"
  | "Boat & River";

export type Duration = "Half day" | "Full day" | "Multi-day";

export type Tour = {
  id: string;
  name: string;
  description: string;
  locations: string[];
  duration: Duration;
  inclusions: string[];
  priceFrom: number;
  currency: string;
  interests: Interest[];
  gradient: string;
};

export const tours: Tour[] = [
  {
    id: "fathala-safari",
    gradient: "from-yellow-700 to-amber-400",
    name: "Fathala Wildlife Reserve, Senegal",
    description:
      "Cross into Senegal for a full safari at Fathala — giraffes, antelopes, rhinos and more roaming freely. Add the Walking with Lions experience for something truly unforgettable. Ferry crossing and lunch included.",
    locations: ["Banjul Ferry Terminal", "Fathala Wildlife Reserve, Senegal"],
    duration: "Full day",
    inclusions: [
      "Hotel pick-up",
      "Private transport",
      "Banjul–Senegal ferry",
      "Safari entrance",
      "Local lunch",
      "Bottled water",
    ],
    priceFrom: 110,
    currency: "GBP",
    interests: ["Wildlife & Safari"],
  },
  {
    id: "abuko-nature",
    gradient: "from-green-800 to-lime-500",
    name: "Abuko Nature Reserve",
    description:
      "West Africa's smallest but most rewarding nature reserve — monkeys, crocodiles, and over 270 recorded bird species in a compact, walkable forest just outside the city.",
    locations: ["Abuko Nature Reserve"],
    duration: "Half day",
    inclusions: ["Private transport", "Reserve entrance", "Bottled water"],
    priceFrom: 30,
    currency: "GBP",
    interests: ["Wildlife & Safari", "Bird Watching"],
  },
  {
    id: "kartong-snake-farm",
    gradient: "from-lime-700 to-green-400",
    name: "Kartong Snake Farm & South Coast",
    description:
      "Visit the Kartong Snake Farm — one of The Gambia's most unusual attractions — then explore the unspoiled beaches and fishing communities of the far south coast.",
    locations: ["Kartong Snake Farm", "Kartong Beach", "South Coast"],
    duration: "Half day",
    inclusions: ["Private transport", "Snake farm entrance", "Bottled water"],
    priceFrom: 35,
    currency: "GBP",
    interests: ["Wildlife & Safari"],
  },
  {
    id: "river-safari",
    gradient: "from-blue-800 to-cyan-600",
    name: "River Gambia Safari & Stone Circles",
    description:
      "A full day on the River Gambia — cruise past Janjanbureh to spot hippos, chimpanzees and rare birds around the Baboon Islands, then visit the UNESCO-listed Wassu Stone Circles.",
    locations: [
      "Janjanbureh",
      "Baboon Islands",
      "Wassu Stone Circles",
      "Kuntaur",
    ],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Boat trip",
      "Park entrance fees",
      "Stone Circles entrance",
      "Bottled water",
    ],
    priceFrom: 85,
    currency: "GBP",
    interests: ["Wildlife & Safari", "Bird Watching", "Boat & River"],
  },
  {
    id: "bintang-bolong",
    gradient: "from-cyan-700 to-sky-400",
    name: "Bintang Bolong Bird Watching",
    description:
      "One of West Africa's finest bird watching destinations — a remote creek lined with mangroves and forest, home to hundreds of species including kingfishers, herons and rare migrants. Best at dawn.",
    locations: ["Bintang Bolong Lodge", "Bintang Creek"],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Boat trip",
      "Lodge entrance",
      "Bottled water",
    ],
    priceFrom: 65,
    currency: "GBP",
    interests: ["Bird Watching", "Boat & River"],
  },
  {
    id: "tanji-fishing",
    gradient: "from-teal-700 to-emerald-400",
    name: "Tanji Fishing Village",
    description:
      "Watch the colourful pirogues come in at West Africa's busiest fishing village. The nearby Tanji Bird Reserve makes this a natural stop for birders too.",
    locations: ["Tanji Fishing Village", "Tanji Bird Reserve"],
    duration: "Half day",
    inclusions: ["Private transport", "Village guide", "Bottled water"],
    priceFrom: 35,
    currency: "GBP",
    interests: ["Bird Watching", "Local Culture"],
  },
  {
    id: "roots-history",
    gradient: "from-amber-800 to-orange-500",
    name: "Kunta Kinteh Island & Roots History",
    description:
      "Visit the UNESCO-listed Kunta Kinteh Island and the village of Juffureh — walking through the story of the transatlantic slave trade with a guide who grew up with these stories.",
    locations: ["Kunta Kinteh Island", "Juffureh", "Albreda"],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Boat crossing",
      "Museum entrance",
      "Local lunch",
    ],
    priceFrom: 70,
    currency: "GBP",
    interests: ["History & Heritage", "Boat & River"],
  },
  {
    id: "banjul-city",
    gradient: "from-indigo-800 to-blue-500",
    name: "Banjul City & Albert Market",
    description:
      "Explore the unhurried Gambian capital — Arch 22, the port, colonial streets — then dive into Albert Market for fabrics, spices and local crafts with Usman to help you navigate.",
    locations: ["Banjul", "Albert Market", "Arch 22"],
    duration: "Half day",
    inclusions: ["Private transport", "Local guide"],
    priceFrom: 25,
    currency: "GBP",
    interests: ["History & Heritage", "Local Culture"],
  },
  {
    id: "serrekunda-day",
    gradient: "from-rose-700 to-pink-400",
    name: "Serrekunda in a Day",
    description:
      "The real Gambia, not the resort strip. Kachikally Crocodile Pool, Serrekunda Market, the Musu Kebba Drammeh Batik Factory, and the craft markets — a full immersion in everyday Gambian life.",
    locations: [
      "Kachikally Crocodile Pool",
      "Serrekunda Market",
      "Musu Kebba Drammeh Batik Factory",
      "Craft Markets",
    ],
    duration: "Full day",
    inclusions: ["Private transport", "Crocodile Pool entrance", "Local guide"],
    priceFrom: 45,
    currency: "GBP",
    interests: ["Local Culture", "History & Heritage"],
  },
  {
    id: "makasutu-forest",
    gradient: "from-emerald-800 to-teal-500",
    name: "Makasutu Cultural Forest & Birikama",
    description:
      "Walk through the sacred Makasutu Cultural Forest with a local guide, then head to Birikama — home to The Gambia's largest wood market and excellent craft shopping.",
    locations: [
      "Makasutu Cultural Forest",
      "Birikama Wood Market",
      "Birikama Craft Market",
    ],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Forest entrance",
      "Local guide",
      "Bottled water",
    ],
    priceFrom: 50,
    currency: "GBP",
    interests: ["Local Culture"],
  },
  {
    id: "senegambia-strip",
    gradient: "from-sky-500 to-indigo-400",
    name: "Senegambia Strip & Kololi Beach",
    description:
      "The heart of tourist Gambia — but seen properly. Sunday beach vibes at Kololi, the Senegambia craft market, cold drinks, good food and the best people-watching on the Atlantic coast. A laid-back half day with Usman.",
    locations: ["Senegambia Strip", "Kololi Beach", "Senegambia Craft Market"],
    duration: "Half day",
    inclusions: ["Private transport", "Local guide"],
    priceFrom: 25,
    currency: "GBP",
    interests: ["Beach & Relaxation", "Local Culture"],
  },
  {
    id: "beach-day",
    gradient: "from-sky-400 to-blue-300",
    name: "Paradise Beach & Sanyang",
    description:
      "Two of The Gambia's finest beaches, well away from the resort crowds. Paradise Beach is quiet and pristine. Sanyang is livelier with beach bars and fresh fish. A full day of Atlantic coast at its best.",
    locations: ["Paradise Beach", "Sanyang Beach"],
    duration: "Full day",
    inclusions: ["Private transport", "Bottled water"],
    priceFrom: 30,
    currency: "GBP",
    interests: ["Beach & Relaxation"],
  },
  {
    id: "sunset-pirogue",
    gradient: "from-orange-700 to-yellow-400",
    name: "Sunset Pirogue on the River",
    description:
      "A slow evening on the River Gambia in a traditional wooden pirogue, watching the sun drop behind the mangroves with a cold drink in hand. The perfect end to a day in The Gambia.",
    locations: ["River Gambia", "Oyster Creek"],
    duration: "Half day",
    inclusions: ["Pirogue hire", "Soft drinks", "Sunset snacks"],
    priceFrom: 40,
    currency: "GBP",
    interests: ["Boat & River", "Beach & Relaxation"],
  },
];
