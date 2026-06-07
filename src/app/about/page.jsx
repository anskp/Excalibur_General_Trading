'use client';

import { Navbar } from '@/components/excalibur/Navbar';
import { Footer } from '@/components/excalibur/Footer';
import { ScrollReveal } from '@/components/excalibur/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

const missionPoints = [
  'Deliver high-quality products at competitive prices',
  'Build long-term partnerships with clients and suppliers',
  'Maintain professional standards in every aspect of our business',
  'Support business growth through reliable supply chain solutions',
];

const whyChooseUs = [
  'Wide range of quality products',
  'Strong supplier network',
  'Competitive wholesale pricing',
  'Reliable delivery and logistics support',
  'Professional customer service',
  'Commitment to quality and efficiency',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      <main className="flex-1 pt-28">
        <section className="relative py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                  About Excalibur
                </span>
              </div> */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal">
                Your Trusted Partner in
                <span className="text-gradient-gold"> Trading & Supply Solutions</span>
              </h1>
              <p className="mt-6 text-base lg:text-lg text-charcoal/55 max-w-3xl mx-auto leading-[1.8]">
                Excalibur General Trading is a dynamic trading company specializing in the wholesale supply
                of commercial, industrial, automotive, and household products. We deliver high-quality equipment,
                reliable products, and professional trading solutions across multiple sectors.
              </p>
            </ScrollReveal>

            <div id="vision-mission" className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <ScrollReveal direction="left">
                <div className="glass-card rounded-3xl p-8 lg:p-10 h-full border border-gold/15">
                  <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">Our Vision</h2>
                  <p className="text-charcoal/60 leading-[1.8]">
                    To become a trusted regional leader in trading and distribution by providing reliable products,
                    innovative solutions, and exceptional customer service across diversified industries.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.08}>
                <div className="glass-card rounded-3xl p-8 lg:p-10 h-full border border-gold/15">
                  <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-5">Our Mission</h2>
                  <div className="space-y-3">
                    {missionPoints.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-olive flex-shrink-0" />
                        <p className="text-charcoal/65">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal id="why-choose-us" className="mt-14" delay={0.15}>
              <div className="glass rounded-3xl p-8 lg:p-10 border border-gold/10">
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal text-center mb-8">
                  Why Choose Us
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {whyChooseUs.map((item) => (
                    <div key={item} className="rounded-2xl border border-border bg-ivory/70 p-5">
                      <p className="text-sm font-medium text-charcoal">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

