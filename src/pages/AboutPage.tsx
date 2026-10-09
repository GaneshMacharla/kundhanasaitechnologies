import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Cpu,
  Database,
  Cloud,
  Code2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CORPORATE_DATA } from '../data/corporateData';
import { useConsultation } from '../context/ConsultationContext';

export const AboutPage: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title="About Us | Enterprise Heritage &amp; Mission"
        description="Learn about Kundhana Sai IT Solutions Pvt. Ltd., an enterprise IT services and consulting organization established in 2018 specializing in AI, Cloud Data, and Software Architecture."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="bg-[#050E1D] text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate Background &amp; Heritage</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight text-white">
              Engineering Trust. Empowering Enterprise Transformation.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Founded in 2018, Kundhana Sai IT Solutions Pvt. Ltd. is an enterprise IT services and consulting organization dedicated to modernizing mission-critical digital systems with engineering discipline and strategic insight.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Incorporated: August 2018</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>RoC Hyderabad • CIN: {CORPORATE_DATA.cin}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Story */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                <span>Our Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-snug">
                Pioneering Practical Technology Solutions for Real Business Challenges.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Kundhana Sai IT Solutions Pvt. Ltd. was incorporated in August 2018 with a clear conviction: enterprise technology should not be an endless maze of theoretical prototypes, but a deterministic engine of operational efficiency and commercial growth.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Over our history, we have matured our multidisciplinary engineering squads across artificial intelligence, high-throughput cloud lakehouses, enterprise microservices, and specialized ERP architectures. By maintaining low overhead and direct senior architect involvement, we deliver the quality of tier-1 global consultancies with the agility and accountability of a dedicated technology partner.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-heading font-black text-blue-600">2018</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">Established Year</div>
                  <div className="text-[11px] text-slate-500">Corporate Incorporation</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-heading font-black text-cyan-600">7</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">Core Practices</div>
                  <div className="text-[11px] text-slate-500">End-to-End Capabilities</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-heading font-black text-indigo-600">Global</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">Delivery Model</div>
                  <div className="text-[11px] text-slate-500">Hybrid Onshore/Offshore</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950 aspect-4/3 relative">
                <img
                  src="/images/enterprise-cloud-mesh.jpg"
                  alt="Enterprise Cloud and Engineering Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white text-xs">
                  <span className="font-semibold text-cyan-400">Headquarters:</span> Lakshmi Krishna Plaza, KPHB Phase 9, Kukatpally, Hyderabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900">
                Our Corporate Mission
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To empower global businesses through disciplined digital engineering, resilient data platforms, and pragmatic artificial intelligence that solve complex operational challenges and deliver sustainable, measurable business value.
              </p>
              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Transparent, milestone-based engineering governance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Zero-compromise data privacy and compliance standards</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900">
                Our Corporate Vision
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To stand as the most trusted, outcome-focused IT consulting partner for mid-market and enterprise organizations worldwide, celebrated for architectural excellence, technical integrity, and enduring client partnerships.
              </p>
              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Continual adoption of transformative engineering paradigms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Empowering enterprise talent through co-engineering squads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance & Leadership Transparency Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Corporate Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Leadership &amp; Corporate Accountability
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kundhana Sai IT Solutions maintains strict governance standards, registered under the Ministry of Corporate Affairs, Government of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CORPORATE_DATA.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-heading font-black text-lg">
                    {leader.name.charAt(0)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-200 text-slate-700">
                    MCA Verified Director
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold text-slate-900">
                    {leader.name}
                  </h4>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5">
                    {leader.role} — Kundhana Sai IT Solutions Pvt. Ltd.
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Statutory Corporate Fiduciary per MCA ROC Records</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 rounded-xl bg-blue-50 border border-blue-200 max-w-2xl mx-auto text-xs text-blue-900 text-center">
            Detailed executive biographies and board committee charters will be published following routine annual client executive review.
          </div>
        </div>
      </section>

      {/* Discussion CTA */}
      <section className="py-20 bg-[#050E1D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
            Ready to Discuss Your Business Requirements?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you are evaluating modern AI integration, migrating legacy data warehouses, or modernizing enterprise applications, our technical principals are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openConsultation()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shadow-lg cursor-pointer"
            >
              Schedule an Executive Discussion
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-bold"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
