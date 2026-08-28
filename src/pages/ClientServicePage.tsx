import React, { useState } from 'react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data/siteData';
import {
  Users,
  CheckCircle2,
  FileEdit,
  ShieldCheck,
  Send,
  User,
  Mail,
  Phone,
  HelpCircle,
  Clock,
} from 'lucide-react';

interface ClientServicePageProps {
  initialTab?: 'change' | 'existing';
  onNavigate: (page: PageId) => void;
}

export const ClientServicePage: React.FC<ClientServicePageProps> = ({
  initialTab = 'change',
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'change' | 'existing'>(initialTab);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    clientName: '',
    nric: '',
    policyNumber: '',
    email: '',
    phone: '',
    requestType: 'Address/Contact Change',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-[#eaf8fa] text-[#27bac4] text-xs font-bold uppercase tracking-wider">
            Client Care &amp; Policy Administration
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
            Client Servicing Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Easily update policy particulars, request portfolio reviews, or submit servicing requests to our dedicated client administration desk.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-slate-200/80 p-1 text-xs font-semibold">
            <button
              onClick={() => {
                setActiveTab('change');
                setSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-lg transition-all ${
                activeTab === 'change'
                  ? 'bg-[#2c72af] text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Policy Servicing &mdash; Change (CLSC)
            </button>
            <button
              onClick={() => {
                setActiveTab('existing');
                setSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-lg transition-all ${
                activeTab === 'existing'
                  ? 'bg-[#2c72af] text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Policy Servicing &mdash; Existing (CLSE)
            </button>
          </div>
        </div>

        {/* Form Box */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Request Ticket Logged
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.clientName}</strong>. Your policy servicing ticket for{' '}
                <span className="font-semibold text-slate-800">
                  {formData.policyNumber || 'Policy Review'}
                </span>{' '}
                has been dispatched to our Damansara Intan servicing desk.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#2c72af] text-white text-xs font-bold rounded-lg"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Client Full Name (as per IC) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Legal Name"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    NRIC / Passport Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 850101-10-XXXX"
                    value={formData.nric}
                    onChange={(e) => setFormData({ ...formData, nric: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Policy / Certificate No.</label>
                  <input
                    type="text"
                    placeholder="e.g. PRU-12345678"
                    value={formData.policyNumber}
                    onChange={(e) => setFormData({ ...formData, policyNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+60 12-345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Type of Servicing *</label>
                <select
                  value={formData.requestType}
                  onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] bg-white"
                >
                  <option>Address &amp; Contact Info Update</option>
                  <option>Payment Method / Credit Card Deduction Update</option>
                  <option>Nomination / Beneficiary Update</option>
                  <option>Policy Document Re-issuance / Statement Copy</option>
                  <option>Annual Portfolio Review Appointment</option>
                  <option>Claim Guidance &amp; Document Checklist</option>
                  <option>Other Special Request</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Specific Instructions / Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please state the changes or assistance required in detail..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Servicing Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
