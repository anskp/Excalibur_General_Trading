import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageType } from '../types';
import { 
  INDUSTRY_CARDS, 
  FEATURED_PRODUCTS, 
  BUSINESS_STATS, 
  WHY_PREVIEW_ITEMS, 
  IMAGES 
} from '../data';
import { 
  ChefHat, 
  Settings, 
  Tv, 
  Disc, 
  Truck, 
  Wrench,
  Thermometer,
  ArrowRight, 
  Award, 
  ShieldCheck, 
  CheckCircle,
  Briefcase,
  Cpu
} from 'lucide-react';

interface HomeViewProps {
  onChangePage: (page: PageType) => void;
}

// Icon mapper for industries
const getIcon = (name: string, className = "w-6 h-6") => {
  switch (name) {
    case 'ChefHat': return <ChefHat className={className} />;
    case 'Settings': return <Settings className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Disc': return <Disc className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'Thermometer': return <Thermometer className={className} />;
    default: return <Briefcase className={className} />;
  }
};

export default function HomeView({ onChangePage }: HomeViewProps) {
  
  const handleNavClick = (page: PageType) => {
    onChangePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [expandedMarket, setExpandedMarket] = useState<string | null>(null);

  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#111827] font-sans" id="home-view">
      
      {/* 1. HERO SECTION - Dark Charcoal Full-Width */}
      <section 
        className="relative bg-[#1D2636] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#2F394D]/50" 
        id="hero-section"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="hero-left"
          >
            <div className="inline-flex items-center space-x-2 bg-[#2F394D] border border-gray-600 px-3 py-1 text-xs uppercase tracking-widest text-[#0EA5E9] font-medium self-start">
              <span>Established in Abu Dhabi, UAE</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight" id="hero-heading">
              Your Trusted Partner in <br />
              <span className="text-[#0EA5E9]">Trading & Supply Solutions</span>
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light font-sans max-w-2xl" id="hero-description">
              Excalibur General Trading is a dynamic trading company specializing in the wholesale supply of commercial, industrial, automotive, and household products. We deliver high-quality equipment, reliable products, and professional trading solutions across multiple sectors throughout the UAE and the region.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4" id="hero-buttons">
              <button
                onClick={() => handleNavClick('products')}
                className="px-8 py-4 bg-[#0EA5E9] text-[#1D2636] font-bold uppercase tracking-wider text-sm hover:bg-[#0284C7] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-explore-btn"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleNavClick('contact')}
                className="px-8 py-4 bg-[#2F394D] hover:bg-[#1D2636] border border-gray-500 text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 cursor-pointer"
                id="hero-contact-btn"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Hero Column - Single Stock Industrial Image */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="hero-right"
          >
            {/* Styled border outline frame for industrial professional feel */}
            <div className="absolute inset-0 border border-[#0EA5E9] offset-x-4 offset-y-4 translate-x-3 translate-y-3 z-0"></div>
            <div className="relative z-10 overflow-hidden bg-[#2D3748]">
              <img 
                src={IMAGES.hero} 
                alt="Excalibur Industrial Warehouse Logistics & Machinery Supply" 
                className="w-full h-[400px] object-cover filter grayscale-20 brightness-95"
                referrerPolicy="no-referrer"
                id="hero-banner-image"
              />
              {/* Subtle metallic shadow banner details */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1D2636]/90 via-[#1D2636]/40 to-transparent p-6 flex justify-between items-end">
                <span className="text-[10px] tracking-widest text-[#0EA5E9] font-semibold">LOGISTICS HUB • UAE</span>
                <span className="text-[10px] text-gray-300 font-mono">CODE: REF-M14</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW SECTION - Light Grey */}
      <section className="bg-[#EFEFEF] py-20 px-4 sm:px-6 lg:px-8" id="overview-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Corporate Image */}
          <div className="lg:col-span-5 relative" id="overview-left">
            <div className="relative overflow-hidden group">
              <img 
                src={IMAGES.aboutOverview} 
                alt="Excalibur Corporate Trading Excellence" 
                className="w-full h-[380px] object-cover"
                referrerPolicy="no-referrer"
                id="overview-image"
              />
              <div className="absolute inset-0 border-8 border-white/20"></div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="lg:col-span-7 flex flex-col space-y-6" id="overview-right">
              <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">
                Corporate Introduction
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1D2636]" id="overview-title">
                Delivering Supply Integrity Across the Gulf Region
              </h2>
              <div className="w-20 h-1 bg-[#0EA5E9]" id="overview-line"></div>
            
            <p className="text-[#374151] leading-relaxed text-base font-sans" id="overview-p1">
              Established with a core commitment to streamlining industrial supply lines, Excalibur General Trading LLC has grown with years of expertise. Based in Abu Dhabi, we have built a powerful, integrated network for procurement and delivery. We act as an primary asset-backed general trading gateway, ensuring the critical flow of catering equipment, mechanical components, heavy industrial radial tires, and household infrastructure appliances.
            </p>
            
            <p className="text-[#374151] leading-relaxed text-base font-sans" id="overview-p2">
              Our business operations revolve around a strict customer-first approach, backed by reliable supply chains. We partner directly with premium global manufacturers across North America, Europe, and Asia to secure bulk inventory. This ensures that military logistics hubs, top hotels, mining sites, and transport fleets across the UAE receive high-quality certifications at exceptionally competitive wholesale price points.
            </p>

            <button
              onClick={() => handleNavClick('about')}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#1D2636] hover:text-[#0EA5E9] transition-colors self-start cursor-pointer mt-2"
              id="overview-nav-btn"
            >
              <span>Learn More About Our Team</span>
              <ArrowRight className="w-4 h-4 text-[#0EA5E9]" />
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Sourcing Markets Section */}
      <section className="bg-[#1D2636] text-white py-20 border-b border-[#2F394D]/50" id="trading-markets-section">
        <div className="max-w-7xl mx-auto mb-12 text-center space-y-4 px-4">
          <span className="text-xs uppercase tracking-widest text-[#0EA5E9] font-semibold">Interactive Trade Showcase</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Trading Markets
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Hover over any procurement sector below to reveal our specialized bulk sourcing specifications and product distributions.
          </p>
        </div>

        <div className="w-full border-t border-[#2F394D]/50">
          {[
            {
              id: 'kitchen',
              title: 'Commercial Kitchens',
              image: IMAGES.kitchenSector,
              icon: <ChefHat className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1] text-[#0EA5E9]/20 group-hover:text-[#0EA5E9]/40 transition-all duration-500" />,
              description: 'Complete high-grade catering and industrial kitchen solutions matching UAE Civil Defense and municipal standards. We procure directly from premium European and global producers.',
              products: ['Cooking Ranges', 'Baking Ovens', 'Deep Fryers', 'Industrial Chillers']
            },
            {
              id: 'mechanical',
              title: 'Mechanical Sourcing',
              image: IMAGES.mechanicalSector,
              icon: <Settings className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1] text-[#0EA5E9]/20 group-hover:text-[#0EA5E9]/40 transition-all duration-500" />,
              description: 'Precision mechanical components, industrial high-pressure valves, hydraulic couplings, and engineering tooling arrays built for maximum stress tolerance structures.',
              products: ['Pneumatic Actuators', 'Threaded Valves', 'Hydraulic Gears', 'Pumping Equipment']
            },
            {
              id: 'appliances',
              title: 'Home Appliances',
              image: IMAGES.appliancesSector,
              icon: <Tv className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1] text-[#0EA5E9]/20 group-hover:text-[#0EA5E9]/40 transition-all duration-500" />,
              description: 'Bulk supply of cooling split-systems, washing machinery, refrigeration cabinets, and television monitors for corporate offices, hotels, and development projects.',
              products: ['Multi-Split ACs', 'Smart LED Displays', 'Washing Machines', 'Water Chillers']
            },
            {
              id: 'automotive',
              title: 'Automotive Tyres',
              image: IMAGES.carTyresSector,
              icon: <Disc className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1] text-[#0EA5E9]/20 group-hover:text-[#0EA5E9]/40 transition-all duration-500" />,
              description: 'Premium road-certified radial and tubeless tyres selected for superior heat resistance and heavy stress tolerances in extreme high GCC temperature profiles.',
              products: ['Radial Truck Tyres', 'Passenger Tyres', 'OTR Earthmover Tyres', 'Steel Wheel Assemblies']
            },
            {
              id: 'devices',
              title: 'PCs & Hardware Devices',
              image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=1600&q=80',
              icon: <Cpu className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1] text-[#0EA5E9]/20 group-hover:text-[#0EA5E9]/40 transition-all duration-500" />,
              description: 'Procurement of enterprise PCs, high-definition graphics cards, modern server structures, network equipment, and multifunction commercial printers.',
              products: ['Graphics Cards', 'Enterprise Workstations', 'Multifunction Printers', 'Network Switches']
            }
            ].map((market) => (
            <div
              key={market.id}
              onClick={() => {
                if (expandedMarket === market.id) {
                  handleNavClick('products');
                } else {
                  setExpandedMarket(market.id);
                }
              }}
              className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group border-b border-[#2F394D]/50 ${
                expandedMarket === market.id ? 'h-[380px] md:h-[320px]' : 'h-[90px]'
              } hover:h-[380px] md:hover:h-[320px]`}
            >
              {/* Image background fading in on hover/tap with increased visibility */}
              <img
                src={market.image}
                alt={market.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
                  expandedMarket === market.id ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100`}
                referrerPolicy="no-referrer"
              />

              {/* Tinted overlay backdrop - lightens completely on hover/tap to reveal the image beautifully */}
              <div className={`absolute inset-0 transition-colors duration-300 ${
                expandedMarket === market.id ? 'bg-[#1D2636]/10' : 'bg-[#1D2636]/95'
              } group-hover:bg-[#1D2636]/10`}></div>

              {/* Main row layout */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Title row (visible at 90px height) */}
                <div className="h-[90px] flex items-center justify-between px-6 sm:px-12">
                  <h2 className={`text-2xl sm:text-4xl lg:text-4xl font-extralight tracking-wide select-none transition-colors duration-300 ${
                    expandedMarket === market.id ? 'text-[#0EA5E9]' : 'text-white'
                  } group-hover:text-[#0EA5E9]`}>
                    {market.title}
                  </h2>
                  <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 group-hover:text-[#0EA5E9] transition-colors">
                    <span className="hidden sm:inline">VIEW WHOLESALE CATALOG</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      expandedMarket === market.id ? 'translate-x-2' : ''
                    } group-hover:translate-x-2`} />
                  </div>
                </div>

                {/* Expanded content section */}
                <div className={`transition-opacity duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 sm:px-12 pb-8 overflow-hidden ${
                  expandedMarket === market.id ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100 h-[290px] md:h-[230px]`}>
                  <div className="flex-1 space-y-4">
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans drop-shadow-md">
                      {market.description}
                    </p>
                    
                    {/* Rows dynamic list of products */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {market.products.map((prod, pidx) => (
                        <span 
                          key={pidx} 
                          className="bg-[#2D3748]/70 hover:bg-[#0EA5E9]/20 border border-[#2D3748] hover:border-[#0EA5E9]/55 px-3 py-1.5 text-[10px] md:text-xs text-white uppercase tracking-wider font-mono transition-colors duration-300 backdrop-blur-xs"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Big Icon on the right */}
                  <div className="flex-shrink-0 self-end md:self-center pr-2 md:pr-4">
                    {market.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE SECTION - 5 Elegant, Different Styles of Cards */}
      <section className="bg-[#F4F4F4] py-20 px-4 sm:px-6 lg:px-8" id="industries-section">
        <div className="max-w-7xl mx-auto flex flex-col space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4" id="industries-heading-container">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">
              Commercial Divisions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1D2636]" id="industries-title">
              Core Industries We Serve
            </h2>
            <p className="text-gray-600 text-sm">
              We operate across eight elite operational segments in general trading, utilizing custom-tooled sourcing methodologies for each department.
            </p>
          </div>

          {/* Cards Display with Different Layout Styles to prevent repetitiveness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="industries-cards-container">
            
            {/* Card 1: Restaurant & Kitchen (Split Layout style) */}
            <div 
              className="bg-white border-l-4 border-[#0EA5E9] shadow-sm overflow-hidden grid grid-cols-1 sm:grid-cols-12" 
              id="ind-card-kitchen"
            >
              <div className="sm:col-span-5 h-48 sm:h-full relative">
                <img 
                  src={INDUSTRY_CARDS[0].image} 
                  alt={INDUSTRY_CARDS[0].title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#1D2636] text-[#0EA5E9] p-2.5 rounded-none shadow-sm">
                  {getIcon(INDUSTRY_CARDS[0].iconName)}
                </div>
              </div>
              <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1D2636] mb-2">
                    {INDUSTRY_CARDS[0].title}
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 mt-3 list-none">
                    {INDUSTRY_CARDS[0].items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#0EA5E9]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleNavClick('products')}
                  className="mt-6 inline-flex items-center space-x-1.5 text-xs text-semibold text-[#0EA5E9] hover:text-[#1D2636] transition-colors cursor-pointer self-start"
                >
                  <span>Sourcing catalogs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Mechanical Sourcing (Full overlay Layout style) */}
            <div 
              className="relative bg-[#1D2636] text-white overflow-hidden shadow-sm h-full flex flex-col justify-between min-h-[280px]" 
              id="ind-card-mechanical"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={INDUSTRY_CARDS[1].image} 
                  alt={INDUSTRY_CARDS[1].title} 
                  className="w-full h-full object-cover opacity-25 filter brightness-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D2636] via-[#1D2636]/80 to-transparent"></div>
              </div>
              
              <div className="p-6 relative z-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-[#0EA5E9] text-[#1D2636] p-2">
                      {getIcon(INDUSTRY_CARDS[1].iconName, "w-5 h-5")}
                    </div>
                    <span className="text-[10px] tracking-widest text-[#0EA5E9] uppercase font-bold">Industrial Sourcing</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {INDUSTRY_CARDS[1].title}
                  </h3>
                  <p className="text-gray-400 text-xs max-w-sm mb-3">
                    Sourcing machinery components, pneumatic system tools, and workshop maintenance platforms.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {INDUSTRY_CARDS[1].items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 bg-[#0EA5E9]"></span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => handleNavClick('products')}
                  className="mt-6 inline-flex items-center space-x-1.5 text-xs text-semibold text-[#0EA5E9] hover:text-white transition-colors cursor-pointer self-start"
                >
                  <span>Technical details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Home Appliances (Grid Modular Sourcing layout style) */}
            <div 
              className="bg-[#EFEFEF] border border-gray-300 p-6 flex flex-col justify-between" 
              id="ind-card-appliances"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 bg-[#2F394D] text-[#0EA5E9]">
                      {getIcon(INDUSTRY_CARDS[2].iconName, "w-4 h-4")}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#2F394D] font-bold">Residential & HVAC</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">M14 DEPOT</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1D2636] mb-3">
                  {INDUSTRY_CARDS[2].title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {INDUSTRY_CARDS[2].items.map((item, idx) => (
                    <div key={idx} className="bg-white px-3 py-2 border border-gray-200 text-xs font-medium text-gray-700 flex items-center justify-between shadow-xs">
                      <span>{item}</span>
                      <span className="text-[9px] text-gray-400 font-mono">SUPPLIED</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="mt-6 inline-flex items-center space-x-1.5 text-xs text-semibold text-[#1D2636] hover:text-[#0EA5E9] transition-colors cursor-pointer self-start"
              >
                <span>Bulk inquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />
              </button>
            </div>

            {/* Card 4: Cars Tyres & Accessories (Featured Accent border style) */}
            <div 
              className="bg-white border-2 border-[#1D2636] p-6 relative overflow-hidden flex flex-col justify-between" 
              id="ind-card-cartyres"
            >
              {/* Blue watermark accent line */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0EA5E9]/10 rounded-bl-full flex items-center justify-center pointer-events-none">
                <Disc className="w-8 h-8 text-[#0EA5E9]/40" />
              </div>
              
              <div>
                <span className="text-[10px] tracking-widest text-[#0EA5E9] uppercase font-bold">Department 04</span>
                <h3 className="font-heading text-lg font-bold text-[#1D2636] mt-1 mb-2">
                  {INDUSTRY_CARDS[3].title}
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Approved passenger tyres and performance consumables tested to operate in Abu Dhabi summer heat profiles.
                </p>
                <div className="space-y-2">
                  {INDUSTRY_CARDS[3].items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="mt-6 inline-flex items-center space-x-1.5 text-xs text-semibold text-[#1D2636] hover:text-[#0EA5E9] transition-colors cursor-pointer self-start"
              >
                <span>Tyre Sizing Guides</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />
              </button>
            </div>

          </div>

          {/* Fifth Card - Bottom Center (Minimalist bold text focus layout with full-width split) */}
          <div 
            className="bg-[#2F394D] text-white grid grid-cols-1 md:grid-cols-12 shadow-md"
            id="ind-card-heavytyres"
          >
            <div className="md:col-span-8 p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-[#D4A017] text-xs uppercase tracking-widest font-semibold mb-2">
                  <Truck className="w-4 h-4" />
                  <span>Fleet Radial Logistics Sourcing</span>
                </div>
                <h3 className="font-heading text-xl font-extrabold text-white">
                  {INDUSTRY_CARDS[4].title}
                </h3>
                <p className="text-gray-300 text-sm mt-3 max-w-xl leading-relaxed">
                  Engineered with specialized steel-belt cords to withstand 40-tonne cargos. We support public transport fleets, municipal dump trucks, mining dumpers, and construction machinery across GCC desert terrains.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mt-4">
                  {INDUSTRY_CARDS[4].items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300 bg-[#1D2636]/60 p-2 border border-gray-700/50">
                      <span className="w-1 h-1 bg-[#D4A017] rounded-full"></span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#D4A017] hover:text-white transition-colors cursor-pointer"
              >
                <span>View heavy equipment tyres specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="md:col-span-4 h-48 md:h-full relative overflow-hidden">
              <img 
                src={INDUSTRY_CARDS[4].image} 
                alt={INDUSTRY_CARDS[4].title} 
                className="w-full h-full object-cover filter brightness-90 grayscale-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Row 2: New Categories - Mechanical Tools, Safety, HVAC */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8" id="industries-cards-row-2">

            {/* Card 6: Mechanical Tools */}
            <div
              className="bg-white border border-gray-200 p-6 flex flex-col justify-between shadow-sm"
              id="ind-card-mechanical-tools"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 bg-[#1D2636] text-[#0EA5E9]">
                      {getIcon(INDUSTRY_CARDS[5].iconName, "w-4 h-4")}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#1D2636] font-bold">Tools & Workshop</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">M14 DEPOT</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1D2636] mb-3">
                  {INDUSTRY_CARDS[5].title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {INDUSTRY_CARDS[5].items.map((item, idx) => (
                    <div key={idx} className="bg-[#F4F4F4] px-3 py-2 border border-gray-200 text-xs font-medium text-gray-700 flex items-center justify-between">
                      <span>{item}</span>
                      <span className="text-[9px] text-gray-400 font-mono">IN STOCK</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0EA5E9] hover:text-[#1D2636] transition-colors cursor-pointer self-start"
              >
                <span>View tool catalogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 7: Safety Equipment */}
            <div
              className="bg-white border-2 border-[#0EA5E9]/30 p-6 relative overflow-hidden flex flex-col justify-between"
              id="ind-card-safety"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0EA5E9]/10 rounded-bl-full flex items-center justify-center pointer-events-none">
                <ShieldCheck className="w-8 h-8 text-[#0EA5E9]/40" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-[#0EA5E9] uppercase font-bold">Department 06</span>
                <h3 className="font-heading text-lg font-bold text-[#1D2636] mt-1 mb-2">
                  {INDUSTRY_CARDS[6].title}
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Fully certified PPE, fire safety, and gas detection equipment compliant with UAE civil defense and international safety standards.
                </p>
                <div className="space-y-2">
                  {INDUSTRY_CARDS[6].items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1D2636] hover:text-[#0EA5E9] transition-colors cursor-pointer self-start"
              >
                <span>Safety compliance specs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />
              </button>
            </div>

            {/* Card 8: HVAC Systems */}
            <div
              className="bg-[#EFEFEF] border border-gray-300 p-6 flex flex-col justify-between"
              id="ind-card-hvac"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 bg-[#2F394D] text-[#0EA5E9]">
                      {getIcon(INDUSTRY_CARDS[7].iconName, "w-4 h-4")}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#2F394D] font-bold">Climate Control</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">GCC SPEC</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1D2636] mb-3">
                  {INDUSTRY_CARDS[7].title}
                </h3>
                <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                  High-SEER rated cooling systems and industrial ventilation engineered for extreme ambient temperatures across the UAE.
                </p>
                <div className="space-y-2 mt-2">
                  {INDUSTRY_CARDS[7].items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700 bg-white p-2 border border-gray-200">
                      <span className="w-1.5 h-1.5 bg-[#0EA5E9]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1D2636] hover:text-[#0EA5E9] transition-colors cursor-pointer self-start"
              >
                <span>Cooling load calculator</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION - Dark Container on Light Background */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="featured-products">
        <div className="max-w-7xl mx-auto">
          
          <div className="bg-[#1D2636] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden" id="featured-dark-container">
            
            {/* Design Watermark */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2F394D]/40 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>
            
            <div className="relative z-10 flex flex-col space-y-12">
              
              {/* Heading */}
              <div className="border-b border-gray-700 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#0EA5E9] font-semibold">Featured Sourcing Divisions</span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
                    Wholesale Catalogs
                  </h2>
                </div>
                <p className="text-gray-400 text-sm max-w-sm">
                  We supply only standardized products with active guarantees backed directly by regional branch managers.
                </p>
              </div>

              {/* Grid of Products inside the Dark Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="featured-grid">
                {FEATURED_PRODUCTS.map((prod) => (
                  <div key={prod.id} className="bg-[#1D2636] border border-gray-700 hover:border-[#0EA5E9]/60 transition-colors duration-200 flex flex-col h-full">
                    {/* Image Area */}
                    <div className="h-44 relative bg-gray-800 overflow-hidden">
                      <img 
                        src={prod.image} 
                        alt={prod.category} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#1D2636]/90 px-3 py-1 text-[10px] tracking-widest text-[#0EA5E9] font-semibold uppercase border border-[#0EA5E9]/30">
                        {prod.category}
                      </div>
                    </div>

                    {/* Copy */}
                    <div className="p-5 flex-grow flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-heading text-base font-bold text-white tracking-tight">
                          {prod.tagline}
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed font-sans line-clamp-3">
                          {prod.description}
                        </p>
                      </div>

                      {/* Technical specifications bullets */}
                      <div className="mt-4 pt-4 border-t border-gray-800 space-y-1">
                        {prod.specs.slice(0, 3).map((spec, sidx) => (
                          <div key={sidx} className="flex items-center space-x-1.5 text-[10.5px] text-gray-400">
                            <span className="w-1.5 h-1.5 bg-[#0EA5E9]"></span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <button 
                  onClick={() => handleNavClick('products')}
                  className="px-6 py-3 border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-[#1D2636] uppercase text-xs font-bold tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Request Full Wholesale Catalog
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. BUSINESS STATS SECTION - Large Numbers */}
      <section className="bg-[#1D2636] text-white py-16 px-4" id="stats-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" id="stats-container">
            {BUSINESS_STATS.map((stat, sidx) => (
              <div key={sidx} className="flex flex-col space-y-2 p-4" id={`stat-item-${sidx}`}>
                <span className="font-heading text-5xl sm:text-6xl font-extrabold text-[#0EA5E9] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-gray-300 text-xs uppercase tracking-widest font-mono">
                  {stat.label}
                </span>
                <div className="w-10 h-0.5 bg-gray-700 mx-auto mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US PREVIEW - Horizontal Card Layout */}
      <section className="bg-[#EFEFEF] py-20 px-4 sm:px-6 lg:px-8" id="why-preview">
        <div className="max-w-7xl mx-auto flex flex-col space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Our Credentials</span>
              <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">
                Why Excalibur is Preferred
              </h2>
            </div>
            <button 
              onClick={() => handleNavClick('why')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1D2636] hover:text-[#0EA5E9] transition-all cursor-pointer"
            >
              <span>View All 6 Pillars in Detail</span>
              <ArrowRight className="w-4 h-4 text-[#0EA5E9]" />
            </button>
          </div>

          {/* Horizontal cards layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="why-preview-cards">
            {WHY_PREVIEW_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 shadow-xs border-l-4 border-l-[#2F394D] hover:border-l-[#0EA5E9] transition-all duration-300"
                id={`why-preview-card-${idx}`}
              >
                <div className="flex items-start space-x-4">
                  <span className="font-mono text-xs font-bold text-[#0EA5E9] bg-[#F4F4F4] px-2 py-1 rounded-none border border-gray-200">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#1D2636]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt/CTA container */}
          <div className="bg-[#1D2636] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6" id="home-cta">
            <div className="space-y-2">
              <h3 className="font-heading text-base sm:text-lg font-bold">Ready to streamline your general trading procurement?</h3>
              <p className="text-gray-300 text-xs">Reach our Abu Dhabi Musaffah office directly for immediate price quotes.</p>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3.5 bg-[#0EA5E9] hover:bg-[#0284C7] text-[#1D2636] hover:text-white font-bold uppercase tracking-wider text-xs transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Submit Business Inquiry
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
