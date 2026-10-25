import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Type, 
  ListOrdered, 
  BookOpen,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SURAH_AYAHS } from '../../data/surahData';
import { sounds } from '../../utils/soundEffects';

interface ReadingViewProps {
  readVerses: number[];
  onToggleReadVerse: (ayahNum: number) => void;
  fontSizeArabic: 'normal' | 'large' | 'huge';
  onChangeFontSize: (size: 'normal' | 'large' | 'huge') => void;
  onAddStar: (count: number) => void;
}

export const ReadingView: React.FC<ReadingViewProps> = ({
  readVerses,
  onToggleReadVerse,
  fontSizeArabic,
  onChangeFontSize,
  onAddStar
}) => {
  const [activeAyahIndex, setActiveAyahIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isContinuousPlay, setIsContinuousPlay] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentAyah = SURAH_AYAHS[activeAyahIndex];

  // Arabic font size classes
  const fontSizes = {
    normal: 'text-2xl sm:text-3xl',
    large: 'text-3xl sm:text-4xl',
    huge: 'text-4xl sm:text-5xl'
  };

  useEffect(() => {
    // Stop audio when changing active verse if manual switch
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setAudioError(null);
    }
  }, [activeAyahIndex]);

  const handlePlayAyah = (index?: number) => {
    sounds.playClick();
    const targetIndex = index !== undefined ? index : activeAyahIndex;
    if (index !== undefined && index !== activeAyahIndex) {
      setActiveAyahIndex(index);
    }

    const targetAyah = SURAH_AYAHS[targetIndex];
    if (!audioRef.current) {
      audioRef.current = new Audio(targetAyah.audioUrl);
    } else {
      audioRef.current.src = targetAyah.audioUrl;
    }

    audioRef.current.onended = () => {
      setIsPlaying(false);
      // Automatically mark as read
      if (!readVerses.includes(targetAyah.number)) {
        onToggleReadVerse(targetAyah.number);
      }

      // If continuous play is enabled, auto advance
      if (isContinuousPlay && targetIndex < SURAH_AYAHS.length - 1) {
        setActiveAyahIndex(targetIndex + 1);
        setTimeout(() => handlePlayAyah(targetIndex + 1), 500);
      }
    };

    audioRef.current.onerror = () => {
      setIsPlaying(false);
      setAudioError("Audio tilawah belum dapat dimuat dari peladen. Kamu dapat membaca mandiri dengan tartil!");
    };

    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        setAudioError(null);
      })
      .catch(() => {
        setIsPlaying(false);
        setAudioError("Izin audio pada peramban diperlukan untuk memutar tilawah.");
      });
  };

  const handlePause = () => {
    sounds.playClick();
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const handleRepeat = () => {
    sounds.playClick();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => setIsPlaying(true));
    } else {
      handlePlayAyah();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (activeAyahIndex < SURAH_AYAHS.length - 1) {
      setActiveAyahIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    sounds.playClick();
    if (activeAyahIndex > 0) {
      setActiveAyahIndex(prev => prev - 1);
    }
  };

  const handleMarkRead = (num: number) => {
    sounds.playClick();
    onToggleReadVerse(num);
    if (!readVerses.includes(num)) {
      sounds.playCorrect();
      onAddStar(1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner and Accessibility Toolbar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Membaca Al-Qur'an dengan Tartil</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Surah Al-A'la (19 Ayat Lengkap)
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Qari: Syaikh Misyari Rasyid Al-Afasy · Mushaf Standar Indonesia
          </p>
        </div>

        {/* Toolbar: Font Size & View Mode */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => {
                sounds.playClick();
                setViewMode('card');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'card' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fokus Per Ayat
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setViewMode('list');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Daftar Semua Ayat
            </button>
          </div>

          {/* Font Resizer */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 rounded-xl text-xs font-medium text-slate-600">
            <Type className="w-3.5 h-3.5 text-slate-500 mr-1" />
            <button
              onClick={() => {
                sounds.playClick();
                onChangeFontSize('normal');
              }}
              className={`px-2 py-0.5 rounded cursor-pointer ${fontSizeArabic === 'normal' ? 'bg-white font-bold text-emerald-700 shadow-xs' : ''}`}
              title="Ukuran Tulisan Standar"
            >
              A
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onChangeFontSize('large');
              }}
              className={`px-2 py-0.5 rounded text-sm cursor-pointer ${fontSizeArabic === 'large' ? 'bg-white font-bold text-emerald-700 shadow-xs' : ''}`}
              title="Ukuran Tulisan Besar"
            >
              A+
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onChangeFontSize('huge');
              }}
              className={`px-2 py-0.5 rounded text-base cursor-pointer ${fontSizeArabic === 'huge' ? 'bg-white font-bold text-emerald-700 shadow-xs' : ''}`}
              title="Ukuran Tulisan Sangat Besar"
            >
              A++
            </button>
          </div>
        </div>
      </div>

      {/* Reading Progress Indicator */}
      <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
            {readVerses.length}
          </div>
          <div>
            <p className="text-xs font-semibold text-emerald-950">Kemajuan Membaca</p>
            <p className="text-xs text-emerald-700">
              {readVerses.length} dari 19 ayat telah ditandai selesai dibaca.
            </p>
          </div>
        </div>

        {/* Quick Verse Quick-Jump Pills */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
          {SURAH_AYAHS.map((ayah, idx) => {
            const isRead = readVerses.includes(ayah.number);
            const isCurrent = activeAyahIndex === idx;
            return (
              <button
                key={ayah.number}
                onClick={() => {
                  sounds.playClick();
                  setActiveAyahIndex(idx);
                }}
                className={`w-7 h-7 shrink-0 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-700 text-white ring-2 ring-emerald-400'
                    : isRead
                    ? 'bg-emerald-200 text-emerald-900'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300'
                }`}
                title={`Lompat ke Ayat ${ayah.number}`}
              >
                {ayah.number}
              </button>
            );
          })}
        </div>
      </div>

      {/* AUDIO ERROR NOTICE IF ANY */}
      {audioError && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
          <VolumeX className="w-5 h-5 text-amber-600 shrink-0" />
          <div className="flex-1">{audioError}</div>
        </div>
      )}

      {/* VIEW MODE 1: FOCUS PER AYAT (CARD) */}
      {viewMode === 'card' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
          {/* Card Top: Verse Indicator & Actions */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                {currentAyah.number}
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Ayat ke-{currentAyah.number} dari 19
                </span>
                <p className="text-xs text-slate-400">Surah Al-A'la (Makkiyah)</p>
              </div>
            </div>

            <button
              onClick={() => handleMarkRead(currentAyah.number)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                readVerses.includes(currentAyah.number)
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${readVerses.includes(currentAyah.number) ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{readVerses.includes(currentAyah.number) ? 'Sudah Dibaca' : 'Tandai Selesai'}</span>
            </button>
          </div>

          {/* ARABIC TEXT AREA (Large, RTL, Clear Harakat) */}
          <div className="py-6 px-4 sm:px-8 bg-amber-50/40 rounded-3xl border border-amber-100 text-right">
            <p className={`font-quran text-slate-900 leading-loose ${fontSizes[fontSizeArabic]} select-all`}>
              {currentAyah.arabic} 
              <span className="inline-flex items-center justify-center w-9 h-9 mr-3 rounded-full border border-amber-300 bg-amber-100/70 text-amber-900 text-sm font-sans font-bold align-middle">
                {currentAyah.number}
              </span>
            </p>
          </div>

          {/* TRANSLITERATION & TRANSLATION */}
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold uppercase text-slate-400 block mb-1">
                Transliterasi Latin
              </span>
              <p className="text-base sm:text-lg text-emerald-900 font-medium italic">
                "{currentAyah.transliteration}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">
                Terjemahan Resmi Kemenag RI
              </span>
              <p className="text-base sm:text-lg text-slate-800 font-medium">
                "{currentAyah.translation}"
              </p>
            </div>

            <div className="text-xs text-slate-500 px-1">
              <span className="font-semibold text-slate-700">Penjelasan Singkat:</span> {currentAyah.tafsirBrief}
            </div>
          </div>

          {/* AUDIO CONTROLS & NAVIGATION BUTTONS */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            {/* Audio Playback Controls */}
            <div className="flex items-center gap-2">
              {isPlaying ? (
                <button
                  onClick={handlePause}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm cursor-pointer active:scale-95 transition-all"
                >
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Jeda Audio</span>
                </button>
              ) : (
                <button
                  onClick={() => handlePlayAyah()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm cursor-pointer active:scale-95 transition-all"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Putar Audio</span>
                </button>
              )}

              <button
                onClick={handleRepeat}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer active:scale-95 transition-all"
                title="Ulangi Bacaan Ayat Ini"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi</span>
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  setIsContinuousPlay(!isContinuousPlay);
                }}
                className={`px-3 py-2.5 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                  isContinuousPlay
                    ? 'bg-teal-100 text-teal-900 border-teal-300'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
                title="Lanjut otomatis ke ayat berikutnya"
              >
                {isContinuousPlay ? '● Lanjut Otomatis Aktif' : '○ Lanjut Otomatis Mati'}
              </button>
            </div>

            {/* Next / Previous Verse Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeAyahIndex === 0}
                className="flex items-center gap-1 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 font-semibold text-xs transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Ayat Sebelumnya</span>
              </button>
              <button
                onClick={handleNext}
                disabled={activeAyahIndex === SURAH_AYAHS.length - 1}
                className="flex items-center gap-1 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-xs transition-all cursor-pointer active:scale-95"
              >
                <span>Ayat Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: LIST OF ALL 19 VERSES */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {SURAH_AYAHS.map((ayah, idx) => {
            const isCurrent = activeAyahIndex === idx;
            const isRead = readVerses.includes(ayah.number);

            return (
              <div
                key={ayah.number}
                className={`p-6 rounded-3xl bg-white border transition-all shadow-xs ${
                  isCurrent ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                      {ayah.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Ayat ke-{ayah.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePlayAyah(idx)}
                      className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
                      <span>Dengar</span>
                    </button>
                    <button
                      onClick={() => handleMarkRead(ayah.number)}
                      className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                        isRead ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isRead ? 'text-emerald-600' : 'text-slate-400'}`} />
                      <span>{isRead ? 'Selesai' : 'Tandai'}</span>
                    </button>
                  </div>
                </div>

                {/* Arabic Text */}
                <div className="text-right py-3 bg-amber-50/30 rounded-2xl px-4 mb-3">
                  <p className={`font-quran text-slate-900 leading-loose ${fontSizes[fontSizeArabic]}`}>
                    {ayah.arabic}
                  </p>
                </div>

                {/* Transliteration and Translation */}
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 italic mb-1">
                  "{ayah.transliteration}"
                </p>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  "{ayah.translation}"
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
