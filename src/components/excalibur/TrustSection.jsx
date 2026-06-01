'use client';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { Shield, Award, FileCheck, Lock, CheckCircle2, BadgeCheck } from 'lucide-react';
const certifications = [
    {
        icon: Shield,
        title: 'ISO 9001:2015',
        description: 'Quality Management System',
        detail: 'Internationally recognized QMS standard ensuring consistent service delivery.',
        color: 'crimson',
    },
    {
        icon: Award,
        title: 'ISO 14001:2015',
        description: 'Environmental Management',
        detail: 'Committed to sustainable trade practices and environmental responsibility.',
        color: 'olive',
    },
    {
        icon: FileCheck,
        title: 'ISO 45001:2018',
        description: 'Occupational Health & Safety',
        detail: 'Ensuring workplace safety across all operations and supply chains.',
        color: 'gold',
    },
    {
        icon: Lock,
        title: 'ISO 27001',
        description: 'Information Security',
        detail: 'Enterprise-grade data protection for trade documentation and communications.',
        color: 'crimson',
    },
];
const trustIndicators = [
    { icon: CheckCircle2, label: 'Verified Supplier', detail: 'Trade Assurance Certified' },
    { icon: BadgeCheck, label: 'Premium Member', detail: 'Chamber of Commerce' },
    { icon: Shield, label: 'Trade License', detail: 'Government Authorized' },
    { icon: Award, label: 'Best Exporter', detail: 'Industry Excellence Award' },
    { icon: FileCheck, label: 'Customs Bonded', detail: 'Full Compliance' },
    { icon: Lock, label: 'Insured Operations', detail: 'Comprehensive Coverage' },
];
const colorMap = {
    crimson: {
        icon: 'bg-crimson/10 text-crimson',
        border: 'border-crimson/15',
        badge: 'bg-crimson/8 text-crimson',
    },
    olive: {
        icon: 'bg-olive/10 text-olive',
        border: 'border-olive/15',
        badge: 'bg-olive/8 text-olive',
    },
    gold: {
        icon: 'bg-gold/10 text-gold-dark',
        border: 'border-gold/15',
        badge: 'bg-gold/8 text-gold-dark',
    },
};
export function TrustSection() {
    return (<section id="trust" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-crimson"/>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              Trust & Certifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Certified
            <span className="text-gradient-gold"> Excellence</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-charcoal/50 max-w-2xl mx-auto">
            Our commitment to quality, security, and sustainability is backed by internationally
            recognized certifications and compliance standards.
          </p>
        </ScrollReveal>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {certifications.map((cert, index) => {
            const styles = colorMap[cert.color];
            const Icon = cert.icon;
            return (<ScrollReveal key={cert.title} delay={index * 0.1}>
                <div className={`group h-full rounded-3xl glass-card hover:glass-card-hover border ${styles.border} p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg card-shine`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${styles.icon} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-7 h-7"/>
                  </div>
                  <h3 className="text-base font-bold text-charcoal mb-1">{cert.title}</h3>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${styles.badge} inline-block px-3 py-1 rounded-full mb-3`}>
                    {cert.description}
                  </p>
                  <p className="text-xs text-charcoal/40 leading-relaxed">{cert.detail}</p>
                </div>
              </ScrollReveal>);
        })}
        </div>

        {/* Trust Indicators Grid */}
        <ScrollReveal>
          <div className="glass rounded-3xl p-8 lg:p-10 border border-gold/10">
            <h3 className="text-lg font-bold text-charcoal mb-8 text-center">
              Enterprise Trust Indicators
            </h3>
            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {trustIndicators.map((indicator) => {
            const Icon = indicator.icon;
            return (<StaggerItem key={indicator.label}>
                    <div className="group text-center p-4 rounded-2xl hover:bg-ivory-dark/50 transition-colors duration-300 cursor-pointer">
                      <Icon className="w-6 h-6 text-gold mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"/>
                      <p className="text-sm font-semibold text-charcoal">{indicator.label}</p>
                      <p className="text-[10px] text-charcoal/40 mt-1">{indicator.detail}</p>
                    </div>
                  </StaggerItem>);
        })}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-divider mt-24 lg:mt-32"/>
    </section>);
}
