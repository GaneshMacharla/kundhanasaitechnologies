import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Database, 
  Cpu, 
  Code2, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Compass
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ENTERPRISE_SERVICES } from '../data/servicesData';
import { useConsultation } from '../context/ConsultationContext';

export const ServicesPage: React.FC = () => {
  const { openConsultation } = useConsultation();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-500" />;
      case 'Database': return <Database className="w-6 h-6 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-500" />;
      case 'Code': return <Code2 className="w-6 h-6 text-emerald-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-500" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-500" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-teal-500" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Enterprise IT Services &amp; Solutions Portfolio"
        description="Explore Kundhana Sai IT Solutions comprehensive technology services: Generative AI, Cloud Data Engineering, Snowflake, Application Development, SAP Integration, DevOps, and ServiceNow."
        canonicalPath="/services"
      />

      {/* Services Portfolio Hero */}
      <section className="bg-[#050E1D] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Lifecycle Delivery Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight text-white">
              Enterprise Services Designed for Measurable Scale.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We engineer mission-critical systems across 7 core practices. Each service line unites senior architectural discipline with agile execution to de-risk modernization and accelerate your time to market.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Detailed Practice Line Sections */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              7 Core Enterprise Practices
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Select any practice below to explore business hurdles addressed, capabilities, illustrative domain use cases, and delivery blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ENTERPRISE_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-700 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Featured Capabilities
                    </div>
                    <ul className="space-y-1.5">
                      {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Practice 0{idx + 1}
                  </span>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    <span>View Detail Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>How We Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Flexible Enterprise Engagement Models
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Whether you need strategic architecture advisory, dedicated co-engineering pods, or SLA-managed solutions, we structure our work to match your organizational governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900">
                Strategic Consulting &amp; Architecture Discovery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Time-boxed 2 to 6-week architecture assessments, data readiness audits, cloud TCO modeling, and AI feasibility blueprints delivered directly by our senior technical principals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900">
                Turnkey Agile Engineering Squads
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-stack pods (Lead Architect, Senior Engineers, Data Specialists, QA Lead) dedicated to engineering, integrating, and launching production-ready software increments against contractual milestones.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900">
                SLA-Backed Managed Services &amp; Operations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ongoing 24/7 cloud reliability engineering, continuous ServiceNow platform upgrades, data pipeline health monitoring, and guaranteed response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
            Schedule a Confidential Architecture Review
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have a project scope or RFP in preparation? Connect with our enterprise practice leads to validate technical approaches and delivery estimates.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openConsultation()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shadow-lg cursor-pointer"
            >
              Request Architecture Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
