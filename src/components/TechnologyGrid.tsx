import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, Filter } from 'lucide-react';
import { TECHNOLOGIES_LIST, TechItem } from '../data/technologiesData';

export const TechnologyGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'AI & Data', 'Cloud & DevOps', 'Core Engineering', 'Enterprise'];

  const filteredTech = selectedFilter === 'All'
    ? TECHNOLOGIES_LIST
    : TECHNOLOGIES_LIST.filter(t => t.category === selectedFilter);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> Full-Spectrum Capability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mt-3">
              Technology Expertise &amp; Enterprise Stacks
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Beyond individual courses, Kundhana Sai Technologies operates as an end-to-end technology solutions firm with deep proficiencies across modern data, AI, cloud, and enterprise systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 rounded-xl p-3.5 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  {tech.category}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {tech.name}
                </h4>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-tight">
                {tech.tagline}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Credential Note */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Enterprise Services &amp; Customized Corporate Workshops Available</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-amber-400 font-mono">CIN: U72200TG2018PTC126276</span>
          <span className="hidden sm:inline">•</span>
          <span>Hyderabad &amp; Global Delivery</span>
        </div>
      </div>
    </section>
  );
};
