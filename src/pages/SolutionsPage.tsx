import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Sparkles, 
  Code, 
  Cpu, 
  Layers, 
  Cloud, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Users2,
  PhoneCall
} from 'lucide-react';
import { ENTERPRISE_SOLUTIONS } from '../data/solutionsData';
import { COMPANY_DATA } from '../data/companyData';
import { useDemoModal } from '../context/DemoModalContext';
import { CtaBanner } from '../components/CtaBanner';

export const SolutionsPage: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return Database;
      case 'Sparkles': return Sparkles;
      case 'Code': return Code;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Cloud': return Cloud;
      default: return CheckCircle;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0A2540] via-[#0F325C] to-[#0A2540] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" /> B2B Engineering Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Enterprise IT Solutions &amp; Consulting
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Accelerating digital modernization through bespoke data platforms, autonomous agentic AI systems, cloud infrastructure, and enterprise application development.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              Consult with Our Technology Architects
            </Link>
          </div>
        </div>
      </div>

      {/* Main Services Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Enterprise Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
            Modern IT Capabilities Engineered for Scale
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            We partner with businesses to architect, build, and optimize high-throughput technology infrastructure.
          </p>
        </div>

        {/* Services Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENTERPRISE_SOLUTIONS.map((sol) => {
            const IconComponent = getIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {sol.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Core Delivery Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {sol.capabilities.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Primary Stacks:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {sol.technologies.map((t, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Training & Team Upskilling */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0A2540] to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Corporate Training &amp; Upskilling
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Upskill Your Engineering Workforce in Generative AI &amp; Cloud Data
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Does your enterprise need to migrate to Snowflake, build custom RAG pipelines, or modernize legacy ETL into PySpark Databricks? We conduct tailor-made corporate cohorts aligned directly with your internal client architectures.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Custom Project Blueprints
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Flexible Onsite / Virtual
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Post-Training Lab Support
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider text-center transition-all cursor-pointer shadow-md"
              >
                Request Corporate Proposal
              </Link>
              <a
                href={`tel:${COMPANY_DATA.phoneNumbers[0].value}`}
                className="text-xs text-blue-200 hover:text-white flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Or call {COMPANY_DATA.phoneNumbers[0].display}
              </a>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
};
