import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Trophy, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { UserProgress } from '../../types';
import { sounds } from '../../utils/soundEffects';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onToggleSound: () => void;
  onResetProgress: () => void;
  onChangeArabicSize: (size: 'normal' | 'large' | 'huge') => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  onToggleSound,
  onResetProgress,
  onChangeArabicSize
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleClose = () => {
    sounds.playClick();
    setShowConfirmReset(false);
    onClose();
  };

  const handleConfirmReset = () => {
    sounds.playClick();
    onResetProgress();
    setShowConfirmReset(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Pencapaian & Pengaturan
              </h2>
              <p className="text-xs text-slate-400">
                Data tersimpan aman di perangkat belajarmu
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Total Stars Highlight */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs uppercase font-bold text-amber-100 block">
              Koleksi Bintang Prestasi
            </span>
            <div className="text-3xl sm:text-4xl font-black tabular-nums">
              {progress.totalStars} <span className="text-base font-normal text-amber-100">Bintang</span>
            </div>
          </div>
          <Trophy className="w-12 h-12 text-amber-200/80" />
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-slate-400 font-semibold block">Ayat Selesai Dibaca</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {progress.readVerses.length} / 19 Ayat
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-slate-400 font-semibold block">Kisah Makna Dipelajari</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {progress.studiedGroups.length} / 5 Kisah
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-slate-400 font-semibold block">Skor Kuis Terbaik</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {progress.bestQuizScore} / 100
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-slate-400 font-semibold block">Pos Peta Terbuka</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              Pos {progress.questStage} / 5
            </span>
          </div>
        </div>

        {/* Preferences / Accessibility */}
        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Aksesibilitas & Kenyamanan
          </h3>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2.5">
              {progress.soundEnabled ? (
                <Volume2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-400" />
              )}
              <div>
                <p className="text-xs font-bold text-slate-800">Efek Suara Edukasi</p>
                <p className="text-[11px] text-slate-500">Nada gembira saat menjawab benar dan selesai level</p>
              </div>
            </div>
            <button
              onClick={onToggleSound}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                progress.soundEnabled ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {progress.soundEnabled ? 'Aktif' : 'Mati'}
            </button>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold text-slate-800 block">Ukuran Teks Arab Al-Qur'an</span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {(['normal', 'large', 'huge'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => onChangeArabicSize(size)}
                  className={`py-2 rounded-xl font-bold cursor-pointer transition-colors ${
                    progress.fontSizeArabic === size
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {size === 'normal' ? 'Sedang' : size === 'large' ? 'Besar' : 'Sangat Besar'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reset Progress Section with Confirmation */}
        <div className="pt-2 border-t border-slate-100">
          {!showConfirmReset ? (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="w-full py-2.5 rounded-xl text-xs text-rose-600 hover:text-rose-700 font-semibold hover:bg-rose-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Seluruh Progres Belajar</span>
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-rose-900 text-xs font-bold">
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Yakin ingin mereset progres belajar?</span>
              </div>
              <p className="text-[11px] text-rose-800 leading-relaxed">
                Semua bintang, capaian ayat yang dibaca, dan nilai kuis akan diatur ulang dari awal.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleConfirmReset}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
                >
                  Ya, Reset Progres
                </button>
                <button
                  onClick={() => setShowConfirmReset(false)}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Batal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
