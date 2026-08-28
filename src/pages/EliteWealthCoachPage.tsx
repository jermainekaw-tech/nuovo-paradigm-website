import React, { useState } from 'react';
import { PageId } from '../types';
import { TESTIMONIALS, CONTACT_INFO } from '../data/siteData';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Award,
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  Target,
  ArrowRight,
} from 'lucide-react';

interface EliteWealthCoachPageProps {
  onNavigate: (page: PageId) => void;
}

export const EliteWealthCoachPage: React.FC<EliteWealthCoachPageProps> = ({ onNavigate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    status: 'Employed',
  });

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
      {/* 1. HERO SECTION (from elite-wealth-coach.html) */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2c72af]/10 text-[#2c72af] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career &amp; Mentorship Opportunity</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 leading-tight">
              We believe in growing together with our clients and our associates.
            </h1>
            <p className="text-xl font-medium text-[#2c72af] leading-relaxed">
              Growth in terms of wealth and asset, increase net worth &amp; financial knowledge.
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="#coach-form"
                className="px-6 py-3 rounded-xl bg-[#27bac4] hover:bg-[#20aab4] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION BANNER (from original background: #fff8f7) */}
      <section className="bg-[#fff8f7] py-12 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            <span className="text-rose-700">Here&rsquo;s an opportunity</span> to earn the income that you desire and the choice of living your own balanced lifestyle.
          </h2>
        </div>
      </section>

      {/* 3. 100 MILLION GOAL & PROVEN SYSTEM */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase">
                <Target className="w-3.5 h-3.5" />
                <span>Our 5-Year Milestone</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 leading-snug">
                <span className="text-[#27bac4]">It&rsquo;s never a &ldquo;big enough&rdquo; team</span> in Nuovo Paradigm.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium">
                Our goal is to Achieve a total of <strong>100 Million Dollar Awards</strong> in the next 5 years. You could be part of it too.
              </p>

              <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3 text-sm text-slate-700 leading-relaxed">
                <p className="font-bold text-[#2c72af]">The best part is...</p>
                <p>
                  We have a proven system and leaders to guide you. We have used this exact system to create successful Nuovo Planners for over 15+ years.
                </p>
                <p>
                  Everyone who works hard and puts in the effort is treated fairly in terms of recognition, uncapped income, and rapid career promotion.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#coach-form"
                  className="inline-flex items-center px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Apply For Wealth Coach
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-[#2c72af] to-slate-900 p-8 sm:p-10 rounded-3xl text-white shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif">Equal Growth Opportunity</h3>
              <p className="text-sm text-sky-100 leading-relaxed">
                In Nuovo Paradigm, everyone is given an equal chance to advance their career and be promoted to earn next-level income without corporate politics.
              </p>
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center space-x-2.5 bg-white/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent promotion criteria</span>
                </div>
                <div className="flex items-center space-x-2.5 bg-white/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% need-based client trust culture</span>
                </div>
                <div className="flex items-center space-x-2.5 bg-white/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full leadership &amp; agency management tracks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL STORIES CAROUSEL */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Real Proof</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-1">
              Look At Them Now.
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto bg-slate-800/80 rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 text-center">
                <div className={`w-24 h-24 rounded-full ${TESTIMONIALS[activeTestimonial].avatarBg} flex items-center justify-center text-white text-3xl font-serif font-bold shadow-lg border-2 border-white/20 mx-auto`}>
                  {TESTIMONIALS[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="mt-3 text-lg font-bold font-serif">{TESTIMONIALS[activeTestimonial].name}</h4>
                <p className="text-xs text-sky-300">{TESTIMONIALS[activeTestimonial].role}</p>
              </div>

              <div className="space-y-4 text-slate-200 text-sm leading-relaxed italic">
                <p>&ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeTestimonial === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-600'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM (from elite-wealth-coach.html) */}
      <section id="coach-form" className="py-16 sm:py-24 bg-sky-50/60 border-t border-sky-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Your Turn</span>
            <h2 className="text-3xl font-bold font-serif text-slate-900 mt-1">
              Apply For Wealth Coach Mentorship
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Submit your info below to arrange an interview with our Managing Director &amp; Agency Leaders.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-serif">Application Submitted!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We will reach out to you via {formData.phone} or {formData.email} to schedule your discovery session.
                </p>
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
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email *
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
                      Phone *
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
                      How soon can you start *
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
                    className="px-6 py-2.5 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold rounded-lg shadow-sm flex items-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Apply Now!</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
