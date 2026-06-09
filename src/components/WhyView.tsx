import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US_PAGE_ITEMS, TESTIMONIALS } from '../data';
import { 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Truck, 
  HeartHandshake, 
  CheckSquare 
} from 'lucide-react';

const getWhyIcon = (name: string, className = "w-6 h-6") => {
  switch (name) {
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'CheckSquare': return <CheckSquare className={className} />;
    default: return <Briefcase className={className} />;
  }
};

export default function WhyView() {
  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#111827] font-sans" id="why-page">
      
      {/* Page Header (Corporate Banner) */}
      <section className="bg-[#1D2636] text-white py-16 px-4 border-b border-[#2F394D]" id="why-header">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Our Credentials</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Why Choose Us
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Providing clear, transparent, and legally protected trading frameworks that secure stable wholesale acquisitions.
          </p>
        </div>
      </section>

      {/* 6 Core Pillars - Large Alternating Sections as requested */}
      <section className="py-20 space-y-28" id="why-pillars-list">
        {WHY_CHOOSE_US_PAGE_ITEMS.map((item, index) => {
          const isEven = index % 2 === 0; // Alternates left/right position
          return (
            <div 
              key={item.id} 
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
              id={`why-pillar-block-${item.id}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image Block */}
                <div 
                  className={`lg:col-span-5 relative ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                  id={`why-img-panel-${item.id}`}
                >
                  <div className="absolute inset-0 bg-[#0EA5E9]/10 translate-x-3 translate-y-3 z-0"></div>
                  <div className="relative z-10 overflow-hidden border border-gray-300">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-[320px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Text Block */}
                <div 
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                  id={`why-text-panel-${item.id}`}
                >
                  {/* Floating Icon Indicator */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#1D2636] text-[#0EA5E9] rounded-none shadow-xs">
                      {getWhyIcon(item.iconName)}
                    </div>
                    <span className="text-[10px] tracking-widest text-[#0EA5E9] uppercase font-bold">Pillar 0{index + 1}</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1D2636] tracking-tight">
                    {item.title}
                  </h2>
                  <div className="w-14 h-1 bg-[#0EA5E9]"></div>
                  
                  <p className="font-sans font-semibold text-gray-800 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                    {item.supportingText}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Testimonials section with realistic corporate testimonials */}
      <section className="bg-[#EFEFEF] py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200" id="testimonials">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0EA5E9] uppercase">Endorsements</span>
            <h2 className="font-heading text-3xl font-extrabold text-[#1D2636] tracking-tight">
              Client Testimonials
            </h2>
            <p className="text-gray-500 text-xs">
              What prominent general operations directors, project procurement buyers, and fleet logistics managers say about Excalibur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-grid">
            {TESTIMONIALS.map((test, idx) => (
              <div 
                key={idx} 
                className="bg-white border-t-2 border-t-[#0EA5E9] p-8 flex flex-col justify-between shadow-xs relative"
                id={`testimonial-card-${idx}`}
              >
                {/* Decorative Quote watermark */}
                <div className="absolute top-4 right-6 text-7xl font-serif text-gray-100 pointer-events-none select-none">
                  “
                </div>

                <div className="space-y-4 relative z-10">
                  <p className="text-gray-700 italic text-sm leading-relaxed font-sans">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100 mt-6" id={`testifier-info-${idx}`}>
                  <img 
                    src={test.image} 
                    alt={test.name} 
                    className="w-11 h-11 object-cover rounded-full border border-gray-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#1D2636]">
                      {test.name}
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-snug">
                      {test.designation} <br />
                      <span className="text-[#0EA5E9] font-semibold">{test.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
