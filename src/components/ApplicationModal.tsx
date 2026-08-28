import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, User, Mail, Phone, Calendar, Briefcase } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    employmentStatus: 'Employed',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      startDate: '',
      employmentStatus: 'Employed',
      reason: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#1b4b75] via-[#2c72af] to-[#2f9abc] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-[#27bac4] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Nuovo Paradigm Career Discovery</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif">Apply as Wealth Planner</h3>
          <p className="text-cyan-100 text-xs mt-1">
            Take the first step towards earning the income you desire and building a balanced lifestyle with our proven mentorship.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#eaf8fa] text-[#27bac4] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-serif">Application Submitted!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our leadership team has received your application. We will reach out to you via phone or WhatsApp at <strong>{formData.phone}</strong> within 1-2 business days to schedule an introductory discovery session.
              </p>
              <div className="p-4 bg-[#eaf8fa] rounded-xl border border-[#27bac4]/30 text-xs text-slate-700 text-left space-y-1">
                <p><strong>Office:</strong> {CONTACT_INFO.addressLine1}</p>
                <p><strong>Contact:</strong> {CONTACT_INFO.phone} | {CONTACT_INFO.email}</p>
              </div>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#2c72af] hover:bg-[#2f9abc] text-white text-sm font-semibold rounded-lg shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Name (as per IC) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="Full Legal Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="your.email@work.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+60 1X-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    How Soon Can You Start? *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Employment Status *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      value={formData.employmentStatus}
                      onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent bg-white"
                    >
                      <option value="Employed">Employed (Full-time)</option>
                      <option value="Un-Employed">Unemployed / Seeking Growth</option>
                      <option value="Student">Student / Fresh Graduate</option>
                      <option value="Self Employed">Self Employed / Freelancer</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#2f9abc] to-[#2c72af] hover:from-[#27bac4] hover:to-[#2f9abc] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application Now</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center leading-tight">
                By clicking Submit, your information is transmitted confidentially to Nuovo Paradigm Talent Acquisition.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
