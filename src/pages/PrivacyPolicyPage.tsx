import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CORPORATE_DATA } from '../data/corporateData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Privacy Policy &amp; Enterprise Data Protection"
        description="Privacy policy and data governance practices of Kundhana Sai IT Solutions Pvt. Ltd., upholding client confidentiality, data sovereignty, and compliance."
        canonicalPath="/privacy"
      />

      {/* Header */}
      <section className="bg-[#050E1D] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            Corporate Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Last Updated: October 2026 • Kundhana Sai IT Solutions Pvt. Ltd. (CIN: {CORPORATE_DATA.cin})
          </p>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              1. Commitment to Enterprise Confidentiality
            </h2>
            <p>
              Kundhana Sai IT Solutions Pvt. Ltd. (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Company&rdquo;) is an enterprise IT services and consulting organization incorporated in India. We hold enterprise client confidentiality and intellectual property rights in the highest regard. This policy outlines how we collect, handle, protect, and utilize business information submitted through our website (<a href="https://kundhanasaitechnologies.com" className="text-blue-600 underline">kundhanasaitechnologies.com</a>) and during consulting engagements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p>
              When you submit a business inquiry or request an architectural consultation, we collect the following business contact information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Identity:</strong> Full Name, Business Email Address, Phone/Mobile Number.</li>
              <li><strong>Organizational Profile:</strong> Company Name, Industry Vertical, Department.</li>
              <li><strong>Technical Context:</strong> High-level project specifications, technology practice interests, and architectural requirements.</li>
              <li><strong>Technical Telemetry:</strong> Standard browser telemetry, device viewport, and anonymized access logs for performance optimization and cybersecurity defense.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              3. Purpose of Processing &amp; Use of Information
            </h2>
            <p>
              We process corporate inquiries exclusively for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinating technical discovery sessions and assigning qualified practice leads.</li>
              <li>Preparing customized non-disclosure agreements (NDAs) and formal RFP proposals.</li>
              <li>Complying with statutory corporate audit and tax regulations under Indian law.</li>
              <li>We <strong>never sell, rent, or trade</strong> your corporate contact details to external marketing agencies or third-party data brokers.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              4. Artificial Intelligence &amp; Client Data Sovereignty
            </h2>
            <p>
              In our Generative AI and Data Engineering practices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We never submit client proprietary code, datasets, or documents to public commercial AI models without zero-data-retention VPC agreements.</li>
              <li>We specialize in on-premises and private cloud deployments guaranteeing 100% data residency within your secured enterprise boundaries.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              5. Data Security Standards
            </h2>
            <p>
              We employ enterprise-grade security controls including TLS 1.3 encryption in transit, strict role-based access control (RBAC), automated intrusion detection, and periodic vulnerability reviews to safeguard submitted communications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              6. Corporate Legal Inquiries
            </h2>
            <p>
              For privacy inquiries, data deletion requests, or executed corporate non-disclosure agreements, please contact our administrative desk:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-2">
              <div className="font-bold text-slate-900">
                Kundhana Sai IT Solutions Pvt. Ltd.
              </div>
              <div>CIN: {CORPORATE_DATA.cin}</div>
              <div>Plot No. 45, KPHB 9th Phase, Nexus Mall Road, Lakshmi Krishna Plaza, Kukatpally, Hyderabad – 500072, Telangana, India</div>
              <div>Email: <a href={`mailto:${CORPORATE_DATA.email.primary}`} className="text-blue-600 underline font-semibold">{CORPORATE_DATA.email.primary}</a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
