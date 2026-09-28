import React, { useState } from 'react';
import { PageId } from '../types';
import { TESTIMONIALS, CONTACT_INFO, COACH_HERO_ROTATING_IMAGES, APPLY_NOW_FORM_URL } from '../data/siteData';
import centralRecognition2025Img from '../assets/images/central-recognition-2025.jpeg';
import eastspringAchieversImg from '../assets/images/eastspring-achievers-club-2025.jpeg';
import coachBannerDiveConventionImg from '../assets/images/coach-banner-dive-convention.jpg';
import coachBannerProtectOfficeImg from '../assets/images/coach-banner-protect-office.jpg';
import coachBannerPrudentialGalaImg from '../assets/images/coach-banner-prudential-gala.jpg';
import coachBannerHanoiFoodTripImg from '../assets/images/coach-banner-hanoi-food-trip.jpg';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  ArrowRight,
} from 'lucide-react';

interface EliteWealthCoachPageProps {
  onNavigate: (page: PageId) => void;
}

const OPPORTUNITY_BANNER_IMAGES = [
  { id: 'karaoke-group', url: COACH_HERO_ROTATING_IMAGES[0].url, alt: COACH_HERO_ROTATING_IMAGES[0].alt },
  { id: 'office-group', url: COACH_HERO_ROTATING_IMAGES[1].url, alt: COACH_HERO_ROTATING_IMAGES[1].alt },
  { id: 'internship-batch', url: COACH_HERO_ROTATING_IMAGES[2].url, alt: COACH_HERO_ROTATING_IMAGES[2].alt },
  { id: 'eastspring-achievers', url: eastspringAchieversImg, alt: 'Eastspring Achievers Club 2025 - Egypt Trip Qualifiers' },
  { id: 'dive-convention', url: coachBannerDiveConventionImg, alt: 'Nuovo Paradigm at a dive & travel convention booth' },
  { id: 'protect-office', url: coachBannerProtectOfficeImg, alt: 'Nuovo Paradigm team at the Protect office event' },
  { id: 'prudential-gala', url: coachBannerPrudentialGalaImg, alt: 'Nuovo Paradigm team at a Prudential gala event' },
  { id: 'hanoi-food-trip', url: coachBannerHanoiFoodTripImg, alt: 'Nuovo Paradigm team on a Hanoi food trip' },
];

