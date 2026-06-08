'use client';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { Shield, Award, FileCheck, Lock, CheckCircle2, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 9001:2015',
    description: 'Quality Management System',
    detail: 'Internationally recognized QMS standard ensuring consistent service delivery.',
    color: 'gold',
    index: '01',
  },
  {
    icon: Award,
    title: 'ISO 14001:2015',
    description: 'Environmental Management',
    detail: 'Committed to sustainable trade practices and environmental responsibility.',
    color: 'olive',
    index: '02',
  },
  {
    icon: FileCheck,
    title: 'ISO 45001:2018',
    description: 'Occupational Health & Safety',
    detail: 'Ensuring workplace safety across all operations and supply chains.',
    color: 'gold',
    index: '03',
  },
  {
    icon: Lock,
    title: 'ISO 27001',
    description: 'Information Security',
    detail: 'Enterprise-grade data protection for trade documentation and communications.',
    color: 'gold',
    index: '04',
  },
];

const trustIndicators = [
  { icon: CheckCircle2, label: 'Verified Supplier',  detail: 'Trade Assurance Certified'  },
  { icon: BadgeCheck,   label: 'Premium Member',     detail: 'Chamber of Commerce'         },
  { icon: Shield,       label: 'Trade License',      detail: 'Government Authorized'       },
  { icon: Award,        label: 'Best Exporter',      detail: 'Industry Excellence Award'   },
  { icon: FileCheck,    label: 'Customs Bonded',     detail: 'Full Compliance'             },
  { icon: Lock,         label: 'Insured Operations', detail: 'Comprehensive Coverage'      },
];

/* --- Cert row ---------------------------------------------------- */
function CertRow({ cert, delay }) {
  const Icon = cert.icon;
  return (
    <ScrollReveal delay={delay}>
      <div className="group relative flex items-start gap-5 p-5 rounded-2xl
                      border border-gold/10 hover:border-gold/30
                      bg-white/40 hover:bg-white/70
                      transition-all duration-400 hover:shadow-md
                      cursor-pointer card-shine overflow-hidden">
        <span className="absolute top-4 right-5 text-[11px] font-bold
                         tracking-[0.18em] text-charcoal/15 select-none">
          {cert.index}
        </span>
        <div className="shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center
                        justify-center transition-transform duration-300 group-hover:scale-110 mt-0.5">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        <div className="flex-1 min-w-0 pr-8">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="text-sm font-bold text-charcoal tracking-tight">{cert.title}</h3>
            <span className="text-[9px] font-semibold uppercase tracking-widest
                             bg-gold/10 text-gold px-2 py-0.5 rounded-full">
              {cert.description}
            </span>
          </div>
          <p className="text-xs text-charcoal/45 leading-relaxed">{cert.detail}</p>
        </div>
        <div className="absolute bottom-0 left-5 h-px bg-gradient-to-r from-gold/60 to-transparent
                        w-0 group-hover:w-3/4 transition-all duration-500" />
      </div>
    </ScrollReveal>
  );
}

/* --- Trust badge ------------------------------------------------- */
function TrustBadge({ indicator }) {
  const Icon = indicator.icon;
  return (
    <StaggerItem>
      <div className="group relative flex flex-col items-center text-center
                      p-5 rounded-2xl border border-gold/10 hover:border-gold/25
                      bg-white/30 hover:bg-white/60
                      transition-all duration-350 hover:-translate-y-1
                      cursor-pointer overflow-hidden card-shine">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-10
                        rounded-full bg-gold/8 blur-xl opacity-0
                        group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-10 h-10 rounded-xl bg-gold/10 flex items-center
                        justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-4 h-4 text-gold" />
        </div>
        <p className="text-xs font-bold text-charcoal leading-snug">{indicator.label}</p>
        <p className="text-[9.5px] text-charcoal/40 mt-1 leading-tight">{indicator.detail}</p>
      </div>
    </StaggerItem>
  );
}

/* --- Main export ------------------------------------------------- */
export function TrustSection() {
  return (
    <section id="trust" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-20">

          {/* LEFT: sticky editorial column */}
          <div className="lg:w-5/12 xl:w-4/12 mb-14 lg:mb-0">
            <ScrollReveal className="lg:sticky lg:top-28">

              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  <span className="w-6 h-px bg-gold mt-[9px]" />
                  <span className="w-2 h-px bg-gold/40 mt-[9px]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-charcoal/40">
                  Trust & Certifications
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal leading-[1.05] mb-5">
                Certified<br />
                <em className="not-italic text-gradient-gold">Excellence</em>
              </h2>

              <p className="text-sm text-charcoal/50 leading-relaxed max-w-xs mb-10">
                Our commitment to quality, security, and sustainability is backed by
                internationally recognized certifications and compliance standards.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '4',    label: 'ISO Certifications' },
                  { value: '15+',  label: 'Years Certified'    },
                  { value: '100%', label: 'Audit Pass Rate'    },
                  { value: '6',    label: 'Trust Badges'       },
                ].map((s) => (
                  <div key={s.label}
                       className="rounded-2xl border border-gold/12 bg-white/40 px-4 py-3">
                    <p className="text-xl font-bold text-charcoal">{s.value}</p>
                    <p className="text-[10px] text-charcoal/40 uppercase tracking-widest mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: cert rows + badge grid */}
          <div className="lg:w-7/12 xl:w-8/12 flex flex-col gap-10">

            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/35 mb-1">
                International Standards
              </p>
              {certifications.map((cert, i) => (
                <CertRow key={cert.title} cert={cert} delay={i * 0.08} />
              ))}
            </div>

            <ScrollReveal>
              <div className="rounded-3xl border border-gold/10 bg-white/25 p-6 lg:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/35 mb-5">
                  Enterprise Trust Indicators
                </p>
                <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {trustIndicators.map((indicator) => (
                    <TrustBadge key={indicator.label} indicator={indicator} />
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      <div className="section-divider mt-24 lg:mt-32" />
    </section>
  );
}