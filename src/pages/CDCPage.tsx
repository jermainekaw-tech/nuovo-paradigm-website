import React from 'react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data/siteData';
import {
  Waves,
  AlertCircle,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

interface CDCPageProps {
  onNavigate: (page: PageId) => void;
}

const CDC_FORM_URL = 'https://form.jotform.com/32243432889863';

export const CDCPage: React.FC<CDCPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-50">
      {/* Hero: Plain Gradient Background (mirrors the About/Careers page hero) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#173e60] via-[#0b2742] to-slate-950 py-20 sm:py-28 border-b border-[#173e60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
              <Waves className="w-3.5 h-3.5" />
              <span>Comprehensive Dive Coverage (CDC)</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              Dive &amp; Travel Protection Plans
            </h1>
            <p className="text-xl font-medium text-[#27bac4] leading-relaxed">
              Nuovo Paradigm brings you bundled international travel protection with dedicated hyperbaric decompression chamber treatment, partnered with DiveAssist, Generali, and Northcott Global Solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. PRICING COMPARISON TABLE (from cdc2.html background: #d2eff5) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Package Pricing Schedule</h3>
              <p className="text-xs text-slate-500">*Application &amp; pricing applicable for age 64 and below.</p>
            </div>
            <button
              onClick={() => onNavigate('psp')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <span>View Bank Transfer &amp; Payment (PSP)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-sky-50 text-[#2c72af] text-xs uppercase tracking-wider font-bold">
                  <th className="py-3 px-4 rounded-l-lg">Package Option</th>
                  <th className="py-3 px-4">Coverage Scope</th>
                  <th className="py-3 px-4">Annual (RM)</th>
                  <th className="py-3 px-4 rounded-r-lg">Weekly (RM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                <tr className="hover:bg-slate-50/80">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    Dive &amp; Travel (Int&rsquo;-1) + Pandemic
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Asia-Pacific (Australia, Japan, Indonesia, Thailand, China, etc.)
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#2c72af]">RM 813</td>
                  <td className="py-3.5 px-4 font-semibold">RM 238</td>
                </tr>

                <tr className="hover:bg-slate-50/80">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    Dive &amp; Travel (Int&rsquo;-2) + Pandemic
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Worldwide coverage (Excluding USA, Canada, sanctioned countries)
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#2c72af]">RM 1,027</td>
                  <td className="py-3.5 px-4 font-semibold">RM 304</td>
                </tr>

                <tr className="hover:bg-slate-50/80">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    Dive ONLY (No Travel)
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Hyperbaric chamber &amp; dive medical evacuation worldwide
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#2c72af]">RM 361</td>
                  <td className="py-3.5 px-4 font-semibold">RM 149</td>
                </tr>

                <tr className="hover:bg-slate-50/80 bg-sky-50/30">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    Domestic Dive &amp; Travel
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Local Malaysia trip (5-Day Travel, 3-Day Diving)
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">&mdash;</td>
                  <td className="py-3.5 px-4 font-bold text-[#2c72af]">RM 171</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. IMPORTANT NOTES & EMERGENCY CONTACTS (from cdc2.html) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Notes & Geographic Scope */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs text-slate-600 leading-relaxed">
            <h4 className="text-base font-bold font-serif text-slate-900">Important Guidelines</h4>
            
            <div className="space-y-2.5">
              <p>
                <strong>1. Geographic Coverage:</strong>
                <br />
                &bull; <strong>Travel (Int&rsquo;-1):</strong> Malaysia, Australia, Brunei, Cambodia, China (excluding Mongolia, Nepal &amp; Tibet), Hong Kong, Macau, India, Indonesia, Japan, South Korea, Laos, Myanmar, New Zealand, Pakistan, Philippines, Singapore, Sri Lanka, Taiwan, Thailand, and Vietnam.
                <br />
                &bull; <strong>Travel (Int&rsquo;-2):</strong> Worldwide EXCLUDING USA, Canada, Iran, Syria, Belarus, Cuba, DR Congo, North Korea, Somalia, Sudan, South Sudan, Crimea, Russia, Ukraine, and Zimbabwe.
              </p>

              <p>
                <strong>2. Dive Coverages:</strong> Follows Int&rsquo;-2 countries for all diving-related activities.
              </p>

              <p>
                <strong>3. Application Lead Time:</strong> Kindly apply at least <strong>48 working hours</strong> prior to your departure for policy endorsement and issuance.
              </p>

              <p>
                <strong>4. Submission:</strong> For inquiries or proof of payment, email: <a href={`mailto:${CONTACT_INFO.cdcEmail}`} className="text-[#2c72af] font-semibold">{CONTACT_INFO.cdcEmail}</a> or call <span className="font-semibold">{CONTACT_INFO.phone}</span>.
              </p>
            </div>
          </div>

          {/* Emergency 24-Hour Hotlines */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 p-6 sm:p-8 rounded-3xl text-white shadow-md space-y-6">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>24-Hour Emergency Contacts</span>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-1">
                <div className="text-xs text-sky-200 font-bold uppercase">24h Medical Assistance Co.</div>
                <div className="text-sm font-bold text-white">Northcott Global Solutions Ltd (NGS)</div>
                <div className="text-amber-300 font-mono font-bold text-base">+44 (0)207 183 8910</div>
                <a
                  href="https://diveassist.org/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-sky-300 hover:underline flex items-center gap-1 pt-1"
                >
                  <span>diveassist.org/contact</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-1">
                <div className="text-xs text-sky-200 font-bold uppercase">GENERALI Travel Assistance Hotline</div>
                <div className="text-sm font-bold text-white">24/7 Worldwide Assistance</div>
                <div className="text-emerald-400 font-mono font-bold text-base">+603 2142 0399</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CDC APPLICATION FORM (embedded from the original site) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Fast Digital Issuance</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
                CDC Application Form
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Complete your coverage details directly below &mdash; you&rsquo;ll receive an official confirmation and payment instructions.
              </p>
            </div>
            <a
              href={CDC_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center space-x-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Comprehensive Dive Coverage (CDC) Application Form"
              src={CDC_FORM_URL}
              className="w-full"
              style={{ height: '1860px' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
