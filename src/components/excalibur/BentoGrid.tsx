'use client';

import {
  Globe,
  Droplets,
  Factory,
  Truck,
  Package,
  Building2,
  Navigation,
  Handshake,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const solutions = [
  {
    icon: Globe,
    title: 'Import & Export',
    description:
      'Seamless cross-border trade facilitation with comprehensive customs management and documentation.',
    color: 'crimson',
    span: 'lg:col-span-2 lg:row-span-2',
    size: 'large',
  },
  {
    icon: Droplets,
    title: 'Oil & Gas',
    description: 'Premium petroleum products and energy commodities.',
    color: 'olive',
    span: 'lg:col-span-1',
    size: 'small',
  },
  {
    icon: Factory,
    title: 'Industrial Supply',
    description: 'Heavy machinery and industrial equipment procurement.',
    color: 'gold',
    span: 'lg:col-span-1',
    size: 'small',
  },
  {
    icon: Package,
    title: 'Commodity Trading',
    description: 'Strategic commodity sourcing and market intelligence.',
    color: 'olive',
    span: 'lg:col-span-1',
    size: 'small',
  },
  {
    icon: Truck,
    title: 'Logistics Solutions',
    description: 'End-to-end supply chain management and freight solutions.',
    color: 'crimson',
    span: 'lg:col-span-2',
    size: 'wide',
  },
  {
    icon: Building2,
    title: 'Infrastructure Materials',
    description: 'Construction materials and structural components.',
    color: 'gold',
    span: 'lg:col-span-1',
    size: 'small',
  },
  {
    icon: Navigation,
    title: 'Procurement',
    description: 'Strategic sourcing and vendor management.',
    color: 'olive',
    span: 'lg:col-span-1',
    size: 'small',
  },
  {
    icon: Handshake,
    title: 'Global Partnerships',
    description: 'Building lasting alliances across international markets.',
    color: 'crimson',
    span: 'lg:col-span-2',
    size: 'wide',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; glow: string }> = {
  crimson: {
    bg: 'bg-crimson/8',
    icon: 'bg-crimson/12 text-crimson',
    border: 'border-crimson/10 hover:border-crimson/25',
    glow: 'hover:shadow-crimson/8',
  },
  olive: {
    bg: 'bg-olive/8',
    icon: 'bg-olive/12 text-olive',
    border: 'border-olive/10 hover:border-olive/25',
    glow: 'hover:shadow-olive/8',
  },
  gold: {
    bg: 'bg-gold/8',
    icon: 'bg-gold/12 text-gold-dark',
    border: 'border-gold/10 hover:border-gold/25',
    glow: 'hover:shadow-gold/8',
  },
};

export function BentoGrid() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              Business Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Comprehensive Trade
            <span className="text-gradient-gold"> Ecosystem</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-charcoal/50 max-w-2xl mx-auto">
            From commodity sourcing to global distribution, we deliver end-to-end solutions
            that power international commerce.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {solutions.map((solution) => {
            const colors = colorMap[solution.color];
            const Icon = solution.icon;
            const isLarge = solution.size === 'large';
            const isWide = solution.size === 'wide';

            return (
              <StaggerItem key={solution.title} className={solution.span}>
                <div
                  className={`group relative h-full rounded-3xl ${colors.bg} border ${colors.border} p-6 lg:p-8 transition-all duration-500 ${colors.glow} hover:shadow-lg hover:-translate-y-1 card-shine cursor-pointer overflow-hidden`}
                >
                  {/* Background decorative gradient */}
                  <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    solution.color === 'crimson' ? 'bg-crimson/8' :
                    solution.color === 'olive' ? 'bg-olive/8' : 'bg-gold/8'
                  }`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${colors.icon} mb-5 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-bold text-charcoal mb-2 ${
                        isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'
                      }`}
                    >
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-charcoal/50 leading-relaxed ${
                        isLarge ? 'text-sm lg:text-base max-w-md' : 'text-sm'
                      }`}
                    >
                      {solution.description}
                    </p>

                    {/* Large card extra content */}
                    {isLarge && (
                      <div className="mt-8 flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {['bg-crimson', 'bg-olive', 'bg-gold', 'bg-charcoal'].map((c, i) => (
                            <div
                              key={i}
                              className={`w-8 h-8 rounded-full ${c} border-2 border-ivory flex items-center justify-center`}
                            >
                              <span className="text-[8px] text-white font-bold">
                                {String.fromCharCode(65 + i)}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-charcoal/70">40+ Countries</p>
                          <p className="text-[10px] text-charcoal/40">Active trade routes</p>
                        </div>
                      </div>
                    )}

                    {/* Wide card metrics */}
                    {isWide && (
                      <div className="mt-6 flex items-center gap-6">
                        <div>
                          <p className="text-xl font-bold text-charcoal">
                            {solution.title === 'Logistics Solutions' ? '186' : '320+'}
                          </p>
                          <p className="text-xs text-charcoal/40">
                            {solution.title === 'Logistics Solutions' ? 'Active Routes' : 'Global Partners'}
                          </p>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div>
                          <p className="text-xl font-bold text-charcoal">
                            {solution.title === 'Logistics Solutions' ? '99.7%' : '15+'}
                          </p>
                          <p className="text-xs text-charcoal/40">
                            {solution.title === 'Logistics Solutions' ? 'On-time Delivery' : 'Years of Trust'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      <div className="section-divider mt-24 lg:mt-32" />
    </section>
  );
}
