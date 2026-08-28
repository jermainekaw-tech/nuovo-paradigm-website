import React from 'react';
import { PageId } from '../types';
import { MILESTONES } from '../data/siteData';
import {
  Sparkles,
  Award,
  TrendingUp,
  Building2,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Users,
} from 'lucide-react';

interface MilestonePageProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const MilestonePage: React.FC<MilestonePageProps> = ({
  onNavigate,
  onOpenApplyModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#2c72af]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#2c72af]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#2c72af]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#2c72af]" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-[#eaf8fa] text-[#27bac4] text-xs font-bold uppercase tracking-wider">
            Our Journey &amp; Legacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 leading-tight">
            Milestones of Excellence
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From an ambitious 8-member founding team in 2009 to one of Malaysia&rsquo;s most recognized corporate wealth agencies.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative border-l-2 border-sky-200 ml-4 sm:ml-32 space-y-12 pb-8">
          {MILESTONES.map((item, index) => (
            <div key={item.year} className="relative pl-6 sm:pl-10 group">
              {/* Year badge left anchor for desktop */}
              <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
                <span className="text-2xl font-extrabold font-serif text-[#2c72af]">
                  {item.year}
                </span>
              </div>

              {/* Node Icon on line */}
              <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-white border-2 border-[#2c72af] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>

              {/* Content Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  item.highlight
                    ? 'bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-md ring-2 ring-[#2c72af]/20'
                    : 'bg-white border-slate-200 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="sm:hidden text-lg font-bold font-serif text-[#2c72af]">
                    {item.year}
                  </span>
                  {item.stats && (
                    <span className="px-3 py-1 rounded-full bg-[#eaf8fa] text-[#27bac4] text-xs font-bold">
                      {item.stats}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#2c72af] uppercase tracking-wider mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Highlight: 2019 Milestone Summary Box (from milestone.html background: #efefef) */}
        <div className="mt-16 bg-[#efefef] p-8 sm:p-12 rounded-3xl border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">
              The Breakthrough
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              3.7 Million in Sales &amp; 26 Top Planners
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Nuovo Paradigm was recognized across the industry to have established the benchmark system for training, mentoring, and scaling quality financial producers.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center space-x-2"
            >
              <span>Join As A Producer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
