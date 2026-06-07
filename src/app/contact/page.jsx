'use client';

import { Navbar } from '@/components/excalibur/Navbar';
import { Footer } from '@/components/excalibur/Footer';
import { ScrollReveal } from '@/components/excalibur/ScrollReveal';
import { ArrowRight, Globe, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      <main className="flex-1 pt-28">
        <section className="relative py-24 lg:py-28 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Contact
                </span>
              </div> */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Connect with
                <span className="text-gold"> Excalibur Trading</span>
              </h1>
              <p className="mt-6 text-base lg:text-lg text-white/65 max-w-3xl mx-auto leading-[1.8]">
                Reach our team for wholesale product inquiries, pricing discussions, and long-term supply partnerships.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gold/15 shadow-xl shadow-gold/10">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h2>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-charcoal">Address</p>
                          <p className="text-sm text-charcoal/50">Musaffah, M14, Abu Dhabi, UAE</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4 text-olive" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-charcoal">Phone</p>
                          <a href="tel:+971585930053" className="text-sm text-charcoal/50 hover:text-gold transition-colors">
                            +971585930053
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 text-gold-dark" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-charcoal">Email</p>
                          <a href="mailto:sales@excaliburuae.com" className="text-sm text-charcoal/50 hover:text-gold transition-colors">
                            sales@excaliburuae.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-charcoal">Website</p>
                          <a href="https://www.excaliburuae.com" className="text-sm text-charcoal/50 hover:text-gold transition-colors">
                            www.excaliburuae.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-6">Send an Inquiry</h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                            Full Name
                          </label>
                          <input type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all" />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                            Company
                          </label>
                          <input type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                          Email
                        </label>
                        <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                          Interest Area
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal/70 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all appearance-none">
                          <option>Restaurant & Kitchen Equipment Trading</option>
                          <option>Mechanical Equipment Trading</option>
                          <option>Home Appliances Trading</option>
                          <option>Cars Tyres & Accessories Trading</option>
                          <option>Heavy Vehicles & Equipment Tyres Trading</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                          Message
                        </label>
                        <textarea rows={4} placeholder="Tell us your product requirements..." className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all resize-none" />
                      </div>
                      <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white font-semibold rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:bg-gold-dark transition-all duration-300 hover:-translate-y-0.5">
                        Send Inquiry
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
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
