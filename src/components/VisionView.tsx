import React from 'react';
import { motion } from 'motion/react';
import { CORE_VALUES } from '../data';
import { 
  Compass, 
  Target, 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  Activity, 
  Cpu 
} from 'lucide-react';

// Get appropriate icons for Core Values
const getValueIcon = (name: string) => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#0EA5E9]" />;
    case 'Activity': return <Activity className="w-5 h-5 text-[#0EA5E9]" />;
    case 'Award': return <Award className="w-5 h-5 text-[#0EA5E9]" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-[#0EA5E9]" />;
    case 'Users': return <Users className="w-5 h-5 text-[#0EA5E9]" />;
    default: return <Target className="w-5 h-5 text-[#0EA5E9]" />;
  }
};

export default function VisionView() {
  
  const missionPoints = [
    {
      title: "Deliver high-quality products at competitive prices",
      description: "Harnessing deep bulk procurement cycles and direct manufacturing pipelines to pass substantial financial advantages down to local contractors."
    },
    {
      title: "Build long-term partnerships with clients and suppliers",
      description: "Maintaining absolute structural honesty, consistent credit options, and immediate technical support to secure perpetual reliance."
    },
    {
      title: "Maintain professional standards in every aspect of our business",
      description: "Adhering strictly to UAE maritime trade, municipal health laws, civil engineering standards, and formatted corporate protocols."
    },
    {
      title: "Support business growth through reliable supply chain solutions",
      description: "Leveraging our climate-controlled Musaffah warehouse buffers to insulate clients completely from unstable global logistics trends."
    }
  ];

  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#111827] font-sans" id="vision-page">
      
      {/* Page Header (Corporate Banner) */}
      <section className="bg-[#1D2636] text-white py-16 px-4 border-b border-[#2F394D]" id="vision-header">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Our Paradigm</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Vision & Strategy
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Guiding our daily transactions in Abu Dhabi with absolute strategic clarity and professional excellence.
          </p>
        </div>
      </section>

      {/* 1. VISION SECTION - Large Centered Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="vision-statement">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-t-4 border-t-[#0EA5E9] shadow-sm p-8 sm:p-12 relative overflow-hidden text-center" id="vision-card">
            
            {/* Watermark Compass behind text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none">
              <Compass className="w-80 h-80 text-[#1D2636]" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-[#EFEFEF]">
                <Compass className="w-8 h-8 text-[#1D2636]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9] block">The Excalibur Vision</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1D2636] leading-snug">
                "To become a trusted regional leader in trading and distribution by providing reliable products, innovative solutions, and exceptional customer service across diversified industries."
              </h2>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mt-6"></div>
              <p className="text-gray-500 text-xs font-sans max-w-xl mx-auto">
                Our vision guides our long-term capital investments, port clearance coordination, and strategic hiring practices throughout the GCC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION SECTION - Four Premium Cards */}
      <section className="bg-[#EFEFEF] py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200" id="mission-statement">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Operational Blueprint</span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">Our Core Mission</h2>
            <p className="text-gray-600 text-xs text-sans">
              Translating corporate strategy into structural daily outcomes through four clear commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="mission-grid">
            {missionPoints.map((pt, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 p-8 flex flex-col justify-between"
                id={`mission-card-${idx}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs font-bold text-[#0EA5E9] bg-[#F4F4F4] px-2.5 py-1.5 border border-gray-200">
                      MISSION 0{idx + 1}
                    </span>
                    <span className="h-px bg-gray-200 flex-grow"></span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#1D2636] leading-tight">
                    {pt.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES SECTION - Minimalist layout with icons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="values-statement">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Ethical Values</span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">Our Core Values</h2>
            <p className="text-gray-500 text-xs">
              Every invoice, supplier audit, and team meeting rests upon a solid bed of professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="values-grid">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-[#F4F4F4] border border-gray-200 p-6 flex flex-col items-center text-center space-y-4"
                id={`value-card-${idx}`}
              >
                <div className="p-3 bg-white border border-gray-200 rounded-none shadow-xs">
                  {getValueIcon(val.iconName)}
                </div>
                
                <h3 className="font-heading text-base font-bold text-[#1D2636]">
                  {val.title}
                </h3>
                
                <p className="text-gray-600 text-xs leading-relaxed font-sans mt-1">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
