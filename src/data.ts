import { 
  IndustryCard, 
  FeaturedProduct, 
  BusinessStat, 
  WhyPreviewItem, 
  WhyChooseUsPageItem, 
  Testimonial, 
  CoreValue, 
  TimelineEvent 
} from './types';

// Curated professional premium stock Unsplash images
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80", // Modern warehouse distribution
  aboutOverview: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80", // Abu Dhabi skyline/commercial build or logistics
  aboutExcellence: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80", // Elite conference room meeting
  kitchenSector: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80", // Stainless steel commercial kitchen
  mechanicalSector: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80", // Industrial mechanical workshop
  appliancesSector: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80", // Premium laundry washing/appliances
  carTyresSector: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80", // Premium automotive wheel / tyre details
  heavyTyresSector: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80", // High-end container crane / heavy tyre / industrial truck
  logisticsMap: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80", // Deep navy blue cargo container ship routing / map vibe
  uaeBusiness: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80", // Abu Dhabi business tower
};

export const INDUSTRY_CARDS: IndustryCard[] = [
  {
    id: "kitchen-trading",
    title: "Restaurant & Kitchen Equipment Trading",
    items: [
      "Industrial cooking equipment",
      "Refrigeration systems",
      "Food preparation machinery",
      "Stainless steel kitchen solutions",
      "Bakery and catering equipment",
      "Kitchen outfit and accessories"
    ],
    iconName: "ChefHat",
    image: IMAGES.kitchenSector,
    layoutStyle: "split" // Image left/right split card layout
  },
  {
    id: "mechanical-trading",
    title: "Mechanical Equipment Trading",
    items: [
      "Industrial machinery",
      "Mechanical tools and components",
      "Workshop equipment",
      "Maintenance systems"
    ],
    iconName: "Settings",
    image: IMAGES.mechanicalSector,
    layoutStyle: "full" // Bold full card preview with dark overlay overlay
  },
  {
    id: "appliances-trading",
    title: "Home Appliances Trading",
    items: [
      "Refrigerators and freezers",
      "Washing machines",
      "Air-conditioning accessories",
      "Electrical appliances",
      "Home utility equipment"
    ],
    iconName: "Tv",
    image: IMAGES.appliancesSector,
    layoutStyle: "grid" // Modular item-grid structure
  },
  {
    id: "car-tyres-trading",
    title: "Cars Tyres & Accessories Trading",
    items: [
      "Passenger vehicle tyres",
      "Automotive accessories",
      "Vehicle consumables",
      "Maintenance accessories"
    ],
    iconName: "Disc", // Wheel / disk representation
    image: IMAGES.carTyresSector,
    layoutStyle: "featured" // Accent-highlighted layout border
  },
  {
    id: "heavy-tyres-trading",
    title: "Heavy Vehicles & Equipment Tyres Trading",
    items: [
      "Truck tyres",
      "Bus tyres",
      "Construction equipment tyres",
      "Industrial machinery tyres",
      "Off-road tyres"
    ],
    iconName: "Truck",
    image: IMAGES.heavyTyresSector,
    layoutStyle: "minimal" // Sleek, modern text-focus layout with dynamic slide-reveal
  }
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: "feat-kitchen",
    category: "Kitchen Equipment",
    tagline: "High-Performance Culinary Solutions",
    description: "Equipping world-class restaurants, hotels, and bakery ventures. Our industrial-grade kitchen systems are fully customized and built from heavy-gauge stainless steel for ultimate hygiene, compliance, and thermal performance.",
    image: "https://images.unsplash.com/photo-1590674899484-d564fa7e2311?auto=format&fit=crop&w=800&q=80",
    specs: ["Heavy-Duty Gas Ranges", "Multi-Deck Baking Ovens", "Blast Chillers & Freezers", "Smart Food Prep Machinery"]
  },
  {
    id: "feat-machinery",
    category: "Industrial Machinery",
    tagline: "Precision Manufacturing & Tooling",
    description: "Empowering production plants with high-tolerance mechanical machinery and workshop tools. Engineered to withstand continuous service stress under high-volume operations with intelligent thermal shutdown protocols.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    specs: ["High-Tolerance CNC Stations", "Pneumatic Cutting Systems", "Hydraulic Slicers & Pressers", "Modular Workshop Maintenance Tools"]
  },
  {
    id: "feat-appliances",
    category: "Home Appliances",
    tagline: "Eco-Conscious Comfort Solutions",
    description: "Premium wholesale residential systems featuring superior thermal utility ratings, climate durability customized for Middle Eastern extreme conditions, and whisper-quiet operation cycles.",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80",
    specs: ["Heavy-Duty Washing Machines", "Advanced HVAC & AC Accessories", "No-Frost Commercial Freezers", "Smart Energy Utility Electronics"]
  },
  {
    id: "feat-automotive",
    category: "Automotive Products",
    tagline: "Elite High-Speed Control",
    description: "Wholesale delivery of high-specification passenger tyres and vehicle components. Evaluated and approved to withstand direct UAE summer thermal temperatures while keeping structural elasticity.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    specs: ["Premium Grade Passenger Tyres", "Synthetic Engine Lubricants", "High-Performance Air Filters", "Braking & Brake Dust Shield Systems"]
  },
  {
    id: "feat-heavy",
    category: "Heavy Equipment Tyres",
    tagline: "Engineered for Extreme Loads",
    description: "Indestructible multi-ply steel reinforced tyres tailored specifically for heavy haulage logistics, fleet transit, massive dumper trucks, and desert-ready excavation equipment.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    specs: ["Logistics & Cargo Truck Fleet Tyres", "Heavy Bus Steel Radial Tyres", "Robust Earthmover Tread Tyres", "Industrial Crane Multi-Directional Tyres"]
  }
];

