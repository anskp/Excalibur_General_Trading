'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
export function HeroSection() {
    return (<section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.png')" }}/>
        <div className="hero-gradient absolute inset-0"/>
        {/* Dot pattern overlay */}
        <div className="dot-pattern absolute inset-0 opacity-40"/>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float"/>
      <div className="absolute bottom-1/3 right-[20%] w-48 h-48 bg-crimson/5 rounded-full blur-3xl animate-float-delayed"/>
      <div className="absolute top-1/3 left-[5%] w-32 h-32 bg-olive/5 rounded-full blur-3xl animate-float-slow"/>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-olive animate-pulse"/>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">
                Established Global Enterprise
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
              <span className="text-charcoal">Global Trade</span>
              <br />
              <span className="text-gradient-gold">Beyond Borders</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-6 text-base sm:text-lg text-charcoal/60 leading-relaxed max-w-xl">
              Excalibur General Trading powers international commerce with premium commodity trading, 
              industrial supply chains, and end-to-end logistics solutions across 40+ countries.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#solutions" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-crimson text-white font-semibold rounded-full shadow-xl shadow-crimson/20 hover:shadow-crimson/30 hover:-translate-y-0.5 transition-all duration-300">
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link href="#global" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 glass-card text-charcoal font-semibold rounded-full hover:bg-ivory transition-all duration-300">
                Global Presence
                <Globe className="w-4 h-4 text-gold"/>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-olive"/>
                <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">ISO Certified</span>
              </div>
              <div className="w-px h-4 bg-border"/>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold"/>
                <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">40+ Countries</span>
              </div>
              <div className="w-px h-4 bg-border"/>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-crimson"/>
                <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">$2B+ Trade Volume</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Enterprise Cards */}
          <div className="hidden lg:block relative">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative">
              {/* Main floating card */}
              <div className="glass-card rounded-3xl p-6 animate-pulse-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white"/>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Trade Analytics</p>
                    <p className="text-xs text-muted-foreground">Real-time global metrics</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-ivory/80 rounded-2xl p-3">
                    <p className="text-xs text-muted-foreground mb-1">Shipment Volume</p>
                    <p className="text-xl font-bold text-charcoal">24.8K</p>
                    <p className="text-xs text-olive font-medium mt-1">+12.5%</p>
                  </div>
                  <div className="bg-ivory/80 rounded-2xl p-3">
                    <p className="text-xs text-muted-foreground mb-1">Active Routes</p>
                    <p className="text-xl font-bold text-charcoal">186</p>
                    <p className="text-xs text-crimson font-medium mt-1">+8 new</p>
                  </div>
                  <div className="bg-ivory/80 rounded-2xl p-3">
                    <p className="text-xs text-muted-foreground mb-1">Partners</p>
                    <p className="text-xl font-bold text-charcoal">320+</p>
                    <p className="text-xs text-gold-dark font-medium mt-1">Global</p>
                  </div>
                  <div className="bg-ivory/80 rounded-2xl p-3">
                    <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                    <p className="text-xl font-bold text-charcoal">$2.4B</p>
                    <p className="text-xs text-olive font-medium mt-1">+18.2%</p>
                  </div>
                </div>
              </div>

              {/* Floating mini card - top right */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 animate-float shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-olive"/>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal">Market Cap</p>
                    <p className="text-sm font-bold text-olive">$2.4B</p>
                  </div>
                </div>
              </div>

              {/* Floating mini card - bottom left */}
              <div className="absolute -bottom-4 -left-8 glass-card rounded-2xl p-4 animate-float-delayed shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-crimson/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-crimson"/>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal">Compliance</p>
                    <p className="text-sm font-bold text-crimson">100%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 line-gold"/>
    </section>);
}
