import React from 'react';
import { motion } from 'motion/react';
import { INDUSTRY_CARDS, IMAGES } from '../data';
import { ChefHat, Settings, Tv, Disc, Truck, ArrowRight, Download, Send, CheckCircle, Cpu } from 'lucide-react';
import { PageType } from '../types';

interface ProductsViewProps {
  onChangePage: (page: PageType) => void;
}

// 5 detailed lists of active products for realistic representation
const PRODUCT_CATALOGUE_DATA = [
  {
    category: "Restaurant & Kitchen Equipment Trading",
    description: "Our high-performance culinary systems and commercial refrigeration options are configured to minimize operating costs while maximizing safety and hygiene parameters in intensive commercial establishments.",
    image: IMAGES.kitchenSector,
    features: [
      "Grade 304 food-safety stainless steel construction across all counters & tables",
      "Gas and electrical safety certifications matching UAE civil defense mandates",
      "Dynamic refrigeration coils tested up to +43°C ambient kitchen temperatures",
      "Custom ventilation hoods with integrated automated fire suppression"
    ],
    gallery: [
      { name: "Heavy Duty Multi-Deck Gas Range", model: "EX-K-R6", price: "Contact for bulk quotes" },
      { name: "Blast Chiller and Freezer System", model: "EX-K-BC10", price: "Certified GCC Standard" },
      { name: "Industrial Dough Kneader & Baker", model: "EX-K-DK40", price: "Warranty Included" }
    ]
  },
  {
    category: "Mechanical Equipment Trading",
    description: "Excalibur supplies precision mechanic tool setups and specialized pneumatic components built to withstand heavy manufacturing duty stresses without failure.",
    image: IMAGES.mechanicalSector,
    features: [
      "Precision computerized CNC stations and modular cutting systems",
      "High-pressure hydraulic pressers configured with automatic emergency stops",
      "Hardened chrome-vanadium tool cabinet setups tailored for heavy vehicle garages",
      "Air filter units and ventilation systems for painting operations"
    ],
    gallery: [
      { name: "Automated CNC Lathe Station", model: "EX-M-CNC", price: "Direct Manufacturer Sourcing" },
      { name: "Industrial Hydraulic Bench Press", model: "EX-M-HYD20", price: "Tested & Approved" },
      { name: "Mechanics Premium Tool Cabinet (120 Pcs)", model: "EX-M-TC120", price: "High Grade Alloys" }
    ]
  },
  {
    category: "Home Appliances Trading",
    description: "Premium wholesale residential and light commercial equipment engineered for exceptional energy utility ratios and thermal resilience against regional outdoor temperatures.",
    image: IMAGES.appliancesSector,
    features: [
      "Inverter compressor washing assemblies with low water footprints",
      "Tropicalized high-performance AC units and mechanical ventilation fans",
      "Anti-frost vertical residential freezers with secure magnetic gasket profiles",
      "Smart micro-processing controls custom-shielded from voltage surges"
    ],
    gallery: [
      { name: "Tropical Smart Air Conditioner Fan Unit", model: "EX-A-AC2", price: "High Star Rating UAE" },
      { name: "Eco Inverter Direct-Drive Washer", model: "EX-A-WM12", price: "Bulk Procurement Only" },
      { name: "No-Frost Food Preservation Cabinet", model: "EX-A-REF300", price: "Middle East Spec" }
    ]
  },
  {
    category: "Cars Tyres & Accessories Trading",
    description: "Secure passenger vehicle tyres with advanced tread designs, validated to operate safely under extreme Abu Dhabi highway thermal conditions.",
    image: IMAGES.carTyresSector,
    features: [
      "Acoustic noise-canceling patterns ensuring quiet operations on asphalt",
      "High silica compounds delivering exceptional wet and dry braking grip",
      "Reinforced tyre shoulder compounds protecting against pavement impacts",
      "Tough outer ply rating engineered to counter persistent high asphalt temperatures"
    ],
    gallery: [
      { name: "High Performance Radial Tyre (18 inch)", model: "EX-T-P18", price: "ESMA Certified" },
      { name: "All-Season Tread Compound Wheel Sets", model: "EX-T-AS17", price: "High Velocity Spec" },
      { name: "Synthetic Heavy Engine Lubricant (5W-40)", model: "EX-L-SYN5", price: "1000L Bulk IBC Drum" }
    ]
  },
  {
    category: "Heavy Vehicles & Equipment Tyres Trading",
    description: "Our heavy-duty off-road and overland truck tyres are formulated with specialized steel cords to bear extensive logistics weights with zero casing deformity.",
    image: IMAGES.heavyTyresSector,
    features: [
      "Multi-ply steel radial casing resisting puncture strains on construction sites",
      "Deep tread layouts formulated for exceptional traction on sand and rubble",
      "Enhanced bead durability prevents tire-slip under immense torque loads",
      "Approved for long-distance highway hauling logs under 40-tonne cargos"
    ],
    gallery: [
      { name: "Premium Steer Axle Truck Tyre", model: "EX-H-ST22", price: "Direct Port Intake" },
      { name: "Heavy Dump Truck Off-Road Radial", model: "EX-H-DT24", price: "Deep Tread Depth" },
      { name: "Construction Loader Tread Tire (20.5-25)", model: "EX-H-LD25", price: "Heavy Duty Casing" }
    ]
  },
  {
    category: "PCs & Hardware Devices Trading",
    description: "Enterprise workstation procurement, high-definition graphical processing units, secure local network switches, and multi-functional high-output paper print stations.",
    image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Enterprise workstation computers configured for intensive multi-threaded simulation",
      "High-output graphic processing processors matching professional CAD render benchmarks",
      "Robust high-speed gigabit network switches with advanced hardware firewalls",
      "Multifunctional high-productivity office printers and document scanners"
    ],
    gallery: [
      { name: "Professional Workstation PC Unit", model: "EX-C-W100", price: "Bulk Corporate Quotes Only" },
      { name: "High-Performance Graphics Card (16GB)", model: "EX-C-GPU16", price: "Direct Batch Supply" },
      { name: "Commercial Multifunction Laser Printer", model: "EX-P-MFP40", price: "Warranty & Install Included" }
    ]
  }
];

