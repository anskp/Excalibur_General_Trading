'use client';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

/* ─────────────────────────────────────────────────────────────────
   SOLUTIONS — Editorial Spreads Layout
   No cards. No rounded boxes. No borders.

   Structure:
   ① Hero spread — Import & Export — full-bleed cinematic, text overlay
   ② Alternating editorial rows — image half / text half, flipping sides
      Each row: image fills one side edge-to-edge, text in pure space
   ③ Wide spread — Global Partnerships — full-bleed cinematic close

   Visual language:
   — Oversized ghost index numbers (01–08) as spatial anchors
   — Thin gold hairlines (1px) as the only "structure"
   — Category tag as a small pill in the image zone
   — Title in large bold type in the negative-space zone
   — Hover: image scale + reveal of ArrowUpRight
────────────────────────────────────────────────────────────────── */

const solutions = [
  {
    id: '01',
    title: 'Import & Export',
    category: 'Core Business',
    description: 'Seamless cross-border trade facilitation with comprehensive customs management and documentation.',
    image: '/images/solutions/import-export.png',
    meta: [{ value: '40+', label: 'Countries' }, { value: '186', label: 'Active Routes' }],
    type: 'hero',
  },
  {
    id: '02',
    title: 'Oil & Gas',
    category: 'Solution',
    description: 'Premium petroleum products and energy commodities sourced and delivered with precision.',
    image: '/images/solutions/oil-gas.png',
    type: 'row',
    flip: false,
  },
  {
    id: '03',
    title: 'Industrial Supply',
    category: 'Solution',
    description: 'Heavy machinery and industrial equipment procurement across global supply networks.',
    image: '/images/solutions/industrial-supply.png',
    type: 'row',
    flip: true,
  },
  {
    id: '04',
    title: 'Commodity Trading',
    category: 'Solution',
    description: 'Strategic commodity sourcing and market intelligence for high-volume trade.',
    image: '/images/solutions/commodity-trading.png',
    type: 'row',
    flip: false,
  },
  {
    id: '05',
    title: 'Logistics Solutions',
    category: 'Specialist',
    description: 'End-to-end supply chain management and freight solutions.',
    image: '/images/solutions/logistics.png',
    meta: [{ value: '99.7%', label: 'On-time Delivery' }, { value: '320+', label: 'Partners' }],
    type: 'row',
    flip: true,
  },
  {
    id: '06',
    title: 'Infrastructure Materials',
    category: 'Specialist',
    description: 'Construction materials and structural components for large-scale projects worldwide.',
    image: '/images/solutions/infrastructure.png',
    type: 'row',
    flip: false,
  },
  {
    id: '07',
    title: 'Procurement',
    category: 'Specialist',
    description: 'Strategic sourcing and vendor management that drives cost efficiency and reliability.',
    image: '/images/solutions/procurement.png',
    type: 'row',
    flip: true,
  },
  {
    id: '08',
    title: 'Global Partnerships',
    category: 'Global Network',
    description: 'Building lasting alliances across international markets.',
    image: '/images/solutions/partnerships.png',
    meta: [{ value: '320+', label: 'Global Partners' }, { value: '15+', label: 'Years of Trust' }],
    type: 'wide',
  },
];

/* ── Reusable thin gold rule ── */
function GoldRule({ className = '' }) {
  return <div className={`w-full h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent ${className}`} />;
}

