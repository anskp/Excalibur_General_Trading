'use client';

import { ArrowUp, Globe, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  Solutions: [
    { label: 'Kitchen Equipment', href: '/products#kitchen-equipment' },
    { label: 'Mechanical Equipment', href: '/products#mechanical-equipment' },
    { label: 'Home Appliances', href: '/products#home-appliances' },
    { label: 'Car Tyres & Accessories', href: '/products#car-tyres' },
    { label: 'Heavy Vehicle Tyres', href: '/products#heavy-vehicle-tyres' },
  ],
  Services: [
    { label: 'Industrial Cooking Equipment', href: '/products#kitchen-equipment' },
    { label: 'Workshop Equipment', href: '/products#mechanical-equipment' },
    { label: 'Refrigerators & Freezers', href: '/products#home-appliances' },
    { label: 'Automotive Consumables', href: '/products#car-tyres' },
    { label: 'Construction Machinery Tyres', href: '/products#heavy-vehicle-tyres' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Vision & Mission', href: '/about#vision-mission' },
    { label: 'Why Choose Us', href: '/about#why-choose-us' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal text-ivory">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
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
              Excalibur General Trading is a dynamic wholesale supply company supporting commercial,
              industrial, automotive, and household product requirements across multiple sectors.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-sm text-ivory/40">Musaffah, M14, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-sm text-ivory/40">sales@excaliburuae.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-sm text-ivory/40">+971585930053</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-sm text-ivory/40">www.excaliburuae.com</span>
              </div>
            </div>
          </div>

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

      <div className="border-t border-ivory/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">
            Copyright {new Date().getFullYear()} Excalibur General Trading. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-ivory/30 hover:text-ivory/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-ivory/30 hover:text-ivory/50 transition-colors">
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

