import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProductsView from './components/ProductsView';
import VisionView from './components/VisionView';
import WhyView from './components/WhyView';
import ContactView from './components/ContactView';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomeView onChangePage={setActivePage} />;
      case 'about':
        return <AboutView />;
      case 'products':
        return <ProductsView onChangePage={setActivePage} />;
      case 'vision':
        return <VisionView />;
      case 'why':
        return <WhyView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onChangePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4] selection:bg-[#D4A017] selection:text-[#1D2636]" id="app-container">
      <Header activePage={activePage} onChangePage={setActivePage} />

      <main className="flex-grow min-h-screen" id="main-content-area">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            id="page-transition-wrapper"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onChangePage={setActivePage} />
    </div>
  );
}