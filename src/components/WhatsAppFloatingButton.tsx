import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsapp = CORPORATE_DATA.whatsappNumber;

  useEffect(() => {
    // Auto-minimize tooltip after 7 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`;

  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none"
    >
      {/* Floating Greeting Pill / Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-md text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-2.5 animate-bounce transition-all duration-300 max-w-xs">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <div className="text-[11px] leading-tight">
            <div className="font-semibold text-white">Need Quick Assistance?</div>
            <div className="text-slate-300">WhatsApp our desk: <span className="text-emerald-400 font-mono font-bold">{whatsapp.display}</span></div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1 transition-colors rounded-full hover:bg-slate-800"
            aria-label="Dismiss WhatsApp popup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <div className="relative group pointer-events-auto">
        {/* Pulsing ring around button */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm group-hover:bg-[#25D366]/60 animate-pulse transition-all duration-300" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with Kundhana Sai IT Solutions on WhatsApp at ${whatsapp.display}`}
          className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl shadow-emerald-950/40 transform hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        >
          {/* Official WhatsApp SVG Logo */}
          <svg 
            className="w-8 h-8 fill-current drop-shadow-sm" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.507 14.307l-.009.075c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.014-.374-1.93-1.192-.714-.637-1.196-1.424-1.336-1.664-.14-.24-.015-.37.105-.49.108-.108.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.195-.467-.393-.404-.54-.412l-.46-.008c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.573.248 1.02.396 1.368.507.575.183 1.098.157 1.512.095.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28zM12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.95.56 3.77 1.53 5.31L2 22l4.88-1.57c1.49.89 3.23 1.41 5.16 1.41 5.5 0 9.96-4.46 9.96-9.96.01-5.5-4.45-9.88-9.96-9.88zm0 18.14c-1.68 0-3.24-.49-4.56-1.34l-.33-.21-2.92.94.97-2.84-.23-.37a8.136 8.136 0 01-1.25-4.36c0-4.51 3.67-8.18 8.19-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.51-3.67 8.18-8.18 8.18z"/>
          </svg>

          {/* Active Online Indicator dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
        </a>

        {/* Hover Pill Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden lg:group-hover:flex items-center gap-1.5 bg-slate-950 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span>Chat on WhatsApp</span>
          <span className="text-emerald-400 font-mono text-[11px]">({whatsapp.display})</span>
        </div>
      </div>
    </aside>
  );
};
