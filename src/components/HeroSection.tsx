import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Database,
  TrendingUp,
  Activity
} from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';
import { useConsultation } from '../context/ConsultationContext';

export const HeroSection: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <section className="relative overflow-hidden bg-[#050E1D] text-white pt-10 sm:pt-16 pb-20 lg:pb-28">
      {/* Background ambient mesh and glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[0%] left-[10%] w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Enterprise Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Enterprise Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Enterprise IT Services &amp; Consulting • Est. 2018</span>
            </div>

            {/* Main PRD Mandated Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] text-white">
              Engineering Intelligence.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 block sm:inline">
                Enabling Transformation.
              </span>
            </h1>

            {/* PRD Mandated Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kundhana Sai IT Solutions helps businesses unlock new possibilities through intelligent AI, modern data platforms, cloud engineering and enterprise technology solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-blue-900/40 hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => openConsultation()}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400/50 font-heading font-bold text-sm sm:text-base tracking-wide transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Talk to Our Experts</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Data Leakage AI</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Scalable Lakehouses</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Enterprise SLA Rigor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Technology Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient frame */}
              <div className="relative p-2 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-slate-800/40 border border-cyan-500/20 shadow-2xl shadow-cyan-900/20">
                <div className="rounded-2xl overflow-hidden relative aspect-video sm:aspect-4/3 bg-slate-950">
                  <img
                    src="/images/hero-enterprise-ai.jpg"
                    alt="Enterprise Generative AI and Neural Network Architecture"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E1D] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Telemetry Card 1 */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-white shadow-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                        Cognitive Core
                      </div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Agentic Workflows</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Telemetry Card 2 */}
                  <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-blue-500/30 text-white shadow-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                        Data Fabric
                      </div>
                      <div className="text-xs font-bold text-white">
                        Snowflake &amp; Lakehouse
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified MCA entity pill */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Corporate Registration
                </span>
                <span className="font-mono text-[11px] text-cyan-300">
                  CIN: {CORPORATE_DATA.cin}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {CORPORATE_DATA.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
