import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, X, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export const ClientNoticeBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside aria-label="Demo Verification Advisory" className="bg-amber-500/10 border-b border-amber-300 text-slate-800 text-xs px-4 py-2 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium text-amber-900">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider">
            Demo Advisory
          </span>
          <span>
            Client Verification Notes active: Hyderabad Address, Pincode &amp; Director details pending client confirmation.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-900 hover:text-amber-950 font-semibold underline flex items-center gap-1 cursor-pointer"
          >
            {isOpen ? 'Hide verification checklist' : 'Review verification details'}
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-slate-500 hover:text-slate-700 p-0.5 rounded"
            title="Dismiss notice"
            aria-label="Dismiss demo notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-amber-200 text-slate-700 grid grid-cols-1 md:grid-cols-3 gap-4 pb-1">
          <div className="bg-white p-2.5 rounded border border-amber-200 shadow-xs">
            <p className="font-bold text-slate-900 mb-1 flex items-center gap-1 text-xs">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Hyderabad Address:
            </p>
            <p className="text-[11px] text-slate-600">
              Variant 1: Plot No. 45, KPHB 9th Phase, PIN 500072<br />
              Variant 2: Lakshmikrishnaplaza, 2nd floor, 9th Phase, PIN 500085<br />
              <strong className="text-amber-800">Status:</strong> Configured for client verification before publishing.
            </p>
          </div>

          <div className="bg-white p-2.5 rounded border border-amber-200 shadow-xs">
            <p className="font-bold text-slate-900 mb-1 flex items-center gap-1 text-xs">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Phone &amp; WhatsApp:
            </p>
            <p className="text-[11px] text-slate-600">
              Numbers shown: {COMPANY_DATA.phoneNumbers.map(p => p.display).join(' / ')}<br />
              <strong className="text-amber-800">Status:</strong> Configured dynamically in companyData.ts for quick update.
            </p>
          </div>

          <div className="bg-white p-2.5 rounded border border-amber-200 shadow-xs">
            <p className="font-bold text-slate-900 mb-1 flex items-center gap-1 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Legal Info:
            </p>
            <p className="text-[11px] text-slate-600">
              CIN: {COMPANY_DATA.cin} (Verified MCA registry)<br />
              Directors: {COMPANY_DATA.directors.map(d => d.name).join(', ')}<br />
              <strong className="text-amber-800">Status:</strong> Kept intact per company records.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};
