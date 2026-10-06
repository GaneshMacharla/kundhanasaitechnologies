import React from 'react';
import { Phone, MessageSquare, Sparkles, Send, ArrowRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useDemoModal } from '../context/DemoModalContext';

export const CtaBanner: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const primaryPhone = COMPANY_DATA.phoneNumbers[0];
  const whatsapp = COMPANY_DATA.whatsappNumber;

  return (
    <section className="py-16 bg-gradient-to-br from-[#0A2540] via-[#103866] to-[#0A2540] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Next Step in Your Career Journey
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
          Ready to Start Your IT Career?
        </h2>

        <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Talk to our senior career counselor today. Evaluate course curriculums, understand hiring demand, and book your free introductory demo class.
        </p>

        {/* Action Buttons: Call, WhatsApp, Enquire, Book Demo */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => openDemoModal()}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Book Free Demo</span>
          </button>

          <a
            href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${primaryPhone.value}`}
            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-blue-300" />
            <span>Call Now ({primaryPhone.display})</span>
          </a>

          <button
            onClick={() => openDemoModal()}
            className="px-5 py-3.5 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-bold text-sm border border-blue-400/40 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4 text-amber-300" />
            <span>Enquire Now</span>
          </button>
        </div>

        <div className="pt-2 text-xs text-blue-200/80">
          <span>First 4 Sessions 100% Free</span>
          <span className="mx-2">•</span>
          <span>Online &amp; Classroom Hyderabad</span>
          <span className="mx-2">•</span>
          <span>No Obligation Required</span>
        </div>
      </div>
    </section>
  );
};