export default function ProductsView({ onChangePage }: ProductsViewProps) {
  
  const handleNavClick = (page: PageType) => {
    onChangePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#111827] font-sans" id="products-page">
      
      {/* Page Header (Corporate Banner) */}
      <section className="bg-[#1D2636] text-white py-16 px-4 border-b border-[#2F394D]" id="products-header">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Our Sourcing Catalog</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Products & division Divisions
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light font-sans font-light">
            Explore our six specialized general trading divisions. We manage the full procurement lifecyle—from source factory compliance checks to GCC land customs dispatch.
          </p>
        </div>
      </section>

      {/* Alternating Sections mapped as requested */}
      <section className="py-20 space-y-32" id="alternating-products-list">
        {PRODUCT_CATALOGUE_DATA.map((sect, index) => {
          const isEven = index % 2 === 0; // index 0 (even) is Left, index 1 is Right, etc.
          
          return (
            <div 
              key={index} 
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
              id={`product-section-${index}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* 1. Image Block (Alternating Position) */}
                <div 
                  className={`lg:col-span-5 relative ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                  id={`prod-img-col-${index}`}
                >
                  <div className="absolute inset-0 bg-[#0EA5E9]/15 translate-x-3 translate-y-3 z-0"></div>
                  <div className="relative z-10 overflow-hidden bg-gray-200 border border-gray-300">
                    <img 
                      src={sect.image} 
                      alt={sect.category} 
                      className="w-full h-[360px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#1D2636] text-[#0EA5E9] uppercase text-[10px] tracking-widest font-bold px-3 py-1">
                      Division 0{index + 1}
                    </div>
                  </div>
                </div>

                {/* 2. Content Block (Alternating Position) */}
                <div 
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                  id={`prod-text-col-${index}`}
                >
                  <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">
                    Wholesale Sourcing
                  </span>
                  
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1D2636] tracking-tight">
                    {sect.category}
                  </h2>
                  
                  <div className="w-16 h-1 bg-[#0EA5E9]"></div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {sect.description}
                  </p>

                  {/* Core Features bullets */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-[#1D2636] font-extrabold">
                      Key Structural Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={`prod-feats-${index}`}>
                      {sect.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start space-x-2 text-xs text-gray-700">
                          <CheckCircle className="w-4.5 h-4.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro Product Gallery */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">
                      Popular Bulk Models Available
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id={`prod-gallery-${index}`}>
                      {sect.gallery.map((item, gidx) => (
                        <div key={gidx} className="bg-[#EFEFEF] border border-gray-200 p-3.5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-[#0EA5E9] font-semibold block">{item.model}</span>
                            <span className="text-xs font-bold text-[#1D2636] block mt-1 line-clamp-2">{item.name}</span>
                          </div>
                          <span className="text-[10px] text-gray-500 font-medium block mt-3 uppercase tracking-wider border-t border-gray-300 pt-1.5">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sourcing CTA Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleNavClick('contact')}
                      className="px-5 py-3 bg-[#1D2636] hover:bg-[#2F394D] text-white font-bold uppercase tracking-wider text-xs transition-colors duration-200 cursor-pointer flex items-center space-x-2"
                      id={`prod-cta-btn-${index}`}
                    >
                      <Send className="w-3.5 h-3.5 text-[#0EA5E9]" />
                      <span>Inquire about this division</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Global Sourcing Assurance banner */}
      <section className="bg-[#1D2636] text-white py-14 px-4 border-t border-[#2F394D]" id="products-assurance">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[#0EA5E9] text-xs uppercase tracking-widest font-semibold block">Regulatory Compliance Assurance</span>
          <h2 className="font-heading text-2xl font-bold">Standardized Certifications & Documents</h2>
          <p className="text-gray-400 text-xs sm:text-sm font-sans mx-auto max-w-2xl">
            We deliver absolute transactional defense. All heavy tyres carry official DOT & ESMA markings. Kitchen lines are supplied with complete schematic drawings matching Abu Dhabi Civil Defense standards. Standardized operation records accompany each mechanical delivery.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-6 pt-2 text-[10px] font-mono text-gray-500">
            <span>• ISO 9001:2015 CERTIFIED</span>
            <span>• ESMA REGISTERED</span>
            <span>• ABU DHABI MUNICIPALITY APPROVED</span>
          </div>
        </div>
      </section>

    </div>
  );
}
