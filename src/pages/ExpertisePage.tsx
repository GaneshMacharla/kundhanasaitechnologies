import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Database, 
  Code, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  Terminal
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { TECHNOLOGY_GROUPS } from '../data/technologiesData';
import { useConsultation } from '../context/ConsultationContext';

export const ExpertisePage: React.FC = () => {
  const { openConsultation } = useConsultation();

  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-cyan-400" />;
      case 'Database': return <Database className="w-8 h-8 text-blue-400" />;
      case 'Code': return <Code className="w-8 h-8 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-8 h-8 text-sky-400" />;
      default: return <Cpu className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Technology Expertise &amp; Architectural Stacks"
        description="Comprehensive technical competencies across AI &amp; Data, Data Platforms, Enterprise Applications, and Cloud &amp; Operations engineering."
        canonicalPath="/expertise"
      />

      {/* Hero */}
      <section className="bg-[#050E1D] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Engineering Competencies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight text-white">
              Technology Expertise Built on Architectural Discipline.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We master the technologies that run the modern digital enterprise. Grouped across 4 foundational pillars, our teams build scalable, secure, and future-ready systems.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Technology Groups In-Depth Showcase */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {TECHNOLOGY_GROUPS.map((group, gIdx) => (
            <div key={group.id} className="space-y-8">
              
              {/* Pillar Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A192F] flex items-center justify-center shrink-0 shadow-md">
                    {getGroupIcon(group.iconName)}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Pillar 0{gIdx + 1} • {group.subtitle}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                      {group.category}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                  {group.description}
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 mb-1">
                        {tech.enterpriseRole}
                      </div>
                      <h3 className="text-xl font-heading font-extrabold text-slate-900 mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {tech.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Capabilities &amp; Patterns
                      </div>
                      <ul className="space-y-1.5">
                        {tech.highlightedCapabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-heading font-extrabold text-slate-900">
              Our Engineering Standards &amp; Rigor
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Technology selection without engineering rigor leads to technical debt. We enforce strict quality gates across every deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-center">
              <ShieldCheck className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
              <h4 className="font-heading font-bold text-base text-slate-900">Zero-Trust Security</h4>
              <p className="text-xs text-slate-600">Encrypted in-transit and at-rest, automated static vulnerability scanning (SAST/DAST).</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-center">
              <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-heading font-bold text-base text-slate-900">99.99% Reliability</h4>
              <p className="text-xs text-slate-600">Redundant multi-region architectures, automated health checks, and circuit-breakers.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-center">
              <Layers className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <h4 className="font-heading font-bold text-base text-slate-900">Modular Architecture</h4>
              <p className="text-xs text-slate-600">Domain-driven design, decoupling dependencies to enable frictionless future expansion.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-center">
              <Terminal className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-heading font-bold text-base text-slate-900">Automated Testing</h4>
              <p className="text-xs text-slate-600">Unit, contract, integration, and load testing baked into automated CI/CD pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
            Discuss Your Enterprise Stack With Our Architects
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Need an objective assessment of your current data platform or software architecture? Let our specialists evaluate your requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openConsultation()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shadow-lg cursor-pointer"
            >
              Request Stack Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
