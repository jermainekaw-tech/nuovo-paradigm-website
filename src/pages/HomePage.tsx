import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CONTACT_INFO, HERO_ROTATING_IMAGES, WEB3FORMS_ACCESS_KEY } from '../data/siteData';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Coins,
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Users,
  Paperclip,
  X,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenApplyModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [currentHeroImg, setCurrentHeroImg] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    status: 'Employed',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

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

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setResumeFile(null);
      setResumeError('');
      return;
    }
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setResumeError('Please upload a PDF or Word document (.pdf, .doc, .docx).');
      setResumeFile(null);
      e.target.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError('File is too large. Please keep it under 5MB.');
      setResumeFile(null);
      e.target.value = '';
      return;
    }
    setResumeError('');
    setResumeFile(file);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendError('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Apply Now Application - Nuovo Paradigm',
          from_name: formData.name,
          email: formData.email,
          Name: formData.name,
          Phone: formData.phone,
          'How Soon Can You Start': formData.startDate,
          'Currently': formData.status,
          'Resume Filename': resumeFile ? resumeFile.name : 'Not attached',
        }),
      });
      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        setSendError('We could not send your application. Please try again or email us directly at ' + CONTACT_INFO.email + '.');
      }
    } catch {
      setSendError('We could not send your application. Please try again or email us directly at ' + CONTACT_INFO.email + '.');
    } finally {
      setIsSending(false);
    }
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
                  onClick={() => onNavigate('elite-wealth-coach')}
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-700/80 text-left bg-slate-900/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#27bac4] font-serif">20+</div>
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
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#27bac4] font-serif">100%</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Well-Trained, Knowledge-Based Planners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US & OUR APPROACH */}
      <section className="bg-[#eaf8fa] py-16 sm:py-20 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#2c72af] text-xs font-bold uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-snug">
              A One-Stop Wealth Planning Partner
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nuovo Paradigm Wealth Planning Services is a professional wealth planning organization dedicated to helping individuals and businesses build, manage, and grow their wealth with greater clarity and confidence. We believe wealth planning should be simple, structured, and personalized &mdash; because we believe in humanity beyond finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-[#eaf8fa] text-[#2c72af] flex items-center justify-center font-bold text-sm mb-4">01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Listen</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We take the time to understand our clients&rsquo; goals, aspirations, concerns, and priorities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-[#eaf8fa] text-[#2c72af] flex items-center justify-center font-bold text-sm mb-4">02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Plan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We help clients establish a clear and structured financial roadmap aligned with their circumstances and ambitions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-[#eaf8fa] text-[#2c72af] flex items-center justify-center font-bold text-sm mb-4">03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Coach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide ongoing guidance and annual financial health reviews to help clients stay accountable and informed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-[#2c72af] text-white flex items-center justify-center font-bold text-sm mb-4">04</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Grow</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We help clients work toward sustainable wealth creation and greater financial confidence over the long term.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm text-center">
            <p className="text-sm text-slate-600 leading-relaxed">
              Our <strong className="text-slate-900">Personalized Financial Health Check</strong> gives clients a clearer understanding of their short, medium, and long-term financial goals. Following the assessment, clients receive a <strong className="text-slate-900">45-minute annual coaching session</strong> to review progress and reassess their priorities as life evolves.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY NUOVO PARADIGM (TRUST STATS) */}
      <section className="bg-[#2c72af] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sky-200 text-xs font-bold uppercase tracking-wider">Why Nuovo Paradigm</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">
              Great Client Service Starts with Great People
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">90%</div>
              <p className="text-xs text-sky-100 mt-2">Team members are graduates from diverse academic backgrounds</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">20%</div>
              <p className="text-xs text-sky-100 mt-2">Team members are Million Dollar Round Table (MDRT) producers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
              <Users className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="text-xs text-sky-100">Planners pursue RFP, CFP &amp; ChFP professional qualifications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
              <ShieldCheck className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="text-xs text-sky-100">Tied agency with PruBSN Takaful &amp; franchise holder for as-Salihin</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('about-us')}
              className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold text-sm transition-all shadow-lg cursor-pointer"
            >
              Meet Our Leaders &amp; Core Values
            </button>
          </div>
        </div>
      </section>

      {/* 4. OUR SOLUTIONS OVERVIEW */}
      <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#2c72af] text-xs font-bold uppercase tracking-wider">Our Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-2">
              Comprehensive Wealth Planning for Every Stage
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              From wealth protection and accumulation to wealth creation and distribution &mdash; for individuals and corporates alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual Wealth Planning */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#eaf8fa] text-[#2c72af] text-xs font-bold uppercase">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Individual Wealth Planning</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#2c72af] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Wealth Protection &amp; Creation</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Insurance solutions designed to protect financial security while supporting long-term wealth creation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Coins className="w-5 h-5 text-[#2c72af] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Wealth Accumulation</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Investment and wealth accumulation solutions to help clients grow assets and achieve financial goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c72af] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Wealth Distribution</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Will, Trust, and estate planning solutions to help clients distribute their wealth according to their wishes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-[#2c72af] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Islamic Wealth Planning</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Solutions aligned with Islamic financial and estate planning principles.</p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Our Goal: Protect &rarr; Accumulate &rarr; Distribute &rarr; Leave a Legacy
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#2c72af] hover:underline flex items-center space-x-1 cursor-pointer"
              >
                <span>Explore Products &amp; Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Corporate Solutions */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#eaf8fa] text-[#2c72af] text-xs font-bold uppercase">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Corporate Solutions</span>
              </div>
              <p className="text-xs text-slate-500">
                Supporting businesses in protecting their organizations, people, and key assets.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c72af] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Group Insurance</strong> &mdash; employee protection that complements existing benefits.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c72af] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Company General Insurance</strong> &mdash; managing operational and commercial risks.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c72af] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Directors&rsquo; &amp; Keyman Insurance</strong> &mdash; safeguarding against the loss of key decision-makers.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c72af] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Buy-Sell Agreements &amp; Business Protection Trusts</strong> &mdash; continuity and succession planning.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c72af] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Employee Financial Education</strong> &mdash; sessions to improve financial knowledge and awareness.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c72af] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Dive Accident &amp; Travel Insurance</strong> &mdash; specialized protection for diving and travel activities.</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('other-services')}
                className="text-xs font-bold text-[#2c72af] hover:underline flex items-center space-x-1 cursor-pointer pt-1"
              >
                <span>View General Insurance &amp; More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORPORATE FINANCIAL EDUCATION & OUR COMMITMENT */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-[#2c72af] text-xs font-bold uppercase tracking-wider">Beyond Financial Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-2">
              Coaching Our Clients to Soar Higher
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              We regularly conduct physical and virtual financial education sessions for corporate clients and their employees &mdash; increasing awareness and providing practical knowledge on financial planning, protection, wealth accumulation, and distribution.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-14">
            {[
              'Financial Health Check',
              'The Importance of Insurance',
              'Money Management',
              'Estate Planning',
              'Financial Freedom',
              'Personal Wealth Planning',
              'Employee Financial Well-Being',
              'Family Financial Planning',
              'Career Briefings',
              'Family Gathering Day',
              'People First ESG',
            ].map((topic) => (
              <span
                key={topic}
                className="px-3.5 py-1.5 rounded-full bg-[#eaf8fa] text-[#2c72af] text-xs font-semibold"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#173e60] via-[#0b2742] to-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <img
              src="/images/nuovo-logo-checkmark-transparent.png"
              alt="Nuovo Paradigm"
              className="h-10 w-auto mx-auto"
            />
            <p className="text-base sm:text-lg font-serif leading-relaxed">
              &ldquo;At Nuovo Paradigm Wealth Planning Services, we provide comprehensive wealth planning solutions designed to support our clients through every stage of their financial journey &mdash; from wealth protection and accumulation to wealth creation and distribution.&rdquo;
            </p>
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
                    Thank you, <strong>{formData.name}</strong>. We&rsquo;ve emailed your application to our talent team &mdash; our recruitment coordinator will contact you shortly to schedule an interview.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setResumeFile(null);
                    }}
                    className="mt-4 px-5 py-2 bg-[#2c72af] text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {sendError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700">
                      {sendError}
                    </div>
                  )}
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

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Attach Your Resume/CV
                    </label>
                    {resumeFile ? (
                      <div className="flex items-center justify-between px-3 py-2 text-xs border border-slate-300 rounded-lg bg-slate-50">
                        <span className="flex items-center space-x-2 text-slate-700 truncate">
                          <Paperclip className="w-3.5 h-3.5 text-[#2c72af] shrink-0" />
                          <span className="truncate">{resumeFile.name}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="p-1 text-slate-400 hover:text-slate-700 shrink-0"
                          aria-label="Remove attached resume"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex items-center space-x-2 px-3 py-2 text-xs border border-dashed border-slate-300 rounded-lg text-slate-500 hover:border-[#2c72af] hover:text-[#2c72af] cursor-pointer transition-colors">
                        <Paperclip className="w-3.5 h-3.5 shrink-0" />
                        <span>Click to upload PDF or Word document (max 5MB)</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeChange}
                          className="hidden"
                        />
                      </label>
                    )}
                    {resumeError && (
                      <p className="text-[11px] text-rose-600 mt-1">{resumeError}</p>
                    )}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="px-6 py-2.5 bg-[#27bac4] hover:bg-[#20aab4] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg shadow-sm flex items-center space-x-2 transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSending ? 'Sending...' : 'Apply Now!'}</span>
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
