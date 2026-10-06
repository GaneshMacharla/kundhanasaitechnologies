import React from 'react';
import { X, CheckCircle, Sparkles, Clock, Monitor, BookOpen } from 'lucide-react';
import { Course } from '../data/coursesData';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseName: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A2540] text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase">
              {course.category}
            </span>
            <span className="text-amber-300 text-xs font-semibold">
              • {course.freeSessions}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            {course.title} — Course Syllabus
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200 mt-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" /> Duration: {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Monitor className="w-3.5 h-3.5 text-emerald-400" /> Mode: Online &amp; Classroom
            </span>
            <span className="text-white font-medium">
              Batches: 7:30 AM &amp; 8:30 PM IST
            </span>
          </div>
        </div>

        {/* Modules List */}
        <div className="p-5 sm:p-6 overflow-y-auto grow space-y-4">
          <div className="text-xs text-slate-600 bg-blue-50 border border-blue-200 rounded-xl p-3">
            <strong className="text-blue-900 block mb-0.5">Hands-On Practical Approach:</strong>
            Every module includes theory explanation, live instructor demonstration, daily assignments, and real-time project implementation.
          </div>

          <div className="space-y-3">
            {course.syllabus.map((mod, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded bg-blue-600 text-white text-xs flex items-center justify-center font-mono">
                    {idx + 1}
                  </span>
                  <span>{mod.moduleTitle}</span>
                </h4>
                <ul className="space-y-1.5 pl-8 text-xs text-slate-600">
                  {mod.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Real-Time Projects */}
          <div className="border-t border-slate-200 pt-4">
            <h4 className="font-bold text-sm text-slate-900 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" /> Real-Time Enterprise Capstone Projects:
            </h4>
            <div className="space-y-2">
              {course.realTimeProjects.map((p, pIdx) => (
                <div key={pIdx} className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-blue-700 block">{p.title}</span>
                  <span className="text-slate-600 mt-0.5 block">{p.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
            First 4 sessions are 100% free with no advance payment.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wide cursor-pointer shadow-xs"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
