import React from 'react';
import { 
  Compass, 
  Lightbulb, 
  Code2, 
  FileCheck2, 
  UserCheck2, 
  Briefcase, 
  LifeBuoy, 
  ArrowRight 
} from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export const TrainingJourney: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const steps = [
    {
      step: '01',
      title: 'Choose Your Technology',
      desc: '1-on-1 counseling to match your background (Fresh graduate, developer, non-IT) with the highest-demand tech stack.',
      icon: Compass,
      tag: 'Counseling'
    },
    {
      step: '02',
      title: 'Learn Industry Concepts',
      desc: 'Interactive live sessions breaking down foundational theory and real architectural mechanics.',
      icon: Lightbulb,
      tag: 'Core Sessions'
    },
    {
      step: '03',
      title: 'Build Real-Time Projects',
      desc: 'Work on actual production scenarios (RAG pipelines, Databricks lakes, Snowpipe, full stack APIs).',
      icon: Code2,
      tag: 'Hands-On'
    },
    {
      step: '04',
      title: 'Assignments & Assessments',
      desc: 'Weekly milestone quizzes and code reviews with trainer feedback to solidify problem-solving skills.',
      icon: FileCheck2,
      tag: 'Evaluation'
    },
    {
      step: '05',
      title: 'Mock Interviews',
      desc: 'Realistic 1-on-1 technical interrogations, architecture whiteboarding, and HR soft-skill grooming.',
      icon: UserCheck2,
      tag: 'Prep'
    },
    {
      step: '06',
      title: 'Placement Assistance',
      desc: 'Resume ATS optimization, GitHub portfolio polishing, and active interview opportunity coordination.',
      icon: Briefcase,
      tag: 'Placement'
    },
    {
      step: '07',
      title: 'Job Support',
      desc: 'Continuous advisory support during your initial 3–6 months on the client project to ensure long-term retention.',
      icon: LifeBuoy,
      tag: 'On-Job Success'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
            Step-By-Step Career Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mt-3">
            From Learning to Getting Job-Ready
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            A structured, 7-phase methodology designed to turn beginners and career switchers into confident, employable IT professionals.
          </p>
        </div>

        {/* Process Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;
            return (
              <div
                key={item.step}
                className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isLast
                    ? 'bg-gradient-to-b from-blue-900/60 to-indigo-950/80 border-amber-400/50 shadow-lg md:col-span-2 lg:col-span-1'
                    : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-slate-700/80 text-amber-300 font-bold font-mono text-sm flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold font-heading text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Phase {index + 1} of 7</span>
                  <span className="text-amber-400 font-semibold">Step Verified ✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Journey Action */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-800/80 to-blue-900/40 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Not sure which technology track fits your profile?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Get free personalized technology counseling from our lead trainer today.
            </p>
          </div>
          <button
            onClick={() => openDemoModal()}
            className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            Get Free Career Guidance
          </button>
        </div>
      </div>
    </section>
  );
};
