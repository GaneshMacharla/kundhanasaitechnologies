import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Monitor, 
  Send, 
  ShieldCheck, 
  MessageSquare, 
  PhoneCall,
  Calendar
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { COMPANY_DATA } from '../data/companyData';

export const EnquiryPage: React.FC = () => {
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

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(phone.trim())) {
      errs.phone = 'Enter valid 10-digit number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const enquiryLead = {
      id: 'DEMO-' + Date.now(),
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

    try {
      await fetch('https://formsubmit.co/ajax/info@kundhanasai.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Free Demo Booking: ${fullName} [${course}]`,
          _replyto: email || undefined,
          _template: 'table',
          _captcha: 'false',
          'Booking Reference ID': enquiryLead.id,
          'Full Name': fullName,
          'Phone / WhatsApp': phone,
          'Email': email || 'Not provided',
          'Course of Interest': course,
          'Qualification': qualification || 'N/A',
          'Experience Level': experience || 'N/A',
          'Preferred Learning Mode': mode,
          'Preferred Batch Time': preferredBatch,
          'Message / Specific Requirements': message || 'None',
          'Submitted At': new Date().toLocaleString()
        })
      });
    } catch (netErr) {
      console.warn('Demo booking email dispatch failed:', netErr);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Promotional Privilege
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Book Your Free Demo Session
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Attend the <strong className="text-slate-900">first 4 live sessions 100% free</strong>. Evaluate our teaching quality, syllabus depth, and hands-on lab guidance before making any financial commitment.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                🎉 Your Free Demo Seat is Reserved!
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Thank you <strong>{fullName}</strong>. Our admissions team will WhatsApp you at <strong>{phone}</strong> with the batch joining link and introductory orientation schedule.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappNumber.value}?text=Hi%20Kundhana%20Sai%2C%20I%20have%20booked%20my%20demo%20for%20${encodeURIComponent(course)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider"
                >
                  Confirm Faster on WhatsApp
                </a>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-xs uppercase tracking-wider"
                >
                  Book Another Demo
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Technology Program <span className="text-red-500">*</span>
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
                    <option value="Custom Corporate Batch">Custom Corporate Training</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Qualification
                  </label>
                  <select
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="B.Tech / B.E.">B.Tech / B.E.</option>
                    <option value="BCA / MCA">BCA / MCA</option>
                    <option value="B.Sc / M.Sc">B.Sc / M.Sc</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Non-IT Switcher">Non-IT Switcher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="Fresh Graduate (0 years)">Fresh Graduate (0 yrs)</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="3 - 6 Years">3 - 6 Years</option>
                    <option value="6+ Years (Senior)">6+ Years (Senior)</option>
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
                  Training Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('Online Live Training')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
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
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
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
                  Message or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific topic you are interested in?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  'Reserving Seat...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Reserve My Free Demo Seat (First 4 Sessions Free)
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Zero Risk • No Advance Fee Required
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" /> Next Batch Starting This Monday
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
