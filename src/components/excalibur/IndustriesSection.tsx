'use client';

import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import {
  Building,
  Zap,
  Factory,
  Anchor,
  Wheat,
  Cpu,
  Wrench,
} from 'lucide-react';

const industries = [
  {
    icon: Building,
    title: 'Construction',
    description: 'Structural steel, cement, raw materials for mega infrastructure projects.',
    color: 'crimson',
    metric: '500+ Projects',
  },
  {
    icon: Zap,
    title: 'Energy',
    description: 'Oil & gas products, renewable energy equipment, power infrastructure.',
    color: 'gold',
    metric: '$800M Volume',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industrial machinery, raw materials, and production line equipment.',
    color: 'olive',
    metric: '120+ Clients',
  },
  {
    icon: Anchor,
    title: 'Marine',
    description: 'Shipbuilding materials, port equipment, maritime logistics solutions.',
    color: 'crimson',
    metric: '24 Ports',
  },
  {
    icon: Wheat,
    title: 'Agriculture',
    description: 'Fertilizers, farming equipment, food commodity trading worldwide.',
    color: 'olive',
    metric: '30+ Markets',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Enterprise hardware, networking infrastructure, digital solutions.',
    color: 'gold',
    metric: '60+ Vendors',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment',
    description: 'Heavy machinery, spare parts, and specialized industrial tools.',
    color: 'crimson',
    metric: '1000+ SKUs',
  },
];

const colorMap: Record<string, { icon: string; badge: string; border: string; accent: string }> = {
  crimson: {
    icon: 'bg-crimson/10 text-crimson',
    badge: 'bg-crimson/8 text-crimson/80',
    border: 'border-crimson/10 hover:border-crimson/20',
    accent: 'bg-crimson',
  },
  olive: {
    icon: 'bg-olive/10 text-olive',
    badge: 'bg-olive/8 text-olive/80',
    border: 'border-olive/10 hover:border-olive/20',
    accent: 'bg-olive',
  },
  gold: {
    icon: 'bg-gold/10 text-gold-dark',
    badge: 'bg-gold/8 text-gold-dark/80',
    border: 'border-gold/10 hover:border-gold/20',
    accent: 'bg-gold',
  },
};

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Powering Global
            <span className="text-gradient-gold"> Industries</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-charcoal/50 max-w-2xl mx-auto">
            From energy to agriculture, our trade expertise spans every major industrial sector,
            delivering critical materials and equipment where they&apos;re needed most.
          </p>
        </ScrollReveal>

        {/* Industries Bento Grid */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
        >
          {industries.map((industry) => {
            const styles = colorMap[industry.color];
            const Icon = industry.icon;

            return (
              <StaggerItem key={industry.title}>
                <div
                  className={`group relative h-full rounded-3xl glass-card hover:glass-card-hover border ${styles.border} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg card-shine cursor-pointer overflow-hidden`}
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-px rounded-full ${styles.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon + Metric */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${styles.icon} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${styles.badge}`}>
                        {industry.metric}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-charcoal/45 leading-relaxed">
                      {industry.description}
                    </p>
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