export const EliteWealthCoachPage: React.FC<EliteWealthCoachPageProps> = ({ onNavigate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [imgErrorMap, setImgErrorMap] = useState<{ [key: string]: boolean }>({});

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION: Plain Gradient Background (matches Products & Services hero colors) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#27bac4] via-[#2f9abc] to-[#2c72af] text-white py-20 sm:py-28 border-b border-[#27bac4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
              Careers &amp; Opportunities
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              We believe in growing together with our clients and our associates.
            </h1>
            <p className="text-xl font-medium text-sky-100 leading-relaxed">
              Growth in terms of wealth and asset, increase net worth &amp; financial knowledge.
            </p>
            <div className="pt-2 flex items-center justify-center space-x-4">
              <button
                type="button"
                onClick={() => document.getElementById('coach-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#2c72af] font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION BANNER (from original background: #fff8f7) */}
      <section className="bg-[#fff8f7] py-12 sm:py-16 border-b border-rose-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            <span className="text-rose-700">Here&rsquo;s an opportunity</span> to earn the income that you desire and the choice of living your own balanced lifestyle.
          </h2>
        </div>

        {/* Moving chain of photos */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee">
            {[...OPPORTUNITY_BANNER_IMAGES, ...OPPORTUNITY_BANNER_IMAGES].map((img, idx) => (
              <div key={`${img.id}-${idx}`} className="w-48 sm:w-64 aspect-4/3 rounded-xl overflow-hidden shadow-md shrink-0">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE DILEMMA SECTION (from home page) */}
      <section className="bg-[#eaf8fa] py-16 sm:py-20 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              In order for you to enjoy your <span className="text-[#27bac4]">desired</span>, <span className="text-[#27bac4]">balanced</span>, and <span className="text-[#27bac4]">freedom</span> of choice lifestyle, you have to first earn the income that you desire.
            </h2>
            <p className="mt-4 text-base font-semibold text-slate-700">The problem is:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100/80 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Income Ceiling</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your current job or corporate role doesn’t give you the ability to earn a significantly higher income regardless of performance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100/80 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Effort vs Reward Disparity</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                You may be putting in excessive hours, overtime, and sacrifices, but the rewards and recognition never reflect your true value.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100/80 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Lack of Future Visibility</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                You are unable to see a compelling future 5 to 10 years down the road in your current career path or company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS CAROUSEL (from home page) */}
      <section className="bg-[#2c72af] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sky-200 text-xs font-bold uppercase tracking-wider">Real Transformation Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">
              From Corporate Bottlenecks to Wealth Leaders
            </h2>
          </div>

          {/* Carousel Card */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-xl mx-auto bg-slate-700 relative">
                  {!imgErrorMap[TESTIMONIALS[activeTestimonial].id] ? (
                    <img
                      src={TESTIMONIALS[activeTestimonial].image}
                      alt={TESTIMONIALS[activeTestimonial].name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: TESTIMONIALS[activeTestimonial].imageObjectPosition || 'center' }}
                      onError={() => {
                        setImgErrorMap((prev) => ({ ...prev, [TESTIMONIALS[activeTestimonial].id]: true }));
                      }}
                    />
                  ) : (
                    <div className={`w-full h-full ${TESTIMONIALS[activeTestimonial].avatarBg} flex items-center justify-center text-white text-3xl font-serif font-bold`}>
                      {TESTIMONIALS[activeTestimonial].name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h4 className="mt-3 text-lg font-bold font-serif">{TESTIMONIALS[activeTestimonial].name}</h4>
                <p className="text-xs text-sky-200 max-w-xs">{TESTIMONIALS[activeTestimonial].role}</p>
              </div>

              <div className="space-y-4 text-slate-100 text-sm sm:text-base leading-relaxed italic whitespace-pre-line">
                <p>&ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/15">
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeTestimonial === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white/15 hover:bg-white/30 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white/15 hover:bg-white/30 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMAGINE 5 YEARS FROM NOW (from home page) */}
      <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
              <span className="text-[#27bac4]">Imagine</span> this...
            </h2>
            <p className="text-base text-slate-600 mt-2">
              5 years from now, which reality will you choose?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Nuovo Paradigm Path */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50/50 p-8 rounded-2xl border border-sky-200 shadow-sm space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your Life with Nuovo Paradigm</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Freedom of Schedule & Work-Life Balance</h4>
                    <p className="text-xs text-slate-600 mt-0.5">The power to plan your day on your own terms and strike harmony between personal joy and business success.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Control Over Your Financial Destiny</h4>
                    <p className="text-xs text-slate-600 mt-0.5">No arbitrary salary caps. Your income directly mirrors your dedication, skill, and client impact.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Abundance & Leadership Culture</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Surround yourself with mentors who uplift you and celebrate your milestones together.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Stagnant Corporate Path */}
            <div className="bg-slate-100/80 p-8 rounded-2xl border border-slate-200 text-slate-600 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase">
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>Staying Where You Are</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Time-Constrained & Overwhelmed</h4>
                    <p className="text-slate-600 mt-0.5">Locked into rigid 9-to-6 routines with endless meetings and no personal time for health or family.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Annual Stagnation</h4>
                    <p className="text-slate-600 mt-0.5">Hitting KPIs year after year only to reset back to zero with modest incremental increments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Compromised Family Dreams</h4>
                    <p className="text-slate-600 mt-0.5">Unable to afford the quality lifestyle, overseas experiences, or education you envisioned for loved ones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-STEP HOW TO START (from home page) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[#2c72af] text-xs font-bold uppercase tracking-wider">How to Start?</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-2">
              Here&rsquo;s the deal and it&rsquo;s super simple…
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-[#2c72af] transition-all">
              <div className="text-3xl font-extrabold text-[#2c72af] font-serif mb-3">Step 1.</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Apply through the form</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill in your details below. Wait for our call — we would love to get to know you and your ambitions!
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-[#2c72af] transition-all">
              <div className="text-3xl font-extrabold text-[#2c72af] font-serif mb-3">Step 2.</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Join &amp; Learn</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Qualify and undergo our structured onboarding curriculum, 1-on-1 mentorship, and practical fieldwork.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-[#2c72af] transition-all">
              <div className="text-3xl font-extrabold text-[#2c72af] font-serif mb-3">Step 3.</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Follow our proven system</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Execute daily best practices with our guidance to build a thriving, sustainable financial client base.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-[#eaf8fa] border border-sky-200 relative group hover:shadow-md transition-all">
              <div className="text-3xl font-extrabold text-[#2c72af] font-serif mb-3">Step 4.</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Million Dollar Success</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Achieve industry recognition, prestigious awards, and build multi-generational personal wealth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-10">
            {[
              COACH_HERO_ROTATING_IMAGES[5],
              COACH_HERO_ROTATING_IMAGES[6],
              {
                id: 'central-recognition-2025-howto',
                url: centralRecognition2025Img,
                alt: 'Nuovo Paradigm team at Central Recognition 2025',
                caption: 'Central Recognition 2025',
              },
            ].map((img) => (
              <div key={img.id} className="space-y-2">
                <div className="aspect-4/3 rounded-xl overflow-hidden shadow-sm">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <p className="text-[11px] text-slate-500 text-center">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPLICATION FORM SECTION (links to Google Form) */}
      <section id="coach-form" className="bg-[#eaf8fa]/60 py-16 sm:py-20 border-t border-sky-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl border border-sky-100 shadow-md p-8 sm:p-12">
            <div className="rounded-2xl overflow-hidden shadow-md mb-6 max-w-sm mx-auto">
              <img
                src={COACH_HERO_ROTATING_IMAGES[4].url}
                alt={COACH_HERO_ROTATING_IMAGES[4].alt}
                className="w-full h-40 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Start Your Journey</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">Apply Now</h2>
            <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
              Click below to open our application form &mdash; it takes just a few minutes and lets you attach your resume/CV directly.
            </p>
            <a
              href={APPLY_NOW_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#27bac4] hover:bg-[#20aab4] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-600 space-y-1">
              <p><strong>Hotline:</strong> {CONTACT_INFO.phone}</p>
              <p><strong>Talent Team:</strong> {CONTACT_INFO.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
