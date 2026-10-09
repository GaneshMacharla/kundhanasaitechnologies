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
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case 'Database': return <Database className="w-4 h-4 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Code': return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-teal-400" />;
      default: return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Corporate Utility Bar */}
      <div className="bg-[#050E1D] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-cyan-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
              <span>Enterprise IT Services &amp; Consulting</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-normal">Established 2018 • CIN: {CORPORATE_DATA.cin}</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`mailto:${CORPORATE_DATA.email.primary}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{CORPORATE_DATA.email.primary}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`tel:${primaryPhone.value}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{primaryPhone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800' 
          : 'bg-[#0A192F]/90 backdrop-blur-sm border-b border-slate-800/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group py-1" aria-label="Kundhana Sai IT Solutions">
              <img 
                src="/images/logo-dark.png" 
                alt="Kundhana Sai IT Solutions Pvt. Ltd." 
                className="h-10 sm:h-11 w-auto max-w-[210px] sm:max-w-[240px] object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              <Link 
                to="/" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/') && location.pathname === '/' 
                    ? 'text-cyan-300 bg-white/5 border border-cyan-500/30' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              <Link 
                to="/about" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/about') 
                    ? 'text-cyan-300 bg-white/5 border border-cyan-500/30' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
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
                      ? 'text-cyan-300 bg-white/5 border border-cyan-500/30'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`} />
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-96 bg-[#0A192F] rounded-2xl shadow-2xl border border-slate-700/80 p-3 animate-fadeIn z-50">
                    <div className="px-3 py-2 border-b border-slate-800 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        7 Core Enterprise Practices
                      </span>
                      <Link 
                        to="/services"
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                      >
                        All Services <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {ENTERPRISE_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 shrink-0 mt-0.5 group-hover:border-cyan-500/50 transition-colors">
                            {getServiceIcon(service.iconName)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                              {service.title}
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
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
                    ? 'text-cyan-300 bg-white/5 border border-cyan-500/30' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Technology Expertise
              </Link>

              <Link 
                to="/industries" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/industries') 
                    ? 'text-cyan-300 bg-white/5 border border-cyan-500/30' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Industries
              </Link>

              <Link 
                to="/contact" 
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/contact') 
                    ? 'text-cyan-300 bg-white/5 border border-cyan-500/30' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Right CTA: "Let's Talk" */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => openConsultation()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Mobile Menu Trigger & Action */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openConsultation()}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs"
              >
                Let's Talk
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span className="text-cyan-400 font-semibold">Corporate Verification</span>
            <span className="text-slate-400">Est. 2018 • CIN: {CORPORATE_DATA.cin}</span>
          </div>

          <div className="space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' : 'text-slate-200'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/about' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' : 'text-slate-200'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/services"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/services' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' : 'text-slate-200'
              }`}
            >
              Services Overview (7 Practices)
            </Link>

            {/* Mobile nested services links */}
            <div className="pl-4 space-y-1 border-l-2 border-slate-800 my-1">
              {ENTERPRISE_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="block py-1.5 text-xs text-slate-400 hover:text-cyan-300 font-medium"
                >
                  • {service.title}
                </Link>
              ))}
            </div>

            <Link
              to="/expertise"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/expertise' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' : 'text-slate-200'
              }`}
            >
              Technology Expertise
            </Link>

            <Link
              to="/industries"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/industries' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' : 'text-slate-200'
              }`}
            >
              Industries
            </Link>

            <Link
              to="/contact"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/contact' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' : 'text-slate-200'
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-bold rounded-xl text-center block text-sm"
            >
              Schedule Consultation
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${primaryPhone.value}`}
                className="py-2.5 px-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> Call Office
              </a>
              <a
                href={`mailto:${CORPORATE_DATA.email.primary}`}
                className="py-2.5 px-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
