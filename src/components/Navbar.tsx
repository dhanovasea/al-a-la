import React from 'react';
import { Star } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  totalStars: number;
  onOpenProgress: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  totalStars,
  onOpenProgress
}) => {
  const handleNavClick = (tab: string) => {
    sounds.playClick();
    onSelectTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single line text element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-lg sm:text-xl font-bold tracking-tight text-emerald-800 hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
        >
          Petualangan Qur'ani
        </button>

        {/* Zone 2: 5 Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-700 cursor-pointer ${
              currentTab === 'home' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-500' : ''
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('intro')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-700 cursor-pointer ${
              currentTab === 'intro' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-500' : ''
            }`}
          >
            Kenali Surah
          </button>
          <button
            onClick={() => handleNavClick('reading')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-700 cursor-pointer ${
              currentTab === 'reading' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-500' : ''
            }`}
          >
            Baca 19 Ayat
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-700 cursor-pointer ${
              currentTab === 'story' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-500' : ''
            }`}
          >
            Kisah & Makna
          </button>
          <button
            onClick={() => handleNavClick('games')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-700 cursor-pointer ${
              currentTab === 'games' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-500' : ''
            }`}
          >
            Permainan
          </button>
          <button
            onClick={() => handleNavClick('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-700 cursor-pointer ${
              currentTab === 'quiz' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-500' : ''
            }`}
          >
            Kuis Tantangan
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (Star Badge & Progress Trigger) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenProgress();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
            title="Lihat Bintang & Progres Belajar"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span className="font-bold tabular-nums">{totalStars}</span>
            <span className="hidden sm:inline text-xs font-medium text-emerald-800">Bintang</span>
          </button>
        </div>
      </div>

      {/* Mobile Horizontal Navigation Bar */}
      <div className="md:hidden flex items-center justify-between overflow-x-auto px-4 py-2 bg-emerald-50/80 border-t border-emerald-100 text-xs font-medium gap-3">
        <button
          onClick={() => handleNavClick('home')}
          className={`px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'home' ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-700'
          }`}
        >
          Beranda
        </button>
        <button
          onClick={() => handleNavClick('intro')}
          className={`px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'intro' ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-700'
          }`}
        >
          Kenali
        </button>
        <button
          onClick={() => handleNavClick('reading')}
          className={`px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'reading' ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-700'
          }`}
        >
          Baca
        </button>
        <button
          onClick={() => handleNavClick('story')}
          className={`px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'story' ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-700'
          }`}
        >
          Kisah
        </button>
        <button
          onClick={() => handleNavClick('games')}
          className={`px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'games' ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-700'
          }`}
        >
          Main
        </button>
        <button
          onClick={() => handleNavClick('quiz')}
          className={`px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'quiz' ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-700'
          }`}
        >
          Kuis
        </button>
      </div>
    </header>
  );
};
