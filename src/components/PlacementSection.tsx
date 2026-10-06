import React from 'react';
import { 
  FileText, 
  Users, 
  MessageSquareCheck, 
  BellRing, 
  Compass, 
  LifeBuoy, 
  FolderLock, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export const PlacementSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const services = [
    {
      title: 'Resume Preparation',
      desc: 'ATS-optimized resumes showcasing real-time capstone architecture and enterprise toolchains.',
      icon: FileText
    },
    {
      title: 'Technical Interview Preparation',
      desc: 'Scenario-based questions, debugging drills, live coding, and system design whiteboarding.',
      icon: Users
    },
    {
      title: '1-on-1 Mock Interviews',
      desc: 'Simulated corporate interview sessions with detailed scorecards and targeted feedback.',
      icon: MessageSquareCheck
    },
    {
      title: 'HR Interview Preparation',
      desc: 'Communication coaching, behavioral questions, salary negotiation, and professional etiquette.',
      icon: CheckCircle
    },
    {
      title: 'Continuous Job Alerts',
      desc: 'Direct notifications for opening requirements across Hyderabad, Bangalore, Pune, and remote roles.',
      icon: BellRing
    },
    {
      title: '1-on-1 Career Guidance',
      desc: 'Profile-matching guidance to position your past background (B.Tech, Non-IT, gaps) effectively.',
      icon: Compass
    },
    {
      title: 'Post-Placement Job Support',
      desc: 'Mentorship during your first 90 days on client projects to handle real tasks with confidence.',
      icon: LifeBuoy
    },
    {
      title: 'Lifetime Access to Materials',
      desc: 'Recorded sessions, project source code, interview cheat-sheets, and curated Q&A repositories.',
      icon: FolderLock
    }
  ];

  return (
    <section id="placement-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Strong Value Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Career Outcome Focused
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              Training + Placement Assistance + Job Support
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We understand that learning the technology is only half the battle. Our dedicated career cell prepares you comprehensively to crack demanding technical interviews and perform reliably once you join.
            </p>

            <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-2xl space-y-2 text-xs text-blue-900">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <Sparkles className="w-4 h-4 text-blue-700" /> Our Honest Commitment:
              </div>
              <p className="text-slate-700 leading-relaxed">
                Rather than unrealistic marketing gimmicks, we provide thorough, structured interview preparation, genuine real-time project portfolio development, and continuous post-hire support to help you achieve long-term career growth.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openDemoModal()}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>Start Your IT Career</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 8 Comprehensive Service Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white border border-slate-200 flex items-center justify-center mb-3 transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold font-heading text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
