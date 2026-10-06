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
  ArrowRight 
} from 'lucide-react';
import { ENTERPRISE_SOLUTIONS } from '../data/solutionsData';
import { useDemoModal } from '../context/DemoModalContext';

export const SolutionsSnippet: React.FC = () => {
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
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              B2B Consulting &amp; Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
              Enterprise IT Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Beyond individual student training, Kundhana Sai IT Solutions Pvt. Ltd. delivers custom engineering, cloud migration, and intelligent AI automation for corporate clients.
            </p>
          </div>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-blue-600 hover:border-blue-600 font-bold text-xs uppercase tracking-wider shadow-xs transition-all shrink-0"
          >
            <span>View All Enterprise Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERPRISE_SOLUTIONS.slice(0, 6).map((sol) => {
            const IconComponent = getIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sol.shortDesc}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    {sol.capabilities.slice(0, 2).map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {sol.technologies.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/solutions"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate CTA Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#0A2540] to-[#154580] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold font-heading text-white">
              Looking for Corporate Training or Project Consulting?
            </h4>
            <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-xl">
              Upskill your engineering staff in Generative AI, Snowflake, or Databricks with bespoke corporate workshops tailored to your client deliverables.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md"
          >
            Talk to Our Technology Team
          </Link>
        </div>
      </div>
    </section>
  );
};
