import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE_EVENTS, IMAGES } from '../data';
import { Award, ShieldCheck, Factory, Compass, CheckCircle } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#111827] font-sans" id="about-page">
      
      {/* Page Header (Corporate Banner) */}
      <section className="bg-[#1D2636] text-white py-16 px-4 border-b border-[#2F394D]" id="about-header">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">
            Corporate Profile
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About Excalibur General Trading
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
            A premium supplier of key automotive, industrial, domestic, and commercial products across UAE municipalities.
          </p>
        </div>
      </section>

      {/* 1. Who We Are (Expanded Introduction) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about-who-we-are">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">
              Our Identity
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">
              Sourcing with Professional Dignity
            </h2>
            <div className="w-16 h-1 bg-[#0EA5E9]"></div>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              Excalibur General Trading LLC is an Abu-Dhabi licensed corporation established to meet the logistical strains of heavy vehicles, professional hotels, and engineering divisions. Our core assets are our direct alliances with top-tier international producers. By removing intermediary brokers, we secure stable inventory lines that protect our clients from supply disruptions.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Operating out of Musaffah (M14) industrial zone, our storage warehouses are climate-monitored to ensure all inventory—ranging from specialized vulcanized heavy tires to delicate HVAC components—remains in sterile, pristine manufacturer specifications prior to port transport or direct-to-site dispatching.
            </p>
            
            {/* Highlights badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-semibold">
              <div className="flex items-center space-x-2 text-[#1D2636]">
                <ShieldCheck className="w-5 h-5 text-[#0EA5E9]" />
                <span>100% Certified Goods</span>
              </div>
              <div className="flex items-center space-x-2 text-[#1D2636]">
                <Award className="w-5 h-5 text-[#0EA5E9]" />
                <span>Licensed UAE Supplier</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-[#0EA5E9]/10 translate-x-3 translate-y-3"></div>
            <img 
              src={IMAGES.aboutOverview} 
              alt="Abu Dhabi logistics and commercial corporate image" 
              className="w-full h-[360px] object-cover relative z-10 border border-[#2F394D]/20 shadow-sm"
              referrerPolicy="no-referrer"
              id="about-hq-image"
            />
          </div>

        </div>
      </section>

      {/* 2. Trading Excellence (Image + Content section) */}
      <section className="bg-[#EFEFEF] py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200" id="about-excellence">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <img 
              src={IMAGES.aboutExcellence} 
              alt="Excalibur Industrial Excellence meeting" 
              className="w-full h-[380px] object-cover border border-gray-300"
              referrerPolicy="no-referrer"
              id="about-excellence-image"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">
              Operations Baseline
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">
              Rigorous Quality Frameworks
            </h2>
            <div className="w-16 h-1 bg-[#0EA5E9]"></div>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              We adhere entirely to ESMA standards and global quality verification procedures. Our trading excellence is rooted in rigorous evaluation. When we supply radial truck tires or restaurant cooking solutions, we confirm their structural tolerance against GCC-specific factors—primarily extreme surface temperatures and heavy humidity.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-white border-l-4 border-[#1D2636] flex items-start space-x-3">
                <span className="font-mono text-xs font-bold text-[#0EA5E9]">01</span>
                <div>
                  <h4 className="text-sm font-bold text-[#1D2636]">Source Integrity Checks</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Validating the original metallurgical purity and engineering drawings with factories before shipping.</p>
                </div>
              </div>
              
              <div className="p-4 bg-white border-l-4 border-[#1D2636] flex items-start space-x-3">
                <span className="font-mono text-xs font-bold text-[#0EA5E9]">02</span>
                <div>
                  <h4 className="text-sm font-bold text-[#1D2636]">Local Standard Inspection</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Certifying that every supplied appliance or equipment matches UAE municipal and electrical safety mandates.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Expertise (Timeline Style Section) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about-timeline">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">
              Corporate Chronology
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">
              Our Journey of Sourcing Excellence
            </h2>
            <p className="text-gray-600 text-xs font-sans">
              A historical timeline highlighting key milestones that defined and transformed Excalibur General Trading LLC's regional capacity.
            </p>
          </div>

          <div className="relative border-l border-gray-300 md:border-l-0 md:grid md:grid-cols-5 md:gap-4 md:border-t md:pt-8" id="timeline-container">
            {TIMELINE_EVENTS.map((evt, idx) => (
              <div key={idx} className="relative pl-6 md:pl-0 pb-10 md:pb-0" id={`timeline-evt-${idx}`}>
                {/* Node indicator */}
                <div className="absolute top-0 left-0 -translate-x-1.5 md:relative md:translate-x-0 md:mb-4">
                  <div className="w-3 h-3 bg-[#0EA5E9] border-2 border-white rounded-full"></div>
                </div>
                
                {/* Card copy */}
                <div className="space-y-1 md:pr-4">
                  <span className="font-heading text-xl font-extrabold text-[#0EA5E9] block">
                    {evt.year}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-[#1D2636]">
                    {evt.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-sans mt-1">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Supply Chain Solutions (Dark Container Section) */}
      <section className="bg-[#1D2636] text-white py-16 px-4 sm:px-6 lg:px-8" id="about-supply-chain">
        <div className="max-w-5xl mx-auto bg-[#2F394D] border border-gray-700/60 p-8 sm:p-12 relative overflow-hidden" id="supply-chain-panel">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1D2636] opacity-35 rounded-full blur-2xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="supply-chain-inner">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0EA5E9] font-semibold">Consolidated Logistics</span>
              <h3 className="font-heading text-2xl font-bold tracking-tight">
                Responsive Supply Corridor Integration
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed">
                By maintaining persistent warehouse supplies in Abu Dhabi Musaffah M14, we insulate regional purchasers from delays. We coordinate secure global sea shipping from top manufacturers, customs clearance, land transport, and last-mile depot support inside a unified framework.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 font-mono pt-2">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span>
                  <span>Port clearance acceleration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span>
                  <span>Regional custom dispatch</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-center items-center py-6 border-t md:border-t-0 md:border-l border-gray-700 pl-0 md:pl-8">
              <span className="text-[#0EA5E9] font-semibold tracking-wider text-[10px] uppercase block mb-1">M14 Logistics Hub</span>
              <span className="text-3xl font-extrabold text-white font-mono">10,000+</span>
              <span className="text-xs text-gray-400 mt-1 uppercase text-center tracking-widest">Sq. Ft Storage Capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Markets (Geographic Illustration of UAE and GCC region) */}
      <section className="bg-[#EFEFEF] py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200" id="about-markets">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Our Reach</span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">
              GCC Sourcing Distribution Network
            </h2>
            <div className="w-16 h-1 bg-[#0EA5E9]"></div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Excalibur General Trading operates as an active supplier across the entire GCC, with primary strategic distribution corridors spanning Abu Dhabi, Dubai, Al Ain, Sharjah, Muscat (Oman), and parts of the Kingdom of Saudi Arabia.
            </p>
            
            <div className="space-y-3 pt-2 text-xs text-gray-700">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 bg-[#1D2636] border border-[#0EA5E9]"></span>
                <span className="font-semibold text-[#1D2636]">Abu Dhabi HQ & Musaffah Depots:</span>
                <span>The central operational staging point for standard municipal logistics.</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 bg-[#2F394D] border border-[#0EA5E9]"></span>
                <span className="font-semibold text-[#1D2636]">GCC Transit Nodes:</span>
                <span>Facilitating frictionless overland custom shipping into Qatar, Saudi Arabia, and Oman.</span>
              </div>
            </div>
          </div>
          {/* Interactive GCC Hub Visual Representation using elegant industrial vector styling */}
          <div className="lg:col-span-5 bg-[#1D2636] p-6 text-white border border-gray-800 shadow-md relative overflow-hidden" id="markets-visual">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${IMAGES.logisticsMap})` }}></div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-xs uppercase font-mono tracking-widest text-[#0EA5E9]">Regional Distribution Map</span>
                <span className="bg-emerald-950 text-emerald-400 border border-emerald-900 px-2 py-0.5 text-[9px] font-mono leading-none rounded-sm">ACTIVE</span>
              </div>
              
              {/* Abstract Map layout representing UAE GCC node connections */}
              <div className="h-64 border border-gray-700 bg-[#161D29] p-4 relative flex flex-col justify-between" id="visualmap-canvas">
                {/* Visual nodes */}
                <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
                  <span className="text-[9px] text-gray-400 font-mono mt-1">Riyadh</span>
                </div>
                <div className="absolute top-1/2 left-2/3 flex flex-col items-center z-10">
                  <div className="w-3.5 h-3.5 bg-[#0EA5E9] border-2 border-white rounded-full"></div>
                  <span className="text-[10px] text-white font-bold font-sans mt-1">Abu Dhabi (HQ)</span>
                </div>
                <div className="absolute top-1/3 left-3/4 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                  <span className="text-[9px] text-gray-400 font-mono mt-1">Muscat</span>
                </div>
                <div className="absolute top-[40%] left-[62%] flex flex-col items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-[9px] text-gray-400 font-mono mt-1">Qatar</span>
                </div>
 
                {/* Simulated connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" opacity="0.4">
                  <line x1="33%" y1="25%" x2="66%" y2="50%" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3" />
                  <line x1="75%" y1="33%" x2="66%" y2="50%" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3" />
                  <line x1="62%" y1="40%" x2="66%" y2="50%" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3" />
                </svg>

                <div className="mt-auto flex justify-between items-center text-[9px] text-gray-500 font-mono pt-4 border-t border-gray-800/80">
                  <span>LAT: 24.4539° N • LON: 54.3773° E</span>
                  <span>GCC FREQUENCY: 11C</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
