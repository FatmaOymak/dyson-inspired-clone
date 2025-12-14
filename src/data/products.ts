export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  features: string[];
  specs: Record<string, string>;
  colors: { name: string; hex: string; image: string }[];
  images: string[];
  badge?: string;
  inStock: boolean;
}

export const categories = [
  {
    id: "vacuum-cleaners",
    name: "Vacuum cleaners",
    description: "Powerful suction. No loss of suction.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    subcategories: ["Cordless", "Upright", "Cylinder", "Robot"],
  },
  {
    id: "hair-care",
    name: "Hair care",
    description: "Engineered for all hair types.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    subcategories: ["Hair dryers", "Straighteners", "Stylers", "Accessories"],
  },
  {
    id: "air-treatment",
    name: "Air treatment",
    description: "Purified air. Projected across the room.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop",
    subcategories: ["Purifiers", "Humidifiers", "Heaters", "Fans"],
  },
  {
    id: "lighting",
    name: "Lighting",
    description: "Precise, powerful light. Where you need it.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop",
    subcategories: ["Desk lamps", "Floor lamps", "Task lighting"],
  },
];

export const products: Product[] = [
  {
    id: "v15-detect",
    name: "V15 Detect Vacuum",
    category: "vacuum-cleaners",
    subcategory: "Cordless",
    price: 699,
    originalPrice: 749,
    description: "Reveals invisible dust. Proves deep clean with laser and piezo sensor.",
    shortDescription: "Our most powerful, intelligent cordless vacuum",
    features: [
      "Laser reveals microscopic dust",
      "Piezo sensor counts and sizes dust",
      "Root Cyclone technology",
      "Up to 60 minutes run time",
      "LCD screen shows real-time reports",
    ],
    specs: {
      "Run time": "Up to 60 min",
      "Suction power": "230 AW",
      "Bin capacity": "0.76L",
      Weight: "3.1kg",
      "Charge time": "4.5 hours",
    },
    colors: [
      { name: "Nickel/Yellow", hex: "#FFD700", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop" },
      { name: "Blue/Nickel", hex: "#1E3A5F", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=800&fit=crop",
    ],
    badge: "Best seller",
    inStock: true,
  },
  {
    id: "supersonic",
    name: "Supersonic Hair Dryer",
    category: "hair-care",
    subcategory: "Hair dryers",
    price: 329,
    description: "Fast drying, no extreme heat. Engineered for different hair types.",
    shortDescription: "Intelligent heat control for shine",
    features: [
      "Intelligent heat control",
      "Fast drying",
      "Controlled styling",
      "Magnetic attachments",
      "Lightweight and balanced",
    ],
    specs: {
      "Motor speed": "110,000rpm",
      "Cable length": "2.7m",
      Weight: "659g",
      "Heat settings": "4",
      "Speed settings": "3",
    },
    colors: [
      { name: "Iron/Fuchsia", hex: "#FF1493", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop" },
      { name: "Nickel/Copper", hex: "#B87333", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop" },
      { name: "Vinca Blue/Rosé", hex: "#5D5FEF", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop" },
    ],
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=800&fit=crop",
    ],
    badge: "New",
    inStock: true,
  },
  {
    id: "airwrap",
    name: "Airwrap Styler",
    category: "hair-care",
    subcategory: "Stylers",
    price: 479,
    description: "Curl, wave, smooth and dry. No extreme heat.",
    shortDescription: "Multi-styler for multiple hair types",
    features: [
      "Coanda air styling",
      "Multiple attachments",
      "No extreme heat",
      "Intelligent heat control",
      "For all hair types",
    ],
    specs: {
      "Motor speed": "110,000rpm",
      "Cable length": "2.7m",
      Weight: "662g",
      "Heat settings": "3",
      "Airflow settings": "3",
    },
    colors: [
      { name: "Nickel/Copper", hex: "#B87333", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop" },
      { name: "Prussian Blue/Copper", hex: "#003153", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop" },
    ],
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "purifier-hot-cool",
    name: "Purifier Hot+Cool",
    category: "air-treatment",
    subcategory: "Purifiers",
    price: 549,
    description: "Purifies, heats and cools you. Removes 99.95% of allergens.",
    shortDescription: "3-in-1 purifier, heater and fan",
    features: [
      "HEPA H13 filtration",
      "Captures 99.95% of particles",
      "Heating and cooling",
      "Air Multiplier technology",
      "Quiet operation",
    ],
    specs: {
      "Filter life": "12 months",
      "Room coverage": "Up to 81m²",
      "Noise level": "62dB",
      Height: "764mm",
      "Oscillation": "350°",
    },
    colors: [
      { name: "White/Silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=800&fit=crop" },
      { name: "Black/Nickel", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=800&fit=crop" },
    ],
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=800&fit=crop",
    ],
    badge: "Popular",
    inStock: true,
  },
  {
    id: "v12-slim",
    name: "V12 Detect Slim Vacuum",
    category: "vacuum-cleaners",
    subcategory: "Cordless",
    price: 549,
    description: "Engineered slim and light. With laser dust detection.",
    shortDescription: "Slim, light and powerful",
    features: [
      "33% lighter than V15",
      "Laser dust detection",
      "Anti-tangle technology",
      "Up to 60 minutes run time",
      "LCD screen",
    ],
    specs: {
      "Run time": "Up to 60 min",
      "Suction power": "150 AW",
      "Bin capacity": "0.35L",
      Weight: "2.2kg",
      "Charge time": "4.5 hours",
    },
    colors: [
      { name: "Yellow/Nickel", hex: "#FFD700", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "solarcycle-morph",
    name: "Solarcycle Morph Lamp",
    category: "lighting",
    subcategory: "Desk lamps",
    price: 599,
    description: "Intelligent light that transforms. Tracks local daylight.",
    shortDescription: "4-in-1 intelligent light",
    features: [
      "Tracks local daylight",
      "4 lighting modes",
      "60+ year lifespan",
      "Glare protection",
      "Precise positioning",
    ],
    specs: {
      "Color temperature": "2700K - 6500K",
      Brightness: "1000 lux",
      Lifespan: "60+ years",
      Height: "745mm",
      "Cable length": "2.7m",
    },
    colors: [
      { name: "White", hex: "#FFFFFF", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop" },
      { name: "Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop" },
    ],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
    ],
    inStock: true,
  },
];

export const getProductsByCategory = (categoryId: string) => 
  products.filter(p => p.category === categoryId);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);

export const getFeaturedProducts = () => 
  products.filter(p => p.badge);
