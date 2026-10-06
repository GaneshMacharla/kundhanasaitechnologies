import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Code2, 
  Users, 
  MessageSquareCheck, 
  LifeBuoy, 
  BookOpen, 
  Monitor, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  Award,
  Layers,
  FileCheck,
  Cpu,
  Database,
  Terminal,
  Zap,
  Star,
  Check
} from 'lucide-react';
import { COURSES, Course } from '../data/coursesData';
import { COMPANY_DATA } from '../data/companyData';
import { useDemoModal } from '../context/DemoModalContext';
import { SyllabusModal } from '../components/SyllabusModal';

export const LandingPage: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [activeCourseCategory, setActiveCourseCategory] = useState<'All' | 'AI & Data' | 'Cloud & Analytics' | 'Software Engineering'>('All');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const primaryPhone = COMPANY_DATA.phoneNumbers[0];
  const secondaryPhone = COMPANY_DATA.phoneNumbers[1];
  const whatsapp = COMPANY_DATA.whatsappNumber;

  const filteredCourses = activeCourseCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === activeCourseCategory);

  const faqItems = [
    {
      q: 'Are the first 4 demo sessions really free?',
      a: 'Yes, 100%! You can attend the first 4 live interactive sessions completely free with zero advance payment. You only make an enrollment decision after evaluating the trainer, curriculum, and hands-on teaching style.'
    },
    {
      q: 'What are the batch timings?',
      a: 'We offer two daily batches: Morning Batch at 7:30 AM (IST) and Evening Batch at 8:30 PM (IST). Flexible weekend mentoring batches are also available for working professionals.'
    },
    {
      q: 'Do you provide online and classroom training?',
      a: 'Both options are available. You can join online interactive sessions via Zoom/Teams with daily recorded backups, or attend classroom sessions at our training center in KPHB 9th Phase, Kukatpally, Hyderabad.'
    },
    {
      q: 'What does your placement assistance include?',
      a: 'Every student receives ATS-compliant resume restructuring, 1-on-1 technical mock interviews, system design whiteboarding drills, HR screening coaching, regular job notifications, and continuous post-placement on-job support.'
    },
    {
      q: 'Can non-IT graduates or career switchers join?',
      a: 'Yes! Our syllabus is structured from fundamentals to advanced enterprise architectures, supported by practical daily assignments and personalized mentor doubt clearing.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 scroll-smooth">
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-slate-200 text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-amber-300 font-bold">New Batches Starting:</span>
            <span className="text-slate-300">Morning 7:30 AM &amp; Evening 8:30 PM IST</span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:inline-block bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
              First 4 Sessions FREE
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${primaryPhone.value}`} 
              className="text-slate-300 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{primaryPhone.display}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Glassmorphic Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Modern Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0A2540] via-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:shadow-blue-500/25 transition-all">
              <span className="font-heading font-black text-xl text-amber-300">K</span>
              <span className="font-heading font-bold text-base -ml-1 text-white">S</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                KUNDHANA SAI
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1 flex items-center gap-1.5">
                <span className="text-blue-600">Technologies</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>Hyderabad</span>
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-600">
            <a href="#courses" className="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition-all">
              Courses
            </a>
            <a href="#batches" className="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition-all">
              Batch Timings
            </a>
            <a href="#why-us" className="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition-all">
              Why Us
            </a>
            <a href="#placement" className="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition-all">
              Placement Assistance
            </a>
            <a href="#faq" className="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition-all">
              FAQs
            </a>
            <a href="#contact" className="px-3.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition-all">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.value}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{primaryPhone.display}</span>
            </a>

            <button
              onClick={() => openDemoModal()}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Free Demo</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Hero Section (Clean, Modern SaaS Style with Ambient Glow) */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-white via-slate-50/60 to-white">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/10 to-amber-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span>Premier IT Training Institute • KPHB, Hyderabad</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-[-0.03em] leading-[1.12]">
                Master In-Demand IT Skills.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                  Built for the Real World.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                Industry-oriented training in <strong className="text-slate-800">Generative AI</strong>, <strong className="text-slate-800">Data Engineering</strong>, <strong className="text-slate-800">Snowflake</strong>, and <strong className="text-slate-800">.NET Full Stack</strong>. Practical projects, 1-on-1 mock interviews, and dedicated career placement support.
              </p>

              {/* Offer Highlight Pill */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/60 text-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 max-w-xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <span className="font-extrabold text-sm sm:text-base text-amber-950 block">
                      FIRST 4 SESSIONS 100% FREE!
                    </span>
                    <span className="text-xs text-amber-900 font-medium">
                      Attend live classes before paying any tuition fees
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                  Limited Seats
                </span>
              </div>

              {/* Key Highlights Quick Bullets */}
              <div className="grid grid-cols-2 gap-3 text-xs font-medium text-slate-700 max-w-lg">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Working IT Architects Faculty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>100% Real-Time Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Technical &amp; HR Mock Rounds</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Post-Placement Job Support</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openDemoModal()}
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Book Free Demo Session</span>
                </button>

                <a
                  href="#courses"
                  className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-300 shadow-2xs transition-all flex items-center gap-1.5"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </a>

                <a
                  href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right Column: Modern Tech & Schedule Showcase Bento Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-5">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="font-heading font-bold text-sm text-slate-900">
                      Upcoming Batch Schedule
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Admissions Open
                  </span>
                </div>

                {/* Batch Cards */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Morning Batch</span>
                      <span className="text-[11px] text-slate-500">Live Online &amp; Classroom (KPHB)</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-sm text-blue-600 block">7:30 AM IST</span>
                      <span className="text-[10px] text-amber-700 font-bold">4 Sessions Free</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Evening Batch</span>
                      <span className="text-[11px] text-slate-500">Live Online &amp; Classroom (KPHB)</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-sm text-blue-600 block">8:30 PM IST</span>
                      <span className="text-[10px] text-amber-700 font-bold">4 Sessions Free</span>
                    </div>
                  </div>
                </div>

                {/* Hot Tracks Pills */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Technologies in High Hiring Demand:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 text-[11px]">Generative AI</div>
                        <div className="text-[10px] text-slate-500">RAG, LangGraph, MCP</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-2">
                      <Database className="w-4 h-4 text-indigo-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 text-[11px]">Data Engineering</div>
                        <div className="text-[10px] text-slate-500">PySpark, Databricks</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-sky-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 text-[11px]">Snowflake &amp; BQ</div>
                        <div className="text-[10px] text-slate-500">Cloud Data Warehouse</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-100 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 text-[11px]">.NET Full Stack</div>
                        <div className="text-[10px] text-slate-500">ASP.NET Core &amp; React</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    onClick={() => openDemoModal()}
                    className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Reserve Demo Seat (Zero Advance Fee)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sleek Technology Marquee Strip */}
      <section className="bg-slate-900 text-slate-300 py-4 overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono font-medium text-slate-400">
          <span className="text-white font-bold font-sans flex items-center gap-1.5 text-xs">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Technologies Taught:
          </span>
          <span className="hover:text-amber-300 transition-colors">Generative AI</span>
          <span className="hover:text-amber-300 transition-colors">Agentic AI (LangGraph &amp; MCP)</span>
          <span className="hover:text-amber-300 transition-colors">Apache PySpark</span>
          <span className="hover:text-amber-300 transition-colors">Databricks Lakehouse</span>
          <span className="hover:text-amber-300 transition-colors">Snowflake Data Cloud</span>
          <span className="hover:text-amber-300 transition-colors">Google BigQuery</span>
          <span className="hover:text-amber-300 transition-colors">Talend Cloud (TMC)</span>
          <span className="hover:text-amber-300 transition-colors">.NET Core &amp; Microservices</span>
        </div>
      </section>

      {/* 5. Bento Grid Key Highlights */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
              The Learning Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
              Why Serious Learners Choose Kundhana Sai
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We focus strictly on production engineering, live architecture, and career conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                10+ Years Industry Faculty
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Taught directly by practicing enterprise software architects and lead data engineers handling enterprise workloads.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                100% Practical Capstones
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Build production-grade systems: Enterprise RAG bots, Kafka-Spark streaming pipelines, and microservices backends.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageSquareCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                Rigorous Mock Interviews
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                1-on-1 technical whiteboard interrogations, live scenario debugging, and HR soft skill coaching with scorecards.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/5 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                On-Job Project Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our support extends after placement. Get expert mentorship during your initial 90 days on client deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Courses Section */}
      <section id="courses" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Industry-Designed Tracks
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
                Explore Technology Programs
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Every track includes live coding, cloud lab environments, and first 4 sessions free.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'AI & Data', 'Cloud & Analytics', 'Software Engineering'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCourseCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCourseCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      {course.freeSessions}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" /> {course.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Monitor className="w-3.5 h-3.5 text-emerald-600" /> Online &amp; Classroom
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-5">
                    {course.shortDesc}
                  </p>

                  {/* Key Topics */}
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Modules &amp; Frameworks:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.keyTopics.slice(0, 5).map((topic, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                          {topic}
                        </span>
                      ))}
                      <span className="text-[11px] bg-blue-50 text-blue-700 font-bold px-2 py-1 rounded-md">
                        +{course.keyTopics.length - 5} more
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-3 bg-slate-50/70 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">Next Batches:</span>
                    <span className="font-mono font-bold text-blue-700">7:30 AM &amp; 8:30 PM</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedCourseForSyllabus(course)}
                      className="py-2.5 px-3 rounded-xl border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 text-xs font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-1 bg-white"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>View Syllabus</span>
                    </button>

                    <button
                      onClick={() => openDemoModal(course.title)}
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center shadow-xs transition-all cursor-pointer"
                    >
                      <span>Free Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Upcoming Batch Timings Section */}
      <section id="batches" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Batch Schedules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
              Upcoming Batches &amp; Timings
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Flexible cohorts structured for college freshers, career switchers, and working IT professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Morning Batch */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-blue-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                    🌅 Morning Batch
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Fast Filling
                  </span>
                </div>

                <div className="font-mono font-bold text-2xl text-slate-900 mb-1">
                  7:30 AM – 8:45 AM
                </div>
                <div className="text-xs text-slate-500 mb-5">
                  IST (India Standard Time)
                </div>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mode: Live Online &amp; Classroom (KPHB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Next Start Date: Upcoming Monday</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-bold text-slate-900">First 4 Sessions 100% FREE</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => openDemoModal('Morning Batch (7:30 AM)')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Reserve Morning Seat
                </button>
              </div>
            </div>

            {/* Evening Batch */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-amber-300 shadow-lg shadow-amber-500/5 hover:shadow-xl transition-all flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                Most Popular
              </span>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-1 rounded-lg">
                    🌆 Evening Batch
                  </span>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    Limited Slots
                  </span>
                </div>

                <div className="font-mono font-bold text-2xl text-slate-900 mb-1">
                  8:30 PM – 9:45 PM
                </div>
                <div className="text-xs text-slate-500 mb-5">
                  IST (Ideal for working professionals)
                </div>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mode: Live Online &amp; Classroom (KPHB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Next Start Date: Upcoming Monday</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-bold text-slate-900">First 4 Sessions 100% FREE</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => openDemoModal('Evening Batch (8:30 PM)')}
                  className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Reserve Evening Seat
                </button>
              </div>
            </div>

            {/* Weekend Fast-Track */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                    📅 Weekend Fast-Track
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                    Flexible Slots
                  </span>
                </div>

                <div className="font-mono font-bold text-2xl text-slate-900 mb-1">
                  Sat &amp; Sun Intensive
                </div>
                <div className="text-xs text-slate-500 mb-5">
                  Flexible weekend mentoring slots
                </div>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mode: Online Live Interactive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Ideal for Outstation &amp; Busy Devs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-900">Free Trial Demo Session</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => openDemoModal('Weekend Fast-Track')}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Enquire Weekend Cohort
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Placement Roadmap (Modern Connected Cards) */}
      <section id="placement" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Career Acceleration Cell
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
              Training + Dedicated Placement Support
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              A structured 6-stage roadmap preparing you to crack technical rounds and perform on the client floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'ATS Resume Preparation',
                desc: 'Tailored resume restructuring highlighting production architectures, tech keywords, and GitHub portfolios.'
              },
              {
                step: '02',
                title: 'Technical Drilling & Scenarios',
                desc: 'System design whiteboarding, real production debugging, and complex scenario troubleshooting questions.'
              },
              {
                step: '03',
                title: '1-on-1 Mock Interviews',
                desc: 'Simulated corporate technical rounds with constructive feedback and objective scorecard evaluation.'
              },
              {
                step: '04',
                title: 'HR Screening & Soft Skills',
                desc: 'Behavioral interview coaching, career gap handling, project presentation, and salary negotiation.'
              },
              {
                step: '05',
                title: 'Active Job Opportunities',
                desc: 'Direct hiring notifications across Hyderabad, Bangalore, Pune, and remote roles for cloud & AI engineers.'
              },
              {
                step: '06',
                title: 'Post-Placement Job Support',
                desc: 'Continuous advisory support during your first 90 days on client projects to ensure long-term job stability.'
              }
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all">
                <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 font-mono font-bold text-xs flex items-center justify-center mb-4">
                  {item.step}
                </span>
                <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openDemoModal()}
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Start Your IT Career with Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* 9. Training Modes Comparison */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Flexible Learning
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
              Choose Your Preferred Training Mode
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Online Training */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Online Interactive Training
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Live interactive classes via Zoom/Teams with screen sharing, direct voice interaction, and cloud lab support.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">✓ Attend from anywhere across India or abroad</li>
                <li className="flex items-center gap-2">✓ Daily class video recordings for lifetime revision</li>
                <li className="flex items-center gap-2">✓ Live doubt clearing during and after the session</li>
                <li className="flex items-center gap-2">✓ Cloud labs and code repositories shared daily</li>
              </ul>
              <button
                onClick={() => openDemoModal('Online Live Training')}
                className="w-full py-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-300 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                Join Online Demo
              </button>
            </div>

            {/* Classroom Training */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Classroom Training (Hyderabad KPHB)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                In-person hands-on learning at our training center in KPHB 9th Phase, Kukatpally, Hyderabad.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">✓ Modern air-conditioned lab facility in KPHB</li>
                <li className="flex items-center gap-2">✓ Face-to-face interaction with senior faculty</li>
                <li className="flex items-center gap-2">✓ Structured peer study groups &amp; lab exercises</li>
                <li className="flex items-center gap-2">✓ Physical 1-on-1 mock interviews and reviews</li>
              </ul>
              <button
                onClick={() => openDemoModal('Classroom (Hyderabad)')}
                className="w-full py-3 bg-white hover:bg-amber-400 hover:text-slate-950 text-slate-900 border border-slate-300 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                Join Classroom Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Modern FAQ Accordion */}
      <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Modern Sleek Footer & Center Contact (No Forms) */}
      <footer id="contact" className="bg-[#081B2C] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Institute Identity */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-500 to-sky-400 flex items-center justify-center text-white font-black text-lg">
                  <span className="text-amber-300">K</span>S
                </div>
                <div>
                  <span className="font-heading font-extrabold text-base text-white tracking-tight block">
                    KUNDHANA SAI TECHNOLOGIES
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Kundhana Sai IT Solutions Pvt. Ltd.
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Premier Hyderabad IT training and solutions company specializing in GenAI, Data Engineering, Snowflake, BigQuery, Talend, and .NET Full Stack development.
              </p>
              <div className="text-[11px] text-slate-400 space-y-1">
                <div><span className="text-slate-400">CIN:</span> {COMPANY_DATA.cin}</div>
                <div><span className="text-slate-400">Established:</span> {COMPANY_DATA.establishedYear}</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-white block">
                Quick Navigation
              </span>
              <div className="flex flex-col space-y-2 text-xs text-slate-400 font-medium">
                <a href="#courses" className="hover:text-amber-300 transition-colors">Featured Tech Courses</a>
                <a href="#batches" className="hover:text-amber-300 transition-colors">Upcoming Batch Timings</a>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">Why Choose Kundhana Sai</a>
                <a href="#placement" className="hover:text-amber-300 transition-colors">Placement Roadmap &amp; Support</a>
                <a href="#faq" className="hover:text-amber-300 transition-colors">Frequently Asked Questions</a>
              </div>
            </div>

            {/* Admissions & Location Desk */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-white block">
                Training Center &amp; Admissions
              </span>
              
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed text-[11px]">
                  Plot No. 45, KPHB 9th Phase, Nexus Mall Road, Beside Akruthi, Kukatpally, Hyderabad – 500072, Telangana.
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-[11px]">Mon – Sat: 7:00 AM – 9:30 PM IST</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${primaryPhone.value}`}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {primaryPhone.display}</span>
                </a>
                <a
                  href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

              <div>
                <button
                  onClick={() => openDemoModal()}
                  className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  Book Free 4-Day Demo Session
                </button>
              </div>
            </div>
          </div>

          {/* Sub-footer Copyright */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} Kundhana Sai IT Solutions Pvt. Ltd. All rights reserved.
            </div>
            <div className="text-amber-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>First 4 Sessions 100% FREE • Online Live &amp; Classroom Hyderabad</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Syllabus In-Page Modal */}
      <SyllabusModal
        course={selectedCourseForSyllabus}
        onClose={() => setSelectedCourseForSyllabus(null)}
        onEnroll={(courseName) => openDemoModal(courseName)}
      />
    </div>
  );
};
