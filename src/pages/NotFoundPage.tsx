import React from 'react';
import { PageId } from '../types';
import { AlertCircle, Home, Phone, ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-rose-600">Error 404</p>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
            We can&rsquo;t find that page
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            The link may be out of date. Try the navigation menu above, or head back to the homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#2c72af] hover:bg-[#1b4b75] text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to home</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors flex items-center justify-center space-x-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact us</span>
          </button>
        </div>
      </div>
    </div>
  );
};
