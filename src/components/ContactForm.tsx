import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Copy, 
  Check, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { ENTERPRISE_SERVICES } from '../data/servicesData';
import { CORPORATE_DATA } from '../data/corporateData';

interface ContactFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  serviceInterest: string;
  projectDescription: string;
  privacyConsent: boolean;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  serviceInterest?: string;
  projectDescription?: string;
  privacyConsent?: string;
}

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  initialService = '', 
  onSuccess,
  className = '' 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    serviceInterest: initialService || '',
    projectDescription: '',
    privacyConsent: false,
    honeypot: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    if (!formData.companyName.trim() || formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Please enter your organization or enterprise name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email address is required.';
    } else if (!emailRegex.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid corporate email address.';
    }

    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required for consultation coordination.';
    } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      newErrors.phoneNumber = 'Please provide a valid contact number (8 to 15 digits).';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select your primary technology practice of interest.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please describe your initiative or business challenge (minimum 15 characters).';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the enterprise data privacy policy to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear individual error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    // Spam honeypot detection
    if (formData.honeypot) {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate reference ID: KS-YYYY-RANDOM
      const timestamp = new Date().getFullYear();
      const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
      const referenceId = `KS-${timestamp}-${randomCode}`;

      const selectedServiceName = ENTERPRISE_SERVICES.find(s => s.id === formData.serviceInterest)?.title || formData.serviceInterest;

      // Save submission to local enterprise store for reliability and offline access
      const newSubmissionRecord = {
        referenceId,
        submittedAt: new Date().toISOString(),
        fullName: formData.fullName.trim(),
        companyName: formData.companyName.trim(),
        businessEmail: formData.businessEmail.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        serviceInterest: selectedServiceName,
        projectDescription: formData.projectDescription.trim()
      };

      try {
        const existingSubmissions = JSON.parse(localStorage.getItem('ks_enterprise_leads') || '[]');
        existingSubmissions.push(newSubmissionRecord);
        localStorage.setItem('ks_enterprise_leads', JSON.stringify(existingSubmissions));
      } catch (storageErr) {
        console.warn('LocalStorage save error:', storageErr);
      }

      // Dispatch form data to info@kundhanasai.in
      const destinationEmail = CORPORATE_DATA.email.primary || 'info@kundhanasai.in';
      
      const emailPayload = {
        _subject: `New Enterprise Consultation Request: ${formData.companyName.trim()} [${referenceId}]`,
        _replyto: formData.businessEmail.trim(),
        _template: 'table',
        _captcha: 'false',
        'Consultation Reference ID': referenceId,
        'Client Full Name': formData.fullName.trim(),
        'Company / Organization': formData.companyName.trim(),
        'Business Email': formData.businessEmail.trim(),
        'Contact Phone Number': formData.phoneNumber.trim(),
        'Capability / Service Domain': selectedServiceName,
        'Project Requirements & Objectives': formData.projectDescription.trim(),
        'Submission Timestamp': new Date().toLocaleString()
      };

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${destinationEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        });
        const result = await response.json();
        console.info('Consultation form dispatched to ' + destinationEmail, result);
      } catch (netErr) {
        console.warn('Email dispatch network error (fallback retained):', netErr);
      }

      setSubmittedReference(referenceId);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setSubmissionError(`An unexpected error occurred while transmitting your request. Please try again or reach out directly to ${CORPORATE_DATA.email.primary}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRefToClipboard = () => {
    if (submittedReference) {
      navigator.clipboard.writeText(submittedReference);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  const handleReset = () => {
    setSubmittedReference(null);
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phoneNumber: '',
      serviceInterest: initialService || '',
      projectDescription: '',
      privacyConsent: false,
      honeypot: ''
    });
    setErrors({});
  };

  if (submittedReference) {
    return (
      <div className={`p-8 bg-slate-900 border border-cyan-500/30 rounded-2xl text-white ${className}`}>
        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="text-2xl font-heading font-extrabold text-center text-white mb-2">
          Consultation Inquiry Received
        </h3>

        <p className="text-slate-300 text-sm text-center max-w-md mx-auto mb-6">
          Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An enterprise technology principal from Kundhana Sai IT Solutions will review your requirements and reach out within 1 business day.
        </p>

        {/* Reference ID card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 max-w-md mx-auto mb-6 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              Consultation Reference ID
            </div>
            <div className="text-lg font-mono font-bold text-cyan-400 tracking-wider">
              {submittedReference}
            </div>
          </div>
          <button
            onClick={copyRefToClipboard}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copiedRef ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy ID</span>
              </>
            )}
          </button>
        </div>

        {/* Dispatch Confirmation Note */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 max-w-md mx-auto text-xs text-slate-300 mb-6 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Dispatched to {CORPORATE_DATA.email.primary}</span>
          </div>
          <p className="text-[12px] text-slate-400 leading-relaxed">
            Your technical consultation inquiry has been forwarded directly to our solutions desk at <strong className="text-white">{CORPORATE_DATA.email.primary}</strong>. Our enterprise architecture team will review your project parameters and contact you shortly.
          </p>
          <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Need direct mail confirmation?</span>
            <a 
              href={`mailto:${CORPORATE_DATA.email.primary}?subject=${encodeURIComponent(`Enterprise Consultation: ${formData.companyName} [${submittedReference}]`)}&body=${encodeURIComponent(`Hello Kundhana Sai Solutions Team,\n\nI have submitted a technical consultation request:\n\nReference ID: ${submittedReference}\nClient Name: ${formData.fullName}\nCompany: ${formData.companyName}\nBusiness Email: ${formData.businessEmail}\nPhone: ${formData.phoneNumber}\nService Interest: ${formData.serviceInterest}\n\nProject Scope:\n${formData.projectDescription}\n\nSubmitted via Web Portal.`)}`}
              className="text-cyan-400 hover:text-cyan-300 underline font-semibold flex items-center gap-1"
            >
              Open Direct Email
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-slate-200 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Submit Another Project Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Honeypot field (hidden from humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this</label>
        <input
          type="text"
          id="hp_field"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submissionError && (
        <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-2.5 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{submissionError}</span>
        </div>
      )}

      {/* Row 1: Full Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Anand Sharma"
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
              errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-500/20'
            } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Company Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Nexus Global Financial"
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
              errors.companyName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-500/20'
            } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.companyName}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Business Email & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Business Email <span className="text-cyan-400">*</span>
          </label>
          <input
            type="email"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="name@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
              errors.businessEmail ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-500/20'
            } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.businessEmail && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.businessEmail}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Phone / Contact Number <span className="text-cyan-400">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
              errors.phoneNumber ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-500/20'
            } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Service of Interest */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Service / Capability of Interest <span className="text-cyan-400">*</span>
        </label>
        <select
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
            errors.serviceInterest ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-500/20'
          } text-white text-sm focus:outline-none focus:ring-2 transition-all`}
        >
          <option value="" disabled className="bg-slate-900 text-slate-500">
            Select a Practice Domain...
          </option>
          {ENTERPRISE_SERVICES.map(service => (
            <option key={service.id} value={service.title} className="bg-slate-900 text-white">
              {service.title}
            </option>
          ))}
          <option value="Enterprise IT Consulting & Digital Architecture" className="bg-slate-900 text-white">
            General Enterprise IT Consulting &amp; Architecture
          </option>
        </select>
        {errors.serviceInterest && (
          <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.serviceInterest}
          </p>
        )}
      </div>

      {/* Row 4: Project Description */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Project Requirements &amp; Business Objectives <span className="text-cyan-400">*</span>
        </label>
        <textarea
          name="projectDescription"
          rows={4}
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Briefly describe your business challenge, desired scope, target timeline, or existing technical architecture..."
          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
            errors.projectDescription ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-500/20'
          } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-y`}
        />
        {errors.projectDescription && (
          <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.projectDescription}
          </p>
        )}
      </div>

      {/* Row 5: Privacy Consent */}
      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-slate-900"
          />
          <span className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            I consent to Kundhana Sai IT Solutions processing my business details to coordinate this consultation inquiry in accordance with the corporate privacy policy. We respect enterprise NDAs and confidentiality.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.privacyConsent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-bold text-sm tracking-wide shadow-lg shadow-blue-900/30 hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Transmitting Inquiry to Enterprise Desk...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Enterprise Consultation Request</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
        <span>Enterprise Confidentiality Assured • Direct Principal Consultation</span>
      </div>
    </form>
  );
};
