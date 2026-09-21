import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/siteData';
import { X, CheckCircle, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

interface ConsultSpecialistModalProps {
  topic: string | null;
  onClose: () => void;
}

export const ConsultSpecialistModal: React.FC<ConsultSpecialistModalProps> = ({
  topic,
  onClose,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
  }, [topic]);

  if (!topic) return null;

  const buildWhatsAppUrl = () => {
    const waNumber = CONTACT_INFO.phone.replace(/\D/g, '');
    const waMessage = [
      `New Inquiry: ${topic}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
    ].join('\n');
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  };

  const handleClose = () => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-slate-200 text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-br from-[#1b4b75] via-[#2c72af] to-[#2f9abc] p-6 text-white">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#27bac4]" />
            <span>Consult Our Specialists</span>
          </div>
          <h3 className="text-xl font-bold font-serif leading-tight pr-8">{topic}</h3>
        </div>

        <div className="p-6 sm:p-8">
          {formSubmitted ? (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Request Received!</p>
                <p className="text-xs text-slate-600 mt-1">
                  We will contact you with a quotation within the same day, regarding <strong>{topic}</strong>.
                </p>
              </div>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Didn&rsquo;t open? Message us on WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-xs text-slate-500 mb-1">
                We will contact you with a quotation within the same day.
              </p>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+60 12-345 6789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] focus:border-transparent"
                />
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#2f9abc] to-[#2c72af] hover:from-[#27bac4] hover:to-[#2f9abc] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center space-x-1.5 transition-all"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
