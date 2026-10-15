import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  ArrowUpRight,
  Shield,
  Layers,
  Database,
  Cpu,
  Code2,
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';
import { ENTERPRISE_SERVICES } from '../data/servicesData';
import { useConsultation } from '../context/ConsultationContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const primaryPhone = CORPORATE_DATA.phoneNumbers[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-blue-600" />;
      case 'Database': return <Database className="w-4 h-4 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-indigo-600" />;
      case 'Code': return <Code2 className="w-4 h-4 text-emerald-600" />;
      case 'Layers': return <Layers className="w-4 h-4 text-amber-600" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-sky-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-teal-600" />;
      default: return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Corporate Utility Bar (Clean Light Background) */}
      <div className="bg-slate-50 text-slate-600 text-xs py-2 px-4 sm:px-8 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-blue-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block animate-pulse" />
              <span>Enterprise IT Services &amp; Consulting</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-normal">Established 2018 • CIN: {CORPORATE_DATA.cin}</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`mailto:${CORPORATE_DATA.email.primary}`}
              className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>{CORPORATE_DATA.email.primary}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href={`tel:${primaryPhone.value}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{primaryPhone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar (Pure White Background) */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50 border-b border-slate-200' 
          : 'bg-white border-b border-slate-200/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Official Logo on White Background */}
            <Link to="/" className="flex items-center group py-1" aria-label="Kundhana Sai IT Solutions">
              <img 
                src="/images/logo-official.png" 
                alt="Kundhana Sai IT Solutions Pvt. Ltd." 
                className="h-10 sm:h-12 w-auto max-w-[210px] sm:max-w-[250px] object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              <Link 
                to="/" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/') && location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50/80 border border-blue-200/80 font-bold' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link 
                to="/about" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50/80 border border-blue-200/80 font-bold' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive('/services')
                      ? 'text-blue-600 bg-blue-50/80 border border-blue-200/80 font-bold'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 animate-fadeIn z-50">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        7 Core Enterprise Practices
                      </span>
                      <Link 
                        to="/services"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        All Services <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {ENTERPRISE_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-100 shrink-0 mt-0.5 group-hover:border-blue-400 group-hover:bg-blue-100/70 transition-colors">
                            {getServiceIcon(service.iconName)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                              {service.title}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {service.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/expertise" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/expertise') 
                    ? 'text-blue-600 bg-blue-50/80 border border-blue-200/80 font-bold' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Technology Expertise
              </Link>

              <Link 
                to="/industries" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/industries') 
                    ? 'text-blue-600 bg-blue-50/80 border border-blue-200/80 font-bold' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Industries
              </Link>

              <Link 
                to="/contact" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/contact') 
                    ? 'text-blue-600 bg-blue-50/80 border border-blue-200/80 font-bold' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Right CTA: "Let's Talk" */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => openConsultation()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-heading font-bold text-sm tracking-wide shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Mobile Menu Trigger & Action */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openConsultation()}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-xs"
              >
                Let's Talk
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean White Background) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <span className="text-blue-700 font-semibold">Corporate Verification</span>
            <span className="text-slate-500">Est. 2018 • CIN: {CORPORATE_DATA.cin}</span>
          </div>

          <div className="space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/about' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/services"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/services' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Services Overview (7 Practices)
            </Link>

            {/* Mobile nested services links */}
            <div className="pl-4 space-y-1 border-l-2 border-slate-200 my-1">
              {ENTERPRISE_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="block py-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium"
                >
                  • {service.title}
                </Link>
              ))}
            </div>

            <Link
              to="/expertise"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/expertise' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Technology Expertise
            </Link>

            <Link
              to="/industries"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/industries' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Industries
            </Link>

            <Link
              to="/contact"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/contact' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-heading font-bold rounded-xl text-center block text-sm shadow-sm"
            >
              Schedule Consultation
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${primaryPhone.value}`}
                className="py-2.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" /> Call Office
              </a>
              <a
                href={`mailto:${CORPORATE_DATA.email.primary}`}
                className="py-2.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" /> Email Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
