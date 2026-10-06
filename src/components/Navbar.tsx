import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Sparkles, 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Layers, 
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { COURSES } from '../data/coursesData';
import { useDemoModal } from '../context/DemoModalContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();
  const { openDemoModal } = useDemoModal();

  const primaryPhone = COMPANY_DATA.phoneNumbers[0];
  const whatsapp = COMPANY_DATA.whatsappNumber;

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#0A2540] text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-amber-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              <span>{COMPANY_DATA.batchTimings.freeSessionsOffer}</span>
              <span className="text-slate-400 text-[10px]">|</span>
              <span className="text-slate-300 font-normal">Next Batches: {COMPANY_DATA.batchTimings.morning} &amp; {COMPANY_DATA.batchTimings.evening}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Hyderabad (KPHB) &amp; Vijayawada</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${primaryPhone.value}`} 
              className="flex items-center gap-1 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{primaryPhone.display}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0A2540] via-[#1A56DB] to-[#38BDF8] flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              <span className="font-heading font-black text-2xl tracking-tighter text-amber-300">K</span>
              <span className="font-heading font-bold text-lg -ml-1 text-white">S</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-xl text-[#0A2540] tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                KUNDHANA SAI
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1 flex items-center gap-1">
                <span>Technologies</span>
                <span className="text-amber-500 font-extrabold">•</span>
                <span className="text-blue-600 font-semibold">IT Training &amp; Solutions</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/') && location.pathname === '/' 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <Link
                to="/courses"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                  isActive('/courses')
                    ? 'text-blue-600 bg-blue-50/80'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </Link>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 animate-fadeIn z-50">
                  <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider px-3 py-1.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span>Explore High-Demand Programs</span>
                    <span className="text-amber-600 font-semibold">Demo Available</span>
                  </div>
                  <div className="space-y-1">
                    {COURSES.map((course) => (
                      <Link
                        key={course.id}
                        to={`/courses/${course.slug}`}
                        onClick={() => setCoursesDropdownOpen(false)}
                        className="block px-3 py-2 rounded-xl hover:bg-blue-50/70 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                            {course.title}
                          </span>
                          {course.badge && (
                            <span className="text-[9px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded">
                              {course.badge.split(' ')[0]}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {course.shortDesc}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <Link
                      to="/courses"
                      onClick={() => setCoursesDropdownOpen(false)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center justify-center py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      View All 6 Technology Tracks →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/placement" 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                isActive('/placement') 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-4 h-4 text-slate-400" />
              <span>Placement</span>
            </Link>

            <Link 
              to="/solutions" 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                isActive('/solutions') 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>IT Solutions</span>
            </Link>

            <Link 
              to="/about" 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-slate-400" />
              <span>About Us</span>
            </Link>

            <Link 
              to="/contact" 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openDemoModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Menu & Quick CTA Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openDemoModal()}
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shadow-xs"
            >
              Free Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Quick Notice Badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Next Batches Starting: 7:30 AM &amp; 8:30 PM (First 4 Sessions FREE)</span>
          </div>

          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/' ? 'bg-blue-50 text-blue-700' : 'text-slate-800'
              }`}
            >
              Home
            </Link>

            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                location.pathname === '/courses' ? 'bg-blue-50 text-blue-700' : 'text-slate-800'
              }`}
            >
              All Courses (6 Tracks)
            </Link>

            {/* Courses list snippet */}
            <div className="pl-4 space-y-1 border-l-2 border-slate-100 my-1">
              {COURSES.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium"
                >
                  • {course.title}
                </Link>
              ))}
            </div>

            <Link
              to="/placement"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Placement Assistance
            </Link>

            <Link
              to="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Corporate IT Solutions
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-xl shadow-md text-center block text-sm"
            >
              Book Free Demo (First 4 Sessions Free)
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${primaryPhone.value}`}
                className="py-2.5 px-3 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" /> Call Admissions
              </a>
              <a
                href={`https://wa.me/${whatsapp.value}?text=${encodeURIComponent(whatsapp.prefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
