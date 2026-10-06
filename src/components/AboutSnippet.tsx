import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Award, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export const AboutSnippet: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image / Trust Matrix */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-tr from-[#0A2540] to-[#154580] rounded-3xl p-8 text-white relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Established Company Profile
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading">
                    {COMPANY_DATA.legalName}
                  </h3>
                  <p className="text-blue-200 text-xs mt-1">
                    Incorporated under Ministry of Corporate Affairs (MCA), Govt. of India
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-blue-400/20 text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-blue-400/15">
                    <span className="text-blue-200">Established Year:</span>
                    <span className="font-bold text-white font-mono">{COMPANY_DATA.establishedYear}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-400/15">
                    <span className="text-blue-200">Corporate CIN:</span>
                    <span className="font-bold text-amber-300 font-mono">{COMPANY_DATA.cin}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-400/15">
                    <span className="text-blue-200">Headquarters:</span>
                    <span className="font-bold text-white">Hyderabad, Telangana</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-blue-200">Operations:</span>
                    <span className="font-bold text-emerald-300">IT Solutions + Career Training</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-400/20 text-[11px] text-blue-200">
                  <span className="text-amber-300 font-bold block mb-0.5">Corporate Governance:</span>
                  Directors: {COMPANY_DATA.directors.map(d => d.name).join(' & ')} <span className="text-amber-400/80">(Verified with official filings)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Dual Business Identity */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Empowering Careers Through Technology
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              Where Real-World IT Consulting Meets Career Training
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Kundhana Sai IT Solutions Pvt. Ltd.</strong> is a technology services and consulting organization specializing in enterprise data engineering, artificial intelligence, cloud modernization, and software delivery.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Our training division, <strong>Kundhana Sai Technologies</strong>, bridges the gap between academic theory and high-paying IT jobs. Because our instructors and founders build production solutions for corporate clients, our learners gain practical, battle-tested skills in Generative AI, PySpark, Snowflake, and full-stack development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Career Training Division
                </h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Hands-on courses, live projects, mock technical drills, and dedicated placement assistance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Enterprise IT Solutions
                </h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Data lakehouse migration, RAG agent development, and corporate workforce enablement.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
