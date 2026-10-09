import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Database, 
  Code, 
  Cloud, 
  ArrowRight, 
  CheckCircle2,
  Layers,
  Cpu
} from 'lucide-react';
import { TECHNOLOGY_GROUPS, TechnologyGroup } from '../data/technologiesData';

export const TechnologyExpertiseSection: React.FC = () => {
  const [activeGroupId, setActiveGroupId] = useState<string>(TECHNOLOGY_GROUPS[0].id);

  const activeGroup = TECHNOLOGY_GROUPS.find(g => g.id === activeGroupId) || TECHNOLOGY_GROUPS[0];

  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0A192F] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technology Stack &amp; Practices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Proven Engineering Expertise Across 4 Strategic Stacks.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We align enterprise-proven technologies with disciplined architectural patterns, avoiding trendy bloat to engineer systems that scale securely.
          </p>
        </div>

        {/* Tab Navigation: 4 Client Groupings */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {TECHNOLOGY_GROUPS.map((group) => {
            const isActive = group.id === activeGroupId;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroupId(group.id)}
                className={`px-5 py-3 rounded-xl font-heading font-bold text-sm tracking-wide transition-all flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400/30'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80'
                }`}
              >
                {getGroupIcon(group.iconName)}
                <span>{group.category}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {group.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Group Content Showcase */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Header info of active group */}
          <div className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                {activeGroup.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                {activeGroup.category} Architecture Matrix
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                {activeGroup.description}
              </p>
            </div>

            <Link
              to="/expertise"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 tracking-wider uppercase transition-colors shrink-0"
            >
              <span>View Full Expertise Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Structured Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGroup.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 group"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    {item.enterpriseRole}
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.shortDesc}
                </p>

                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Core Capabilities
                  </div>
                  <ul className="space-y-1.5">
                    {item.highlightedCapabilities.slice(0, 3).map((cap, cIdx) => (
                      <li key={cIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cross-link */}
        <div className="mt-12 text-center">
          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <span>Learn how our technology competencies integrate into end-to-end solutions</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
