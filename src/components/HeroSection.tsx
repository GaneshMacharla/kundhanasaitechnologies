import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Users, 
  Terminal,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useDemoModal } from '../context/DemoModalContext';

export const HeroSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const whatsapp = COMPANY_DATA.whatsappNumber;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A2540] via-[#0F325C] to-[#0A2540] text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Promotional Highlight Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>🔥 New Batches Starting: 7:30 AM &amp; 8:30 PM</span>
              <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
                4 Sessions Free
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.12]">
              Build Your Career in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-sky-300">
                Top IT Technologies
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl font-normal">
              Industry-oriented training, real-time projects, dedicated placement assistance, and continuous career support to help you become genuinely job-ready.
            </p>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Real-Time Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mock Technical Interviews</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Post-Job Support</span>
              </div>
            </div>

            {/* Call to Actions (Primary, Secondary, WhatsApp) */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => openDemoModal()}
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Book Free Demo</span>
              </button>

              <Link
                to="/courses"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-xs transition-all flex items-center gap-2 hover:border-white/40"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-blue-300" />
              </Link>

              <a
                href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm sm:text-base border border-emerald-500/40 transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Bar Under Hero */}
            <div className="pt-4 flex items-center gap-4 text-xs text-blue-200/80 border-t border-blue-900/60">
              <span className="font-semibold text-white">Admissions Hotline:</span>
              <a href={`tel:${COMPANY_DATA.phoneNumbers[0].value}`} className="hover:text-amber-300 underline font-mono">
                {COMPANY_DATA.phoneNumbers[0].display}
              </a>
              <span>•</span>
              <span>Online &amp; Classroom (KPHB, Hyderabad)</span>
            </div>
          </div>

          {/* Right Column: High-Impact Tech & Career Dashboard Card */}
          <div className="lg:col-span-5 relative">
            {/* Visual Glassmorphism Terminal / Card */}
            <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-blue-400/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">kst-career-hub.sh</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                  Status: Admissions Open
                </div>
              </div>

              {/* Active Batches Highlight Box */}
              <div className="my-5 bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-amber-300 font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Upcoming Batch Schedule
                  </span>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded">
                    First 4 Sessions FREE
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-semibold">Morning Batch:</span>
                    </div>
                    <span className="text-amber-300 font-mono font-bold">7:30 AM IST</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-semibold">Evening Batch:</span>
                    </div>
                    <span className="text-amber-300 font-mono font-bold">8:30 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Technology Badges Matrix */}
              <div className="space-y-2 mb-5">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" /> High-Demand Tracks In Training
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-lg flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <div className="font-bold text-white text-xs">Generative AI &amp; Agents</div>
                      <div className="text-[10px] text-slate-400">RAG, LangGraph, MCP</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-lg flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="font-bold text-white text-xs">Data Engineering</div>
                      <div className="text-[10px] text-slate-400">PySpark, Databricks, Kafka</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <div>
                      <div className="font-bold text-white text-xs">Snowflake &amp; BigQuery</div>
                      <div className="text-[10px] text-slate-400">Cloud Data Warehousing</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div>
                      <div className="font-bold text-white text-xs">Talend &amp; .NET Core</div>
                      <div className="text-[10px] text-slate-400">ETL &amp; Full Stack Apps</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Features Strip */}
              <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Dedicated Career Support</span>
                    <span className="text-[10px] text-slate-400">Resume, Mocks &amp; On-Job Guidance</span>
                  </div>
                </div>
                <button
                  onClick={() => openDemoModal()}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-xs cursor-pointer transition-colors"
                >
                  Join Demo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
