import React, { useState } from 'react';
import Logo from './Logo';
import { PageType } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: PageType;
  onChangePage: (page: PageType) => void;
}

export default function Header({ activePage, onChangePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as PageType },
    { label: 'About', page: 'about' as PageType },
    { label: 'Products', page: 'products' as PageType },
    { label: 'Vision & Mission', page: 'vision' as PageType },
    { label: 'Why Us', page: 'why' as PageType },
    { label: 'Contact', page: 'contact' as PageType },
  ];

  const handleNavClick = (page: PageType) => {
    onChangePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className="sticky top-0 z-50 bg-[#1D2636] border-b border-[#2F394D]/40 shadow-lg text-white"
      id="app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => handleNavClick('home')}
            id="logo-header-trigger"
          >
            <img 
              src="/images/logo.png" 
              alt="Excalibur General Trading" 
              className="h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-4 items-center" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#0EA5E9] border-b-2 border-[#0EA5E9] font-semibold'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-[#0EA5E9]/50'
                  }`}
                  id={`nav-item-${item.page}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:block" id="header-action-button">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 rounded-none border border-[#0EA5E9] text-[#0EA5E9] bg-transparent hover:bg-[#0EA5E9] hover:text-[#1D2636] transition-all duration-300 text-sm font-semibold uppercase tracking-wider cursor-pointer"
              id="get-started-btn"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden" id="mobile-menu-trigger">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2F394D] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0EA5E9] w-12 h-12"
              aria-expanded="false"
              id="hamburger-btn"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1D2636] border-t border-[#2F394D]/70" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-none text-base font-medium cursor-pointer ${
                    isActive
                      ? 'bg-[#2F394D] text-[#0EA5E9] border-l-4 border-[#0EA5E9]'
                      : 'text-gray-300 hover:bg-[#2F394D]/50 hover:text-white'
                  }`}
                  id={`mobile-nav-item-${item.page}`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 pb-2 px-4 border-t border-[#2F394D]/30">
              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-center px-4 py-3 border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-[#1D2636] transition-colors duration-300 text-sm font-bold uppercase tracking-widest cursor-pointer"
                id="mobile-get-started-btn"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
