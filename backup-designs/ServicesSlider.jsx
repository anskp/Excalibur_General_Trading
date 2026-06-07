'use client';
import { Ship, Truck, Plane, Train, Warehouse, FileCheck, ShieldCheck, BarChart3, Container, MapPin, Layers, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const services = [
    {
        icon: Ship, label: 'Maritime Freight', category: 'Shipping', color: 'gold', wide: true,
        desc: 'Global sea freight solutions with end-to-end cargo management and full port-to-port visibility across every major trade lane.',
    },
    {
        icon: Plane, label: 'Air Cargo', category: 'Logistics', color: 'gold', wide: false,
        desc: 'Time-critical air freight connecting major global hubs with guaranteed delivery windows.',
    },
    {
        icon: Truck, label: 'Road Transport', category: 'Distribution', color: 'olive', wide: false,
        desc: 'Flexible road distribution across cross-border and last-mile routes.',
    },
    {
        icon: Train, label: 'Rail Freight', category: 'Logistics', color: 'gold', wide: false,
        desc: 'Cost-efficient rail logistics for bulk and containerized continental cargo.',
    },
    {
        icon: Container, label: 'Container Trading', category: 'Maritime', color: 'gold', wide: false,
        desc: 'Buy, sell, and lease shipping containers through our global network.',
    },
    {
        icon: Warehouse, label: 'Warehousing', category: 'Storage', color: 'olive', wide: true,
        desc: 'Strategic storage facilities with advanced inventory management, fulfillment automation, and real-time stock visibility.',
    },
    {
        icon: FileCheck, label: 'Customs Clearance', category: 'Compliance', color: 'gold', wide: false,
        desc: 'Expert brokerage ensuring seamless cross-border trade compliance.',
    },
    {
        icon: ShieldCheck, label: 'Trade Insurance', category: 'Protection', color: 'gold', wide: false,
        desc: 'Comprehensive cargo and credit insurance for your supply chain.',
    },
    {
        icon: BarChart3, label: 'Market Intelligence', category: 'Analytics', color: 'olive', wide: false,
        desc: 'Real-time trade data and analytics to sharpen competitive positioning.',
    },
    {
        icon: MapPin, label: 'Route Optimization', category: 'Logistics', color: 'gold', wide: false,
        desc: 'AI-powered routing that cuts transit times and reduces shipping costs.',
    },
    {
        icon: Layers, label: 'Supply Chain', category: 'Management', color: 'gold', wide: true,
        desc: 'End-to-end supply chain design, real-time visibility, and performance optimisation for global operations at any scale.',
    },
    {
        icon: Clock, label: 'Express Delivery', category: 'Logistics', color: 'olive', wide: true,
        desc: 'Priority express lanes for time-sensitive cargo with guaranteed same-day and next-day delivery windows.',
    },
];

const colorStyles = {
    gold: {
        icon: 'bg-gold/10 text-gold',
        badge: 'bg-gold/8 text-gold/80',
        border: 'border-gold/20',
        ring: 'border-gold/30',
        glow: 'bg-gold/10',
    },
    olive: {
        icon: 'bg-gold-light/10 text-gold-dark',
        badge: 'bg-gold-light/20 text-gold-dark',
        border: 'border-gold/20',
        ring: 'border-gold-dark/25',
        glow: 'bg-gold-dark/8',
    },
};

export function ServicesSlider() {
    return (
        <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ───────────────────────────────── */}
                <ScrollReveal>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
                                Enterprise
                                <span className="text-gradient-gold"> Services</span>
                            </h2>
                            <p className="mt-4 text-base lg:text-lg text-charcoal/50 max-w-xl">
                                Comprehensive trade and logistics services designed for the modern global enterprise.
                            </p>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end gap-3">
                            <div className="h-px flex-1 sm:flex-none sm:w-20 bg-gold/20" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/35 whitespace-nowrap">
                                12 Capabilities
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── Bento Grid ───────────────────────────────────── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {services.map((service, index) => {
                        const styles = colorStyles[service.color];
                        const Icon = service.icon;
                        const num = String(index + 1).padStart(2, '0');
                        const isWide = service.wide;

                        return (
                            <div
                                key={service.label}
                                className={`group ${isWide ? 'col-span-2' : 'col-span-1'} transition-transform duration-500 hover:-translate-y-1.5`}
                            >
                                {/* ── Gradient border shell ── */}
                                <div
                                    className="relative h-full rounded-[26px] p-[1px] transition-all duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(180,150,60,0.22) 0%, rgba(180,150,60,0.04) 50%, rgba(180,150,60,0.12) 100%)',
                                    }}
                                >
                                    {/* Hover: brighter gradient border */}
                                    <div
                                        className="absolute inset-0 rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(180,150,60,0.55) 0%, rgba(180,150,60,0.08) 50%, rgba(180,150,60,0.35) 100%)',
                                        }}
                                    />

                                    {/* ── Card body ── */}
                                    <div className="relative h-full rounded-[25px] glass-card hover:glass-card-hover overflow-hidden cursor-pointer flex flex-col">

                                        {/* Top shimmer line */}
                                        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent group-hover:via-gold/75 group-hover:left-[5%] group-hover:right-[5%] transition-all duration-700" />

                                        {/* Corner radial glow */}
                                        <div className={`absolute -top-10 -right-10 ${isWide ? 'w-40 h-40' : 'w-32 h-32'} rounded-full ${styles.glow} blur-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none`} />

                                        {/* Outlined ghost number */}
                                        <span
                                            aria-hidden="true"
                                            className={`absolute top-3 right-4 font-black leading-none tracking-tighter select-none pointer-events-none transition-all duration-500 group-hover:opacity-100 ${isWide ? 'text-[6rem] opacity-[0.55]' : 'text-[5rem] opacity-40'}`}
                                            style={{ WebkitTextStroke: '1.5px rgba(160,130,55,0.18)', color: 'transparent' }}
                                        >
                                            {num}
                                        </span>

                                        {/* ── Content area ── */}
                                        <div className={`relative flex flex-col h-full ${isWide ? 'p-6 sm:p-7' : 'p-5 sm:p-6'}`}>

                                            {/* Icon + badge row */}
                                            <div className="flex items-start justify-between mb-5">

                                                {/* Layered icon stack */}
                                                <div className="relative flex-shrink-0">
                                                    {/* Expanding outer ring */}
                                                    <div
                                                        className={`
                                                            absolute rounded-2xl border ${styles.ring}
                                                            opacity-0 group-hover:opacity-100
                                                            scale-75 group-hover:scale-100
                                                            transition-all duration-400
                                                            ${isWide ? '-inset-2.5' : '-inset-2'}
                                                        `}
                                                    />
                                                    {/* Middle soft ring */}
                                                    <div
                                                        className={`
                                                            absolute rounded-xl border ${styles.border}
                                                            opacity-0 group-hover:opacity-60
                                                            scale-90 group-hover:scale-100
                                                            transition-all duration-300 delay-75
                                                            ${isWide ? '-inset-1' : '-inset-0.5'}
                                                        `}
                                                    />
                                                    {/* Icon box */}
                                                    <div
                                                        className={`
                                                            relative flex items-center justify-center
                                                            ${styles.icon}
                                                            transition-transform duration-300 group-hover:scale-105
                                                            ${isWide ? 'w-14 h-14 rounded-2xl' : 'w-11 h-11 rounded-xl'}
                                                        `}
                                                    >
                                                        <Icon className={isWide ? 'w-6 h-6' : 'w-[18px] h-[18px]'} />
                                                    </div>
                                                    {/* Icon inner glow on hover */}
                                                    <div
                                                        className={`
                                                            absolute inset-0 bg-gold/15 blur-md
                                                            opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                                            ${isWide ? 'rounded-2xl' : 'rounded-xl'}
                                                        `}
                                                    />
                                                </div>

                                                {/* Category badge */}
                                                <span className={`mt-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${styles.badge}`}>
                                                    {service.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className={`
                                                    font-semibold text-charcoal leading-snug
                                                    group-hover:text-charcoal/80 transition-colors duration-300
                                                    ${isWide ? 'text-xl mb-3' : 'text-[15px] mb-2'}
                                                `}
                                            >
                                                {service.label}
                                            </h3>

                                            {/* Description */}
                                            <p className={`text-charcoal/40 leading-relaxed flex-1 ${isWide ? 'text-sm' : 'text-xs line-clamp-3'}`}>
                                                {service.desc}
                                            </p>

                                            {/* ── Card footer ── */}
                                            <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(180,150,60,0.1)' }}>
                                                {/* Graduated dots */}
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold/55 group-hover:bg-gold transition-colors duration-200" />
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold/65 transition-colors duration-300" />
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold/12 group-hover:bg-gold/35 transition-colors duration-500" />
                                                </div>
                                                {/* Arrow */}
                                                <div className="flex items-center gap-1 text-charcoal/25 group-hover:text-charcoal/55 transition-all duration-300">
                                                    {isWide && (
                                                        <span className="text-[10px] font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transition-transform">
                                                            Explore
                                                        </span>
                                                    )}
                                                    <svg
                                                        className="w-[14px] h-[14px] group-hover:translate-x-0.5 transition-transform duration-300"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="section-divider mt-24 lg:mt-32" />
        </section>
    );
}