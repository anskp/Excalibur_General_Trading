'use client';

import { Navbar } from '@/components/excalibur/Navbar';
import { Footer } from '@/components/excalibur/Footer';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/excalibur/ScrollReveal';

const productCategories = [
  {
    id: 'kitchen-equipment',
    title: 'Restaurant & Kitchen Equipment Trading',
    items: [
      'Industrial cooking equipment',
      'Refrigeration systems',
      'Food preparation machinery',
      'Stainless steel kitchen solutions',
      'Bakery and catering equipment',
      'Kitchen outfit and accessories',
    ],
  },
  {
    id: 'mechanical-equipment',
    title: 'Mechanical Equipment Trading',
    items: [
      'Industrial machinery',
      'Mechanical tools and components',
      'Workshop equipment',
      'Maintenance and operational systems',
    ],
  },
  {
    id: 'home-appliances',
    title: 'Home Appliances Trading',
    items: [
      'Refrigerators and freezers',
      'Washing machines',
      'Air-conditioning accessories',
      'Small and large electrical appliances',
      'Home utility equipment',
    ],
  },
  {
    id: 'car-tyres',
    title: 'Cars Tyres & Accessories Trading',
    items: [
      'Passenger vehicle tyres',
      'Car accessories and outfit products',
      'Automotive consumables',
      'Vehicle maintenance accessories',
    ],
  },
  {
    id: 'heavy-vehicle-tyres',
    title: 'Heavy Vehicles & Equipment Tyres Trading',
    items: [
      'Trucks and buses tyres',
      'Construction machinery tyres',
      'Heavy industrial equipment tyres',
      'Commercial transport vehicles tyres',
      'Off-road and specialized equipment tyres',
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      <main className="flex-1 pt-28">
        <section className="relative py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-olive" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                  Products
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal">
                Wholesale Trading
                <span className="text-gradient-gold"> Product Portfolio</span>
              </h1>
              <p className="mt-6 text-base lg:text-lg text-charcoal/55 max-w-3xl mx-auto leading-[1.8]">
                Excalibur General Trading supplies high-quality products across commercial, industrial,
                automotive, and household sectors.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
              {productCategories.map((category) => (
                <StaggerItem key={category.id}>
                  <section
                    id={category.id}
                    className="glass-card rounded-3xl p-7 lg:p-8 border border-gold/15 h-full"
                  >
                    <h2 className="text-xl lg:text-2xl font-bold text-charcoal mb-5">
                      {category.title}
                    </h2>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                          <p className="text-sm text-charcoal/65 leading-[1.8]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

