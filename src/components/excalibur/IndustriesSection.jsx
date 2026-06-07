'use client';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { Building, Zap, Factory, Anchor, Wheat, Cpu, Wrench } from 'lucide-react';

const industries = [
  {
    icon: Building,
    title: 'Construction',
    description: 'Structural steel, cement, raw materials for mega infrastructure projects.',
    metric: '500+',
    metricLabel: 'Projects',
    featured: true,
  },
  {
    icon: Zap,
    title: 'Energy',
    description: 'Oil & gas products, renewable energy equipment, power infrastructure.',
    metric: '$800M',
    metricLabel: 'Volume',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industrial machinery, raw materials, and production line equipment.',
    metric: '120+',
    metricLabel: 'Clients',
  },
  {
    icon: Anchor,
    title: 'Marine',
    description: 'Shipbuilding materials, port equipment, maritime logistics solutions.',
    metric: '24',
    metricLabel: 'Ports',
  },
  {
    icon: Wheat,
    title: 'Agriculture',
    description: 'Fertilizers, farming equipment, food commodity trading worldwide.',
    metric: '30+',
    metricLabel: 'Markets',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Enterprise hardware, networking infrastructure, digital solutions.',
    metric: '60+',
    metricLabel: 'Vendors',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment',
    description: 'Heavy machinery, spare parts, and specialized industrial tools.',
    metric: '1000+',
    metricLabel: 'SKUs',
  },
];

/* ─── Featured card (Construction) ─────────────────────────────── */
function FeaturedCard({ industry }) {
  const Icon = industry.icon;
  return (
    <StaggerItem className="lg:col-span-2 lg:row-span-2">
      <div className="group relative h-full min-h-[320px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 cursor-pointer card-shine">
        {/* Diagonal gold accent stripe */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Corner metric stamp */}
        <div className="absolute top-6 right-6 text-right">
          <p className="text-4xl font-bold text-gold-light leading-none">
            {industry.metric}
          </p>
          <p className="text-xs uppercase tracking-widest text-white/40 mt-1">
            {industry.metricLabel}
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-8">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-6 h-6 text-gold-light" />
          </div>

          <div
            className="w-12 h-px mb-4 transition-all duration-500 group-hover:w-24"
            style={{ background: 'rgba(212,175,55,0.5)' }}
          />

          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
            {industry.title}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            {industry.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-gold-light text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
            <span>Explore sector</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ─── Horizontal "stat bar" card (Energy, Marine) ───────────────── */
function WideCard({ industry }) {
  const Icon = industry.icon;
  return (
    <StaggerItem className="lg:col-span-2">
      <div className="group relative h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 cursor-pointer px-7 py-6 flex items-center gap-6 card-shine">
        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-5 h-5 text-gold-light" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white mb-1 truncate">
            {industry.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
            {industry.description}
          </p>
        </div>

        <div className="shrink-0 text-right pl-4 border-l border-white/10">
          <p className="text-2xl font-bold text-gold-light leading-none">
            {industry.metric}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-white/35 mt-1">
            {industry.metricLabel}
          </p>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ─── Compact square card (Manufacturing, Agriculture, Technology, Industrial) */
function CompactCard({ industry }) {
  const Icon = industry.icon;
  return (
    <StaggerItem>
      <div className="group relative h-full rounded-3xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 cursor-pointer p-6 flex flex-col card-shine">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-4 h-4 text-gold-light" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 pt-1">
            {industry.metricLabel}
          </span>
        </div>

        <p className="text-xl font-bold text-gold-light mb-1">{industry.metric}</p>
        <h3 className="text-sm font-semibold text-white mb-2">{industry.title}</h3>
        <p className="text-xs text-white/45 leading-relaxed mt-auto">
          {industry.description}
        </p>
      </div>
    </StaggerItem>
  );
}

/* ─── Main export ───────────────────────────────────────────────── */
export function IndustriesSection() {
  const [featured, ...rest] = industries;
  const [energy, manufacturing, marine, agriculture, technology, industrial] = rest;

  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header row: label left, copy right ── */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            {/* Vertical rule + label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-8 bg-gold opacity-60" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Powering<br />
              Global{' '}
              <em className="not-italic text-gold-light">Industries</em>
            </h2>
          </div>

          <p className="text-base text-white/55 max-w-sm lg:text-right leading-relaxed lg:pb-1">
            From energy to agriculture, our trade expertise spans every major
            industrial sector—delivering critical materials and equipment where
            they&apos;re needed most.
          </p>
        </ScrollReveal>

        {/* ── Asymmetric grid ─────────────────────────────────────────
            Desktop layout (4 cols, auto rows):
              [Featured 2×2] [Energy   2×1]
              [Featured 2×2] [Marine   2×1]
              [Mfg 1×1] [Agri 1×1] [Tech 1×1] [Indust 1×1]
        ──────────────────────────────────────────────────────────── */}
        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {/* Featured — spans 2 cols × 2 rows on lg */}
          <FeaturedCard industry={featured} />

          {/* Wide cards stacked in right 2 cols */}
          <WideCard industry={energy} />
          <WideCard industry={marine} />

          {/* Bottom row — 4 compact cards */}
          <CompactCard industry={manufacturing} />
          <CompactCard industry={agriculture} />
          <CompactCard industry={technology} />
          <CompactCard industry={industrial} />
        </StaggerContainer>

        {/* ── Footer tally bar ──────────────────────────────────────── */}
        <ScrollReveal className="mt-12 lg:mt-14">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { value: '7', label: 'Industry Sectors' },
              { value: '40+', label: 'Countries Served' },
              { value: '15+', label: 'Years of Expertise' },
              { value: '$2B+', label: 'Trade Volume' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gold-light">{stat.value}</span>
                <span className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="section-divider mt-24 lg:mt-32" />
    </section>
  );
}