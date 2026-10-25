import React from 'react';

export const ReadingBoyIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft aura */}
    <circle cx="80" cy="80" r="72" fill="#ECFDF5" />
    <circle cx="80" cy="80" r="64" fill="#D1FAE5" />
    {/* Gazebo & Carpet */}
    <ellipse cx="80" cy="126" rx="55" ry="14" fill="#10B981" fillOpacity="0.25" />
    <rect x="35" y="118" width="90" height="12" rx="4" fill="#047857" />
    <rect x="42" y="121" width="76" height="6" rx="2" fill="#FCD34D" />
    {/* Rehal (wooden book stand) */}
    <path d="M60 118 L76 96 L84 96 L100 118 Z" fill="#92400E" />
    <path d="M100 118 L84 96 L76 96 L60 118 Z" fill="#78350F" />
    <path d="M54 94 L80 106 L106 94 L100 90 L80 100 L60 90 Z" fill="#B45309" />
    {/* Open Quran */}
    <path d="M50 88 C62 82, 76 86, 80 94 C84 86, 98 82, 110 88 L108 102 C96 96, 84 100, 80 106 C76 100, 64 96, 52 102 Z" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
    <path d="M80 94 L80 106" stroke="#B45309" strokeWidth="2" />
    {/* Gold bookmark ribbon */}
    <path d="M80 96 C82 102, 85 106, 84 112" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    {/* Quran text lines */}
    <line x1="58" y1="92" x2="74" y2="92" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="56" y1="96" x2="74" y2="96" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="86" y1="92" x2="102" y2="92" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="86" y1="96" x2="104" y2="96" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    {/* Child Sitting in Respectful Posture */}
    {/* Body / Koko shirt */}
    <path d="M62 65 C62 55, 98 55, 98 65 L94 88 C88 90, 72 90, 66 88 Z" fill="#3B82F6" />
    <path d="M78 62 L82 62 L80 72 Z" fill="#DBEAFE" />
    {/* Head */}
    <circle cx="80" cy="46" r="14" fill="#FDE68A" />
    {/* Songkok / Peci putih */}
    <path d="M68 40 C68 32, 92 32, 92 40 L93 43 L67 43 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    {/* Eyes closed in khusyuk/peace */}
    <path d="M73 47 C74 49, 76 49, 77 47" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M83 47 C84 49, 86 49, 87 47" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
    {/* Gentle smile */}
    <path d="M78 52 C79 54, 81 54, 82 52" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
    {/* Light sparkles */}
    <circle cx="34" cy="40" r="2" fill="#F59E0B" />
    <circle cx="128" cy="48" r="2.5" fill="#F59E0B" />
    <circle cx="120" cy="74" r="1.5" fill="#10B981" />
  </svg>
);

