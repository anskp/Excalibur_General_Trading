'use client';
import { ScrollReveal, CounterAnimation } from './ScrollReveal';
import { BarChart3, CheckCircle2, Clock, Map, MapPin, Ship, TrendingUp, Users } from 'lucide-react';

const primaryStats = [
    {
        icon: MapPin,
        value: 40,
        suffix: '+',
        label: 'Countries Served',
        description: 'Active operations across six continents',
        index: '01',
    },
    {
        icon: Users,
        value: 320,
        suffix: '+',
        label: 'Active Partnerships',
        description: 'Trusted enterprise alliances worldwide',
        index: '02',
    },
    {
        icon: TrendingUp,
        value: 15,
        suffix: '+',
        label: 'Years of Experience',
        description: 'Building the future of global trade',
        index: '03',
    },
];

const secondaryStats = [
    { value: 48,  suffix: 'h',   label: 'Procurement Speed', icon: Clock },
    { value: 2,   suffix: 'B+', prefix: '$', label: 'Trade Volume', icon: BarChart3 },
    { value: 99,  suffix: '.7%', label: 'Delivery Rate', icon: CheckCircle2 },
    { value: 186, suffix: '+',   label: 'Active Routes', icon: Map },
];

export function StatsSection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-white" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Eyebrow ── */}
                <ScrollReveal>
                    <div className="flex items-center gap-3 mb-10 lg:mb-12">
                        <div className="w-8 h-[1.5px] bg-gold" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold font-display">
                            Performance Overview
                        </span>
                    </div>
                </ScrollReveal>

                {/* ── ZONE 1: Hero — giant headline LEFT, featured stat RIGHT ── */}
                <ScrollReveal>
                    <div className="flex items-end justify-between gap-8 mb-8 lg:mb-10">

                        {/* Headline */}
                        <h2 className="font-display text-[clamp(44px,7vw,80px)] font-extrabold leading-[0.9] tracking-[-0.03em] text-charcoal">
                            Numbers<br />
                            that{' '}
                            <span
                                className="[-webkit-text-stroke:2px_theme(colors.gold)] text-transparent"
                            >
                                Speak
                            </span>
                        </h2>

                        {/* Featured stat — Global Shipments anchored top-right */}
                        <div className="shrink-0 text-right pb-1.5">
                            <CounterAnimation
                                value={24800}
                                suffix="+"
                                prefix=""
                                className="font-display text-[clamp(52px,9vw,96px)] font-extrabold leading-[.85] tracking-[-0.04em] text-gold tabular-nums"
                            />
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/40 mt-1.5">
                                Global Shipments
                            </p>
                            <p className="text-[11px] text-charcoal/35 mt-0.5">
                                Delivered on-time, every route
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── ZONE 2: 3-stat split row + dark description cell ── */}
                <ScrollReveal delay={0.08}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_220px] border border-charcoal/10 rounded-[20px] overflow-hidden mb-4">

                        {primaryStats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="group relative p-6 lg:p-7 border-b sm:border-b-0 border-charcoal/10 lg:border-r lg:border-b-0 sm:last-of-type:border-r-0 hover:bg-gold/[0.05] transition-colors duration-300"
                                >
                                    {/* Top bar sweep on hover */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                                    {/* Index + Icon */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-bold tracking-[0.25em] text-charcoal/25 uppercase font-display">
                                            {stat.index}
                                        </span>
                                        <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors duration-300">
                                            <Icon className="w-3.5 h-3.5 text-gold" />
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <CounterAnimation
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        prefix=""
                                        className="font-display text-[clamp(32px,4.5vw,44px)] font-extrabold tracking-[-0.025em] leading-none text-charcoal mb-1.5 tabular-nums [&_.suffix]:text-gold [&_.suffix]:text-[.55em] [&_.suffix]:align-super [&_.suffix]:leading-none"
                                    />

                                    <h3 className="text-[12px] font-semibold text-charcoal mb-1">{stat.label}</h3>
                                    <p className="text-[10.5px] text-charcoal/40 leading-relaxed">{stat.description}</p>
                                </div>
                            );
                        })}

                        {/* Dark description cell */}
                        <div className="bg-charcoal p-6 lg:p-7 flex flex-col justify-between">
                            <p className="text-[12px] leading-[1.65] text-white/45">
                                Our track record reflects decades of trusted partnerships and exceptional trade performance across every major global corridor.
                            </p>
                            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 w-fit">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold">Est. 2009</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── ZONE 3: 4-cell secondary metric strip ── */}
                <ScrollReveal delay={0.16}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 border border-charcoal/10 rounded-[16px] overflow-hidden divide-x divide-y lg:divide-y-0 divide-charcoal/10">
                        {secondaryStats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="group flex items-center gap-3.5 px-5 py-5 hover:bg-gold/[0.05] transition-colors duration-300"
                                >
                                    <div className="shrink-0 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold/20 transition-colors duration-300">
                                        <Icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <CounterAnimation
                                            value={stat.value}
                                            suffix={stat.suffix}
                                            prefix={'prefix' in stat ? stat.prefix || '' : ''}
                                            className="font-display text-[22px] font-extrabold leading-none text-gold tracking-[-0.02em] tabular-nums"
                                        />
                                        <p className="text-[10px] text-charcoal/40 mt-1 font-medium tracking-[0.05em]">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>

            <div className="section-divider mt-24 lg:mt-32" />
        </section>
    );
}