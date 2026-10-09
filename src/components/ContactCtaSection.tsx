import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';
import { useConsultation } from '../context/ConsultationContext';

export const ContactCtaSection: React.FC = () => {
  const { openConsultation } = useConsultation();
  const primaryPhone = CORPORATE_DATA.phoneNumbers[0];

  return (
    <section className="py-20 lg:py-28 bg-[#050E1D] text-white relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-700/80 p-8 sm:p-14 lg:p-16 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          {/* Top accent pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Our Enterprise Architects</span>
          </div>

          {/* PRD Mandated Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white max-w-2xl mx-auto">
            Let's Build What's Next.
          </h2>

          {/* PRD Mandated Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a business challenge to solve? Let's explore how the right technology can help.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openConsultation()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-cyan-200" />
              <span>Start a Conversation</span>
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400/50 font-heading font-bold text-sm sm:text-base tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <span>View Office Centers &amp; Hotlines</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Quick Direct Communication Strip */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <a 
              href={`tel:${primaryPhone.value}`}
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Corporate Desk: {primaryPhone.display}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a 
              href={`mailto:${CORPORATE_DATA.email.primary}`}
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Inquiries: {CORPORATE_DATA.email.primary}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>CIN: {CORPORATE_DATA.cin}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
