import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { APPLY_NOW_FORM_URL, CONTACT_INFO } from '../data/siteData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#1b4b75] via-[#2c72af] to-[#2f9abc] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-[#27bac4] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Nuovo Paradigm Career Discovery</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif pr-8">Apply as Wealth Planner</h3>
          <p className="text-cyan-100 text-xs mt-1">
            Take the first step towards earning the income you desire and building a balanced lifestyle with our proven mentorship.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-center space-y-5">
          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            Click below to open our application form &mdash; it takes just a few minutes and lets you attach your resume/CV directly.
          </p>
          <a
            href={APPLY_NOW_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#2f9abc] to-[#2c72af] hover:from-[#27bac4] hover:to-[#2f9abc] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-slate-400">
            Or reach us directly: {CONTACT_INFO.phone} &bull; {CONTACT_INFO.email}
          </p>
        </div>
      </div>
    </div>
  );
};
