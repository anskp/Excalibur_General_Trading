'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];
export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (<>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }} className="fixed top-0 left-0 right-0 z-50 h-20 bg-charcoal py-6 shadow-sm transition-all duration-500">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-black/20 group-hover:shadow-gold/20 transition-shadow">
              <span className="text-charcoal font-bold text-lg leading-none">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-white leading-tight">
                EXCALIBUR
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium">
                General Trading
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (<Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-semibold tracking-[0.5px] text-white/85 hover:text-gold-light transition-colors duration-300 rounded-full hover:bg-white/5">
                {link.label}
              </Link>))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white text-sm font-medium rounded-full hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5">
              Get Started
              <ChevronRight className="w-3.5 h-3.5"/>
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl text-white/85 hover:text-gold-light hover:bg-white/5 transition-colors" aria-label="Toggle menu">
              {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-ivory/95 backdrop-blur-xl pt-24 px-6">
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {navLinks.map((link, i) => (<motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between px-5 py-4 text-lg font-semibold tracking-[0.5px] text-charcoal hover:text-gold hover:bg-gold/5 rounded-2xl transition-all duration-300">
                    {link.label}
                    <ChevronRight className="w-4 h-4 text-muted-foreground"/>
                  </Link>
                </motion.div>))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-4">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full px-5 py-4 bg-gold text-white font-medium rounded-2xl shadow-lg shadow-gold/20">
                  Get Started
                  <ChevronRight className="w-4 h-4"/>
                </Link>
              </motion.div>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </>);
}
