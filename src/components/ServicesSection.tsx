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
  ChevronRight
} from 'lucide-react';
import { ENTERPRISE_SERVICES, EnterpriseService } from '../data/servicesData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
      case 'Database':
        return <Database className="w-6 h-6 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-500" />;
      case 'Code':
        return <Code2 className="w-6 h-6 text-emerald-500" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-500" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-sky-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-teal-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities &amp; Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Enterprise Technology Practices Built for Measurable Value.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From cognitive autonomous agents to petabyte-scale cloud lakehouses and mission-critical ERP integrations, explore our 7 specialized enterprise delivery practices.
          </p>
        </div>

        {/* 7 Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENTERPRISE_SERVICES.map((service, index) => {
            const isFeatured = index === 0; // Flagship GenAI
            return (
              <div
                key={service.id}
                className={`group rounded-2xl bg-white border ${
                  isFeatured 
                    ? 'border-cyan-300 ring-2 ring-cyan-400/20 shadow-xl' 
                    : 'border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300'
                } p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-50/50 transition-all shadow-inner">
                      {getIcon(service.iconName)}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isFeatured 
                        ? 'bg-cyan-100 text-cyan-800 border border-cyan-200' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Key Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-500 text-xs font-medium">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-heading font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Hub CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#102A4E] text-white font-heading font-bold text-sm tracking-wide shadow-md transition-all group"
          >
            <span>View Comprehensive Services Architecture</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
