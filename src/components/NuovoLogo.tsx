import React, { useState } from 'react';
import { ASSETS } from '../data/siteData';

interface NuovoLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white' | 'white-stacked' | 'white-horizontal';
  height?: number | string;
  showSubtitle?: boolean;
}

export const NuovoLogo: React.FC<NuovoLogoProps> = ({
  className = 'h-14 sm:h-16 md:h-18 w-auto',
  variant = 'full',
  height,
  showSubtitle = false,
}) => {
  const [imgError, setImgError] = useState(false);

  // If white variant and image loads fine, show the exact image
  if (!imgError && variant === 'white') {
    return (
      <div className={`inline-flex items-center ${className}`} style={height ? { height } : undefined}>
        <img
          src={ASSETS.logoWhite || ASSETS.logo}
          alt="Nuovo Paradigm"
          className="h-full w-auto object-contain max-h-36"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Full dark-text logo in header — uses the real checkmark asset (matches the footer mark)
  // instead of the unreliable external nuovoparadigm.com-hosted image.
  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center space-x-2.5 select-none ${className}`} style={height ? { height } : undefined}>
        <img
          src="/images/nuovo-logo-checkmark-transparent.png"
          alt=""
          className="h-full max-h-16 w-auto object-contain shrink-0"
        />
        <div className="flex flex-col text-left leading-none">
          <span
            className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-slate-800"
            style={{ fontFamily: "'Open Sauce Sans', 'Open Sauce', sans-serif" }}
          >
            NUOVO
          </span>
          <span
            className="text-sm sm:text-base font-bold tracking-widest uppercase -mt-0.5 text-[#2f9abc]"
            style={{ fontFamily: "'Open Sauce Sans', 'Open Sauce', sans-serif", letterSpacing: '0.22em' }}
          >
            PARADIGM
          </span>
        </div>
      </div>
    );
  }

  // White stacked logo (default for white footer variant)
  if (variant === 'white' || variant === 'white-stacked') {
    return (
      <div
        className={`inline-flex flex-col items-start select-none ${className}`}
        style={height ? { height } : undefined}
      >
        {/* Brand Ribbon Checkmark with Star */}
        <svg
          viewBox="0 0 160 130"
          className="w-20 h-16 sm:w-24 sm:h-18 drop-shadow-md mb-2 shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="nuovo-cyan-wf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27bac4" />
              <stop offset="100%" stopColor="#2f9abc" />
            </linearGradient>
            <linearGradient id="nuovo-blue-wf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2f9abc" />
              <stop offset="100%" stopColor="#2c72af" />
            </linearGradient>
            <linearGradient id="nuovo-deep-wf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e5482" />
              <stop offset="100%" stopColor="#2c72af" />
            </linearGradient>
          </defs>

          {/* Left rounded base / back sweep */}
          <path
            d="M48 38 C32 38, 20 50, 20 66 C20 78, 26 90, 38 102 L64 122 C72 128, 82 128, 90 122 L144 68 C148 64, 142 56, 134 58 L104 68 L70 102 L48 80 C40 72, 40 58, 48 50 C52 46, 52 38, 48 38 Z"
            fill="url(#nuovo-deep-wf)"
          />
          {/* Middle ribbon stripe */}
          <path
            d="M34 82 L66 114 C72 120, 80 120, 86 114 L138 62 L122 54 L76 100 L44 68 Z"
            fill="#2c72af"
          />
          {/* Front bright cyan sweep */}
          <path
            d="M42 92 L68 118 C74 124, 82 124, 88 118 L148 58 L132 50 L78 104 L52 78 Z"
            fill="url(#nuovo-cyan-wf)"
          />
          {/* Top Star Accent on right ribbon wing */}
          <path
            d="M136 40 L141 51 L153 52 L144 60 L146 72 L136 66 L126 72 L128 60 L119 52 L131 51 Z"
            fill="#ffffff"
            className="drop-shadow-xs"
          />
        </svg>

        {/* Crisp Solid White Typography */}
        <div className="flex flex-col text-left leading-none tracking-tight">
          <span
            className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider"
            style={{
              fontFamily: "'Montserrat', 'Open Sauce Sans', -apple-system, sans-serif",
              letterSpacing: '0.06em',
            }}
          >
            NUOVO
          </span>
          <span
            className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider mt-0.5"
            style={{
              fontFamily: "'Montserrat', 'Open Sauce Sans', -apple-system, sans-serif",
              letterSpacing: '0.06em',
            }}
          >
            PARADIGM
          </span>
        </div>
      </div>
    );
  }

  // Horizontal white variant
  if (variant === 'white-horizontal') {
    return (
      <div className={`inline-flex items-center space-x-3 select-none ${className}`} style={height ? { height } : undefined}>
        <svg
          viewBox="0 0 160 130"
          className="h-full max-h-16 w-auto shrink-0 drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="nuovo-cyan-wh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27bac4" />
              <stop offset="100%" stopColor="#2f9abc" />
            </linearGradient>
            <linearGradient id="nuovo-blue-wh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2f9abc" />
              <stop offset="100%" stopColor="#2c72af" />
            </linearGradient>
          </defs>
          <path
            d="M48 38 C32 38, 20 50, 20 66 C20 78, 26 90, 38 102 L64 122 C72 128, 82 128, 90 122 L144 68 C148 64, 142 56, 134 58 L104 68 L70 102 L48 80 C40 72, 40 58, 48 50 C52 46, 52 38, 48 38 Z"
            fill="url(#nuovo-blue-wh)"
          />
          <path
            d="M34 82 L66 114 C72 120, 80 120, 86 114 L138 62 L122 54 L76 100 L44 68 Z"
            fill="#2c72af"
          />
          <path
            d="M42 92 L68 118 C74 124, 82 124, 88 118 L148 58 L132 50 L78 104 L52 78 Z"
            fill="url(#nuovo-cyan-wh)"
          />
          <path
            d="M136 40 L141 51 L153 52 L144 60 L146 72 L136 66 L126 72 L128 60 L119 52 L131 51 Z"
            fill="#ffffff"
          />
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span
            className="text-2xl sm:text-3xl font-black tracking-wider text-white uppercase"
            style={{ fontFamily: "'Montserrat', 'Open Sauce Sans', sans-serif" }}
          >
            NUOVO
          </span>
          <span
            className="text-lg sm:text-xl font-bold tracking-widest text-white uppercase mt-0.5"
            style={{ fontFamily: "'Montserrat', 'Open Sauce Sans', sans-serif", letterSpacing: '0.18em' }}
          >
            PARADIGM
          </span>
        </div>
      </div>
    );
  }

  // Vector fallback for crisp rendering across all resolutions and states
  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`} style={height ? { height } : undefined}>
      {/* Dynamic Ribbon Checkmark Icon */}
      <svg
        viewBox="0 0 120 100"
        className="h-full max-h-16 w-auto shrink-0 drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nuovo-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27bac4" />
            <stop offset="100%" stopColor="#2f9abc" />
          </linearGradient>
          <linearGradient id="nuovo-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2f9abc" />
            <stop offset="100%" stopColor="#2c72af" />
          </linearGradient>
        </defs>

        {/* Back upper ribbon fold */}
        <path
          d="M28 20 C18 20, 10 28, 10 38 C10 46, 14 54, 22 62 L42 82 C48 88, 56 88, 62 82 L108 36 C112 32, 108 26, 102 28 L78 38 L48 68 L32 52 C26 46, 26 36, 32 30 C35 27, 34 20, 28 20 Z"
          fill="url(#nuovo-blue)"
        />
        {/* Middle stripe */}
        <path
          d="M20 54 L44 78 C48 82, 54 82, 58 78 L98 38 L86 32 L50 68 L28 46 Z"
          fill="#2f9abc"
        />
        {/* Front vibrant sweep */}
        <path
          d="M26 62 L46 82 C50 86, 56 86, 60 82 L106 36 L94 30 L52 72 L34 54 Z"
          fill="url(#nuovo-cyan)"
        />
      </svg>

      {variant !== 'icon' && (
        <div className="flex flex-col text-left leading-none">
          <span
            className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-slate-800"
            style={{ fontFamily: "'Open Sauce Sans', 'Open Sauce', sans-serif" }}
          >
            NUOVO
          </span>
          <span
            className="text-sm sm:text-base font-bold tracking-widest uppercase -mt-0.5 text-[#2f9abc]"
            style={{ fontFamily: "'Open Sauce Sans', 'Open Sauce', sans-serif", letterSpacing: '0.22em' }}
          >
            PARADIGM
          </span>
          {showSubtitle && (
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
              Wealth Planning
            </span>
          )}
        </div>
      )}
    </div>
  );
};

