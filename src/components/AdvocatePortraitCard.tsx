import React from 'react';
import { Award, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

export const AdvocatePortraitCard: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-borderWarm bg-white shadow-editorial">
      {/* Portrait or Bespoke Advocate Seal */}
      <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-navy-950">
        {SITE_CONFIG.portraitUrl ? (
          <img
            src={SITE_CONFIG.portraitUrl}
            alt={SITE_CONFIG.advocateName}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center p-8 text-center">
            {/* Subtle architectural frame lines */}
            <div className="pointer-events-none absolute inset-4 rounded-lg border border-brass/30" />
            <div className="pointer-events-none absolute inset-6 rounded-md border border-white/10" />

            {/* Bespoke Counsel Monogram Emblem */}
            <svg
              viewBox="0 0 160 160"
              className="h-36 w-36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="80" cy="80" r="72" stroke="#B08D4C" strokeOpacity="0.45" strokeWidth="1.2" />
              <circle cx="80" cy="80" r="64" stroke="#B08D4C" strokeDasharray="3 5" strokeOpacity="0.6" strokeWidth="1" />
              {/* Court Arch */}
              <path
                d="M44 114V72C44 49 60 34 80 34C100 34 116 49 116 72V114"
                stroke="#B08D4C"
                strokeWidth="1.8"
              />
              {/* Monogram AP */}
              <text
                x="80"
                y="88"
                textAnchor="middle"
                fill="#FAF8F4"
                fontFamily="Source Serif 4, Georgia, serif"
                fontSize="40"
                fontWeight="600"
                letterSpacing="2"
              >
                AP
              </text>
              {/* Brass Divider */}
              <line x1="56" y1="100" x2="104" y2="100" stroke="#B08D4C" strokeWidth="1.5" />
              <text
                x="80"
                y="115"
                textAnchor="middle"
                fill="#C9A86A"
                fontFamily="Inter, sans-serif"
                fontSize="8.5"
                fontWeight="600"
                letterSpacing="2.8"
              >
                ADVOCATE
              </text>
            </svg>

            <p className="mt-4 font-serif text-lg font-medium text-ivory">
              High Court for the State of Telangana
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-brass-light">
              Chambers · Hyderabad
            </p>
          </div>
        )}
      </div>

      {/* Caption & Credentials */}
      <div className="card-brass-top space-y-4 p-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-navy-950">
            {SITE_CONFIG.advocateName}
          </h3>
          <p className="mt-0.5 font-serif text-sm italic text-brass-ink">
            {SITE_CONFIG.designation}
          </p>
        </div>

        <div className="space-y-2 border-t border-borderWarm pt-4 text-xs text-ink-muted">
          <div className="flex items-start gap-2">
            <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" />
            <span>NALSAR Trained in Alternative Dispute Resolution & Mediation</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" />
            <span>
              {SITE_CONFIG.chamberAddress.line3}, {SITE_CONFIG.chamberAddress.cityStatePin}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
