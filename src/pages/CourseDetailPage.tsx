import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Sparkles, 
  Clock, 
  Monitor, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Briefcase
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { COMPANY_DATA } from '../data/companyData';
import { useDemoModal } from '../context/DemoModalContext';
import { CtaBanner } from '../components/CtaBanner';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openDemoModal } = useDemoModal();
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Course Hero */}
      <div className="bg-gradient-to-b from-[#0A2540] via-[#0F325C] to-[#0A2540] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/courses" className="text-xs text-blue-300 hover:underline">
                ← All Courses
              </Link>
              <span className="text-blue-400 text-xs">/</span>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-md">
                {course.category}
              </span>
              {course.badge && (
                <span className="text-xs font-extrabold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {course.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {course.title} Training Program
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              {course.fullDesc}
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <span className="text-blue-200 block">Duration</span>
                <span className="font-bold text-white text-sm">{course.duration}</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <span className="text-blue-200 block">Next Batches</span>
                <span className="font-bold text-amber-300 text-sm">7:30 AM &amp; 8:30 PM</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <span className="text-blue-200 block">Training Mode</span>
                <span className="font-bold text-white text-sm">Online &amp; Classroom</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <span className="text-blue-200 block">Special Offer</span>
                <span className="font-bold text-emerald-300 text-sm">{course.freeSessions}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openDemoModal(course.title)}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Book Free Demo in {course.title}</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DATA.whatsappNumber.value}?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20curriculum`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Syllabus & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Syllabus & Projects Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Core Modules Breakdown */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Comprehensive Curriculum
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-slate-900 mt-2">
                    Detailed Syllabus Breakdown
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {course.syllabus.length} Core Modules
                </span>
              </div>

              <div className="space-y-4">
                {course.syllabus.map((mod, idx) => {
                  const isOpen = openModuleIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-heading font-bold text-base text-slate-900">
                            {mod.moduleTitle}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50">
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                            {mod.topics.map((t, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real-Time Projects Section */}
            <div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Hands-On Portfolio
              </span>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mt-2 mb-6">
                Real-Time Enterprise Capstone Projects
              </h2>

              <div className="space-y-4">
                {course.realTimeProjects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                      <Terminal className="w-4 h-4" />
                      <span>Capstone Project {pIdx + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Tech Grid */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-base font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Tools, Platforms &amp; Libraries Practiced
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-blue-50/60 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-base font-bold font-heading text-blue-950 mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-700" />
                Target Job Profiles for this Program
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {course.careerRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-900">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Sticky Enrollment Box */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-lg space-y-5">
              <div className="text-center pb-4 border-b border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full inline-block mb-2">
                  🔥 {course.freeSessions}
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Join the Upcoming Batch
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Attend the first 4 live sessions before paying any tuition fees.
                </p>
              </div>

              {/* Schedule Box */}
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" /> Morning Batch:
                  </div>
                  <div className="text-slate-600">7:30 AM – 8:45 AM IST (Online / Classroom)</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" /> Evening Batch:
                  </div>
                  <div className="text-slate-600">8:30 PM – 9:45 PM IST (Online / Classroom)</div>
                </div>
              </div>

              {/* CTA Action */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openDemoModal(course.title)}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Reserve Demo Seat Free</span>
                </button>

                <a
                  href={`tel:${COMPANY_DATA.phoneNumbers[0].value}`}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call Course Mentor ({COMPANY_DATA.phoneNumbers[0].display})</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-500 text-center space-y-1 pt-2">
                <div>✓ 100% Practical project coaching</div>
                <div>✓ Resume &amp; Mock Interview Support Included</div>
                <div>✓ Centre located at KPHB 9th Phase, Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
};
