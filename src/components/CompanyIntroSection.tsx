import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Cloud, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Presentation (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 sm:aspect-square bg-slate-950">
              <img
                src="/images/enterprise-cloud-mesh.jpg"
                alt="Corporate Technology Briefing and Architecture Center"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>MCA Registered IT Enterprise</span>
                </div>
                <div className="text-base font-bold text-white">
                  Kundhana Sai IT Solutions Pvt. Ltd.
                </div>
                <div className="text-xs text-slate-300 mt-1 font-mono">
                  CIN: {CORPORATE_DATA.cin} • Incorporated 2018
                </div>
              </div>
            </div>

            {/* Subtle decorative dot pattern behind */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Narrative Section (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Kundhana Sai IT Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              A Trusted Technology Ally Delivering Architectural Rigor Since 2018.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Established in 2018, Kundhana Sai IT Solutions Pvt. Ltd. is an enterprise IT services and consulting organization dedicated to modernizing complex digital ecosystems. We combine deep engineering domain mastery with business-first agility, helping enterprises harness the disruptive power of artificial intelligence, modern cloud data fabrics, and mission-critical software engineering.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Our multidisciplinary practices partner directly with corporate leadership, transforming legacy bottlenecks into scalable competitive moats across India, North America, and international enterprise markets.
            </p>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Cpu className="w-4 h-4 text-cyan-600" />
                  <span>Cognitive AI Systems</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Autonomous agents, deterministic enterprise RAG, and private LLM guardrails.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Database className="w-4 h-4 text-blue-600" />
                  <span>Modern Data Platforms</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  High-throughput lakehouses, Snowflake, Talend migrations, and real-time streaming.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Cloud className="w-4 h-4 text-indigo-600" />
                  <span>Cloud &amp; DevOps Resilience</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Multi-cloud infrastructure, Terraform automation, and GitOps CI/CD delivery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise App Agility</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Scalable microservices in Java &amp; .NET, ServiceNow, and SAP data integration.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-sm tracking-wide shadow-md transition-all group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
