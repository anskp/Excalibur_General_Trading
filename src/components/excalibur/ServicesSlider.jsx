'use client';
import { useRef } from 'react';
import { Ship, Truck, Plane, Train, Warehouse, FileCheck, ShieldCheck, BarChart3, Container, MapPin, Layers, Clock, } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
const services = [
    { icon: Ship, label: 'Maritime Freight', category: 'Shipping', color: 'gold' },
    { icon: Plane, label: 'Air Cargo', category: 'Logistics', color: 'gold' },
    { icon: Truck, label: 'Road Transport', category: 'Distribution', color: 'olive' },
    { icon: Train, label: 'Rail Freight', category: 'Logistics', color: 'gold' },
    { icon: Container, label: 'Container Trading', category: 'Maritime', color: 'gold' },
    { icon: Warehouse, label: 'Warehousing', category: 'Storage', color: 'olive' },
    { icon: FileCheck, label: 'Customs Clearance', category: 'Compliance', color: 'gold' },
    { icon: ShieldCheck, label: 'Trade Insurance', category: 'Protection', color: 'gold' },
    { icon: BarChart3, label: 'Market Intelligence', category: 'Analytics', color: 'olive' },
    { icon: MapPin, label: 'Route Optimization', category: 'Logistics', color: 'gold' },
    { icon: Layers, label: 'Supply Chain', category: 'Management', color: 'gold' },
    { icon: Clock, label: 'Express Delivery', category: 'Logistics', color: 'olive' },
];
const colorStyles = {
    gold: {
        icon: 'bg-gold/10 text-gold',
        badge: 'bg-gold/8 text-gold/80',
        border: 'border-gold/15',
    },
    olive: {
        icon: 'bg-gold-light/10 text-gold-dark',
        badge: 'bg-gold-light/20 text-gold-dark',
        border: 'border-gold/15',
    },
};
export function ServicesSlider() {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    return (<section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 dot-pattern opacity-30"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-olive"/>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                Services & Capabilities
              </span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
              Enterprise
              <span className="text-gradient-gold"> Services</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-charcoal/50 max-w-xl">
              Comprehensive trade and logistics services designed for the modern global enterprise.
            </p>
          </ScrollReveal>

          {/* Scroll buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center hover:border-gold/30 transition-colors" aria-label="Scroll left">
              <svg className="w-4 h-4 text-charcoal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center hover:border-gold/30 transition-colors" aria-label="Scroll right">
              <svg className="w-4 h-4 text-charcoal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth-horizontal pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {services.map((service, index) => {
            const styles = colorStyles[service.color];
            const Icon = service.icon;
            return (<div key={service.label} className="group flex-shrink-0 w-[280px] sm:w-[300px]">
                <div className={`h-full rounded-3xl glass-card hover:glass-card-hover border ${styles.border} p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold cursor-pointer`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${styles.icon} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-5 h-5"/>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${styles.badge}`}>
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-charcoal mb-2 group-hover:text-charcoal/80 transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-sm text-charcoal/40 leading-[1.8]">
                    Professional {service.label.toLowerCase()} solutions for global trade operations.
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 w-8 rounded-full bg-current opacity-10 group-hover:w-16 group-hover:opacity-20 transition-all duration-500"/>
                </div>
              </div>);
        })}
        </div>
      </div>

      <div className="section-divider mt-24 lg:mt-32"/>
    </section>);
}
