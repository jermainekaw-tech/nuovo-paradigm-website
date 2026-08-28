import React, { useState } from 'react';
import { PageId } from '../types';
import { CDC_PACKAGES, CONTACT_INFO } from '../data/siteData';
import {
  Waves,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  FileText,
  AlertCircle,
  Calculator,
  Send,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface CDCPageProps {
  onNavigate: (page: PageId) => void;
}

export const CDCPage: React.FC<CDCPageProps> = ({ onNavigate }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('dive-travel-int1');
  const [duration, setDuration] = useState<'annual' | 'weekly'>('annual');
  const [applicantSubmitted, setApplicantSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    passportIC: '',
    dob: '',
    email: '',
    phone: '',
    plan: 'dive-travel-int1',
    duration: 'annual',
    startDate: '',
  });

  const getSelectedPrice = () => {
    const pkg = CDC_PACKAGES.find((p) => p.id === selectedPlan);
    if (!pkg) return 0;
    if (pkg.annualMYR === 0) return pkg.weeklyMYR;
    return duration === 'annual' ? pkg.annualMYR : pkg.weeklyMYR;
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicantSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#eaf8fa] text-[#27bac4] text-xs font-bold uppercase tracking-wider">
            <Waves className="w-3.5 h-3.5" />
            <span>Comprehensive Dive Coverage (CDC)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 leading-tight">
            Dive &amp; Travel Protection Plans
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Nuovo Paradigm brings you bundled international travel protection with dedicated hyperbaric decompression chamber treatment, partnered with DiveAssist, Generali, and Northcott Global Solutions.
          </p>
        </div>

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

        {/* 3. INTERACTIVE APPLICATION FORM */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Fast Digital Issuance</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
              CDC Application Form
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Complete your coverage details. You will receive an official confirmation slip and payment receipt instructions.
            </p>
          </div>

          {applicantSubmitted ? (
            <div className="text-center py-10 space-y-4 bg-sky-50/50 rounded-2xl border border-sky-100 p-8">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-serif">Application Submitted Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your CDC request has been queued. Please proceed to transfer the total of <strong className="text-[#2c72af]">RM {getSelectedPrice()}</strong> to CIMB Account <strong>{CONTACT_INFO.bankAccountNumber}</strong> and email the transaction slip to <strong>{CONTACT_INFO.cdcEmail}</strong>.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => onNavigate('psp')}
                  className="px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  Go To Payment Details (PSP)
                </button>
                <button
                  onClick={() => setApplicantSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-200 text-slate-800 text-xs font-bold rounded-lg"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              {/* Plan Selection Radio Cards */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Your Coverage Plan *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {CDC_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => {
                        setSelectedPlan(pkg.id);
                        setFormData({ ...formData, plan: pkg.id });
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedPlan === pkg.id
                          ? 'border-[#2c72af] bg-sky-50/60 ring-2 ring-[#2c72af]/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900 mb-1">{pkg.name}</div>
                      <div className="text-sm font-extrabold text-[#2c72af]">
                        {pkg.annualMYR > 0 ? `RM ${pkg.annualMYR}/yr` : `RM ${pkg.weeklyMYR}/trip`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration Toggle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Billing Term *</label>
                <div className="inline-flex rounded-lg border border-slate-300 p-1 bg-slate-50 text-xs">
                  <button
                    type="button"
                    onClick={() => setDuration('annual')}
                    className={`px-4 py-1.5 rounded-md font-semibold transition-all ${
                      duration === 'annual'
                        ? 'bg-[#2c72af] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Annual Policy
                  </button>
                  <button
                    type="button"
                    onClick={() => setDuration('weekly')}
                    className={`px-4 py-1.5 rounded-md font-semibold transition-all ${
                      duration === 'weekly'
                        ? 'bg-[#2c72af] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Weekly / Single Trip
                  </button>
                </div>
              </div>

              {/* Applicant Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name (as per Passport / IC) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Legal Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Passport / NRIC No. *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. A12345678 or 900101-14-XXXX"
                    value={formData.passportIC}
                    onChange={(e) => setFormData({ ...formData, passportIC: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="diver@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+60 12-345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Coverage Start Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>
              </div>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500">Calculated Premium:</span>
                  <div className="text-2xl font-extrabold text-[#2c72af] font-serif">
                    RM {getSelectedPrice()}
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center space-x-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit CDC Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
