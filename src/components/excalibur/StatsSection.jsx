'use client';
import { ScrollReveal, CounterAnimation } from './ScrollReveal';
import { BarChart3, CheckCircle2, Clock, Map, MapPin, Ship, TrendingUp, Users } from 'lucide-react';

const stats = [
    {
        icon: MapPin,
        value: 40,
        suffix: '+',
        label: 'Countries Served',
        description: 'Active operations across six continents',
        color: 'gold',
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
        color: 'gold',
    },
];

const secondaryStats = [
    { value: 48, suffix: 'h', label: 'Procurement Speed', icon: Clock },
    { value: 2, suffix: 'B+', prefix: '$', label: 'Trade Volume', icon: BarChart3 },
    { value: 99, suffix: '.7%', label: 'Delivery Rate', icon: CheckCircle2 },
    { value: 186, suffix: '+', label: 'Active Routes', icon: Map },
];

const colorConfig = {
    gold: { icon: 'bg-gold/10 text-gold', glow: 'shadow-gold/8' },
    olive: { icon: 'bg-gold-light/10 text-gold-dark', glow: 'shadow-gold/8' },
};

export function StatsSection() {
    return (<section className="relative py-24 lg:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-white"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold"/>
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
            return (<ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className={`group glass-card rounded-3xl p-6 lg:p-8 text-center border border-transparent hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${config.glow}`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${config.icon} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6"/>
                  </div>
                  <div className="mb-2">
                    <CounterAnimation value={stat.value} suffix={stat.suffix} prefix={''} className="text-3xl lg:text-4xl font-extrabold text-gold font-display"/>
                  </div>
                  <h3 className="text-sm font-semibold text-charcoal mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-charcoal/40">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>);
        })}
        </div>

        {/* Secondary Stats - horizontal bar */}
        <ScrollReveal delay={0.3}>
          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-[#E5E5E5]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {secondaryStats.map((stat) => {
                const Icon = stat.icon;
                return (<div key={stat.label} className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-4 w-4" />
                  </div>
                  <CounterAnimation value={stat.value} suffix={stat.suffix} prefix={'prefix' in stat ? stat.prefix || '' : ''} className="text-2xl font-extrabold text-gold font-display"/>
                  <p className="text-xs text-charcoal/40 mt-1 font-medium">{stat.label}</p>
                </div>);
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-divider mt-24 lg:mt-32"/>
    </section>);
}