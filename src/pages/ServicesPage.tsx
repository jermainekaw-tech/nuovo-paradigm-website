import React, { useState } from 'react';
import { PageId } from '../types';
import { CORE_SERVICES } from '../data/siteData';
import { ConsultSpecialistModal } from '../components/ConsultSpecialistModal';
import {
  Shield,
  Palmtree,
  GraduationCap,
  FileText,
  TrendingUp,
  Compass,
  Car,
  Scroll,
  Waves,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calculator,
  PhoneCall,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('insurance-takaful');
  const [consultTopic, setConsultTopic] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'insurance-takaful':
        return <Shield className="w-6 h-6" />;
      case 'retirement-planning':
        return <Palmtree className="w-6 h-6" />;
      case 'education-planning':
        return <GraduationCap className="w-6 h-6" />;
      case 'estate-planning':
        return <FileText className="w-6 h-6" />;
      case 'investment-planning':
        return <TrendingUp className="w-6 h-6" />;
      case 'islamic-wealth-planning':
        return <Compass className="w-6 h-6" />;
      case 'general-insurance':
        return <Car className="w-6 h-6" />;
      case 'will-and-trust':
        return <Scroll className="w-6 h-6" />;
      case 'dive-coverage':
        return <Waves className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO HEADER (from services.html background: #2c72af) */}
      <section className="bg-gradient-to-r from-[#27bac4] via-[#2f9abc] to-[#2c72af] text-white py-16 sm:py-20 border-b border-[#27bac4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider mb-2">
              Our Core Expertise
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
              This is what we do best.
            </h1>
            <p className="mt-3 text-sky-100 text-sm sm:text-base leading-relaxed">
              Comprehensive, holistic, and fiduciary wealth management designed to protect, compound, and preserve your family&rsquo;s future.
            </p>
          </div>

          {/* Quick Pillar Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {CORE_SERVICES.map((srv) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => {
                  document.getElementById(srv.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-xs flex flex-col items-center text-center transition-all group cursor-pointer"
              >
                <div className="text-sky-300 group-hover:scale-110 transition-transform mb-2">
                  {getServiceIcon(srv.id)}
                </div>
                <span className="text-xs font-bold leading-tight">{srv.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DETAILED SERVICE BLOCKS */}
      <div className="divide-y divide-slate-100">
        {CORE_SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 sm:py-24 scroll-mt-20 ${
                index % 3 === 0
                  ? 'bg-slate-50'
                  : index % 3 === 1
                  ? 'bg-sky-50/40'
                  : 'bg-white'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text Details */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2c72af]/10 text-[#2c72af] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{service.title}</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 leading-snug">
                      {service.tagline}
                    </h2>

                    <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                      {service.description.map((p, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-[#2c72af] shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features list */}
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Strategic Deliverables
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, i) => (
                          <div
                            key={i}
                            className="bg-white p-3 rounded-lg border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs"
                          >
                            &bull; {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center space-x-4">
                      <button
                        onClick={() => setConsultTopic(service.title)}
                        className="px-5 py-2.5 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold rounded-lg shadow-sm flex items-center space-x-2 transition-all"
                      >
                        <span>Consult Our Specialists</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onNavigate(service.id === 'dive-coverage' ? 'cdc2' : 'other-services')}
                        className="text-xs font-semibold text-[#2c72af] hover:underline"
                      >
                        View Specialized Products &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Visual Card / Illustration side */}
                  <div
                    className={`lg:col-span-5 flex justify-center ${
                      isEven ? 'order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-[#2c72af] via-[#02457e] to-slate-900 p-8 text-white shadow-xl relative overflow-hidden">
                      <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-amber-300 mb-6 shadow-inner">
                        {getServiceIcon(service.id)}
                      </div>
                      <h3 className="text-2xl font-bold font-serif mb-2">{service.title}</h3>
                      <p className="text-xs text-sky-100/90 leading-relaxed mb-6">
                        Customized to your life stage, risk appetite, and family milestones by certified Nuovo Paradigm wealth leaders.
                      </p>

                      <div className="p-4 rounded-xl bg-white/10 text-xs text-sky-100 border border-white/15">
                        <span className="font-semibold text-amber-300">Need-Based Promise: </span>
                        We never sell generic off-the-shelf policies. Every portfolio is tailored to your real financial roadmap.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CTA TO SPECIALIZED SERVICES */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold font-serif">Looking for specific insurance policies?</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Explore our specialized solutions including Medical &amp; Life, Motor, Fire, International Travel, Takaful, Will &amp; Trust, Unit Trust, and Dive Coverage (CDC).
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('other-services')}
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all"
            >
              Explore Other Services
            </button>
            <button
              onClick={() => onNavigate('cdc2')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all"
            >
              Comprehensive Dive Coverage (CDC)
            </button>
          </div>
        </div>
      </section>

      <ConsultSpecialistModal topic={consultTopic} onClose={() => setConsultTopic(null)} />
    </div>
  );
};
