import React from 'react';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  Sparkles, 
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { CtaBanner } from '../components/CtaBanner';
import { useDemoModal } from '../context/DemoModalContext';

export const AboutPage: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0A2540] via-[#0F325C] to-[#0A2540] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" /> Corporate Overview
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Empowering Careers Through Technology
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            {COMPANY_DATA.legalName} is an IT services, consulting, and workforce enablement organization established in 2018 in Hyderabad, India.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Story & Background Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Our Foundation &amp; Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 leading-tight">
                Bridging Enterprise Engineering and Career Growth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in 2018, <strong>Kundhana Sai IT Solutions Pvt. Ltd.</strong> originated as an enterprise consulting firm helping organizations execute modern data migrations, cloud implementations, and software development projects.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Observing a critical deficiency in traditional educational institutions—where graduates lack exposure to genuine enterprise toolchains like PySpark, Snowflake, and LLM architectures—we established our dedicated training division, <strong>Kundhana Sai Technologies</strong>.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our programs are taught by working IT architects who bring real-time client scenarios straight to the classroom, preparing learners for actual production responsibilities.
              </p>
            </div>

            {/* Corporate Profile Card */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 to-[#0A2540] rounded-2xl p-6 sm:p-8 text-white border border-slate-700 shadow-xl space-y-4">
              <h3 className="text-lg font-bold font-heading text-white border-b border-slate-700 pb-3 flex items-center justify-between">
                <span>Corporate Verification</span>
                <span className="text-emerald-400 text-xs font-mono">Govt. Registered</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Registered Entity:</span>
                  <span className="font-bold text-white text-sm">{COMPANY_DATA.legalName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Corporate Identification Number (CIN):</span>
                  <span className="font-bold font-mono text-amber-300 text-sm">{COMPANY_DATA.cin}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Incorporation Year:</span>
                  <span className="font-bold text-white text-sm">{COMPANY_DATA.establishedYear}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Ministry of Corporate Affairs (MCA) Directors:</span>
                  <div className="mt-1 space-y-1">
                    {COMPANY_DATA.directors.map((d, i) => (
                      <div key={i} className="text-slate-200">
                        • {d.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-400/90">
                  <span>Note: Verified per ROC Hyderabad registration records.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To democratize advanced enterprise technology education by delivering hands-on, project-centric coaching that empowers students, fresh graduates, and career switchers to achieve fulfilling, high-impact careers in IT.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the most trusted technology training and solutions provider in Telangana and Andhra Pradesh, known for practical excellence, technical integrity, and tangible placement success.
            </p>
          </div>
        </div>

        {/* Dual Operating Pillars */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Dual Operating Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
              Two Specialized Divisions, One Unified Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-lg font-heading">
                <Users className="w-5 h-5" />
                <span>1. Technology Career Academy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Focused on individual student enablement. We offer specialized tracks in Generative AI, Data Engineering, Snowflake, BigQuery, Talend, and .NET Full Stack, backed by live demos, mock interviews, and continuous job support.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Morning &amp; evening flexible batches</li>
                <li className="flex items-center gap-2">• Hyderabad classroom &amp; online worldwide options</li>
                <li className="flex items-center gap-2">• 100% practical capstone projects</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-4">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-lg font-heading">
                <Briefcase className="w-5 h-5" />
                <span>2. Enterprise IT Solutions Division</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Delivering data lakehouse engineering, cloud infrastructure modernization, AI agent workflow automation, and custom software development for mid-market and enterprise organizations.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">• Azure &amp; AWS cloud platform delivery</li>
                <li className="flex items-center gap-2">• Corporate workforce upskilling cohorts</li>
                <li className="flex items-center gap-2">• Specialized IT consulting &amp; staffing support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
};
