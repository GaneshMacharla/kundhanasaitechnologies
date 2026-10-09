import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Activity, 
  ShoppingBag, 
  Factory, 
  Zap, 
  Terminal, 
  ArrowRight, 
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { VERIFIED_INDUSTRIES, IndustryDomain } from '../data/industriesData';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-6 h-6 text-cyan-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-rose-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-blue-600" />;
      case 'Factory': return <Factory className="w-6 h-6 text-amber-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-indigo-600" />;
      default: return <Building className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Target Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Industry Focus Areas &amp; Domain Architectures.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every vertical presents distinct compliance boundaries and data topologies. We configure our 7 technology practices to address sector-specific complexities.
          </p>
        </div>

        {/* 6 Industry Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VERIFIED_INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIndustryIcon(industry.iconName)}
                </div>

                <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors mb-2">
                  {industry.name}
                </h3>

                <p className="text-xs font-semibold text-cyan-700 mb-4 line-clamp-1">
                  {industry.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {industry.overview}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Key Sector Challenges Solved
                  </div>
                  <ul className="space-y-1.5">
                    {industry.keyChallenges.slice(0, 2).map((challenge, cIdx) => (
                      <li key={cIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  {industry.relevantServices[0]}
                </span>
                <Link
                  to="/industries"
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 group/btn"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Client Ethics Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <em>Note:</em> Domain architectures reflect established technical competencies and solution blueprints configured for specific industry data and regulatory standards.
        </div>
      </div>
    </section>
  );
};
