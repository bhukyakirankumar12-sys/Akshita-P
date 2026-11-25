import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

/**
 * Bespoke vector emblem + wordmark for VākLegal — Chambers of Advocate Akshita Pendyem.
 * Combines the heritage Telangana High Court arch, balanced scales of justice,
 * a central calligraphic nib/pillar, and an open legal folio.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  compact = false,
}) => {
  const isLight = variant === 'light';
  const primaryText = isLight ? 'text-ivory' : 'text-navy-950';
  const subText = isLight ? 'text-ivory/70' : 'text-ink-muted';
  const archStroke = '#B08D4C';
  const pillarStroke = isLight ? '#FAF8F4' : '#0B1730';
  const shieldFill = isLight ? '#10213F' : '#0B1730';

  return (
    <div className="inline-flex items-center gap-3.5 select-none group">
      {/* Architectural Emblem */}
      <div className="relative flex-shrink-0">
        <svg
          width={compact ? 40 : 46}
          height={compact ? 40 : 46}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:scale-[1.03]"
        >
          <rect
            width="64"
            height="64"
            rx="14"
            fill={shieldFill}
            stroke="#B08D4C"
            strokeOpacity={isLight ? 0.55 : 0.35}
            strokeWidth="1.25"
          />
          <rect
            x="4.5"
            y="4.5"
            width="55"
            height="55"
            rx="10.5"
            stroke="#B08D4C"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
          {/* Heritage High Court Arch */}
          <path
            d="M16 45V27.5C16 18.6 23.16 12.5 32 12.5C40.84 12.5 48 18.6 48 27.5V45"
            stroke={archStroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Finial dot at crown of arch */}
          <circle cx="32" cy="9.5" r="1.6" fill="#D4B475" />
          {/* Central Nib / Pillar */}
          <path
            d="M32 17.5V43.5"
            stroke="#FAF8F4"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M28.8 24.5L32 17.5L35.2 24.5"
            stroke={archStroke}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Scales Balance Beam */}
          <path
            d="M20.5 26.5H43.5"
            stroke={archStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Left Pan */}
          <path
            d="M20.5 26.5L17.2 34.5H23.8L20.5 26.5Z"
            stroke="#FAF8F4"
            strokeOpacity="0.92"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Right Pan */}
          <path
            d="M43.5 26.5L40.2 34.5H46.8L43.5 26.5Z"
            stroke="#FAF8F4"
            strokeOpacity="0.92"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Open Legal Folio */}
          <path
            d="M19.5 45.2C24.2 42.6 28.4 43.2 32 45.2C35.6 43.2 39.8 42.6 44.5 45.2"
            stroke={archStroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17.5 49.5H46.5"
            stroke={pillarStroke === '#FAF8F4' ? '#FAF8F4' : '#FAF8F4'}
            strokeOpacity="0.65"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif font-semibold tracking-tight ${
              compact ? 'text-xl' : 'text-[1.45rem]'
            } ${primaryText}`}
          >
            Vāk<span className="text-brass">Legal</span>
          </span>
        </div>
        <span
          className={`mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] ${subText}`}
        >
          {compact ? 'Advocate Akshita Pendyem' : 'Advocate Akshita Pendyem · Telangana High Court'}
        </span>
      </div>
    </div>
  );
};
