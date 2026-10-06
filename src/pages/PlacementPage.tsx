import React from 'react';
import { 
  Briefcase, 
  FileText, 
  Users, 
  CheckCircle2, 
  LifeBuoy, 
  MessageSquareCheck, 
  BellRing, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  FolderLock
} from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import { COMPANY_DATA } from '../data/companyData';
import { CtaBanner } from '../components/CtaBanner';

export const PlacementPage: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const roadmap = [
    {
      step: '01',
      title: 'Profile Audit & Career Alignment',
      desc: 'Our senior mentors evaluate your education, degree branch (B.Tech, BCA, Non-IT), year of graduation, and past experience to identify the most suitable technology specialization.'
    },
    {
      step: '02',
      title: 'Industry-Grade Resume Building',
      desc: 'We overhaul your resume from scratch, focusing on technical keywords, architecture diagrams, production capstone achievements, and ATS compliance.'
    },
    {
      step: '03',
      title: 'Technical Drilling & Scenario Prep',
      desc: 'Master real production scenarios: handling data skew in PySpark, optimizing Snowflake clustering, building RAG fallback mechanisms, and writing clean ASP.NET Core endpoints.'
    },
    {
      step: '04',
      title: '1-on-1 Rigorous Mock Interviews',
      desc: 'Participate in realistic video mock interviews with senior corporate interviewers. Receive an objective scorecard assessing clarity, technical depth, and confidence.'
    },
    {
      step: '05',
      title: 'HR Screening & Soft-Skill Coaching',
      desc: 'Master behavioral questions, career gap explanations, project storytelling, and effective compensation negotiation strategies.'
    },
    {
      step: '06',
      title: 'Active Job Alerts & Opportunities',
      desc: 'Get continuous vacancy updates across MNCs, product companies, and Tier-1 IT services firms hiring data engineers, AI developers, and full-stack programmers.'
    },
    {
      step: '07',
      title: 'On-Job Mentorship & Support',
      desc: 'Once you begin your new job or client project, our trainers assist with architectural guidance, code reviews, and debugging during your initial ramp-up weeks.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0A2540] via-[#0F325C] to-[#0A2540] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Career-Centric Outcome
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Dedicated Placement Assistance &amp; Job Support
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            We don’t just teach technology; we prepare you to crack rigorous technical interview loops and excel once you step onto the client floor.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openDemoModal()}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Book Free Career Counseling
            </button>
          </div>
        </div>
      </div>

      {/* Main Placement Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Honest Placement Philosophy Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Our Professional Ethics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-3 mb-4">
              What "Placement Assistance" Really Means at Kundhana Sai
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              In an industry filled with hyperbolic promises and manufactured claims, we believe in radical transparency: <strong>success in an IT interview comes from demonstrable skills, architecture clarity, and genuine project experience.</strong>
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide you with the exact technical rigor, project depth, and personalized mentorship needed to prove your competence to hiring managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real Project Proof
              </h3>
              <p className="text-xs text-slate-600">
                You build and present end-to-end architectures (RAG systems, Medallion Lakehouses, Snowpipe CDC) rather than generic tutorial code.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Exhaustive Mocks
              </h3>
              <p className="text-xs text-slate-600">
                Multiple rounds of technical screening until you can answer complex production debugging questions with fluency.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Post-Placement Safety
              </h3>
              <p className="text-xs text-slate-600">
                Support doesn't vanish upon offer letter receipt. We provide project onboarding guidance to safeguard your probation and role transition.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Step Placement Lifecycle */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Step-by-Step Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
              The 7-Stage Placement Enablement Lifecycle
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              How our dedicated placement cell mentors you from initial enrollment through post-hire project stability.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {roadmap.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-blue-400 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-amber-300 font-bold font-mono text-base flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Receive - Checklist */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-[#0A2540] rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Full Career Toolkit
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-3 mb-4">
                Everything Included with Your Course
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                No hidden charges for placement workshops or interview guidance. Every student enrolled in our core programs gets complete access to the placement ecosystem.
              </p>

              <button
                onClick={() => openDemoModal()}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Join Free Demo &amp; Review Placement Plan
              </button>
            </div>

            <div className="space-y-3">
              {[
                'ATS-formatted resume templates tailored for high-growth tech roles',
                'Repository of 500+ real technical interview questions and answers',
                'Recorded video archives of architectural case studies & capstones',
                'One-on-one personal debrief after every mock interview',
                'LinkedIn profile optimization and GitHub repository presentation guide',
                'Continuous post-placement mentor accessibility for on-job troubleshooting'
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3 border border-white/10 text-xs text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
};