export const PrayerIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft sky background */}
    <circle cx="80" cy="80" r="72" fill="#EFF6FF" />
    {/* Prayer mat (Sajadah) */}
    <path d="M30 125 L50 85 L110 85 L130 125 Z" fill="#047857" />
    <path d="M38 123 L54 88 L106 88 L122 123 Z" fill="#059669" />
    <path d="M70 88 C70 82, 90 82, 90 88 Z" fill="#FCD34D" />
    <line x1="30" y1="125" x2="130" y2="125" stroke="#FDE68A" strokeWidth="3" strokeDasharray="3 3" />
    {/* Person in Sujud (prostration - symbol of Subhana Rabbiyal A'la) */}
    {/* Feet/legs */}
    <ellipse cx="112" cy="115" rx="12" ry="7" fill="#1E40AF" />
    {/* Torso bowed */}
    <path d="M106 114 C98 94, 76 92, 60 104 L52 114 Z" fill="#3B82F6" />
    {/* Arms outstretched forward */}
    <path d="M62 105 L44 116 L48 119 L66 109 Z" fill="#60A5FA" />
    {/* Hands on mat */}
    <ellipse cx="44" cy="117" rx="5" ry="3" fill="#FDE68A" />
    {/* Head resting on prayer mat */}
    <ellipse cx="50" cy="113" rx="9" ry="8" fill="#FDE68A" />
    {/* White cap / peci */}
    <path d="M50 106 C44 104, 52 98, 57 104 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
    {/* Gentle glowing light above */}
    <circle cx="80" cy="38" r="14" fill="#FEF3C7" />
    <path d="M80 26 L80 22 M80 50 L80 54 M68 38 L64 38 M92 38 L96 38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DhikrIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Warm golden light background */}
    <circle cx="80" cy="80" r="72" fill="#FFFBEB" />
    <circle cx="80" cy="80" r="62" fill="#FEF3C7" />
    {/* Prayer beads (Tasbih) loop */}
    <path d="M80 40 C108 40, 118 70, 110 95 C102 120, 80 126, 80 126 C80 126, 58 120, 50 95 C42 70, 52 40, 80 40 Z" stroke="#D97706" strokeWidth="2.5" strokeDasharray="3 6" fill="none" />
    {/* Main Bead Accent */}
    <circle cx="80" cy="126" r="6" fill="#B45309" />
    <path d="M80 132 L80 144" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="80" cy="144" rx="4" ry="2" fill="#D97706" />
    {/* Heart symbol of remembrance */}
    <path d="M80 72 C80 62, 66 54, 58 64 C50 74, 80 94, 80 94 C80 94, 110 74, 102 64 C94 54, 80 62, 80 72 Z" fill="#10B981" />
    {/* Arabic calligraphy text placeholder for Subhanallah */}
    <text x="80" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">ذِكْر</text>
    {/* Radiating sparkles */}
    <circle cx="45" cy="45" r="2.5" fill="#F59E0B" />
    <circle cx="115" cy="45" r="2.5" fill="#F59E0B" />
    <circle cx="38" cy="80" r="2" fill="#10B981" />
    <circle cx="122" cy="80" r="2" fill="#10B981" />
  </svg>
);

export const AncientScrollsIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Background */}
    <circle cx="80" cy="80" r="72" fill="#FDF4E3" />
    {/* Wooden antique table surface */}
    <rect x="25" y="112" width="110" height="20" rx="4" fill="#78350F" />
    <rect x="28" y="114" width="104" height="4" rx="1" fill="#92400E" />
    {/* Ancient Parchment Scroll 1 */}
    <g transform="rotate(-12 70 85)">
      <rect x="42" y="55" width="56" height="40" rx="3" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
      <path d="M38 52 C38 48, 44 48, 44 52 L44 95 C44 99, 38 99, 38 95 Z" fill="#FCD34D" stroke="#B45309" strokeWidth="1.5" />
      <path d="M96 52 C96 48, 102 48, 102 52 L102 95 C102 99, 96 99, 96 95 Z" fill="#FCD34D" stroke="#B45309" strokeWidth="1.5" />
      <line x1="48" y1="64" x2="90" y2="64" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="72" x2="86" y2="72" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="80" x2="78" y2="80" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    {/* Ancient Bound Book */}
    <g transform="rotate(8 100 85)">
      <rect x="75" y="65" width="52" height="38" rx="4" fill="#9A3412" stroke="#7C2D12" strokeWidth="2" />
      <rect x="79" y="68" width="44" height="32" rx="2" fill="#FEF3C7" />
      <line x1="84" y1="76" x2="116" y2="76" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="84" y1="83" x2="112" y2="83" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="84" y1="90" x2="105" y2="90" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
      {/* Decorative Book Spine */}
      <rect x="73" y="65" width="6" height="38" rx="2" fill="#451A03" />
    </g>
    {/* Golden seal wax */}
    <circle cx="68" cy="98" r="6" fill="#DC2626" />
    <circle cx="68" cy="98" r="4" fill="#B91C1C" />
    {/* Soft light rays */}
    <path d="M40 32 L56 60 M75 22 L78 52 M110 28 L98 56" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.6" />
  </svg>
);

export const QuestBadge: React.FC<{ stage: number; label: string; active?: boolean }> = ({ stage, label, active = true }) => {
  return (
    <div className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all ${active ? 'bg-white shadow-sm border border-emerald-200' : 'bg-slate-50 opacity-60'}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${active ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-300 text-slate-600'}`}>
        Pos {stage}
      </div>
      <span className="text-xs font-semibold text-slate-700 text-center line-clamp-1">{label}</span>
    </div>
  );
};
