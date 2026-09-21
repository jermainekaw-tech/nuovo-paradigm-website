import React, { useState, useEffect } from 'react';
import { OtherServiceItem } from '../types';
import { CONTACT_INFO } from '../data/siteData';
import {
  X,
  CheckCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Info,
  MessageCircle,
} from 'lucide-react';

interface ServiceModalProps {
  service: OtherServiceItem | null;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onNavigateToContact,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  useEffect(() => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', notes: '' });
  }, [service?.id]);

  if (!service) return null;

  const handleClose = () => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', notes: '' });
    onClose();
  };

  const buildWhatsAppUrl = () => {
    const waNumber = CONTACT_INFO.phone.replace(/\D/g, '');
    const waMessage = [
      `New Inquiry: ${service.title}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
    ].join('\n');
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/20 md:bg-white/80 hover:bg-slate-200 text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Visual / Header Sidebar */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#1b4b75] via-[#2c72af] to-[#2f9abc] p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#27bac4]/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5 text-[#27bac4]" />
              <span>{service.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight mb-2">
              {service.title}
            </h3>
            <p className="text-cyan-100/90 text-sm leading-relaxed mb-6">
              {service.details.subheading || service.shortDesc}
            </p>

            {service.details.highlights && (
              <div className="space-y-2.5 pt-2 border-t border-white/15">
                <div className="text-xs font-bold uppercase tracking-wider text-[#27bac4]">Key Highlights</div>
                {service.details.highlights.map((h, i) => (
                  <div key={i} className="flex items-start text-xs text-cyan-50 space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#27bac4] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-white/15 text-xs text-cyan-100/80">
            <span>Servicing Partner: </span>
            <span className="font-semibold text-white">Nuovo Paradigm Advisory</span>
          </div>
        </div>

        {/* Right Details & Fast Form Body */}
        <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto bg-white">
          <div className="space-y-5">
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Overview & Coverage Details</h4>
              {service.details.body.map((paragraph, idx) => (
                <p key={idx} className="text-sm text-slate-600 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
            </div>

            {service.details.taxBenefit && (
              <div className="p-3.5 rounded-xl bg-[#eaf8fa] border border-[#27bac4]/40 text-[#1b4b75] text-xs flex items-start space-x-2.5">
                <Info className="w-4 h-4 text-[#2c72af] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Tax Relief Benefit: </span>
                  {service.details.taxBenefit}
                </div>
              </div>
            )}

            {/* Quick Inquire Form */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h5 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#2c72af]" />
                Request Custom Quotation or Policy Advice
              </h5>
              <p className="text-xs text-slate-500 mb-3">
                We will contact you with a quotation within the same day.
              </p>

              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold">Request Received!</p>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        We will contact you with a quotation within the same day, regarding <strong>{service.title}</strong>.
                      </p>
                    </div>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        handleClose();
                        onNavigateToContact();
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Or visit Damansara office
                    </button>
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
      </div>
    </div>
  );
};
