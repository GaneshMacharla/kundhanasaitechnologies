import React, { useState } from 'react';
import { 
  Quote, 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Star 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Template slots for verified client reviews per PRD section 17
  const testimonialSlots = [
    {
      studentName: 'Student Review Slot #1',
      course: 'Generative AI & Agentic AI',
      batch: 'Morning Batch (7:30 AM)',
      status: 'VERIFY_WITH_CLIENT — Pending actual student submission',
      quotePlaceholder: 'Student testimonial will be added after client approval.',
      detailedContext: 'This slot is reserved for authentic learner feedback showcasing capstone project experience, mentor responsiveness, and interview mock preparation.'
    },
    {
      studentName: 'Student Review Slot #2',
      course: 'Data Engineering (PySpark & Databricks)',
      batch: 'Evening Batch (8:30 PM)',
      status: 'VERIFY_WITH_CLIENT — Pending actual student submission',
      quotePlaceholder: 'Student testimonial will be added after client approval.',
      detailedContext: 'This slot will highlight practical Delta Lake and Airflow workflow training, real-time debugging support, and transition into cloud data roles.'
    },
    {
      studentName: 'Student Review Slot #3',
      course: 'Snowflake Cloud Data Warehouse',
      batch: 'Classroom Batch (Hyderabad KPHB)',
      status: 'VERIFY_WITH_CLIENT — Pending actual student submission',
      quotePlaceholder: 'Student testimonial will be added after client approval.',
      detailedContext: 'This slot will document hands-on Snowpipe ingestion, Streams & Tasks CDC implementation, and direct technical interview clearance.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Authentic Learner Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-3">
            Student Feedback &amp; Experiences
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            We prioritize strict honesty: no fabricated student reviews or artificial placement numbers. Authentic verified testimonials from recent batches will be displayed upon client sign-off.
          </p>
        </div>

        {/* Client Demo Advisory Banner */}
        <div className="mb-10 max-w-2xl mx-auto bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Demo Notice regarding Social Proof:</strong>
            Per institutional integrity guidelines, all student reviews and recruiter logos are maintained as review slots pending final client-provided student verification.
          </div>
        </div>

        {/* Carousel / Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialSlots.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                idx === activeTab
                  ? 'bg-blue-50/40 border-blue-400 shadow-md ring-1 ring-blue-300'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded">
                    {item.course}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {item.batch}
                  </div>
                </div>

                <blockquote className="text-sm font-semibold text-slate-800 italic mb-3">
                  "{item.quotePlaceholder}"
                </blockquote>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.detailedContext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{item.studentName}</span>
                    <span className="text-[10px] text-slate-400">Hyderabad Centre</span>
                  </div>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    Awaiting Approval
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
