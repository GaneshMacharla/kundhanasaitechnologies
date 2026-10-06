import React from 'react';
import { 
  GraduationCap, 
  Laptop, 
  FileEdit, 
  Users2, 
  FileCheck, 
  Mic2, 
  TrendingUp, 
  Briefcase, 
  Infinity as InfinityIcon, 
  Compass 
} from 'lucide-react';

export const StudentBenefits: React.FC = () => {
  const benefits = [
    { title: 'Live Interactive Sessions', desc: 'Real-time discussions, screen shares & interactive coding', icon: GraduationCap },
    { title: 'Real-Time Enterprise Projects', desc: 'Complete architectures based on actual business client specs', icon: Laptop },
    { title: 'Assignments & Assessments', desc: 'Weekly coding assignments to reinforce conceptual clarity', icon: FileEdit },
    { title: 'Experienced Industry Trainers', desc: 'Mentors actively employed as architects & senior devs', icon: Users2 },
    { title: 'Targeted Resume Preparation', desc: 'ATS-formatted profile highlighting your capstones effectively', icon: FileCheck },
    { title: 'Technical Mock Interviews', desc: '1-on-1 simulated interviews with constructive feedback', icon: Mic2 },
    { title: 'Dedicated Placement Assistance', desc: 'Continuous interview scheduling and profile positioning', icon: TrendingUp },
    { title: 'Post-Placement Job Support', desc: 'Guidance during your initial client deployment hurdles', icon: Briefcase },
    { title: 'Lifetime Access to Materials', desc: 'Recorded class archives, interview Q&A banks, and guides', icon: InfinityIcon },
    { title: 'Personalized Career Guidance', desc: 'Expert roadmap based on your education & experience level', icon: Compass }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            All-Inclusive Training Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
            Everything You Need to Succeed as an IT Professional
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Every enrolled student receives complete end-to-end support from the first demo session through to workplace onboarding.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all text-center flex flex-col items-center justify-between group"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white border border-slate-200 flex items-center justify-center mb-3 transition-colors shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    {b.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
