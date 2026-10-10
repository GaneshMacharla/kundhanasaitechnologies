import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Building2, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';
import { ENTERPRISE_SERVICES } from '../data/servicesData';
import { useConsultation } from '../context/ConsultationContext';

export const Footer: React.FC = () => {
  const { openConsultation } = useConsultation();
  const primaryPhone = CORPORATE_DATA.phoneNumbers[0];
  const secondaryPhone = CORPORATE_DATA.phoneNumbers[1];
  const hqLocation = CORPORATE_DATA.locations.find(l => l.isHeadquarter) || CORPORATE_DATA.locations[0];
  const regionalLocation = CORPORATE_DATA.locations.find(l => !l.isHeadquarter);

  return (
    <footer className="bg-[#050E1D] text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Corporate Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group py-1" aria-label="Kundhana Sai IT Solutions">
              <img 
                src="/images/logo-dark.png" 
                alt="Kundhana Sai IT Solutions Pvt. Ltd." 
                className="h-11 sm:h-12 w-auto max-w-[230px] sm:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in 2018, Kundhana Sai IT Solutions delivers enterprise-grade IT consulting and engineering across Generative AI, Cloud Data Platforms, and Software Architecture.
            </p>

            {/* Corporate Registration Badge */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Verified Corporate Entity</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                CIN: {CORPORATE_DATA.cin}
              </div>
              <div className="text-[11px] text-slate-500">
                Registered under Registrar of Companies (RoC), Hyderabad
              </div>
            </div>

            <div>
              <button
                onClick={() => openConsultation()}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Schedule Architecture Review</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Enterprise Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-200">
              Enterprise Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {ENTERPRISE_SERVICES.map(service => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                    <span>{service.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Capabilities (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm">
                  About the Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-slate-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm">
                  Technology Expertise
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-200">
              Corporate Centers
            </h4>

            {/* HQ */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Hyderabad Headquarters</span>
              </div>
              <p className="text-slate-400 leading-relaxed pl-5 text-[11px]">
                {hqLocation.addressLines[0]}<br />
                {hqLocation.addressLines[1]}<br />
                {hqLocation.city} – {hqLocation.pincode}, {hqLocation.state}
              </p>
            </div>

            {/* Regional */}
            {regionalLocation && (
              <div className="space-y-1.5 text-xs pt-1">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Vijayawada Regional Office</span>
                </div>
                <p className="text-slate-400 leading-relaxed pl-5 text-[11px]">
                  {regionalLocation.addressLines[0]}<br />
                  {regionalLocation.addressLines[1]}, {regionalLocation.city} – {regionalLocation.pincode}
                </p>
              </div>
            )}

            {/* Direct Connect */}
            <div className="pt-2 space-y-2 border-t border-slate-800/80">
              <a 
                href={`tel:${primaryPhone.value}`}
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                title="Primary Enterprise Hotline"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{primaryPhone.display}</span>
              </a>
              <a 
                href={`tel:${secondaryPhone.value}`}
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                title="Consulting Desk"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{secondaryPhone.display}</span>
              </a>
              <a 
                href={`https://wa.me/${CORPORATE_DATA.whatsappNumber.value}?text=${encodeURIComponent(CORPORATE_DATA.whatsappNumber.prefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                title="WhatsApp Direct Support"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <span>WhatsApp: {CORPORATE_DATA.whatsappNumber.display}</span>
              </a>
              <a 
                href={`mailto:${CORPORATE_DATA.email.primary}`}
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                title="General & Business Inquiries"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{CORPORATE_DATA.email.primary}</span>
              </a>
              <a 
                href={`mailto:${CORPORATE_DATA.email.support}`}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                title="Technical Support Desk"
              >
                <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-wider">Support:</span>
                <span>{CORPORATE_DATA.email.support}</span>
              </a>
              <a 
                href={`mailto:${CORPORATE_DATA.email.hr}`}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                title="Careers & Human Resources"
              >
                <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-wider">Careers:</span>
                <span>{CORPORATE_DATA.email.hr}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © 2018–2026 Kundhana Sai IT Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Corporate Office Locator
            </Link>
            <span className="text-slate-700">|</span>
            <span className="text-slate-600 font-mono text-[10px]">
              CIN: {CORPORATE_DATA.cin}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
