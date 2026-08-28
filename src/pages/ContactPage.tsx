import React, { useState } from 'react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data/siteData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. MAP BANNER (from contact.html iframe) */}
      <section className="w-full h-80 sm:h-96 bg-slate-200 relative overflow-hidden border-b border-slate-300">
        <iframe
          title="Nuovo Paradigm Damansara Intan Map"
          width="100%"
          height="100%"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
          src="https://maps.google.com/maps?q=nuovo%20paradigm%20sdn%20bhd%20damansara%20intan&t=&z=17&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl shadow-md border border-slate-200 text-xs text-slate-800 flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-[#2c72af]" />
          <span className="font-bold">Damansara Intan, Block A Lobby 5</span>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INQUIRY FORM */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Columns */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2c72af]">Get In Touch</span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mt-1">
                  Contact Us
                </h1>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Have inquiries about wealth planning, career discovery, or policy servicing? Our team at Damansara Intan is here to assist you.
                </p>
              </div>

              {/* Location Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2c72af]">
                  <Building className="w-4 h-4" />
                  <span>Headquarters</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {CONTACT_INFO.companyName} ({CONTACT_INFO.regNumber})
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {CONTACT_INFO.addressLine1}
                  <br />
                  {CONTACT_INFO.addressLine2}
                </p>
              </div>

              {/* Hours & Direct Communication */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-[#2c72af]" />
                    <span>Office Hours</span>
                  </div>
                  <p className="text-xs text-slate-600 pt-1">
                    Monday &ndash; Friday
                    <br />
                    <span className="font-semibold text-slate-800">9:00 AM &ndash; 6:00 PM</span>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#2c72af]" />
                    <span>Inquiries Hotline</span>
                  </div>
                  <p className="text-xs text-slate-600 pt-1 font-semibold text-[#2c72af]">
                    <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Say Hello Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-serif text-slate-900">Contact Form</h3>
                <p className="text-xs text-slate-500 mt-1">
                  We will respond to your inquiry shortly.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-serif">Message Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been forwarded to our Damansara Intan team. We will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-[#2c72af] text-white text-xs font-bold rounded-lg"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Your working email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Your actual phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Reason for inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      What would you like to talk about? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Brief details about your wealth goals or policy queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