/* ── Hero / Wide full-bleed spread ── */
function FullBleedSpread({ item }) {
  const isHero = item.type === 'hero';
  return (
    <ScrollReveal>
      <div className="relative w-full overflow-hidden group cursor-pointer" style={{ height: isHero ? '72vh' : '55vh', minHeight: isHero ? 520 : 380 }}>
        {/* Full-bleed image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
        {/* Multi-layer overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />

        {/* Ghost index — massive, top-right */}
        <div className="absolute top-0 right-6 text-[12rem] lg:text-[18rem] font-black text-white/[0.04] leading-none select-none tracking-tighter pointer-events-none">
          {item.id}
        </div>

        {/* Top-left category pill */}
        <div className="absolute top-8 left-8 lg:top-10 lg:left-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/12 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/80">
            <span className="w-1 h-1 rounded-full bg-gold" />
            {item.category}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <GoldRule className="mb-6 max-w-[120px]" />
          <div className="flex items-end justify-between gap-8">
            <div>
              <h3 className={`font-black text-white tracking-tight leading-[1.0] ${isHero ? 'text-5xl lg:text-6xl xl:text-7xl' : 'text-4xl lg:text-5xl'}`}>
                {item.title}
              </h3>
              <p className="mt-4 text-base lg:text-lg text-ivory/60 max-w-xl leading-relaxed">
                {item.description}
              </p>
              {item.meta && (
                <div className="mt-6 flex items-center gap-8">
                  {item.meta.map((m, i) => (
                    <div key={i}>
                      <p className="text-2xl font-black text-gold leading-none">{m.value}</p>
                      <p className="text-[11px] text-ivory/45 uppercase tracking-[0.18em] mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Arrow — reveals on hover */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <div className="w-14 h-14 rounded-full border border-gold/40 bg-white/8 backdrop-blur-md flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Alternating editorial row ── */
function EditorialRow({ item, index }) {
  const flip = item.flip;
  return (
    <ScrollReveal delay={0.05}>
      <GoldRule />
      <div className={`grid lg:grid-cols-2 group cursor-pointer`} style={{ minHeight: 360 }}>

        {/* IMAGE HALF */}
        <div className={`relative overflow-hidden ${flip ? 'lg:order-2' : 'lg:order-1'}`} style={{ minHeight: 280 }}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
          {/* Edge fade toward text side */}
          <div className={`absolute inset-0 bg-gradient-to-${flip ? 'l' : 'r'} from-transparent via-transparent to-charcoal/30`} />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

          {/* Category pill — bottom of image */}
          <div className="absolute bottom-6 left-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/12 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/80">
              <span className="w-1 h-1 rounded-full bg-gold" />
              {item.category}
            </span>
          </div>
        </div>

        {/* TEXT HALF — pure negative space */}
        <div className={`relative flex flex-col justify-center px-10 py-12 lg:px-16 lg:py-16 bg-charcoal ${flip ? 'lg:order-1' : 'lg:order-2'}`}>

          {/* Ghost index number */}
          <span className="absolute top-4 right-6 text-[6rem] font-black text-white/[0.045] leading-none select-none tracking-tighter pointer-events-none">
            {item.id}
          </span>

          {/* Short gold hairline */}
          <div className="w-10 h-px bg-gold/50 mb-8" />

          <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white tracking-tight leading-[1.05] mb-5">
            {item.title}
          </h3>

          <p className="text-base text-white/55 leading-relaxed max-w-sm">
            {item.description}
          </p>

          {/* Meta stats if present */}
          {item.meta && (
            <div className="mt-8 flex items-center gap-8">
              {item.meta.map((m, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-gold leading-none">{m.value}</p>
                  <p className="text-[10px] text-white/35 uppercase tracking-[0.18em] mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Hover arrow */}
          <div className="mt-8 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400">
            <div className="inline-flex items-center gap-2.5 text-gold">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Explore</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function BentoGrid() {
  const hero = solutions.find(s => s.type === 'hero');
  const rows = solutions.filter(s => s.type === 'row');
  const wide = solutions.find(s => s.type === 'wide');

  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Comprehensive Trade
              <span className="text-gradient-gold"> Ecosystem</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-white/50 max-w-2xl">
              From commodity sourcing to global distribution, end-to-end solutions that power international commerce.
            </p>
          </div>
          {/* Item count — decorative */}
          <div className="flex-shrink-0 text-right">
            <p className="text-[4rem] font-black text-white/[0.07] leading-none select-none">08</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 -mt-2">Solutions</p>
          </div>
        </ScrollReveal>

        {/* ── Top gold rule ── */}
        <GoldRule className="mb-0" />

      </div>

      {/* ── HERO SPREAD — full bleed, no max-w ── */}
      <FullBleedSpread item={hero} />

      {/* ── EDITORIAL ROWS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {rows.map((item, i) => (
          <EditorialRow key={item.id} item={item} index={i} />
        ))}
        <GoldRule />
      </div>

      {/* ── WIDE CLOSING SPREAD — full bleed ── */}
      <FullBleedSpread item={wide} />

      {/* ── Bottom rule inside max-w ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoldRule className="mt-0" />
      </div>

      <div className="section-divider mt-24 lg:mt-32" />
    </section>
  );
}