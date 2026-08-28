import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { TESTIMONIALS, CONTACT_INFO, ASSETS, HERO_ROTATING_IMAGES } from '../data/siteData';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Clock,
  Coins,
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Target,
  Users,
  Camera,
  Play,
  Pause,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentHeroImg, setCurrentHeroImg] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [imgErrorMap, setImgErrorMap] = useState<{ [key: string]: boolean }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    status: 'Employed',
  });

  // Auto-rotate hero images every 5 seconds
  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setCurrentHeroImg((prev) => (prev + 1) % HERO_ROTATING_IMAGES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHeroPaused]);

  const nextHeroImg = () => {
    setCurrentHeroImg((prev) => (prev + 1) % HERO_ROTATING_IMAGES.length);
  };

  const prevHeroImg = () => {
    setCurrentHeroImg((prev) => (prev - 1 + HERO_ROTATING_IMAGES.length) % HERO_ROTATING_IMAGES.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION: Problem Statement & Team Showcase with Rotating Background Images */}
      <section 
        className="relative overflow-hidden bg-slate-950 min-h-[750px] sm:min-h-[850px] lg:min-h-[900px] flex flex-col justify-end pt-64 sm:pt-80 lg:pt-96 pb-16 sm:pb-20 border-b border-slate-800"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
      >
        {/* Rotating Background Image Carousel with Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {HERO_ROTATING_IMAGES.map((imgItem, idx) => {
            const isActive = idx === currentHeroImg;
            return (
              <div
                key={imgItem.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transitionProperty: 'opacity' }}
              >
                <img
                  src={imgItem.url}
                  alt={imgItem.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: imgItem.objectPosition || 'top' }}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (imgItem.fallbackUrl) {
                      (e.target as HTMLImageElement).src = imgItem.fallbackUrl;
                    }
                  }}
                />
              </div>
            );
          })}

          {/* Dark Overlay: Crisp & completely transparent on top so entire photo is clearly visible, smooth dark gradient at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Lower Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 gap-10 items-end">
            {/* Left Column: Story & Headline */}
            <div className="max-w-3xl space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif leading-tight tracking-tight drop-shadow-lg">
                Coaching you to reach <br className="hidden sm:inline" />
                <span className="text-[#27bac4]">your financial dreams</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl drop-shadow-md">
                Helping our clients achieve financial independence and become millionaires through purposeful wealth planning.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenApplyModal}
                  className="px-7 py-3.5 rounded-xl bg-[#27bac4] hover:bg-[#20aab4] text-white font-bold text-sm shadow-xl hover:shadow-cyan-500/25 transition-all flex items-center space-x-2 group cursor-pointer"
                >
                  <span>Join Our Success Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold text-sm transition-all shadow-lg cursor-pointer"
                >
                  Explore Advisory Services
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/80 text-left bg-slate-900/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#27bac4] font-serif">15+</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Years Established</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#27bac4] font-serif">100M</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">5-Year Agency Goal</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#27bac4] font-serif">100%</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Need-Based Planning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE DILEMMA SECTION */}
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

      {/* 3. TESTIMONIALS CAROUSEL */}
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

      {/* 4. IMAGINE 5 YEARS FROM NOW */}
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

      {/* 5. 4-STEP HOW TO START */}
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
        </div>
      </section>

      {/* 6. APPLICATION FORM SECTION */}
      <section id="form" className="bg-[#eaf8fa]/60 py-16 sm:py-20 border-t border-sky-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Start Your Journey</span>
              <h2 className="text-3xl font-bold font-serif text-slate-900">Apply Now</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fill in this form to begin exploring wealth planning opportunities with Nuovo Paradigm.
              </p>
              <div className="pt-4 text-xs text-slate-600 space-y-1">
                <p><strong>Hotline:</strong> {CONTACT_INFO.phone}</p>
                <p><strong>Talent Team:</strong> {CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-sky-100">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-serif">Application Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our recruitment coordinator will contact you shortly to schedule an interview.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2 bg-[#2c72af] text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Name - (as per IC) *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="Your full legal name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="email"
                          required
                          placeholder="Your working email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          placeholder="Your actual phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        How Soon Can You Start? *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="date"
                          required
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Currently, you are? *
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] bg-white"
                        >
                          <option value="Employed">Employed</option>
                          <option value="Un-Employed">Un-Employed</option>
                          <option value="Student">Student</option>
                          <option value="Self Employed">Self Employed</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold rounded-lg shadow-sm flex items-center space-x-2 transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Apply Now!</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERNSHIP CALLOUT BANNER */}
      <section className="bg-[#173e60] text-white py-12 border-t border-[#2c72af]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2c72af] via-[#1f507b] to-[#173e60] p-8 sm:p-10 rounded-2xl border border-white/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[#27bac4] text-xs font-bold uppercase tracking-wider">Undergraduate & Graduate Opportunity</span>
              <h3 className="text-2xl font-bold font-serif text-white">Join Our Wealth Entrepreneur Internship Program</h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Are you ready to accelerate your career in personal finance and corporate risk management? Send your CV directly to <span className="font-semibold text-white">{CONTACT_INFO.internshipEmail}</span> or apply via JobStreet.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.jobstreet.com.my"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold rounded-lg shadow-md flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <span>JobStreet Quick Apply</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenApplyModal}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg border border-white/25 transition-all cursor-pointer"
              >
                Direct Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
