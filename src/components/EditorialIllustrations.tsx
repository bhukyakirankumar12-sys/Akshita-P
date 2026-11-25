import React from 'react';

/**
 * Subtle architectural line-art of the High Court for the State of Telangana
 * heritage facade & arches for the hero background.
 */
export const TelanganaCourtBackdrop: React.FC = () => (
  <svg
    viewBox="0 0 1200 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.13]"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Horizon / Plinth */}
    <line x1="60" y1="455" x2="1140" y2="455" stroke="#B08D4C" strokeWidth="1.2" />
    <line x1="120" y1="468" x2="1080" y2="468" stroke="#FAF8F4" strokeOpacity="0.4" strokeWidth="0.9" />

    {/* Central Grand Dome */}
    <path
      d="M520 190C520 135 556 96 600 96C644 96 680 135 680 190"
      stroke="#B08D4C"
      strokeWidth="1.6"
    />
    <path d="M600 66V96" stroke="#B08D4C" strokeWidth="1.5" />
    <circle cx="600" cy="62" r="4" stroke="#B08D4C" strokeWidth="1.4" />
    <rect x="495" y="190" width="210" height="28" stroke="#FAF8F4" strokeOpacity="0.55" strokeWidth="1.1" />

    {/* Central Portico Arches */}
    <path d="M510 455V290C510 250 550 225 600 225C650 225 690 250 690 290V455" stroke="#B08D4C" strokeWidth="1.5" />
    <path d="M542 455V315C542 288 568 268 600 268C632 268 658 288 658 315V455" stroke="#FAF8F4" strokeOpacity="0.5" strokeWidth="1.1" />

    {/* Left Colonnade */}
    {[240, 310, 380, 445].map((x) => (
      <g key={`left-${x}`}>
        <path
          d={`M${x} 455V305C${x} 282 ${x + 25} 265 ${x + 30} 265C${x + 35} 265 ${x + 60} 282 ${x + 60} 305V455`}
          stroke="#FAF8F4"
          strokeOpacity="0.45"
          strokeWidth="1.1"
        />
        <rect x={x + 6} y="220" width="48" height="22" stroke="#B08D4C" strokeOpacity="0.6" strokeWidth="1" />
      </g>
    ))}

    {/* Right Colonnade */}
    {[700, 765, 835, 905].map((x) => (
      <g key={`right-${x}`}>
        <path
          d={`M${x} 455V305C${x} 282 ${x + 25} 265 ${x + 30} 265C${x + 35} 265 ${x + 60} 282 ${x + 60} 305V455`}
          stroke="#FAF8F4"
          strokeOpacity="0.45"
          strokeWidth="1.1"
        />
        <rect x={x + 6} y="220" width="48" height="22" stroke="#B08D4C" strokeOpacity="0.6" strokeWidth="1" />
      </g>
    ))}

    {/* Left & Right Corner Turrets */}
    <path d="M180 185C180 155 200 135 220 135C240 135 260 155 260 185V455H180V185Z" stroke="#B08D4C" strokeOpacity="0.65" strokeWidth="1.2" />
    <path d="M940 185C940 155 960 135 980 135C1000 135 1020 155 1020 185V455H940V185Z" stroke="#B08D4C" strokeOpacity="0.65" strokeWidth="1.2" />

    {/* Radial Geometry Accent */}
    <circle cx="600" cy="300" r="245" stroke="#B08D4C" strokeOpacity="0.18" strokeDasharray="4 8" strokeWidth="1" />
  </svg>
);

/**
 * Six custom 16:10 editorial illustrations in midnight navy & burnished brass
 * matching the refined legal aesthetic of the reference site while elevated for High Court practice & mentorship.
 */
