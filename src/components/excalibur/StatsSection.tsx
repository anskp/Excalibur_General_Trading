'use client';

import { ScrollReveal, CounterAnimation } from './ScrollReveal';
import { MapPin, Ship, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: MapPin,
    value: 40,
    suffix: '+',
    label: 'Countries Served',
    description: 'Active operations across six continents',
    color: 'crimson',
  },
  {
    icon: Users,
    value: 320,
    suffix: '+',
    label: 'Active Partnerships',
    description: 'Trusted enterprise alliances worldwide',
    color: 'gold',
  },
  {
    icon: Ship,
    value: 24800,
    suffix: '+',
    label: 'Global Shipments',
    description: 'Delivered on-time across all routes',
    color: 'olive',
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Building the future of global trade',
    color: 'crimson',
  },
];

const secondaryStats = [
  { value: 48, suffix: 'h', label: 'Procurement Speed', icon: '⚡' },
  { value: 2, suffix: 'B+', prefix: '$', label: 'Trade Volume', icon: '📊' },
  { value: 99, suffix: '.7%', label: 'Delivery Rate', icon: '✓' },
  { value: 186, suffix: '+', label: 'Active Routes', icon: '🗺' },
];

const colorConfig: Record<string, { icon: string; glow: string }> = {
  crimson: { icon: 'bg-crimson/10 text-crimson', glow: 'shadow-crimson/8' },
  gold: { icon: 'bg-gold/10 text-gold-dark', glow: 'shadow-gold/8' },
  olive: { icon: 'bg-olive/10 text-olive', glow: 'shadow-olive/8' },
};

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory-dark/30 to-ivory" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              Company Strength
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Numbers That
            <span className="text-gradient-gold"> Speak</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-charcoal/50 max-w-2xl mx-auto">
            Our track record reflects decades of trusted partnerships and exceptional trade performance.
          </p>
        </ScrollReveal>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, index) => {
            const config = colorConfig[stat.color];
            const Icon = stat.icon;

            return (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div
                  className={`group glass-card rounded-3xl p-6 lg:p-8 text-center border border-transparent hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${config.glow}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${config.icon} mb-5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="mb-2">
                    <CounterAnimation
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={''}
                      className="text-3xl lg:text-4xl font-bold text-charcoal font-display"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-charcoal mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-charcoal/40">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Secondary Stats - horizontal bar */}
        <ScrollReveal delay={0.3}>
          <div className="glass rounded-3xl p-6 lg:p-8 border border-gold/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {secondaryStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-xl mb-2 block">{stat.icon}</span>
                  <CounterAnimation
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={'prefix' in stat ? (stat as { prefix?: string }).prefix || '' : ''}
                    className="text-2xl font-bold text-charcoal font-display"
                  />
                  <p className="text-xs text-charcoal/40 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-divider mt-24 lg:mt-32" />
    </section>
  );
}
