import React, { useState } from 'react';
import { PageId } from '../types';
import { ConsultSpecialistModal } from '../components/ConsultSpecialistModal';
import {
  Sparkles,
  Handshake,
  ArrowRight,
} from 'lucide-react';

interface OurPartnersPageProps {
  onNavigate: (page: PageId) => void;
}

const ALL_PARTNERS = [
  { name: 'Prudential', logo: '/images/partners/prudential.png' },
  { name: 'Prudential BSN Takaful', logo: '/images/partners/prudential-bsn-takaful.png' },
  { name: 'Allianz', logo: '/images/partners/allianz.png' },
  { name: 'Dive Assist', logo: '/images/partners/dive-assist.png' },
  { name: 'Eastspring Investments', logo: '/images/partners/eastspring-investments.png' },
  { name: 'Rockwills', logo: '/images/partners/rockwills.png', logoClassName: 'max-h-24' },
  { name: 'as-Salihin Trustee Berhad', logo: '/images/partners/as-salihin.png' },
  { name: 'Public Mutual', logo: '/images/partners/public-mutual.png', logoClassName: 'max-h-16' },
  { name: 'Generali', logo: '/images/partners/generali.png', logoClassName: 'max-h-16' },
  { name: 'Chubb', logo: '/images/partners/chubb.png', logoClassName: 'max-h-16' },
  { name: 'Tokio Marine', logo: '/images/partners/tokio-marine.png' },
  { name: 'Nirvana', logo: '/images/partners/nirvana.png' },
];

export const OurPartnersPage: React.FC<OurPartnersPageProps> = ({ onNavigate }) => {
  const [consultTopic, setConsultTopic] = useState<string | null>(null);

  return (
    <div className="w-full bg-white">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#27bac4] via-[#2f9abc] to-[#2c72af] text-white py-20 sm:py-28 border-b border-[#27bac4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5" />
              <span>Our Partners</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
              Our Trusted Vendors &amp; Partners
            </h1>
            <p className="text-xl font-medium text-sky-100 leading-relaxed">
              Leading financial institutions working alongside us to deliver the best solutions for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OFFERED BY CATEGORY */}
      <section className="bg-[#eaf8fa] py-16 sm:py-20 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#2c72af] text-xs font-bold uppercase tracking-wider">Services Offered</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-2">
              Solutions Delivered Through Our Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* Column 1: Insurance Planning */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <img src="/images/partners/prudential-bsn-takaful.png" alt="Prudential BSN Takaful" className="h-6 object-contain" />
                <img src="/images/partners/prudential.png" alt="Prudential" className="h-6 object-contain" />
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>&bull; Insurance Planning</li>
                <li>&bull; Medical/Life Insurance</li>
                <li>&bull; Saving &amp; Endowment</li>
              </ul>
              <button
                onClick={() => setConsultTopic('Insurance Planning')}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2c72af] hover:underline"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Column 2: Estate Planning + Investment Planning (stacked) */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/images/partners/rockwills.png" alt="Rockwills" className="h-9 object-contain" />
                  <img src="/images/partners/as-salihin.png" alt="as-Salihin Trustee Berhad" className="h-6 object-contain" />
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>&bull; Estate Planning</li>
                  <li>&bull; Will &amp; Trust Services</li>
                </ul>
                <button
                  onClick={() => setConsultTopic('Estate Planning')}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2c72af] hover:underline"
                >
                  <span>Consult Our Specialists</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/images/partners/eastspring-investments.png" alt="Eastspring Investments" className="h-6 object-contain" />
                  <img src="/images/partners/public-mutual.png" alt="Public Mutual" className="h-7 object-contain" />
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>&bull; Investment Planning</li>
                </ul>
                <button
                  onClick={() => setConsultTopic('Investment Planning')}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2c72af] hover:underline"
                >
                  <span>Consult Our Specialists</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Column 3: General Insurance */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <img src="/images/partners/generali.png" alt="Generali" className="h-7 object-contain" />
                <img src="/images/partners/chubb.png" alt="Chubb" className="h-6 object-contain" />
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>&bull; General Insurance</li>
                <li>&bull; Liability &amp; Asset Protection</li>
                <li>&bull; Company Group Benefits</li>
              </ul>
              <button
                onClick={() => setConsultTopic('General Insurance')}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2c72af] hover:underline"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Column 4: Funeral & Other Services */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
              <img src="/images/partners/nirvana.png" alt="Nirvana" className="h-6 object-contain" />
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>&bull; Funeral Services</li>
              </ul>
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Other Services</span>
                <ul className="space-y-1.5 text-xs text-slate-600 mt-2">
                  <li>&bull; Overseas Investments</li>
                  <li>&bull; Legal Advice</li>
                </ul>
              </div>
              <button
                onClick={() => setConsultTopic('Funeral & Other Services')}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2c72af] hover:underline"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL PARTNER GRID */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#2c72af] text-xs font-bold uppercase tracking-wider">Our Network</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-2">
              Our Trusted Vendors &amp; Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ALL_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col items-center justify-center text-center space-y-2 hover:shadow-md hover:border-[#2c72af]/40 transition-all min-h-28"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-w-full object-contain ${partner.logoClassName || 'max-h-10'}`}
                />
                <span className="text-xs font-bold text-slate-800 leading-tight">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Sparkles className="w-6 h-6 text-[#27bac4] mx-auto" />
          <h2 className="text-3xl font-bold font-serif">Not sure which solution fits you best?</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Our wealth planners will help you understand your needs and match you with the right partner solution &mdash; at no cost to you.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setConsultTopic('General Wealth Planning Consultation')}
              className="px-6 py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center space-x-2"
            >
              <span>Consult Our Specialists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all"
            >
              Explore Products &amp; Services
            </button>
          </div>
        </div>
      </section>

      <ConsultSpecialistModal topic={consultTopic} onClose={() => setConsultTopic(null)} />
    </div>
  );
};