export const PracticeSceneIllustration: React.FC<{ sceneId: string }> = ({ sceneId }) => {
  switch (sceneId) {
    case 'writ':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-full w-full">
          <rect width="320" height="200" fill="#0B1730" />
          <circle cx="265" cy="40" r="55" fill="#172B52" fillOpacity="0.45" />
          {/* Constitutional Arch & Pillars */}
          <path d="M85 162V95C85 58 118 35 160 35C202 35 235 58 235 95V162" stroke="#B08D4C" strokeWidth="1.8" />
          <line x1="65" y1="162" x2="255" y2="162" stroke="#FAF8F4" strokeOpacity="0.7" strokeWidth="1.5" />
          <line x1="112" y1="92" x2="112" y2="162" stroke="#FAF8F4" strokeOpacity="0.55" strokeWidth="2.5" />
          <line x1="160" y1="74" x2="160" y2="162" stroke="#B08D4C" strokeWidth="2.5" />
          <line x1="208" y1="92" x2="208" y2="162" stroke="#FAF8F4" strokeOpacity="0.55" strokeWidth="2.5" />
          {/* Scroll Seal */}
          <rect x="132" y="106" width="56" height="40" rx="3" fill="#10213F" stroke="#B08D4C" strokeWidth="1.4" />
          <line x1="142" y1="118" x2="178" y2="118" stroke="#FAF8F4" strokeOpacity="0.8" strokeWidth="1.4" />
          <line x1="142" y1="127" x2="172" y2="127" stroke="#FAF8F4" strokeOpacity="0.5" strokeWidth="1.2" />
          <circle cx="172" cy="136" r="4" fill="#B08D4C" />
        </svg>
      );

    case 'civil':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-full w-full">
          <rect width="320" height="200" fill="#0B1730" />
          <circle cx="55" cy="160" r="65" fill="#172B52" fillOpacity="0.45" />
          {/* Twin Ledger / Case Briefs */}
          <rect x="78" y="48" width="92" height="114" rx="4" fill="#10213F" stroke="#FAF8F4" strokeOpacity="0.45" strokeWidth="1.3" />
          <rect x="148" y="38" width="96" height="122" rx="4" fill="#13264A" stroke="#B08D4C" strokeWidth="1.6" />
          <line x1="165" y1="62" x2="226" y2="62" stroke="#B08D4C" strokeWidth="1.8" />
          <line x1="165" y1="78" x2="220" y2="78" stroke="#FAF8F4" strokeOpacity="0.7" strokeWidth="1.3" />
          <line x1="165" y1="92" x2="212" y2="92" stroke="#FAF8F4" strokeOpacity="0.5" strokeWidth="1.3" />
          <line x1="165" y1="106" x2="224" y2="106" stroke="#FAF8F4" strokeOpacity="0.5" strokeWidth="1.3" />
          {/* Clause Seal */}
          <circle cx="212" cy="134" r="12" stroke="#B08D4C" strokeWidth="1.5" />
          <path d="M207 134L210.5 137.5L217 130.5" stroke="#FAF8F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'adr':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-full w-full">
          <rect width="320" height="200" fill="#0B1730" />
          {/* Intersecting Dialogue Circles */}
          <circle cx="132" cy="96" r="46" fill="#10213F" stroke="#FAF8F4" strokeOpacity="0.5" strokeWidth="1.4" />
          <circle cx="188" cy="96" r="46" fill="#172B52" fillOpacity="0.6" stroke="#B08D4C" strokeWidth="1.6" />
          {/* Central Balanced Bridge */}
          <path d="M135 96H185" stroke="#B08D4C" strokeWidth="2" strokeLinecap="round" />
          <circle cx="160" cy="96" r="8" fill="#0B1730" stroke="#B08D4C" strokeWidth="1.8" />
          <circle cx="160" cy="96" r="2.5" fill="#FAF8F4" />
          {/* Base Table */}
          <line x1="75" y1="158" x2="245" y2="158" stroke="#B08D4C" strokeOpacity="0.65" strokeWidth="1.5" />
        </svg>
      );

    case 'mentorship':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-full w-full">
          <rect width="320" height="200" fill="#0B1730" />
          {/* Lectern / Moot Podium */}
          <path d="M105 162L120 96H200L215 162H105Z" fill="#10213F" stroke="#B08D4C" strokeWidth="1.5" />
          <line x1="95" y1="96" x2="225" y2="96" stroke="#FAF8F4" strokeOpacity="0.7" strokeWidth="1.8" />
          {/* Open Casebook & Beacon */}
          <path d="M126 84C140 76 150 78 160 86C170 78 180 76 194 84" stroke="#B08D4C" strokeWidth="2" strokeLinecap="round" />
          <circle cx="160" cy="52" r="14" stroke="#B08D4C" strokeOpacity="0.7" strokeWidth="1.4" />
          <path d="M160 30V22M180 38L186 32M140 38L134 32" stroke="#FAF8F4" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case 'workshops':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-full w-full">
          <rect width="320" height="200" fill="#0B1730" />
          {/* Presentation Board */}
          <rect x="64" y="38" width="192" height="108" rx="5" fill="#10213F" stroke="#B08D4C" strokeWidth="1.5" />
          <line x1="88" y1="64" x2="180" y2="64" stroke="#B08D4C" strokeWidth="2" />
          <line x1="88" y1="84" x2="230" y2="84" stroke="#FAF8F4" strokeOpacity="0.65" strokeWidth="1.4" />
          <line x1="88" y1="100" x2="205" y2="100" stroke="#FAF8F4" strokeOpacity="0.45" strokeWidth="1.4" />
          <line x1="88" y1="116" x2="170" y2="116" stroke="#FAF8F4" strokeOpacity="0.45" strokeWidth="1.4" />
          {/* Stand Legs */}
          <line x1="120" y1="146" x2="105" y2="172" stroke="#FAF8F4" strokeOpacity="0.55" strokeWidth="1.5" />
          <line x1="200" y1="146" x2="215" y2="172" stroke="#FAF8F4" strokeOpacity="0.55" strokeWidth="1.5" />
        </svg>
      );

    case 'compendium':
    default:
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-full w-full">
          <rect width="320" height="200" fill="#0B1730" />
          {/* Stacked Statutory Volumes */}
          <rect x="88" y="128" width="144" height="24" rx="2" fill="#10213F" stroke="#B08D4C" strokeWidth="1.4" />
          <rect x="98" y="98" width="124" height="24" rx="2" fill="#172B52" stroke="#FAF8F4" strokeOpacity="0.55" strokeWidth="1.3" />
          <rect x="108" y="68" width="104" height="24" rx="2" fill="#10213F" stroke="#B08D4C" strokeWidth="1.4" />
          <line x1="122" y1="80" x2="176" y2="80" stroke="#FAF8F4" strokeOpacity="0.7" strokeWidth="1.4" />
          <line x1="114" y1="110" x2="190" y2="110" stroke="#B08D4C" strokeWidth="1.4" />
          <line x1="104" y1="140" x2="204" y2="140" stroke="#FAF8F4" strokeOpacity="0.65" strokeWidth="1.4" />
          <circle cx="160" cy="44" r="9" stroke="#B08D4C" strokeWidth="1.5" />
          <circle cx="160" cy="44" r="3" fill="#FAF8F4" />
        </svg>
      );
  }
};
