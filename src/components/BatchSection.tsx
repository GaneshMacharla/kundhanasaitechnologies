import React from 'react';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Monitor, 
  Building2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import { COMPANY_DATA } from '../data/companyData';

export const BatchSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const batches = [
    {
      name: 'Morning Batch',
      timing: '7:30 AM – 8:45 AM IST',
      idealFor: 'Fresh graduates & professionals before work hours',
      mode: 'Online Interactive & Classroom',
      nextStartDate: 'Upcoming Monday',
      status: 'Admissions Open',
      seats: 'Limited Seats'
    },
    {
      name: 'Evening Batch',
      timing: '8:30 PM – 9:45 PM IST',
      idealFor: 'Working IT professionals & career switchers',
      mode: 'Online Interactive & Classroom',
      nextStartDate: 'Upcoming Monday',
      status: 'Admissions Open',
      seats: 'Fast Filling'
    },
    {
      name: 'Weekend Fast-Track',
      timing: 'Saturday & Sunday (Flexible Slots)',
      idealFor: 'Intensive weekend learners & outstation students',
      mode: 'Online Live Mentoring',
      nextStartDate: 'Upcoming Saturday',
      status: 'Enquiring',
      seats: 'Available'
    }
  ];

  return (
    <section id="batches-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Special Promotional Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Upcoming Batches &amp; Timings
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Designed for convenience with both early morning and late evening options. Experience our classes firsthand before you enroll.
          </p>

          {/* Highlight Banner */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-amber-300 px-4 py-2.5 rounded-2xl shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping inline-block" />
            <span className="text-slate-900 font-extrabold text-sm sm:text-base">
              🎉 First 4 Sessions FREE
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-red-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
              🔥 Limited Seats Available
            </span>
          </div>
        </div>

        {/* Batches Cards / Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {batches.map((batch, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                idx === 0 
                  ? 'border-blue-300 ring-2 ring-blue-500/20' 
                  : 'border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    {batch.name}
                  </span>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {batch.seats}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-lg font-bold text-slate-900 font-mono">
                    {batch.timing}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  {batch.idealFor}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Mode:</span>
                    <span>{batch.mode}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Next Start:</span>
                    <span className="text-emerald-700 font-bold">{batch.nextStartDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Trial Offer:</span>
                    <span className="text-amber-700 font-bold">4 Demo Sessions Free</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => openDemoModal()}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Book Free Demo Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Training Modes Section Component */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Flexible Training Modes for Every Learner
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Choose the learning mode that matches your schedule and convenience. Both options include identical hands-on projects and placement assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Online Training Card */}
            <div className="rounded-2xl p-6 bg-slate-50/80 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                <Monitor className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Online Interactive Training
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Connect from anywhere across India or abroad. Live two-way audio/video sessions with screen sharing, instant doubt clarification, and recorded backups for lifetime revision.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Live interactive instructor-led sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cloud lab guidance &amp; real-time project builds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Recorded session backups provided daily</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Online mock interviews and resume reviews</span>
                </li>
              </ul>

              <button
                onClick={() => openDemoModal()}
                className="w-full py-2.5 px-4 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Choose Online Mode
              </button>
            </div>

            {/* Classroom Training Card */}
            <div className="rounded-2xl p-6 bg-slate-50/80 border border-slate-200 hover:border-amber-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-amber-300 flex items-center justify-center mb-4 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Classroom Training (Hyderabad Centre)
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                In-person learning at our training center in KPHB, Kukatpally, Hyderabad. Benefit from face-to-face mentorship, structured peer collaboration, and immediate physical lab support.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Air-conditioned lab infrastructure in KPHB</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Direct face-to-face interaction with mentors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Dedicated doubt clarification and peer study groups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>In-person technical round mock rehearsals</span>
                </li>
              </ul>

              <button
                onClick={() => openDemoModal()}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Choose Classroom Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
