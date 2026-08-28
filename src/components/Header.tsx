import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { NAV_ITEMS, CONTACT_INFO } from '../data/siteData';
import { NuovoLogo } from './NuovoLogo';
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Calendar,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenApplyModal: _onOpenApplyModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#1b4b75] text-cyan-100 text-xs py-2 px-4 border-b border-[#2c72af]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#27bac4]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#27bac4]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <div className="flex items-center space-x-1.5 text-cyan-100/80">
              <MapPin className="w-3.5 h-3.5 text-[#27bac4]" />
              <span>Damansara Intan, Petaling Jaya</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('cdc2')}
              className="text-[#27bac4] hover:text-white font-semibold flex items-center gap-1 transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Dive & Travel Insurance (CDC)</span>
            </button>
            <span className="text-[#2f9abc]/50">|</span>
            <button
              onClick={() => handleNavClick('eventregistration')}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Calendar className="w-3 h-3 text-[#27bac4]" />
              <span>Events</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md border-b border-slate-200/80 py-1 sm:py-1.5' : 'border-b border-slate-100 py-1.5 sm:py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 min-h-[4.25rem]">
          {/* Logo */}
          <div className="w-full md:w-auto flex items-center justify-between shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group focus:outline-none transition-transform hover:opacity-95 py-0.5"
              aria-label="Nuovo Paradigm Homepage"
            >
              <NuovoLogo className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
            </button>
          </div>

          {/* Horizontal Tabs Header Bar - Visible Horizontally on all screens */}
          <div className="w-full md:w-auto flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto py-1 scrollbar-none no-scrollbar">
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.id === 'elite-wealth-coach' && currentPage === 'elite-wealth-manager');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    isActive
                      ? 'text-[#27bac4] font-bold'
                      : 'text-slate-700 font-medium hover:text-[#27bac4]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
