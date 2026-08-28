import React from 'react';
import { PageId } from '../types';
import {
  Sparkles,
  Award,
  CheckCircle2,
  Users,
  Briefcase,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Building2,
  ExternalLink,
} from 'lucide-react';

interface EliteWealthManagerPageProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const EliteWealthManagerPage: React.FC<EliteWealthManagerPageProps> = ({
  onNavigate,
  onOpenApplyModal,
}) => {
  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION (from elite-wealth-manager.html background: #aedefc) */}
      <section className="bg-gradient-to-r from-[#aedefc] via-sky-100 to-[#aedefc] py-16 sm:py-24 border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl border border-sky-200 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#2c72af] to-sky-700 text-white flex items-center justify-center shadow-md">
                  <Building2 className="w-10 h-10" />
                </div>
                <div className="font-serif text-2xl font-bold text-slate-900">PRUVENTURE</div>
                <p className="text-xs text-[#2c72af] font-bold uppercase tracking-wider">
                  Manager Development Program
                </p>
                <div className="text-xs text-slate-600 border-t border-slate-100 pt-3">
                  In Strategic Partnership with Prudential Assurance Malaysia Berhad
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#27bac4] text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Track</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 leading-tight">
                Manager development program <br className="hidden sm:inline" />
                designed to build future managers.
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                PruVenture Manager is an elite program designed to cultivate high-caliber future agency managers and corporate wealth executives.
              </p>
              <div className="pt-2 flex items-center space-x-4">
                <a
                  href="#program-details"
                  className="px-6 py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center space-x-2"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenApplyModal}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-[#2c72af] border border-sky-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Apply Directly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM OVERVIEW (from original background: #efe9f4) */}
      <section id="program-details" className="bg-[#f5effa] py-16 sm:py-24 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 space-y-4">
                <span className="text-purple-700 text-xs font-bold uppercase tracking-wider">Strategic Selection</span>
                <h3 className="text-2xl font-bold font-serif text-slate-900">Selection Criteria</h3>
                
                <div className="space-y-2.5 text-xs text-slate-700 pt-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2c72af]" />
                    <span>Age Group &amp; Maturity Profile</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2c72af]" />
                    <span>Tertiary Education &amp; Degree Holder</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2c72af]" />
                    <span>Proven Corporate or Commercial Track Record</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2c72af]" />
                    <span>High Drive, Initiative, &amp; Leadership Demeanor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-200 text-purple-950 text-xs font-bold uppercase">
                <span>PruVenture Manager</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 leading-snug">
                Building Tomorrow&rsquo;s Wealth Leaders
              </h2>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>PruVenture Manager</strong> is a special executive program designed to build future agency managers. Firstly, candidate applicants will be interviewed by our manufacturer <strong>Prudential Assurance Malaysia Berhad</strong>.
                </p>
                <p>
                  Applicants are selected based on their age group, education background, work experience, maturity, and their attitudes demonstrated during rigorous interview sessions.
                </p>
                <p>
                  Upon successful enrollment, candidates will be trained through our specialized fast-track leadership curriculum.
                </p>
                <p>
                  It is an exciting yet challenging career advancement program that is effort-based and initiative-based. Individuals who are selected will discover far more than just monetary rewards — they gain tangible personal growth, executive presence, and agency leadership opportunities.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenApplyModal}
                  className="px-6 py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm flex items-center space-x-2 transition-all"
                >
                  <span>Apply For PruVenture Manager</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
