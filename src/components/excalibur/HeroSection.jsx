'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const su = { hidden: { y: '110%' }, show: { y: 0 } };
const fu = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const ease = [0.16, 1, 0.3, 1];

const STATS = [
  { val: '$2B+', lbl: 'Volume' },
  { val: '40+',  lbl: 'Nations' },
  { val: '320+', lbl: 'Partners' },
];

const TRUST = [
  { icon: Shield,      label: 'ISO Certified'    },
  { icon: Globe,       label: '40+ Countries'    },
  { icon: TrendingUp,  label: '$2B+ Trade Volume' },
];

const BOTTOM = [
  { label: 'Shipment Volume', val: '24.8K', delta: '↑ 12.5% this quarter' },
  { label: 'Active Routes',   val: '186',   delta: '+8 new lanes opened'   },
  { label: 'Global Partners', val: '320+',  delta: 'Across 6 continents'  },
  { label: 'Annual Revenue',  val: '$2.4B', delta: '↑ 18.2% YoY growth'   },
];

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-charcoal"
      style={{
        display: 'grid',
        gridTemplateColumns: '52px 1fr 1fr 140px',
        gridTemplateRows: 'auto 1fr auto',
      }}
    >

      {/* ── Background image — right panel, clipped diagonally ── */}
      <div
        className="absolute top-0 right-0 bottom-0"
        style={{
          width: '58%',
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(14,14,14,1) 0%, rgba(14,14,14,0.55) 45%, rgba(14,14,14,0.12) 100%)',
          }}
        />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-pattern absolute inset-0 opacity-25 z-[1] pointer-events-none" />

      {/* Diagonal gold slash structural line */}
      <div
        className="absolute top-0 bottom-0 z-[6]"
        style={{
          left: 'calc(42% - 1px)',
          width: '2px',
          background: '#C9A84C',
          transform: 'skewX(-8deg)',
          transformOrigin: 'top left',
          opacity: 0.55,
        }}
      >
        <div
          className="absolute top-0 bottom-0"
          style={{ left: '6px', width: '1px', background: '#C9A84C', opacity: 0.18 }}
        />
      </div>

      {/* ══════════════════════════════════
          FAR-LEFT: Vertical index column
      ══════════════════════════════════ */}
      <div
        className="z-[5] flex flex-col items-center justify-center gap-7 py-4"
        style={{
          gridColumn: '1', gridRow: '1 / 4',
          borderRight: '1px solid rgba(201,168,76,0.18)',
        }}
      >
        <div className="w-1 h-1 rounded-full bg-gold opacity-60" />
        <span
          className="text-white/22 font-mono"
          style={{
            fontSize: '9px', letterSpacing: '0.1em',
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          }}
        >
          EGT — 2024
        </span>
        <div className="w-1 h-1 rounded-full bg-gold opacity-60" />
        <span
          className="text-white/22 font-mono"
          style={{
            fontSize: '9px', letterSpacing: '0.1em',
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          }}
        >
          GLOBAL TRADE
        </span>
        <div className="w-1 h-1 rounded-full bg-gold opacity-60" />
      </div>

      {/* ══════════════════════════════════
          TOP NAV — columns 2–3
      ══════════════════════════════════ */}
      <motion.nav
        initial="hidden" animate="show"
        variants={fu} transition={{ duration: 0.55, delay: 0.05, ease }}
        className="z-10 flex items-center justify-between px-7 pt-6 pb-5"
        style={{ gridColumn: '2 / 4', gridRow: '1' }}
      >
        <span className="text-gold font-extrabold tracking-[0.22em] uppercase text-[12px]">
          Excalibur · General Trading
        </span>
        <div className="hidden md:flex items-center gap-6">
          {['Solutions', 'Markets', 'Logistics', 'About'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-normal tracking-[0.14em] uppercase text-white/30 hover:text-gold-light transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* ══════════════════════════════════
          TOP-RIGHT corner CTA — column 4
      ══════════════════════════════════ */}
      <div
        className="z-10 flex items-center justify-center"
        style={{
          gridColumn: '4', gridRow: '1',
          borderLeft: '1px solid rgba(201,168,76,0.18)',
        }}
      >
        <Link
          href="#contact"
          className="bg-gold text-charcoal font-extrabold hover:bg-gold-light transition-colors duration-200"
          style={{
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            fontSize: '8px', letterSpacing: '0.2em',
            textTransform: 'uppercase', padding: '18px 12px',
            textDecoration: 'none',
          }}
        >
          Partner With Us
        </Link>
      </div>

      {/* ══════════════════════════════════
          FAR-RIGHT: Vertical stat column
      ══════════════════════════════════ */}
      <div
        className="z-[5] flex flex-col"
        style={{
          gridColumn: '4', gridRow: '2 / 4',
          borderLeft: '1px solid rgba(201,168,76,0.18)',
        }}
      >
        {STATS.map(({ val, lbl }, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center justify-center gap-1 transition-colors duration-300 hover:bg-gold/[0.04] relative"
            style={{ borderBottom: i < 2 ? '1px solid rgba(201,168,76,0.12)' : 'none' }}
          >
            <span
              className="text-white font-extrabold"
              style={{
                fontSize: '18px', writingMode: 'vertical-rl',
                transform: 'rotate(180deg)', letterSpacing: '0.04em', lineHeight: 1,
              }}
            >
              {val}
            </span>
            <span
              className="text-white/30 font-normal"
              style={{
                fontSize: '8px', letterSpacing: '0.18em',
                textTransform: 'uppercase',
                writingMode: 'vertical-rl', transform: 'rotate(180deg)',
              }}
            >
              {lbl}
            </span>
            {i < 2 && (
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gold"
                style={{ height: '14px', opacity: 0.4 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════
          MAIN HEADLINE — column 2, row 2
      ══════════════════════════════════ */}
      <div
        className="z-[5] flex flex-col justify-end px-8 pb-10"
        style={{ gridColumn: '2', gridRow: '2' }}
      >
        {/* Overline */}
        <motion.div
          initial="hidden" animate="show"
          variants={fu} transition={{ duration: 0.55, delay: 0.12, ease }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-gold" />
          <span className="text-gold font-semibold text-[9px] tracking-[0.3em] uppercase">
            Established Global Enterprise
          </span>
        </motion.div>

        {/* Headline — two masked line reveals */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            className="text-white font-extrabold tracking-tight leading-[0.9] block"
            style={{ fontSize: 'clamp(44px,7vw,78px)' }}
            variants={su}
            initial="hidden" animate="show"
            transition={{ duration: 0.8, delay: 0.22, ease }}
          >
            Global Trade
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginTop: '2px' }}>
          <motion.h1
            className="text-gold font-extrabold tracking-tight leading-[0.9] block"
            style={{ fontSize: 'clamp(44px,7vw,78px)' }}
            variants={su}
            initial="hidden" animate="show"
            transition={{ duration: 0.8, delay: 0.34, ease }}
          >
            Beyond Borders
          </motion.h1>
        </div>
      </div>

      {/* ══════════════════════════════════
          RIGHT PANEL — column 3, row 2
          Body copy + trust pills + CTAs
      ══════════════════════════════════ */}
      <div
        className="z-[5] flex flex-col justify-end pb-10 gap-7"
        style={{ gridColumn: '3', gridRow: '2', padding: '0 40px 40px 52px' }}
      >
        <motion.p
          initial="hidden" animate="show"
          variants={fu} transition={{ duration: 0.6, delay: 0.5, ease }}
          className="text-white/55 font-light leading-[1.9] text-[12px] tracking-[0.02em] max-w-xs"
        >
          Excalibur General Trading powers international commerce with premium commodity trading,
          industrial supply chains, and end-to-end logistics solutions across 40+ countries.
        </motion.p>

        {/* Trust pills */}
        <motion.div
          initial="hidden" animate="show"
          variants={fu} transition={{ duration: 0.6, delay: 0.64, ease }}
          className="flex flex-wrap gap-2"
        >
          {TRUST.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                border: '1px solid rgba(201,168,76,0.25)',
                background: 'rgba(201,168,76,0.06)',
              }}
            >
              <Icon className="w-2.5 h-2.5 text-gold-light" />
              <span className="text-white/55 font-medium text-[9px] tracking-[0.15em] uppercase">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial="hidden" animate="show"
          variants={fu} transition={{ duration: 0.6, delay: 0.78, ease }}
          className="flex gap-2.5 flex-wrap"
        >
          <Link
            href="#solutions"
            className="group inline-flex items-center gap-2 bg-gold text-charcoal font-extrabold hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontSize: '10px', letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '13px 22px', borderRadius: '3px',
              textDecoration: 'none',
            }}
          >
            Explore Solutions
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="#global"
            className="group inline-flex items-center gap-2 font-bold hover:text-white transition-all duration-200"
            style={{
              fontSize: '10px', letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '13px 22px', borderRadius: '3px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
            }}
          >
            Global Presence
            <Globe className="w-3 h-3 text-gold" />
          </Link>
        </motion.div>
      </div>

      {/* ══════════════════════════════════
          BOTTOM BAR — columns 2–3, row 3
      ══════════════════════════════════ */}
      <motion.div
        initial="hidden" animate="show"
        variants={fu} transition={{ duration: 0.65, delay: 0.9, ease }}
        className="z-[5]"
        style={{
          gridColumn: '2 / 4', gridRow: '3',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {BOTTOM.map(({ label, val, delta }, i) => (
          <div
            key={i}
            className="group flex flex-col gap-1 py-4 px-6 relative overflow-hidden transition-colors duration-200 hover:bg-gold/[0.04]"
            style={{ borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none' }}
          >
            {/* Underline reveal on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
            <span className="text-white/30 font-medium text-[8px] tracking-[0.18em] uppercase">{label}</span>
            <span className="text-white font-extrabold leading-none" style={{ fontSize: '22px', letterSpacing: '-0.01em' }}>
              {val}
            </span>
            <span className="text-gold-light font-medium text-[9px]">{delta}</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 line-gold z-10" />

    </section>
  );
}




// This is a fundamentally different spatial system — here's what makes it genuinely advanced:
// The CSS Grid is the design. Instead of a standard layout with positioned cards on top, the entire section is a 4-column × 3-row named grid where every element is a real grid cell. Nothing floats. The structure itself is the aesthetic.
// Column anatomy:

// Col 1 (52px) — a narrow vertical index strip with rotated EGT — 2024 and GLOBAL TRADE text running bottom-to-top, separated by a gold hairline border. Like a magazine spine.
// Col 2 — holds only the headline. Nothing else. Maximum negative space.
// Col 3 — holds body copy, trust pills, and CTAs. Split from the headline to create deliberate tension.
// Col 4 (140px) — a vertical stat column running the full height. $2B+, 40+, 320+ in rotated vertical text, divided by gold hairlines. The top cell becomes a Partner With Us CTA button in vertical writing mode.

// The diagonal slash — a 2px gold bar with skewX(-8deg) cuts across the entire section from top to bottom at the 42% horizontal mark, acting as a structural divider between the dark left half and the image-bleed right half. It has a faint parallel shadow line 6px to its right.
// Background image — only occupies the right 58% and is clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%) so it has a hard diagonal left edge, reinforcing the slash motif.
// Bottom bar — 4 metric cells spanning columns 2–3, each with a scaleX(0) → scaleX(1) gold underline that animates on hover from the left edge.