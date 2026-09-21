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
  Layers,
  Crown,
  Medal,
} from 'lucide-react';

interface MilestonePageProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const MilestonePage: React.FC<MilestonePageProps> = ({
  onNavigate,
  onOpenApplyModal,
}) => {
  const getIcon = (iconName: string, size: string = 'w-6 h-6', white: boolean = false) => {
    const colorClass = white ? 'text-white' : ['Trophy', 'Crown', 'Medal'].includes(iconName) ? 'text-amber-500' : 'text-[#2c72af]';
    const cls = `${size} ${colorClass}`;
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={cls} />;
      case 'Building2':
        return <Building2 className={cls} />;
      case 'TrendingUp':
        return <TrendingUp className={cls} />;
      case 'Trophy':
        return <Trophy className={cls} />;
      case 'Users':
        return <Users className={cls} />;
      case 'Layers':
        return <Layers className={cls} />;
      case 'Crown':
        return <Crown className={cls} />;
      case 'Medal':
        return <Medal className={cls} />;
      default:
        return <Sparkles className={cls} />;
    }
  };

  return (
    <div className="w-full bg-slate-50">
      {/* Hero: Plain Gradient Background (mirrors the Careers/About page hero) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#173e60] via-[#0b2742] to-slate-950 py-20 sm:py-28 border-b border-[#173e60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
              Our Journey &amp; Legacy
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              Milestones of Excellence
            </h1>
            <p className="text-xl font-medium text-[#27bac4] leading-relaxed">
              From a solo vision in 2007 to a 40+ strong team of financial planners today &mdash; one of Malaysia&rsquo;s most recognized corporate wealth agencies.
            </p>
          </div>
        </div>
      </section>

      <div className="pt-10 sm:pt-14 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Milestone Journey: Alternating Pin Timeline */}
        <div className="mb-16">
          <div className="relative left-1/2 w-screen -translate-x-1/2 px-2 sm:px-6 py-16 sm:py-20 overflow-x-auto sm:overflow-x-visible">
            <div className="flex items-stretch gap-2 min-w-[1100px] sm:min-w-0 sm:gap-2">
              {MILESTONES.map((item, index) => {
                const isUp = index % 2 === 0;

                const TextBlock = (
                  <div className="text-center px-1.5 space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {item.subtitle}
                    </p>
                    {item.stats && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#eaf8fa] text-[#27bac4] text-[9px] sm:text-[10px] font-bold whitespace-nowrap">
                        {item.stats}
                      </span>
                    )}
                  </div>
                );

                const Pin = (
                  <div
                    aria-label={`${item.year}: ${item.title}`}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0"
                    style={{ transform: isUp ? 'rotate(-45deg)' : 'rotate(135deg)' }}
                  >
                    <span
                      className={`absolute inset-0 shadow-md ${
                        item.highlight
                          ? 'bg-gradient-to-br from-[#27bac4] to-[#2c72af] ring-2 ring-[#27bac4]/30'
                          : 'bg-gradient-to-br from-[#2c72af] to-[#173e60]'
                      }`}
                      style={{ borderRadius: '50% 50% 50% 0' }}
                    />
                    <span
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transform: isUp ? 'rotate(45deg)' : 'rotate(-135deg)' }}
                    >
                      {getIcon(item.icon, 'w-4 h-4', true)}
                    </span>
                  </div>
                );

                return (
                  <div key={item.year} className="relative flex-1 flex flex-col items-center min-w-[100px] sm:min-w-0">
                    {/* Top half */}
                    <div className={`h-44 sm:h-48 w-full flex flex-col items-center ${isUp ? 'justify-end' : 'justify-start'}`}>
                      {isUp && (
                        <>
                          {TextBlock}
                          <div className="mt-2 mb-4">{Pin}</div>
                        </>
                      )}
                    </div>

                    {/* Track segment with year */}
                    <div className="w-full h-9 flex items-center justify-center px-0.5 shrink-0">
                      <div className="relative w-full h-full bg-slate-100 rounded-full flex items-center justify-center">
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-500">{item.year}</span>
                      </div>
                    </div>

                    {/* Bottom half */}
                    <div className={`h-44 sm:h-48 w-full flex flex-col items-center ${isUp ? 'justify-end' : 'justify-start'}`}>
                      {!isUp && (
                        <>
                          <div className="mt-4 mb-2">{Pin}</div>
                          {TextBlock}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing Highlight: Latest Milestone Summary Box (from milestone.html background: #efefef) */}
        <div className="mt-16 bg-[#efefef] p-8 sm:p-12 rounded-3xl border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">
              Where We Stand Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              RM4 Million Agency &amp; 40+ Financial Planners
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Nuovo Paradigm has grown from a solo vision in 2007 into an agency recognized across the industry for its benchmark system of training, mentoring, and scaling quality financial producers.
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
    </div>
  );
};
