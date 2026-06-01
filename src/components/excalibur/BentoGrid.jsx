'use client';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
const solutions = [
    {
        title: 'Import & Export',
        description: 'Seamless cross-border trade facilitation with comprehensive customs management and documentation.',
        image: '/images/solutions/import-export.png',
        span: 'lg:col-span-2 lg:row-span-2',
        size: 'large',
        overlay: 'from-charcoal/80 via-charcoal/50 to-transparent',
        textPosition: 'bottom',
    },
    {
        title: 'Oil & Gas',
        description: 'Premium petroleum products and energy commodities.',
        image: '/images/solutions/oil-gas.png',
        span: 'lg:col-span-1',
        size: 'small',
        overlay: 'from-charcoal/75 via-charcoal/40 to-transparent',
        textPosition: 'bottom',
    },
    {
        title: 'Industrial Supply',
        description: 'Heavy machinery and industrial equipment procurement.',
        image: '/images/solutions/industrial-supply.png',
        span: 'lg:col-span-1',
        size: 'small',
        overlay: 'from-charcoal/75 via-charcoal/40 to-transparent',
        textPosition: 'bottom',
    },
    {
        title: 'Commodity Trading',
        description: 'Strategic commodity sourcing and market intelligence.',
        image: '/images/solutions/commodity-trading.png',
        span: 'lg:col-span-1',
        size: 'small',
        overlay: 'from-charcoal/75 via-charcoal/40 to-transparent',
        textPosition: 'bottom',
    },
    {
        title: 'Logistics Solutions',
        description: 'End-to-end supply chain management and freight solutions.',
        image: '/images/solutions/logistics.png',
        span: 'lg:col-span-2',
        size: 'wide',
        overlay: 'from-charcoal/80 via-charcoal/40 to-transparent',
        textPosition: 'bottom',
    },
    {
        title: 'Infrastructure Materials',
        description: 'Construction materials and structural components.',
        image: '/images/solutions/infrastructure.png',
        span: 'lg:col-span-1',
        size: 'small',
        overlay: 'from-charcoal/75 via-charcoal/40 to-transparent',
        textPosition: 'bottom',
    },
    {
        title: 'Procurement',
        description: 'Strategic sourcing and vendor management.',
        image: '/images/solutions/procurement.png',
        span: 'lg:col-span-1',
        size: 'small',
        overlay: 'from-charcoal/75 via-charcoal/40 to-transparent',
        textPosition: 'bottom',
    },
    {
        title: 'Global Partnerships',
        description: 'Building lasting alliances across international markets.',
        image: '/images/solutions/partnerships.png',
        span: 'lg:col-span-2',
        size: 'wide',
        overlay: 'from-charcoal/80 via-charcoal/40 to-transparent',
        textPosition: 'bottom',
    },
];
export function BentoGrid() {
    return (<section id="solutions" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-crimson"/>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              Business Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Comprehensive Trade
            <span className="text-gradient-gold"> Ecosystem</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-charcoal/50 max-w-2xl mx-auto">
            From commodity sourcing to global distribution, we deliver end-to-end solutions
            that power international commerce.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {solutions.map((solution) => {
            const isLarge = solution.size === 'large';
            const isWide = solution.size === 'wide';
            return (<StaggerItem key={solution.title} className={solution.span}>
                <div className={`group relative h-full rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-gold/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}>
                  {/* Background Image */}
                  <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${isLarge ? 'min-h-[400px] lg:min-h-[480px]' : isWide ? 'min-h-[240px] lg:min-h-[280px]' : 'min-h-[260px] lg:min-h-[300px]'}`} style={{ backgroundImage: `url('${solution.image}')` }}/>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${solution.overlay}`}/>

                  {/* Top accent glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"/>

                  {/* Content */}
                  <div className={`relative z-10 flex flex-col justify-end h-full p-6 lg:p-8 ${isLarge ? 'min-h-[400px] lg:min-h-[480px]' : isWide ? 'min-h-[240px] lg:min-h-[280px]' : 'min-h-[260px] lg:min-h-[300px]'}`}>
                    {/* Category badge */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-[0.15em] text-ivory/80">
                        {isLarge ? 'Core Business' : isWide ? 'Enterprise' : 'Solution'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-white mb-2 ${isLarge ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'}`}>
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-ivory/60 leading-relaxed ${isLarge ? 'text-sm lg:text-base max-w-md' : 'text-sm'}`}>
                      {solution.description}
                    </p>

                    {/* Large card extra content */}
                    {isLarge && (<div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                            {[
                        'bg-crimson',
                        'bg-olive',
                        'bg-gold',
                        'bg-charcoal-light',
                    ].map((c, i) => (<div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-charcoal/40 flex items-center justify-center`}>
                                <span className="text-[8px] text-white font-bold">
                                  {String.fromCharCode(65 + i)}
                                </span>
                              </div>))}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-ivory/80">
                              40+ Countries
                            </p>
                            <p className="text-[10px] text-ivory/40">
                              Active trade routes
                            </p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                          <ArrowUpRight className="w-4 h-4 text-gold"/>
                        </div>
                      </div>)}

                    {/* Wide card metrics */}
                    {isWide && (<div className="mt-5 flex items-center gap-6">
                        <div>
                          <p className="text-xl font-bold text-white">
                            {solution.title === 'Logistics Solutions'
                        ? '186'
                        : '320+'}
                          </p>
                          <p className="text-[11px] text-ivory/50">
                            {solution.title === 'Logistics Solutions'
                        ? 'Active Routes'
                        : 'Global Partners'}
                          </p>
                        </div>
                        <div className="w-px h-8 bg-white/15"/>
                        <div>
                          <p className="text-xl font-bold text-white">
                            {solution.title === 'Logistics Solutions'
                        ? '99.7%'
                        : '15+'}
                          </p>
                          <p className="text-[11px] text-ivory/50">
                            {solution.title === 'Logistics Solutions'
                        ? 'On-time Delivery'
                        : 'Years of Trust'}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                            <ArrowUpRight className="w-4 h-4 text-gold"/>
                          </div>
                        </div>
                      </div>)}

                    {/* Small card arrow */}
                    {!isLarge && !isWide && (<div className="mt-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                          <ArrowUpRight className="w-3.5 h-3.5 text-gold"/>
                        </div>
                      </div>)}
                  </div>
                </div>
              </StaggerItem>);
        })}
        </StaggerContainer>
      </div>

      <div className="section-divider mt-24 lg:mt-32"/>
    </section>);
}
