'use client';
import { Navbar } from '@/components/excalibur/Navbar';
import { HeroSection } from '@/components/excalibur/HeroSection';
import { BentoGrid } from '@/components/excalibur/BentoGrid';
import { ServicesSlider } from '@/components/excalibur/ServicesSlider';
import { GlobalPresenceSection, CTASection } from '@/components/excalibur/GlobalPresenceCTA';
import { StatsSection } from '@/components/excalibur/StatsSection';
import { IndustriesSection } from '@/components/excalibur/IndustriesSection';
import { TrustSection } from '@/components/excalibur/TrustSection';
import { Footer } from '@/components/excalibur/Footer';
export default function Home() {
    return (<div className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BentoGrid />
        <ServicesSlider />
        <StatsSection />
        <GlobalPresenceSection />
        <IndustriesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>);
}
