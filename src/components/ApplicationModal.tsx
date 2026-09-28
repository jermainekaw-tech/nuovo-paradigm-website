import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, User, Mail, Phone, Calendar, Briefcase, Paperclip } from 'lucide-react';
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
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState('');

  if (!isOpen) return null;

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

  const buildMailtoUrl = () => {
    const subject = `New Wealth Planner Application - ${formData.name}`;
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `How Soon Can You Start: ${formData.startDate}`,
      `Current Employment Status: ${formData.employmentStatus}`,
      '',
      resumeFile
        ? `IMPORTANT: Please attach "${resumeFile.name}" to this email before sending!`
        : 'IMPORTANT: Please attach your resume/CV to this email before sending!',
    ];
    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailtoUrl();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setResumeFile(null);
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
                Thank you, <strong>{formData.name}</strong>. We&rsquo;ve opened your email app with your application pre-filled to send to our leadership team.
              </p>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 max-w-md mx-auto text-left">
                <strong>Important:</strong> please remember to attach{resumeFile ? <> <strong>{resumeFile.name}</strong></> : ' your resume/CV'} before hitting send in your email app!
              </div>
              <a
                href={buildMailtoUrl()}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#2c72af] hover:bg-[#2f9abc] text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Didn&rsquo;t open? Click to email us directly</span>
              </a>
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
                      <option value="Employed">Employed</option>
                      <option value="Un-Employed">Un-Employed</option>
                      <option value="Student">Student</option>
                      <option value="Self Employed">Self Employed</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
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
