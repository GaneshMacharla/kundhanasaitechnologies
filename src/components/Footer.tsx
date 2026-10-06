import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldAlert, 
  Briefcase, 
  GraduationCap, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { COURSES } from '../data/coursesData';
import { useDemoModal } from '../context/DemoModalContext';

export const Footer: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const hydLocation = COMPANY_DATA.locations.find(l => l.city === 'Hyderabad');
  const vjaLocation = COMPANY_DATA.locations.find(l => l.city === 'Vijayawada');

  return (
    <footer className="bg-[#051329] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Callout */}
        <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-slate-900 rounded-3xl p-8 sm:p-10 border border-blue-500/20 mb-16 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                🔥 First 4 Sessions FREE • Batch Starting Soon
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Transform Your IT Career with Industry Experts
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl mt-2">
                Join live hands-on training across Generative AI, Data Engineering, Snowflake, BigQuery, Talend, and .NET. Get dedicated placement assistance and job support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => openDemoModal()}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-center cursor-pointer"
              >
                Book Free Demo Session
              </button>
              <a
                href={`https://wa.me/${COMPANY_DATA.whatsappNumber.value}?text=${encodeURIComponent(COMPANY_DATA.whatsappNumber.prefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-400 flex items-center justify-center text-white shadow-md">
                <span className="font-heading font-black text-xl text-amber-300">K</span>
                <span className="font-heading font-bold text-base -ml-1 text-white">S</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white tracking-tight block">
                  KUNDHANA SAI
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {COMPANY_DATA.legalName} is an IT services, consulting, and advanced training company. We specialize in Generative AI, cloud data engineering platforms, and enterprise solutions.
            </p>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Corporate Identity:</strong> CIN: {COMPANY_DATA.cin}</div>
              <div><strong className="text-slate-300">Established:</strong> {COMPANY_DATA.establishedYear} (Hyderabad, Telangana)</div>
              <div className="text-[11px] text-amber-400/90 pt-1 border-t border-slate-800">
                Official IT Training &amp; Corporate Solutions Provider
              </div>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-3">
            <p className="text-white font-bold font-heading text-sm uppercase tracking-wider">
              Training Tracks
            </p>
            <ul className="space-y-2 text-xs">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <Link 
                    to={`/courses/${course.slug}`}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{course.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <p className="text-white font-bold font-heading text-sm uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> All Courses
                </Link>
              </li>
              <li>
                <Link to="/placement" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Placement Assistance
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Enterprise IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> About Company
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Contact &amp; Centres
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-3">
            <p className="text-white font-bold font-heading text-sm uppercase tracking-wider">
              Centres &amp; Contact
            </p>

            {/* Hyderabad Address */}
            <div className="space-y-1 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Hyderabad Training Centre:</strong>
                  {hydLocation && (
                    <>
                      <p className="text-slate-400">{hydLocation.addressLines[0]}</p>
                      <p className="text-slate-400">{hydLocation.addressLines[1]}</p>
                      <p className="text-slate-400">{hydLocation.city} – {hydLocation.pincode}, {hydLocation.state}</p>
                      <span className="text-[10px] text-amber-400/80 font-mono block mt-1">
                        [VERIFY_WITH_CLIENT_ADDRESS]
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
              {COMPANY_DATA.phoneNumbers.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone.value}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{phone.display}</span>
                </a>
              ))}
              <a
                href={`mailto:${COMPANY_DATA.email.training}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{COMPANY_DATA.email.training}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_DATA.name} ({COMPANY_DATA.legalName}). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>CIN: {COMPANY_DATA.cin}</span>
            <span>•</span>
            <span>Kukatpally, Hyderabad</span>
            <span>•</span>
            <span className="text-amber-400">First 4 Sessions FREE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
