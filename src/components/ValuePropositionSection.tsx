import React from 'react';
import { 
  Target, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';
import { useConsultation } from '../context/ConsultationContext';

export const ValuePropositionSection: React.FC = () => {
  const { openConsultation } = useConsultation();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Partner With Kundhana Sai</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Built on Engineering Rigor, Accountability, and Business Trust.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliver enterprise engagements with transparent governance, deep hands-on architects, and an unwavering commitment to your bottom-line business outcomes.
          </p>
        </div>

        {/* 4 Value Proposition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORPORATE_DATA.valuePropositions.map((prop, idx) => (
            <div
              key={prop.id}
              className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {getPillarIcon(prop.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {prop.title}
                </h3>

                <p className="text-sm font-semibold text-blue-700 mb-4">
                  {prop.summary}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {prop.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Verified Delivery Principle
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-heading font-bold text-white">
              Ready to evaluate how our engineering principles apply to your systems?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a confidential 45-minute technical discovery call with our enterprise solutions team.
            </p>
          </div>

          <button
            onClick={() => openConsultation()}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shrink-0 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            Schedule Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};
