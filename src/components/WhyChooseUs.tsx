import React from 'react';
import { 
  BookOpen, 
  Code, 
  Briefcase, 
  UserCheck, 
  ShieldCheck, 
  Headphones,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'Industry-Relevant Curriculum',
      desc: 'Learn frameworks, architecture patterns, and tools actively deployed in today’s modern enterprise IT environments.',
      icon: BookOpen,
      color: 'border-blue-500/30 bg-blue-50/50'
    },
    {
      num: '02',
      title: 'Real-Time Projects',
      desc: 'Work on hands-on, production-grade projects rather than simplistic theoretical slides or trivial toy exercises.',
      icon: Code,
      color: 'border-amber-500/30 bg-amber-50/50'
    },
    {
      num: '03',
      title: 'Dedicated Placement Assistance',
      desc: 'Receive comprehensive resume restructuring, technical drills, HR mock rounds, and active job notifications.',
      icon: Briefcase,
      color: 'border-emerald-500/30 bg-emerald-50/50'
    },
    {
      num: '04',
      title: 'Experienced Working Trainers',
      desc: 'Learn directly from practicing enterprise architects and senior engineers who handle daily production workloads.',
      icon: UserCheck,
      color: 'border-purple-500/30 bg-purple-50/50'
    },
    {
      num: '05',
      title: 'Affordable Career Training',
      desc: 'High-caliber, practical technology education structured at transparent, accessible pricing with easy installment options.',
      icon: ShieldCheck,
      color: 'border-sky-500/30 bg-sky-50/50'
    },
    {
      num: '06',
      title: 'Continuous Career Support',
      desc: 'Our commitment doesn’t end when sessions conclude. Get continuous mentor guidance during initial on-job project delivery.',
      icon: Headphones,
      color: 'border-indigo-500/30 bg-indigo-50/50'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            The Kundhana Sai Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
            Why Choose Kundhana Sai Technologies?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            We focus on tangible job-readiness and technical depth rather than superficial certificates. Here is what sets our training institute apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.num}
                className="relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black font-heading text-slate-300 group-hover:text-blue-600 transition-colors">
                    {pt.num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Training Benefit</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