export const BUSINESS_STATS: BusinessStat[] = [
  { value: "25+", label: "Product Categories" },
  { value: "500+", label: "Products Supplied" },
  { value: "100+", label: "Business Clients" },
  { value: "24/7", label: "Customer Support" }
];

export const WHY_PREVIEW_ITEMS: WhyPreviewItem[] = [
  { title: "Wide Range of Quality Products", description: "Complete wholesale access to five distinct sectors, streamlining client procurement cycles." },
  { title: "Strong Supplier Network", description: "Direct direct-manufacturer partnerships across Europe, Asia, and North America." },
  { title: "Competitive Wholesale Pricing", description: "Passing down bulk-order margins directly to our valued industrial and commercial buyers." },
  { title: "Reliable Logistics Support", description: "Streamlined shipping and Abu Dhabi storage facilities ensuring perfect timeline compliance." },
  { title: "Professional Customer Service", description: "Dedicated accounts managers who understand technical equipment specs comprehensively." },
  { title: "Commitment to Quality and Efficiency", description: "Rigorous quality check benchmarks prior to local distribution across all UAE municipalities." }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { year: "2022", title: "Establishment in Abu Dhabi", description: "Founded to bridge the high gap in high-grade industrial catering and workshop components trading." },
  { year: "2023", title: "Automotive Sector Expansion", description: "Launched our premium Tyre & Automotive accessories distribution network to service regional logistics fleets." },
  { year: "2024", title: "Integrated Logistics Logistics Hub", description: "Inaugurated our smart warehousing and supply chain facilities in Musaffah (M14) designed for scale." },
  { year: "2025", title: "Multinational GCC Partnerships", description: "Signed strategic exclusive supply contracts with top-tier industrial manufacturers across the GCC region." },
  { year: "2026", title: "Digital Supply Modernization", description: "Upgraded our wholesale distribution structures to utilize smart tracking and 24/7 client portal responses." }
];

