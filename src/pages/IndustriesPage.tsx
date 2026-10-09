import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Activity, 
  ShoppingBag, 
  Factory, 
  Zap, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { VERIFIED_INDUSTRIES, IndustryDomain } from '../data/industriesData';
import { useConsultation } from '../context/ConsultationContext';

export const IndustriesPage: React.FC = () => {
  const { openConsultation } = useConsultation();

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-8 h-8 text-cyan-600" />;
      case 'Activity': return <Activity className="w-8 h-8 text-rose-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-8 h-8 text-blue-600" />;
      case 'Factory': return <Factory className="w-8 h-8 text-amber-600" />;
      case 'Zap': return <Zap className="w-8 h-8 text-emerald-600" />;
      case 'Terminal': return <Terminal className="w-8 h-8 text-indigo-600" />;
      default: return <Building className="w-8 h-8 text-cyan-600" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Industry Domain Solutions &amp; Sector Blueprints"
        description="Domain-specific technology architectures for Financial Services, Healthcare, Retail, Manufacturing, Energy, and Digital Platforms."
        canonicalPath="/industries"
      />

      {/* Hero */}
      <section className="bg-[#050E1D] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Domain Solutions &amp; Compliance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight text-white">
              Domain-Specific Solutions for Complex Verticals.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every vertical possesses nuanced operational workflows and regulatory boundaries. We configure our core AI, data, and enterprise practices to resolve sector-specific bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Industries Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              6 Verified Industry Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Architectural blueprints aligned to regulatory environments, data volumes, and enterprise priorities.
            </p>
          </div>

          <div className="space-y-12">
            {VERIFIED_INDUSTRIES.map((industry, idx) => (
              <div
                key={industry.id}
                className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-inner">
                      {getIndustryIcon(industry.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                        Sector 0{idx + 1}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                        {industry.name}
                      </h3>
                      <p className="text-sm font-semibold text-blue-700 mt-0.5">
                        {industry.tagline}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => openConsultation(`${industry.name} Domain Architecture`)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-heading shrink-0 transition-colors cursor-pointer"
                  >
                    Discuss Sector Needs
                  </button>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                  {industry.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Sector Challenges */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700">
                      Core Sector Challenges
                    </h4>
                    <ul className="space-y-2">
                      {industry.keyChallenges.map((ch, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions Delivered */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Target Solution Blueprints
                    </h4>
                    <ul className="space-y-2">
                      {industry.solutionsProvided.map((sol, sIdx) => (
                        <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Relevant Services */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Applicable Practice Lines:
                  </span>
                  {industry.relevantServices.map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 text-xs font-semibold"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-slate-500 italic max-w-2xl mx-auto pt-4">
            Notice: Client names and proprietary brand identities are withheld to comply with corporate non-disclosure agreements (NDAs).
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
            Tailor an Architecture for Your Industry
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Connect with our enterprise solutions team to review industry-specific architectural patterns and compliance frameworks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openConsultation()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shadow-lg cursor-pointer"
            >
              Start Domain Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
