import React from 'react';
import { 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Users, 
  MessageSquareCheck, 
  LifeBuoy 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      title: 'Industry-Oriented Training',
      desc: 'Aligned directly with modern hiring benchmarks',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Real-Time Projects',
      desc: 'Build enterprise pipelines & scalable applications',
      icon: Code2,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Placement Assistance',
      desc: 'Dedicated profile reviews & interview coordination',
      icon: Briefcase,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Experienced Trainers',
      desc: 'Mentored by working enterprise IT professionals',
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Mock Interviews',
      desc: '1-on-1 technical & HR screening drills with feedback',
      icon: MessageSquareCheck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Job Support',
      desc: 'Ongoing guidance during your client project onboarding',
      icon: LifeBuoy,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50'
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-start gap-2.5 ${idx !== 0 ? 'pt-4 sm:pt-0 lg:pl-4' : ''}`}
              >
                <div className={`w-9 h-9 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {item.desc}
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
