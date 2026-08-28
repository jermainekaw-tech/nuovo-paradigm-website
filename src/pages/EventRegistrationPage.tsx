import React, { useState } from 'react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data/siteData';
import { Calendar, CheckCircle2, Clock, MapPin, Send, User, Mail, Phone, Sparkles } from 'lucide-react';

interface EventRegistrationPageProps {
  onNavigate: (page: PageId) => void;
}

export const EventRegistrationPage: React.FC<EventRegistrationPageProps> = () => {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: 'Wealth Planning & Financial Freedom Masterclass',
    pax: '1',
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            Seminars &amp; Career Previews
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
            Event Registration
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Register your attendance for upcoming Nuovo Paradigm wealth symposiums, career discovery previews, and financial workshops.
          </p>
        </div>

        {/* Featured Upcoming Events Card */}
        <div className="bg-gradient-to-r from-[#2c72af] to-slate-900 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Featured Session</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif">
                Wealth Entrepreneurship &amp; Career Preview
              </h3>
              <div className="flex flex-wrap gap-4 text-xs text-sky-200 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Every Saturday, 10:30 AM &ndash; 12:30 PM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Damansara Intan HQ / Online Hybrid</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Box */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          {registered ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Seat Confirmed!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your seat for <strong>{formData.event}</strong> has been reserved for {formData.pax} attendee(s). We have dispatched entry passes and location details to <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => setRegistered(false)}
                className="mt-2 px-5 py-2.5 bg-[#2c72af] text-white text-xs font-bold rounded-lg"
              >
                Register Another Attendee
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your legal name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
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
                  <label className="block font-bold text-slate-700 mb-1">Number of Attendees *</label>
                  <select
                    value={formData.pax}
                    onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] bg-white"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4+">Group (4+ Persons)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Select Event / Workshop *</label>
                <select
                  value={formData.event}
                  onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] bg-white"
                >
                  <option>Wealth Entrepreneurship &amp; Career Preview (Saturday)</option>
                  <option>Retirement &amp; Estate Planning Masterclass</option>
                  <option>Comprehensive Dive Coverage (CDC) Info Session</option>
                  <option>Islamic Wealth Planning &amp; Hibah Seminar</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Event Registration</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
