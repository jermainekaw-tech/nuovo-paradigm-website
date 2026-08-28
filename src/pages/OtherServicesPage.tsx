import React from 'react';
import { PageId, OtherServiceItem } from '../types';
import { OTHER_SERVICES } from '../data/siteData';
import {
  Shield,
  Car,
  Flame,
  Plane,
  Moon,
  Scroll,
  TrendingUp,
  Waves,
  ArrowRight,
  Info,
  Sparkles,
} from 'lucide-react';

interface OtherServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: OtherServiceItem) => void;
}

export const OtherServicesPage: React.FC<OtherServicesPageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const getIcon = (iconImg?: string) => {
    switch (iconImg) {
      case 'Shield':
        return <Shield className="w-8 h-8 text-[#2c72af]" />;
      case 'Car':
        return <Car className="w-8 h-8 text-[#2c72af]" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-[#2c72af]" />;
      case 'Plane':
        return <Plane className="w-8 h-8 text-[#2c72af]" />;
      case 'Moon':
        return <Moon className="w-8 h-8 text-[#2c72af]" />;
      case 'Scroll':
        return <Scroll className="w-8 h-8 text-[#2c72af]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-[#2c72af]" />;
      case 'Waves':
        return <Waves className="w-8 h-8 text-[#2c72af]" />;
      default:
        return <Shield className="w-8 h-8 text-[#2c72af]" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#eaf8fa] text-[#27bac4] text-xs font-bold uppercase tracking-wider mb-2">
            Specialized Insurance &amp; Wealth Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 leading-tight">
            Other Services
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Click on any product below to view detailed coverage scope, policy benefits, tax reliefs, and request custom quotations.
          </p>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OTHER_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService(item)}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#2c72af]/50 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Visual Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-sky-50 group-hover:bg-[#2c72af] transition-colors flex items-center justify-center text-[#2c72af] group-hover:text-white shadow-2xs">
                  {getIcon(item.iconImg)}
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-[#2c72af] transition-colors mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2c72af]">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Comprehensive Dive Coverage Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#2c72af] via-blue-900 to-indigo-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Product</span>
            </div>
            <h3 className="text-2xl font-bold font-serif">Comprehensive Dive Coverage (CDC)</h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl">
              Bundling international travel with hyperbaric decompression chamber treatment and 24/7 global emergency medical air evacuation by DiveAssist &amp; Generali.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onNavigate('cdc2')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all"
            >
              CDC Rates &amp; Quick Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
