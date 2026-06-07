'use client';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, MapPin, Phone, Mail, Globe } from 'lucide-react';
export function GlobalPresenceSection() {
    return (<section id="global" className="relative py-24 lg:py-32 overflow-hidden bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-olive"/>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Global Presence
            </span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Trading Across
            <span className="text-gold-light"> Continents</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/65 max-w-2xl mx-auto">
            Our extensive network spans six continents with strategic hubs in major trade corridors.
          </p>
        </ScrollReveal>

        {/* Map + Stats Layout */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map Image - takes 3 columns */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden group shadow-[0_0_70px_rgba(200,146,10,0.24)]">
              <div className="w-full aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: "url('/images/global-map.png')" }}/>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"/>
              
              {/* Map stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-dark rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-gold">6</p>
                    <p className="text-[10px] text-ivory/60 uppercase tracking-wider">Continents</p>
                  </div>
                  <div className="glass-dark rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-gold">186</p>
                    <p className="text-[10px] text-ivory/60 uppercase tracking-wider">Trade Routes</p>
                  </div>
                  <div className="glass-dark rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-gold">24</p>
                    <p className="text-[10px] text-ivory/60 uppercase tracking-wider">Port Hubs</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Regional Cards - takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
            { region: 'Middle East', countries: 'UAE, Saudi Arabia, Qatar, Oman', status: 'Active', color: 'gold' },
            { region: 'Asia Pacific', countries: 'China, India, Japan, Singapore', status: 'Active', color: 'olive' },
            { region: 'Europe', countries: 'UK, Germany, Netherlands, Turkey', status: 'Active', color: 'gold' },
            { region: 'Africa', countries: 'Nigeria, South Africa, Kenya, Egypt', status: 'Expanding', color: 'olive' },
            { region: 'Americas', countries: 'USA, Brazil, Mexico, Canada', status: 'Active', color: 'gold' },
        ].map((item, index) => (<ScrollReveal key={item.region} delay={index * 0.08} direction="right">
                <div className="group bg-white/8 hover:bg-white/12 rounded-2xl p-4 border border-white/10 hover:border-gold/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color === 'gold' ? 'bg-gold' :
                item.color === 'olive' ? 'bg-olive' : 'bg-gold'}`}/>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.region}</p>
                        <p className="text-xs text-white/50">{item.countries}</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${item.status === 'Active'
                ? 'bg-olive/10 text-olive'
                : 'bg-gold/10 text-gold-dark'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-24 lg:mt-32"/>
    </section>);
}
export function CTASection() {
    return (<section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-charcoal">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/images/cta-bg.png')" }}/>
        <div className="absolute inset-0 bg-charcoal/90"/>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-gold/5 rounded-full blur-3xl"/>
      <div className="absolute bottom-1/4 right-[10%] w-48 h-48 bg-gold/5 rounded-full blur-3xl"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-gold"/>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Start Trading
              </span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Build the Future of
              <span className="text-gold"> Global Trade</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-white/65 max-w-2xl mx-auto">
              Partner with Excalibur General Trading and unlock access to premium global markets,
              strategic partnerships, and end-to-end trade solutions.
            </p>
          </ScrollReveal>

          {/* Contact Glass Card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gold/15 shadow-xl shadow-gold/10 animate-pulse-glow">
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Left: Contact Info */}
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-6">
                    Let&apos;s Start a Conversation
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-gold"/>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal">Headquarters</p>
                        <p className="text-sm text-charcoal/50">Musaffah, M14, Abu Dhabi, UAE</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-olive"/>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal">Phone</p>
                        <p className="text-sm text-charcoal/50">+971585930053</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-gold-dark"/>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal">Email</p>
                        <p className="text-sm text-charcoal/50">sales@excaliburuae.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-gold"/>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal">Website</p>
                        <p className="text-sm text-charcoal/50">www.excaliburuae.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Contact Form */}
                <div>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                          Full Name
                        </label>
                        <input type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all"/>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                          Company
                        </label>
                        <input type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all"/>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                        Email
                      </label>
                      <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all"/>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                        Interest Area
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal/70 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all appearance-none">
                        <option>Select a category</option>
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
                      <textarea rows={3} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] border border-border text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all resize-none"/>
                    </div>
                    <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white font-semibold rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:bg-gold-dark transition-all duration-300 hover:-translate-y-0.5">
                      Send Inquiry
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);
}
