import React from 'react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data/siteData';
import { NuovoLogo } from './NuovoLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id as PageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f507b] text-blue-100 pt-14 pb-8 border-t border-[#2c72af]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="inline-block py-1">
              <NuovoLogo variant="white" className="h-[5.4rem] sm:h-[6.48rem]" />
            </div>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Premier wealth planning agency and corporate advisory. We coach clients towards financial clarity and build successful wealth entrepreneurs with P.R.I.D.E.
            </p>
            <div className="text-xs text-blue-100 bg-[#173e60]/70 p-3 rounded-lg border border-white/15">
              <span className="font-semibold text-white">Nuovo Paradigm Sdn Bhd</span>
              <br />
              Registration No: {CONTACT_INFO.regNumber}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#27bac4]"></span>
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={(e) => handleLinkClick('home', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('milestone', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Our Milestones
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('services', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Products & Services
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('about-us', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Our Leaders
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('elite-wealth-coach', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('cdc2', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Dive Assist
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('other-services', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  General Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('contact', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Careers & Opportunities */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#27bac4]"></span>
              Careers & Opportunities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={(e) => handleLinkClick('elite-wealth-coach', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Elite Wealth Coach Program
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('elite-wealth-manager', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  PruVenture Manager Program
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('cdc2', e)}
                  className="hover:text-white transition-colors text-left text-[#6ee7b7] font-semibold hover:underline cursor-pointer"
                >
                  Comprehensive Dive Coverage (CDC)
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('psp', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Payment & Bank Info (CIMB)
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('clsc', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Policy Servicing (Change Request)
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick('eventregistration', e)}
                  className="hover:text-white transition-colors text-left text-blue-100/90 hover:underline cursor-pointer"
                >
                  Event & Workshop Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#27bac4]"></span>
              Damansara Intan Office
            </h4>
            <div className="space-y-3 text-sm text-blue-100/90">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#27bac4] shrink-0 mt-1" />
                <p className="leading-snug">
                  {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}
                </p>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#27bac4] shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-white transition-colors hover:underline"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#27bac4] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5 text-xs text-blue-200">
                <Clock className="w-4 h-4 text-[#27bac4] shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-blue-200/90 space-y-3 sm:space-y-0">
          <div>
            &copy; {currentYear} Nuovo Paradigm Sdn Bhd (779914-D). All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-[#27bac4]" /> Need-Based Financial Advisory
            </span>
            <span>&bull;</span>
            <button
              onClick={(e) => handleLinkClick('agent-feedback', e)}
              className="hover:text-white transition-colors hover:underline cursor-pointer"
            >
              Agent Feedback
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
