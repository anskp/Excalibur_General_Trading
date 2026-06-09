import React from 'react';
import Logo from './Logo';
import { PageType } from '../types';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onChangePage: (page: PageType) => void;
}

export default function Footer({ onChangePage }: FooterProps) {
  const handleNavClick = (page: PageType) => {
    onChangePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D2636] text-gray-300 border-t border-[#2F394D]/80" id="app-footer">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" id="footer-grid">
          
          {/* Column 1: Company Profile Logo */}
          <div className="flex flex-col space-y-6" id="footer-logo-col">
            <div className="self-start cursor-pointer group" onClick={() => handleNavClick('home')}>
              <Logo light className="h-14" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-sans mt-2">
              Excalibur General Trading LLC is Abu Dhabi's elite trading gateway, supplying high-performance industrial cooking systems, mechanics tools, tires and automotive products.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono mt-2">
              <Clock className="w-3.5 h-3.5 text-[#0EA5E9]" />
              <span>Abu Dhabi, UAE • Mon – Sat</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4" id="footer-quick-links-col">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest border-l-2 border-[#0EA5E9] pl-3">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('vision')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  Vision & Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('vision')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  Mission & Blueprint
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('why')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  Why Choose Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col space-y-4" id="footer-products-col">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest border-l-2 border-[#0EA5E9] pl-3">
              Division Products
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <button 
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  Kitchen Equipment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  Industrial & Mechanical Equipment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  Home Appliances
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#0EA5E9] transition-all duration-200 cursor-pointer text-left block w-full"
                >
                  Automotive Tyres & Accessoires
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col space-y-4" id="footer-contact-col">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest border-l-2 border-[#0EA5E9] pl-3">
              Corporate Desk
            </h3>
            <ul className="space-y-3.5 text-sm font-sans" id="footer-contact-info-list">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" id="foot-pin" />
                <span className="text-gray-400">Musaffah, M14, Abu Dhabi, United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" id="foot-phone" />
                <a href="tel:+971585930053" className="hover:text-white transition-colors duration-150 text-gray-400 font-mono">
                  +971 58 593 0053
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" id="foot-mail" />
                <a href="mailto:sales@excaliburuae.com" className="hover:text-white transition-colors duration-150 text-gray-400 font-mono break-all">
                  sales@excaliburuae.com
                </a>
              </li>
              <li className="text-xs pt-1 border-t border-[#2F394D] text-gray-500 font-sans leading-none">
                Web: <a href="http://www.excaliburuae.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] underline font-mono">www.excaliburuae.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Corporate Sign-off Bar */}
      <div className="bg-[#1C2029] border-t border-[#2F394D]/30 py-6 text-xs text-center text-gray-500" id="footer-bottom-bar">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
          <span>© 2026 Excalibur General Trading LLC. Abu Dhabi, UAE. All Rights Reserved.</span>
          <div className="flex space-x-4">
            <span className="text-[10px] tracking-widest text-[#0EA5E9] font-semibold">AUTHENTICITY GUARANTEED</span>
            <span>•</span>
            <span className="text-[10px] tracking-widest uppercase">Abu Dhabi license registration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
