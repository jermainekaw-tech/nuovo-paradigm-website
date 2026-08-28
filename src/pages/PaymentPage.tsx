import React, { useState } from 'react';
import { PageId } from '../types';
import { CONTACT_INFO, CDC_PACKAGES } from '../data/siteData';
import {
  CreditCard,
  Building,
  CheckCircle2,
  Copy,
  Mail,
  Phone,
  QrCode,
  ArrowRight,
  ShieldCheck,
  Send,
} from 'lucide-react';

interface PaymentPageProps {
  onNavigate: (page: PageId) => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [slipSubmitted, setSlipSubmitted] = useState(false);
  const [slipData, setSlipData] = useState({
    name: '',
    email: '',
    refNumber: '',
    amount: '',
  });

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(CONTACT_INFO.bankAccountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSlipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSlipSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Settlement &amp; Verification
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 leading-tight">
            Payment &amp; Banking Details
          </h1>
          <p className="text-sm text-slate-600">
            Please find the official banking channels for policy renewals, CDC premiums, and advisory payments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Official CIMB Bank Details Box (from psp.html) */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center space-x-3 text-red-600">
              <Building className="w-6 h-6" />
              <h3 className="text-xl font-bold font-serif text-slate-900">Direct Bank Transfer</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Direct transfer to our local corporate bank account and email the transaction receipt to <a href={`mailto:${CONTACT_INFO.cdcEmail}`} className="text-[#2c72af] font-semibold">{CONTACT_INFO.cdcEmail}</a>.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
              <div>
                <span className="text-slate-400 uppercase font-bold text-[10px]">Beneficiary Name</span>
                <p className="font-bold text-slate-900 text-sm">{CONTACT_INFO.bankAccountName}</p>
              </div>

              <div>
                <span className="text-slate-400 uppercase font-bold text-[10px]">Bank Institution</span>
                <p className="font-bold text-red-600 text-sm">{CONTACT_INFO.bankName}</p>
              </div>

              <div>
                <span className="text-slate-400 uppercase font-bold text-[10px]">Account Number</span>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="font-mono text-base font-extrabold text-[#2c72af]">
                    {CONTACT_INFO.bankAccountNumber}
                  </p>
                  <button
                    onClick={handleCopyAccount}
                    className="px-3 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-md text-xs font-semibold text-slate-700 flex items-center space-x-1 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div>
                <span className="text-slate-400 uppercase font-bold text-[10px]">Payment Reference / Remarks</span>
                <p className="font-semibold text-slate-800">
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Name of Person Covered</span>
                </p>
              </div>
            </div>

            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-[#2c72af]">Paypal / International Wire: </span>
              <p>For international credit card or PayPal arrangements, please check the confirmation email received after application.</p>
            </div>
          </div>

          {/* Right: Payment Confirmation / Transaction Slip Notifier */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold font-serif text-slate-900 mb-1">
              Notify Us of Payment
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Already made a transfer? Notify our administration team below for rapid policy validation.
            </p>

            {slipSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Receipt Notification Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{slipData.name}</strong>. Our accounts team will reconcile your transfer of <strong>{slipData.amount}</strong> and dispatch your official policy schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSlipSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Name of Person Covered *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name as in Bank Transfer"
                    value={slipData.name}
                    onChange={(e) => setSlipData({ ...slipData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="Where to send the policy certificate"
                    value={slipData.email}
                    onChange={(e) => setSlipData({ ...slipData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Bank Reference No. *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CIMB-9982341"
                      value={slipData.refNumber}
                      onChange={(e) => setSlipData({ ...slipData, refNumber: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Transferred Amount (RM) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. RM 813.00"
                      value={slipData.amount}
                      onChange={(e) => setSlipData({ ...slipData, amount: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Payment Notification</span>
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Support hotline:</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className="font-bold text-[#2c72af]">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
