import React, { useState } from 'react';
import { PageId } from '../types';
import { CORE_VALUES } from '../data/siteData';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowRight,
  Compass,
  HeartHandshake,
  Lightbulb,
  Building,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeMissionSlide, setActiveMissionSlide] = useState(0);

  const missionSlides = [
    {
      eyebrow: 'We provide',
      title: 'Wealth Planning Services',
      description: 'That coach our clients towards a clear goal of what they want to achieve in every chapter of life.',
      icon: Compass,
      bgColor: 'from-blue-600 to-indigo-700',
    },
    {
      eyebrow: 'We become',
      title: 'A One-Stop Solution',
      description: 'A dedicated wealth planning partner to help implement financial strategies that make a tangible difference.',
      icon: HeartHandshake,
      bgColor: 'from-sky-600 to-blue-800',
    },
    {
      eyebrow: 'We strive to',
      title: "Exceed The Industry's Standard",
      description: 'To produce and nurture the highest benchmark of extraordinary leaders, advisors, and premier producers.',
      icon: Lightbulb,
      bgColor: 'from-indigo-600 to-slate-800',
    },
  ];

  const nextMission = () => {
    setActiveMissionSlide((prev) => (prev + 1) % missionSlides.length);
  };

  const prevMission = () => {
    setActiveMissionSlide((prev) => (prev - 1 + missionSlides.length) % missionSlides.length);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#2c72af]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#2c72af]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#2c72af]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#2c72af]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#2c72af]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#2c72af]" />;
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. VISION HERO BANNER (from about-us.html background: rgba(2,93,170,0.25)) */}
      <section className="bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100/60 py-16 sm:py-24 border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Icon card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl border border-sky-100 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#2c72af] to-sky-600 text-white flex items-center justify-center shadow-md">
                  <Compass className="w-10 h-10" />
                </div>
                <div className="font-serif text-2xl font-bold text-slate-900">Nuovo Paradigm</div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  Est. 2009 &bull; Damansara Intan
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                  Building exceptional millionaires through disciplined need-based wealth advisory.
                </div>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#27bac4] text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Strategic Vision</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 leading-tight">
                Our Vision
              </h1>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-sky-200/80">
                <p className="text-lg sm:text-xl font-medium text-[#2c72af] leading-relaxed font-serif italic">
                  &ldquo;We aspire to build a group of millionaires that earned the choice of living their desired lifestyle with a balance in all aspects of their lives.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION CAROUSEL (from about-us.html) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-1">
              This is how we work towards our vision.
            </h2>
          </div>

          {/* Interactive Carousel */}
          <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden shadow-xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {missionSlides[activeMissionSlide].eyebrow}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold font-serif text-white">
                  {missionSlides[activeMissionSlide].title}
                </h3>
                <p className="text-base sm:text-lg text-sky-100 max-w-2xl leading-relaxed">
                  {missionSlides[activeMissionSlide].description}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-inner">
                  {React.createElement(missionSlides[activeMissionSlide].icon, { className: 'w-14 h-14' })}
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-center space-x-2">
                {missionSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMissionSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeMissionSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevMission}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous mission slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextMission}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next mission slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES: P.R.I.D.E (from about-us.html background: rgba(239,233,244,0.75)) */}
      <section className="bg-[#f7f3f9] py-16 sm:py-24 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Header & Milestone CTA */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-200/80 text-purple-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
                Core <br className="hidden sm:inline" />
                Values
              </h2>
              <p className="text-base text-slate-600">
                We serve with <strong>P.R.I.D.E</strong> in every client interaction, advisory consultation, and team collaboration.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('milestone')}
                  className="px-6 py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold rounded-xl shadow-sm flex items-center space-x-2 transition-all"
                >
                  <span>Check Out Our Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right PRIDE Breakdown Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_VALUES.map((val) => (
                <div
                  key={val.letter}
                  className="bg-white p-6 rounded-2xl border border-purple-100 shadow-xs hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center font-serif text-2xl font-extrabold text-[#2c72af]">
                      {val.letter}
                    </div>
                    {getIconComponent(val.iconName)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
