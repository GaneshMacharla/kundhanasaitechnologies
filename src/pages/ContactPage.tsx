import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Building2, 
  Sparkles,
  Info,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CORPORATE_DATA } from '../data/corporateData';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  const primaryPhone = CORPORATE_DATA.phoneNumbers[0];
  const secondaryPhone = CORPORATE_DATA.phoneNumbers[1];
  const hqLocation = CORPORATE_DATA.locations.find(l => l.isHeadquarter) || CORPORATE_DATA.locations[0];
  const regionalLocation = CORPORATE_DATA.locations.find(l => !l.isHeadquarter);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Contact Us | Corporate Headquarters &amp; Enterprise Desk"
        description="Connect with Kundhana Sai IT Solutions Pvt. Ltd. Corporate office in Hyderabad and regional center in Vijayawada. Schedule an enterprise IT consultation."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="bg-[#050E1D] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Enterprise Engagement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-white">
              Connect With Our Solutions Team.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have an architecture roadmap to evaluate or an enterprise technology initiative to kick off? Reach out directly via our corporate form or phone hotlines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Offices on Left, Form on Right */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Office Locations & Contact Points (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-black text-slate-900 tracking-tight mb-2">
                  Corporate Offices &amp; Desks
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Headquartered in Hyderabad with regional presence in Vijayawada and global delivery coverage.
                </p>
              </div>

              {/* Hyderabad HQ Card */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    <span>Corporate Headquarters</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                    Active HQ
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900">
                  Hyderabad Technology Center
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {hqLocation.addressLines[0]}<br />
                  {hqLocation.addressLines[1]}<br />
                  {hqLocation.city} – {hqLocation.pincode}, {hqLocation.state}, {hqLocation.country}
                </p>

                {/* Pre-production verification transparency note */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 space-y-1">
                  <div className="font-semibold text-slate-700 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    <span>Address Record Note</span>
                  </div>
                  <div>
                    {hqLocation.notes}
                  </div>
                </div>
              </div>

              {/* Regional Office Card */}
              {regionalLocation && (
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>Regional Center</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Regional Office
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Vijayawada Regional Office
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {regionalLocation.addressLines[0]}<br />
                    {regionalLocation.addressLines[1]}<br />
                    {regionalLocation.city} – {regionalLocation.pincode}, {regionalLocation.state}, {regionalLocation.country}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
                    <em>Status:</em> {regionalLocation.verificationStatus}.
                  </div>
                </div>
              )}

              {/* Direct Hotlines */}
              <div className="p-8 rounded-2xl bg-[#0A192F] text-white space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Direct Communications
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] text-slate-400">Primary Enterprise Hotline</div>
                    <a
                      href={`tel:${primaryPhone.value}`}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors flex items-center gap-2 mt-0.5"
                    >
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{primaryPhone.display}</span>
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">Consulting &amp; WhatsApp Desk</span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded-full font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                        WhatsApp
                      </span>
                    </div>
                    <a
                      href={`tel:${secondaryPhone.value}`}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors flex items-center gap-2 mt-0.5"
                    >
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{secondaryPhone.display}</span>
                    </a>
                    <a
                      href={`https://wa.me/${CORPORATE_DATA.whatsappNumber.value}?text=${encodeURIComponent(CORPORATE_DATA.whatsappNumber.prefilledMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 text-xs font-semibold transition-all group"
                      title="Chat directly on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span>Chat on WhatsApp ({secondaryPhone.display})</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-2.5">
                    <div>
                      <div className="text-[11px] text-slate-400">General Inquiries</div>
                      <a
                        href={`mailto:${CORPORATE_DATA.email.primary}`}
                        className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-2 mt-0.5"
                      >
                        <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{CORPORATE_DATA.email.primary}</span>
                      </a>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Technical Support Desk</div>
                      <a
                        href={`mailto:${CORPORATE_DATA.email.support}`}
                        className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-2 mt-0.5"
                      >
                        <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{CORPORATE_DATA.email.support}</span>
                      </a>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Human Resources & Careers</div>
                      <a
                        href={`mailto:${CORPORATE_DATA.email.hr}`}
                        className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-2 mt-0.5"
                      >
                        <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{CORPORATE_DATA.email.hr}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>CIN: {CORPORATE_DATA.cin} (Incorporated 2018)</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Grade Enterprise Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 border border-slate-700/90 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="mb-8 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Technical Inquiry Form</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">
                    Submit Project Requirements
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Provide details on your organizational requirements. Our solutions practice will get in touch within 24 hours.
                  </p>
                </div>

                <ContactForm className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
