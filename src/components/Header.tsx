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
  Menu,
  X,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMenuOpen(false);
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 min-h-[4.25rem]">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none transition-transform hover:opacity-95 py-0.5 shrink-0"
            aria-label="Nuovo Paradigm Homepage"
          >
            <NuovoLogo className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
          </button>

          {/* Hamburger menu trigger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-[#27bac4] transition-colors cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Right-side slide-in drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <NuovoLogo className="h-9 w-auto" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.id === 'elite-wealth-coach' && currentPage === 'elite-wealth-manager');
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#eaf8fa] text-[#27bac4] font-bold'
                        : 'text-slate-700 font-medium hover:bg-slate-50 hover:text-[#27bac4]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-1">
            <button
              onClick={() => handleNavClick('cdc2')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#27bac4] transition-colors cursor-pointer flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-[#27bac4] shrink-0" />
              <span>Dive &amp; Travel Insurance (CDC)</span>
            </button>
            <button
              onClick={() => handleNavClick('eventregistration')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#27bac4] transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#27bac4] shrink-0" />
              <span>Events</span>
            </button>
          </div>
        </nav>

        <div className="px-5 py-4 border-t border-slate-100 text-xs text-slate-600 space-y-2 shrink-0">
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-2 hover:text-[#27bac4] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#2c72af] shrink-0" />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-2 hover:text-[#27bac4] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#2c72af] shrink-0" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
