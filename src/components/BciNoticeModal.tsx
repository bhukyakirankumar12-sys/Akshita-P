import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

interface BciNoticeModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

export const BciNoticeModal: React.FC<BciNoticeModalProps> = ({ isOpen, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bci-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/75 px-4 py-6 backdrop-blur-sm"
    >
      <div className="w-full max-w-xl overflow-hidden rounded-xl border border-brass/40 bg-ivory shadow-elevated">
        {/* Top Navy Header */}
        <div className="border-b border-brass/30 bg-navy-950 px-6 py-5 text-ivory">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            <Scale className="h-4 w-4 text-brass" />
            <span>Bar Council of India — Informational Notice</span>
          </div>
          <h2 id="bci-modal-title" className="mt-1.5 font-serif text-2xl font-semibold text-ivory">
            Disclaimer & Confirmation
          </h2>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-ink-muted">
          <p className="text-ink">
            Under the rules of the <strong>Bar Council of India</strong> (Rule 36, Chapter II, Part VI),
            advocates are prohibited from soliciting work or advertising. By entering{' '}
            <strong>{SITE_CONFIG.brandName}</strong> ({SITE_CONFIG.advocateName}), you confirm that:
          </p>
          <ul className="space-y-2.5 rounded-lg border border-borderWarm bg-white p-4 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass-ink" />
              <span>
                You are seeking information about <strong>{SITE_CONFIG.advocateName}</strong>,
                chamber details, and educational workshops of your own accord.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass-ink" />
              <span>
                There has been no advertisement, personal communication, solicitation, invitation, or
                inducement of any sort from the Advocate or her chambers.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass-ink" />
              <span>
                The contents on this site are solely for general informational and educational
                purposes and do not constitute legal advice or establish an advocate–client
                relationship.
              </span>
            </li>
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-borderWarm bg-linen px-6 py-4 sm:flex-row">
          <Link
            to="/disclaimer"
            onClick={onAccept}
            className="text-xs font-medium text-ink-muted underline decoration-brass/60 underline-offset-4 hover:text-navy-950"
          >
            Read Full Legal Disclaimer
          </Link>
          <button
            type="button"
            onClick={onAccept}
            className="w-full rounded-lg bg-navy-950 px-6 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-navy-800 sm:w-auto"
          >
            I Understand & Proceed
          </button>
        </div>
      </div>
    </div>
  );
};
