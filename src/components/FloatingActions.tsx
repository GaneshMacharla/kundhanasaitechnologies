import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Sparkles, X } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useDemoModal } from '../context/DemoModalContext';

export const FloatingActions: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const [showTooltip, setShowTooltip] = useState(true);

  const primaryPhone = COMPANY_DATA.phoneNumbers[0];
  const whatsapp = COMPANY_DATA.whatsappNumber;

  useEffect(() => {
    // Hide tooltip after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Floating Actions (Bottom-Right) */}
      <aside aria-label="Quick Admissions Actions" className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
        {/* Floating Tooltip */}
        {showTooltip && (
          <div className="bg-slate-900 text-white text-xs py-2 px-3.5 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>Admissions open for Morning &amp; Evening Batches!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5 ml-1"
              aria-label="Close notification"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Quick Demo CTA Pill */}
        <button
          onClick={() => openDemoModal()}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-xs border border-amber-300 group cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
          <span>Book Free Demo</span>
          <span className="bg-slate-950 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-extrabold">
            FREE
          </span>
        </button>

        {/* Call admissions floating button */}
        <a
          href={`tel:${primaryPhone.value}`}
          title={`Call Admissions: ${primaryPhone.display}`}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp persistent floating button */}
        <a
          href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Technical Counselor on WhatsApp"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 relative group"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 border-2 border-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 border-2 border-white rounded-full" />
        </a>
      </aside>

      {/* Mobile Sticky Bottom CTA Bar */}
      <nav aria-label="Mobile Quick Actions" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 md:hidden shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:${primaryPhone.value}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="text-[11px] font-semibold mt-0.5">Call Us</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span className="text-[11px] font-semibold mt-0.5">WhatsApp</span>
          </a>

          {/* Enquire / Book Demo button */}
          <button
            onClick={() => openDemoModal()}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 active:from-amber-600 text-slate-950 font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span className="text-[11px] font-bold mt-0.5">Free Demo</span>
          </button>
        </div>
      </nav>
    </>
  );
};
