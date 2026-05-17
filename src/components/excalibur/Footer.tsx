'use client';

import { Globe, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  Solutions: [
    { label: 'Import & Export', href: '#solutions' },
    { label: 'Commodity Trading', href: '#solutions' },
    { label: 'Oil & Gas', href: '#solutions' },
    { label: 'Industrial Supply', href: '#solutions' },
    { label: 'Procurement', href: '#solutions' },
  ],
  Services: [
    { label: 'Logistics Solutions', href: '#services' },
    { label: 'Customs Clearance', href: '#services' },
    { label: 'Warehousing', href: '#services' },
    { label: 'Trade Insurance', href: '#services' },
    { label: 'Route Optimization', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#trust' },
    { label: 'Global Presence', href: '#global' },
    { label: 'Industries', href: '#industries' },
    { label: 'Certifications', href: '#trust' },
    { label: 'Contact', href: '#contact' },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal text-ivory">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center shadow-lg shadow-crimson/20">
                <span className="text-white font-bold text-lg leading-none">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight text-ivory leading-tight">
                  EXCALIBUR
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/40 font-medium">
                  General Trading
                </span>
              </div>
            </Link>
            <p className="text-sm text-ivory/40 leading-relaxed max-w-sm mb-8">
              A premier international trading company delivering excellence in commodity trading,
              industrial supply, and logistics solutions across global markets.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-sm text-ivory/40">Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-sm text-ivory/40">trade@excalibur-trading.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-sm text-ivory/40">+971 4 XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/60 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/40 hover:text-ivory transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">
            © {new Date().getFullYear()} Excalibur General Trading. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-ivory/30 hover:text-ivory/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-ivory/30 hover:text-ivory/50 transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-ivory/8 hover:bg-gold/20 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-ivory/40" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