export const CORE_VALUES: CoreValue[] = [
  { title: "Integrity", description: "Conducting transactions with absolute honesty, transparent terms, and complete supply authenticity.", iconName: "ShieldCheck" },
  { title: "Reliability", description: "Standing firmly by our shipping agreements and equipment durability profiles under all conditions.", iconName: "Activity" },
  { title: "Quality", description: "Securing only products certified by elite GCC standards and high-reliability international testings.", iconName: "Award" },
  { title: "Innovation", description: "Evolving our business mechanisms and product catalogs to address progressive industry needs, like smart HVAC.", iconName: "Cpu" },
  { title: "Customer Focus", description: "Customizing supply volumes, financing terms, and logistical drops precisely to client operation needs.", iconName: "Users" }
];

export const WHY_CHOOSE_US_PAGE_ITEMS: WhyChooseUsPageItem[] = [
  {
    id: "choice-portfolio",
    title: "Wide Product Portfolio",
    description: "Single-source procurement simplifying supply structures for vast corporate, government, and commercial entities.",
    supportingText: "From heavy earthmover truck tyres to multi-deck backing ovens, we remove the multi-vendor burden by delivering a fully managed catalog containing the absolute best equipment options in each segment. This translates to less transaction risk and lowered overheads.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "choice-supplier",
    title: "Trusted Supplier Network",
    description: "Vested and direct affiliations with verified global producers ensuring immediate warranty validity.",
    supportingText: "Our products pass directly from global factories to our Abu Dhabi port intake. We eliminate unstable middle-men brokers, ensuring you receive true specifications, robust technical documents, and reliable manufacturer backing.",
    iconName: "Globe",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "choice-pricing",
    title: "Competitive Pricing",
    description: "Highly optimized economic frameworks passing substantial scale discounts down to local companies.",
    supportingText: "Through bulk container procurement and efficient Abu Dhabi port clearance, we offer unmatched pricing structures on bulk commercial kitchen setups, heavy-duty fleet tyres, and industrial workshop tools.",
    iconName: "TrendingUp",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "choice-logistics",
    title: "Fast Logistics & Storage",
    description: "Musaffah-centered warehousing ensures zero warehousing strain for local fleet terminals.",
    supportingText: "Equipped with specialized trucks and storage depots, our team executes quick turnaround drops all throughout Abu Dhabi, Dubai, Al Ain, and northern emirates, reducing client downtime to zero.",
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "choice-customer",
    title: "Customer Commitment",
    description: "Assigning dedicated accounts engineers for precise mechanical and physical part specification.",
    supportingText: "We talk your technical language. Whether discussing thermal AC coefficients, tire ply ratings, or cooking automation schedules, our professional UAE consultants are ready to assist you on-site under high professional decorum.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "choice-quality",
    title: "Quality Assurance Benchmarks",
    description: "Every shipment undergoes standard 12-point checks against rigorous regional requirements.",
    supportingText: "We certify compliance with ESMA, Abu Dhabi Municipality specifications, and professional corporate parameters. No item is cleared from our storage unless it matches pristine quality standards.",
    iconName: "CheckSquare",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "Excalibur General Trading completely refitted our commercial kitchen within Musaffah and Dubai. Their timing was precise, and the heavy-duty kitchen stoves perform with incredible thermal recovery.",
    name: "Hassan Al-Mansoori",
    designation: "Executive Director of Operations",
    company: "Gulf Hospitality Group"
  },
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    quote: "We procure truck and crane tyres from Excalibur for our logistics terminal. Having bulk availability based directly in Abu Dhabi has cut down our average fleet vehicle off-road time from 7 days to under 4 hours.",
    name: "Tariq Mahmood",
    designation: "General Fleet Manager",
    company: "Capital Infrastructure & Transport LLC"
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    quote: "Professionalism is evident in every document. Their quotes are highly formatted, and the technical specification compliance notes left zero doubts during our government tender audits.",
    name: "Sarah Lindqvist",
    designation: "Lead Technical Buyer",
    company: "Emirates Engineering & Industrial Systems"
  }
];
