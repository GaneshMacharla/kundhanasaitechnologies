import React, { useEffect } from 'react';
import { X, Sparkles, Building2 } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { ContactForm } from './ContactForm';

export const ConsultationModal: React.FC = () => {
  const { isOpen, preselectedService, closeConsultation } = useConsultation();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeConsultation();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeConsultation]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header decoration bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800 flex items-start justify-between relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Consultation</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              Schedule a Technical Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Connect with our enterprise solutions team to evaluate your architectural roadmap.
            </p>
          </div>

          <button
            onClick={closeConsultation}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Contact Form */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          <ContactForm initialService={preselectedService} />
        </div>
      </div>
    </div>
  );
};
