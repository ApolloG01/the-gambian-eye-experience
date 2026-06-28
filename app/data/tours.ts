export type Interest =
  | "Adventure"
  | "Nature & Wildlife"
  | "Seaside"
  | "Art & Culture"
  | "Party"
  | "Boat Trips"
  | "Food & Drink"
  | "History"
  | "Bird Watching"
  | "Chillax";

export type Duration = "Half day" | "Full day";

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
};

export const tours: Tour[] = [
  {
    id: "river-safari",
    name: "River Gambia Safari & Baboon Islands",
    description:
      "Cruise the River Gambia by boat to spot hippos, chimpanzees and dozens of bird species around the protected islands — a slow, peaceful day on the water.",
    locations: ["River Gambia National Park", "Baboon Islands", "Kuntaur"],
    duration: "Full day",
    inclusions: [
      "Private transport",
      "Boat trip",
      "Park entrance fees",
      "Bottled water",
    ],
    priceFrom: 75,
    currency: "GBP",
    interests: [
      "Nature & Wildlife",
      "Boat Trips",
      "Adventure",
      "Bird Watching",
    ],
  },
  {
    id: "roots-history",
    name: "Kunta Kinteh Island & Roots History",
    description:
      "Visit the UNESCO-listed Kunta Kinteh Island and Juffureh to walk through the story of the transatlantic slave trade with a guide who grew up with these stories.",
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
    interests: ["History", "Art & Culture", "Boat Trips"],
  },
  {
    id: "tanji-fishing",
    name: "Tanji Fishing Village & Beach",
    description:
      "See the colourful pirogues come in, watch the catch sorted on the sand, and relax on a quiet stretch of Atlantic coast away from the resorts.",
    locations: ["Tanji Fishing Village", "Tanji Beach", "Tanji Bird Reserve"],
    duration: "Half day",
    inclusions: ["Private transport", "Village guide", "Bottled water"],
    priceFrom: 35,
    currency: "GBP",
    interests: [
      "Seaside",
      "Food & Drink",
      "Nature & Wildlife",
      "Bird Watching",
    ],
  },
  {
    id: "abuko-nature",
    name: "Abuko Nature Reserve",
    description:
      "Walk through one of West Africa's smallest but most rewarding nature reserves — monkeys, crocodiles, and over 270 bird species in a compact, accessible forest.",
    locations: ["Abuko Nature Reserve"],
    duration: "Half day",
    inclusions: ["Private transport", "Reserve entrance", "Bottled water"],
    priceFrom: 30,
    currency: "GBP",
    interests: ["Nature & Wildlife", "Bird Watching", "Adventure"],
  },
  {
    id: "banjul-city",
    name: "Banjul City & Albert Market",
    description:
      "Explore the low-rise, unhurried capital — the arch, the port, the colonial streets — then dive into Albert Market for fabrics, spices and local crafts.",
    locations: ["Banjul", "Albert Market", "Arch 22"],
    duration: "Half day",
    inclusions: ["Private transport", "Local guide"],
    priceFrom: 25,
    currency: "GBP",
    interests: ["Art & Culture", "History", "Food & Drink"],
  },
  {
    id: "sunset-pirogue",
    name: "Sunset Pirogue on the River",
    description:
      "A relaxed evening on the river in a traditional wooden pirogue — watching the sun drop behind the mangroves with a cold drink in hand.",
    locations: ["River Gambia", "Oyster Creek"],
    duration: "Half day",
    inclusions: ["Pirogue hire", "Soft drinks", "Sunset snacks"],
    priceFrom: 40,
    currency: "GBP",
    interests: ["Chillax", "Seaside", "Boat Trips", "Party"],
  },
];
