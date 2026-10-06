import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  AlertCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  Calendar
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { COURSES } from '../data/coursesData';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('Generative AI & Agentic AI');
  const [qualification, setQualification] = useState('B.Tech / B.E.');
  const [experience, setExperience] = useState('Fresh Graduate (0 years)');
  const [mode, setMode] = useState('Online Live Training');
  const [preferredBatch, setPreferredBatch] = useState('Morning Batch (7:30 AM)');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const hydLocation = COMPANY_DATA.locations.find(l => l.city === 'Hyderabad');
  const vjaLocation = COMPANY_DATA.locations.find(l => l.city === 'Vijayawada');

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const enquiryLead = {
        id: 'CONTACT-' + Date.now(),
        fullName,
        phone,
        email,
        course,
        qualification,
        experience,
        mode,
        preferredBatch,
        message,
        createdAt: new Date().toISOString()
      };

      try {
        const existing = JSON.parse(localStorage.getItem('kst_leads') || '[]');
        existing.push(enquiryLead);
        localStorage.setItem('kst_leads', JSON.stringify(existing));
      } catch (err) {
        console.warn(err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0A2540] via-[#0F325C] to-[#0A2540] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" /> Admissions &amp; Corporate Enquiries
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Contact Kundhana Sai Technologies
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Visit our training centre in Hyderabad, connect via WhatsApp, or submit your enquiry to book a free introductory demo class.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Verification Alert Banner for Stakeholders */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 text-amber-900 text-xs shadow-xs">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold text-sm">
                Client Verification Notice (Pre-Production Demo):
              </strong>
              <p>
                The provided marketing materials contain two slight variations in Hyderabad address &amp; pincode (PIN 500072 vs 500085 in KPHB 9th Phase) as well as Vijayawada branch details. Both are transparently highlighted below for final client sign-off before official publication.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Location Cards & Hotline Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hyderabad Training Centre Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Headquarters &amp; Training Centre
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                  VERIFY WITH CLIENT
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Hyderabad, Telangana
              </h3>

              {hydLocation && (
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">Primary Listing (Plot No. 45):</span>
                    <p>{hydLocation.addressLines[0]}</p>
                    <p>{hydLocation.addressLines[1]}</p>
                    <p className="font-semibold text-slate-800 mt-1">
                      Kukatpally, Hyderabad – {hydLocation.pincode}, Telangana
                    </p>
                  </div>

                  {hydLocation.hasAlternateOption && (
                    <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/60">
                      <span className="font-bold text-amber-950 block mb-1">Poster Variant (Lakshmikrishnaplaza 2nd Floor):</span>
                      <p>{hydLocation.alternateAddressLines?.[0]}</p>
                      <p>{hydLocation.alternateAddressLines?.[1]}</p>
                      <p className="font-semibold text-slate-800 mt-1">
                        Hyderabad, Telangana – {hydLocation.alternatePincode}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Centre Hours: Monday – Saturday, 7:00 AM – 9:30 PM IST</span>
              </div>
            </div>

            {/* Vijayawada Branch Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                  Regional Office
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded">
                  Client Confirmation
                </span>
              </div>

              <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-600" />
                Vijayawada, Andhra Pradesh
              </h3>

              {vjaLocation && (
                <div className="text-xs text-slate-600 space-y-1">
                  <p>{vjaLocation.addressLines[0]}</p>
                  <p>{vjaLocation.addressLines[1]}</p>
                  <p className="font-semibold text-slate-800">
                    Vijayawada, AP – {vjaLocation.pincode}, India
                  </p>
                </div>
              )}
            </div>

            {/* Direct Connect Options */}
            <div className="bg-gradient-to-r from-[#0A2540] to-[#154580] rounded-3xl p-6 text-white space-y-4">
              <h4 className="text-base font-bold font-heading text-white">
                Admissions &amp; Counselling Desk
              </h4>

              <div className="space-y-2 text-xs">
                {COMPANY_DATA.phoneNumbers.map((p, i) => (
                  <a
                    key={i}
                    href={`tel:${p.value}`}
                    className="flex items-center gap-3 p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-slate-100 font-mono"
                  >
                    <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{p.display}</span>
                    <span className="ml-auto text-[10px] bg-blue-900/60 px-2 py-0.5 rounded text-blue-200 font-sans">
                      {i === 0 ? 'Primary' : 'Support'}
                    </span>
                  </a>
                ))}

                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappNumber.value}?text=${encodeURIComponent(COMPANY_DATA.whatsappNumber.prefilledMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 bg-emerald-600/80 hover:bg-emerald-600 rounded-xl transition-colors text-white font-semibold"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <a
                  href={`mailto:${COMPANY_DATA.email.training}`}
                  className="flex items-center gap-3 p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-slate-100"
                >
                  <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>{COMPANY_DATA.email.training}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Comprehensive Lead Generation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Instant Lead Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
                Enquire for Admissions &amp; Free Demo
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the form below. Our senior counselor will connect with you to share batch schedules and free demo links.
              </p>
            </div>

            {isSuccess ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  🎉 Thanks! Your Enquiry Has Been Received.
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you <strong>{fullName}</strong>. Our senior technical counselor will contact you via WhatsApp / Call at <strong>{phone}</strong> shortly to confirm your free demo access.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Interested Technology Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                      <option value="Enterprise Corporate Custom Training">Other / Enterprise Training</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Qualification
                    </label>
                    <select
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                    >
                      <option value="B.Tech / B.E.">B.Tech / B.E.</option>
                      <option value="BCA / MCA">BCA / MCA</option>
                      <option value="B.Sc / M.Sc">B.Sc / M.Sc</option>
                      <option value="Working IT Professional">Working IT Professional</option>
                      <option value="Non-IT Background">Non-IT Switcher</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Experience Level
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                    >
                      <option value="Fresh Graduate (0 years)">Fresh Graduate (0 yrs)</option>
                      <option value="1 - 3 Years">1 - 3 Years</option>
                      <option value="3 - 6 Years">3 - 6 Years</option>
                      <option value="6+ Years">6+ Years (Senior)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Batch
                    </label>
                    <select
                      value={preferredBatch}
                      onChange={(e) => setPreferredBatch(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                    >
                      <option value="Morning Batch (7:30 AM)">Morning 7:30 AM</option>
                      <option value="Evening Batch (8:30 PM)">Evening 8:30 PM</option>
                      <option value="Weekend Batch">Weekend Batch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Training Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setMode('Online Live Training')}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        mode === 'Online Live Training'
                          ? 'border-blue-600 bg-blue-50 text-blue-800'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      🌐 Online Live Interactive
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('Classroom (Hyderabad KPHB)')}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        mode === 'Classroom (Hyderabad KPHB)'
                          ? 'border-blue-600 bg-blue-50 text-blue-800'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      🏢 Classroom (Hyderabad KPHB)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message or Specific Query
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask questions about course syllabus, demo timing, fees, or corporate discounts..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Submitting Enquiry...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry &amp; Reserve Free Demo
                    </>
                  )}
                </button>

                <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-4">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Confidential
                  </span>
                  <span>•</span>
                  <span>First 4 Sessions 100% Free</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
