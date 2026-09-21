import React from 'react';
import { PageId } from '../types';
import { CORE_VALUES, OUR_LEADERS } from '../data/siteData';
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Lightbulb,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const missionSlides = [
    {
      eyebrow: 'We provide',
      title: 'Wealth Planning Services',
      description: 'That coach our clients towards a clear goal of what they want to achieve in every chapter of life.',
      icon: Compass,
      bgColor: 'from-[#1b4b75] to-[#0b2742]',
    },
    {
      eyebrow: 'We become',
      title: 'A One-Stop Solution',
      description: 'A dedicated wealth planning partner to help implement financial strategies that make a tangible difference.',
      icon: HeartHandshake,
      bgColor: 'from-[#2c72af] to-[#173e60]',
    },
    {
      eyebrow: 'We strive to',
      title: "Exceed The Industry's Standard",
      description: 'To produce and nurture the highest benchmark of extraordinary leaders, advisors, and premier producers.',
      icon: Lightbulb,
      bgColor: 'from-[#0b2742] to-slate-900',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. VISION HERO BANNER: Plain Gradient Background (mirrors the Careers page hero) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#173e60] via-[#0b2742] to-slate-950 py-20 sm:py-28 border-b border-[#173e60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
              Our Strategic Vision
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              Our Vision
            </h1>
            <p className="text-xl font-medium text-[#27bac4] leading-relaxed">
              &ldquo;We aspire to build a group of millionaires that earned the choice of living their desired lifestyle with a balance in all aspects of their lives.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 2. MEET OUR LEADERS */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 text-center mb-12">
            Meet Our Leaders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6">
            {OUR_LEADERS.map((leader) => (
              <div key={leader.id} className="text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm mx-auto bg-slate-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: leader.imageObjectPosition || 'center' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="mt-3 text-sm font-bold text-slate-900">{leader.name}</p>
                {leader.role && (
                  <p className="text-xs text-slate-500 mt-0.5">{leader.role}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION OVERVIEW (from about-us.html) */}
      <section className="py-16 sm:py-24 bg-[#eaf8fa] border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-1">
              This is how we work towards our vision.
            </h2>
          </div>

          {/* All Mission Pillars, visible at once */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl bg-gradient-to-br ${slide.bgColor} text-white p-8 overflow-hidden shadow-xl flex flex-col space-y-5`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                  {React.createElement(slide.icon, { className: 'w-8 h-8' })}
                </div>
                <div className="space-y-2">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    {slide.eyebrow}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-sky-100 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES: P.R.I.D.E */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Header & Milestone CTA */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
              Core Values
            </h2>
            <p className="text-base text-slate-600">
              We serve with <strong>P.R.I.D.E</strong> in every client interaction, advisory consultation, and team collaboration.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('milestone')}
                className="px-6 py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold rounded-xl shadow-sm flex items-center space-x-2 transition-all mx-auto"
              >
                <span>Check Out Our Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal PRIDE Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CORE_VALUES.map((val) => (
              <div
                key={val.letter}
                className="bg-white p-6 rounded-2xl border border-purple-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 space-y-3 text-center cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center font-serif text-2xl font-extrabold text-[#2c72af] mx-auto">
                  {val.letter}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
