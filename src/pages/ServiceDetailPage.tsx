import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Sparkles, 
  Database, 
  Cpu, 
  Code2, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Check,
  AlertCircle,
  HelpCircle,
  Layers3,
  Calendar,
  Building,
  ArrowLeft
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ENTERPRISE_SERVICES, EnterpriseService } from '../data/servicesData';
import { ContactForm } from '../components/ContactForm';
import { useConsultation } from '../context/ConsultationContext';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultation } = useConsultation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = ENTERPRISE_SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-cyan-400" />;
      case 'Database': return <Database className="w-8 h-8 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-indigo-400" />;
      case 'Code': return <Code2 className="w-8 h-8 text-emerald-400" />;
      case 'Layers': return <Layers className="w-8 h-8 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-8 h-8 text-sky-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-8 h-8 text-teal-400" />;
      default: return <Sparkles className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title={`${service.title} | Enterprise IT Consulting`}
        description={service.summary}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="bg-[#050E1D] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link to="/services" className="hover:text-cyan-300 flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> All Services
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-medium">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <span>{service.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight text-white">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-cyan-300 font-medium leading-relaxed">
                {service.headline}
              </p>

              <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
                {service.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openConsultation(service.title)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 cursor-pointer transition-all"
                >
                  Schedule Practice Consultation
                </button>
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
                >
                  View Capabilities &amp; Stack
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl text-center space-y-4 max-w-sm w-full">
                <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto shadow-inner">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Enterprise Practice
                  </div>
                  <div className="text-lg font-heading font-bold text-white mt-1">
                    {service.shortTitle}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Architectural Discovery &amp; PoC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Dedicated Co-Engineering Pods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>SLA Production Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenges Addressed */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Business Bottlenecks We Eliminate</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Operational Challenges Solved by This Practice
            </h2>
            <p className="text-base text-slate-600">
              Modern enterprises struggle when technical architecture fails to keep pace with organizational growth. We resolve these critical bottlenecks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.businessChallenges.map((challenge, cIdx) => (
              <div
                key={cIdx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                    0{cIdx + 1}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">
                    {challenge.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-11">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities & Technologies */}
      <section id="capabilities" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Layers3 className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Deep Architectural Capabilities &amp; Stacks
            </h2>
            <p className="text-base text-slate-600">
              Our engineering teams bring standardized best practices, automated testing frameworks, and deep platform certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, capIdx) => (
              <div
                key={capIdx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
                    <h3 className="text-xl font-heading font-bold text-slate-900">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-8">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 pl-8 flex flex-wrap gap-2">
                  {cap.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Badges Matrix */}
          <div className="p-8 rounded-2xl bg-[#0A192F] text-white space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Core Technologies Deployed in This Practice
            </div>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Enterprise Use Cases (Ethical Disclaimer explicitly stated per PRD) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Domain Application Patterns</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Illustrative Enterprise Use Cases
            </h2>
            <p className="text-base text-slate-600">
              These representative scenarios demonstrate practical solution architectures and business impact patterns addressed by our engineering squads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.useCases.map((uc, uIdx) => (
              <div
                key={uIdx}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    {uc.industry}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {uc.summary}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
                    <div className="font-semibold text-slate-900">
                      Solution Architecture:
                    </div>
                    <div>{uc.solutionArchitecture}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-700">
                  {uc.impactMetrics}
                </div>
              </div>
            ))}
          </div>

          {/* Ethics statement as mandated by PRD */}
          <div className="text-center text-xs text-slate-500 italic max-w-2xl mx-auto">
            * Use cases are presented as representative architectural patterns to protect client confidentiality and proprietary intellectual property.
          </div>
        </div>
      </section>

      {/* 4-Step Delivery Approach */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <span>Structured Execution</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Our 4-Phase Delivery Lifecycle
            </h2>
            <p className="text-base text-slate-600">
              Every initiative follows our disciplined, audit-ready engineering framework to ensure predictable timelines and seamless handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliveryPhases.map((phase, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative"
              >
                <div className="text-3xl font-heading font-black text-cyan-600">
                  {phase.step}
                </div>
                <h3 className="text-base font-heading font-bold text-slate-900">
                  {phase.phase}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {phase.deliverables}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Technical FAQs</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-heading font-bold text-base text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaqIndex === fIdx ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {openFaqIndex === fIdx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Consultation Form for this Service */}
      <section className="py-20 bg-[#050E1D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>Initiate Project Consultation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
              Consult on {service.shortTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Submit your inquiry below. Our principal lead for {service.title} will review your requirements and coordinate an architectural discovery session.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <ContactForm initialService={service.title} />
          </div>
        </div>
      </section>
    </div>
  );
};
