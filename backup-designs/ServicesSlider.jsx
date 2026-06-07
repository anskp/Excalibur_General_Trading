'use client';
import { Ship, Truck, Plane, Train, Warehouse, FileCheck, ShieldCheck, BarChart3, Container, MapPin, Layers, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

// wide: true  → spans 2 columns, shows full description
// wide: false → spans 1 column, shows truncated description
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
        border: 'border-gold/15',
    },
    olive: {
        icon: 'bg-gold-light/10 text-gold-dark',
        badge: 'bg-gold-light/20 text-gold-dark',
        border: 'border-gold/15',
    },
};

export function ServicesSlider() {
    return (
        <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 dot-pattern opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ─────────────────────────────────────── */}
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

                        {/* Decorative capability counter */}
                        <div className="flex sm:flex-col items-center sm:items-end gap-3">
                            <div className="h-px flex-1 sm:flex-none sm:w-20 bg-gold/20" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/35 whitespace-nowrap">
                                12 Capabilities
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── Bento Grid ─────────────────────────────────────────── */}
                {/*
                    4-column desktop grid, 2-column mobile.
                    Row 1: [Maritime ×2] [Air] [Road]         = 4
                    Row 2: [Train] [Container] [Warehouse ×2] = 4
                    Row 3: [Customs] [Insurance] [Intel] [Route] = 4
                    Row 4: [Supply Chain ×2] [Express ×2]     = 4
                    Total = 12 ✓
                */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr">
                    {services.map((service, index) => {
                        const styles = colorStyles[service.color];
                        const Icon = service.icon;
                        const num = String(index + 1).padStart(2, '0');

                        return (
                            <div
                                key={service.label}
                                className={`group ${service.wide ? 'col-span-2' : 'col-span-1'}`}
                            >
                                <div
                                    className={`
                                        relative h-full rounded-3xl glass-card hover:glass-card-hover
                                        border ${styles.border} hover:border-gold/40
                                        p-5 sm:p-6
                                        transition-all duration-500
                                        hover:-translate-y-1.5
                                        cursor-pointer overflow-hidden
                                    `}
                                >
                                    {/* Ghost index number */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute -bottom-3 -right-1 text-[5rem] font-black leading-none select-none pointer-events-none text-charcoal/[0.035] group-hover:text-charcoal/[0.055] transition-colors duration-500"
                                    >
                                        {num}
                                    </span>

                                    <div className="relative flex flex-col h-full">
                                        {/* Icon + badge */}
                                        <div className="flex items-start justify-between mb-5">
                                            <div
                                                className={`
                                                    w-11 h-11 rounded-2xl flex-shrink-0
                                                    ${styles.icon} flex items-center justify-center
                                                    transition-transform duration-300 group-hover:scale-110
                                                `}
                                            >
                                                <Icon className="w-[18px] h-[18px]" />
                                            </div>
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${styles.badge}`}>
                                                {service.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`
                                                font-semibold text-charcoal group-hover:text-charcoal/80
                                                transition-colors leading-snug
                                                ${service.wide ? 'text-lg sm:text-xl mb-3' : 'text-[15px] mb-2'}
                                            `}
                                        >
                                            {service.label}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className={`
                                                text-charcoal/40 leading-relaxed flex-1
                                                ${service.wide ? 'text-sm' : 'text-xs line-clamp-3'}
                                            `}
                                        >
                                            {service.desc}
                                        </p>

                                        {/* Animated accent line */}
                                        <div className="mt-5 h-px w-8 rounded-full bg-current opacity-10 group-hover:w-16 group-hover:opacity-[0.18] transition-all duration-500" />
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