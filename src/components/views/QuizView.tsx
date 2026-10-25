import React, { useState, useEffect } from 'react';
import { 
  Award, 
  RotateCcw, 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  AlertCircle,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUESTION_BANK } from '../../data/questionBank';
import { QuizQuestion } from '../../types';
import { sounds } from '../../utils/soundEffects';

interface QuizViewProps {
  bestScore: number;
  quizzesTaken: number;
  onRecordQuizResult: (score: number) => void;
  onAddStar: (count: number) => void;
  onNavigate: (tab: string) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  bestScore,
  quizzesTaken,
  onRecordQuizResult,
  onAddStar,
  onNavigate
}) => {
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: { chosen: number; correct: boolean } }>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Initialize 10 random questions from the 50-question bank
  const startNewSession = () => {
    sounds.playClick();
    const shuffled = [...QUESTION_BANK].sort(() => Math.random() - 0.5).slice(0, 10);
    setActiveQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setUserAnswers({});
    setIsFinished(false);
  };

  useEffect(() => {
    startNewSession();
  }, []);

  if (activeQuestions.length === 0) {
    return <div className="p-8 text-center text-slate-500">Menyiapkan kuis...</div>;
  }

  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;
    sounds.playClick();
    setSelectedOption(index);
    setHasAnswered(true);

    const isCorrect = index === currentQ.correctAnswer;
    if (isCorrect) {
      sounds.playCorrect();
    } else {
      sounds.playWrong();
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: {
        chosen: index,
        correct: isCorrect
      }
    }));
  };

  const handleNextQuestion = () => {
    sounds.playClick();
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      // Calculate final score
      const correctCount = Object.values(userAnswers).filter(a => a.correct).length;
      const finalScore = correctCount * 10;
      setIsFinished(true);
      onRecordQuizResult(finalScore);

      // Rewarding stars
      if (finalScore >= 80) {
        onAddStar(5);
        sounds.playFanfare();
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      } else if (finalScore >= 50) {
        onAddStar(3);
        sounds.playFanfare();
        confetti({ particleCount: 50, spread: 50 });
      } else {
        onAddStar(1);
      }
    }
  };

  const correctCount = Object.values(userAnswers).filter(a => a.correct).length;
  const finalScore = correctCount * 10;

  return (
    <div className="space-y-8">
      {/* Quiz Top Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 mb-1">
            <Award className="w-4 h-4" />
            <span>Kuis Tantangan Pemahaman Surah Al-A'la</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Uji Pengetahuanmu (10 Soal Acak)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Diambil secara acak dari bank 50 soal pilihan ganda, benar-salah, dan analisis makna.
          </p>
        </div>

        {/* Stats Pill */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Skor Tertinggi</span>
            <span className="text-base font-extrabold text-emerald-700 tabular-nums">{bestScore} / 100</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Sesi Diikuti</span>
            <span className="text-base font-extrabold text-slate-800 tabular-nums">{quizzesTaken}x</span>
          </div>
        </div>
      </div>

      {/* QUIZ ACTIVE VIEW */}
      {!isFinished ? (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-200">
                {currentQ.categoryLabel}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                Soal {currentIndex + 1} dari 10
              </span>
            </div>

            {/* Stepper Dots */}
            <div className="flex items-center gap-1.5">
              {activeQuestions.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-rose-500 ring-2 ring-rose-200 scale-125'
                      : i < currentIndex
                      ? 'bg-emerald-500'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isChosen = selectedOption === optIdx;
              const isCorrectAnswer = optIdx === currentQ.correctAnswer;

              let btnClass = 'bg-white border-slate-200 text-slate-800 hover:border-rose-300 hover:bg-slate-50';

              if (hasAnswered) {
                if (isCorrectAnswer) {
                  btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400';
                } else if (isChosen && !isCorrectAnswer) {
                  btnClass = 'bg-rose-50 border-rose-500 text-rose-950 font-bold ring-1 ring-rose-400';
                } else {
                  btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {hasAnswered && isCorrectAnswer && (
                    <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isChosen && !isCorrectAnswer && (
                    <X className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation Box */}
          {hasAnswered && (
            <div className={`p-4 rounded-2xl text-xs sm:text-sm space-y-1 animate-fadeIn ${
              selectedOption === currentQ.correctAnswer
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-rose-50 text-rose-900 border border-rose-200'
            }`}>
              <p className="font-bold">
                {selectedOption === currentQ.correctAnswer ? 'Jawabanmu Tepat! 🌟' : 'Kurang Tepat'}
              </p>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {hasAnswered && (
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer active:scale-95"
              >
                <span>{currentIndex === activeQuestions.length - 1 ? 'Lihat Hasil Akhir' : 'Soal Selanjutnya'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* QUIZ SUMMARY / RESULT VIEW */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md text-center max-w-xl mx-auto space-y-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900">
              Hasil Kuis Tantangan
            </h2>
            <p className="text-xs text-slate-500">
              Surah Al-A'la: Menghayati Firman Allah Yang Maha Tinggi
            </p>
          </div>

          {/* Score Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 space-y-2">
            <div className="text-5xl font-black text-emerald-950 tabular-nums">
              {finalScore}
            </div>
            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              {correctCount} dari 10 Pertanyaan Benar
            </p>
            <div className="flex justify-center gap-1.5 pt-1">
              {[1, 2, 3].map(s => {
                const earned = finalScore >= s * 30;
                return (
                  <Star
                    key={s}
                    className={`w-6 h-6 ${earned ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Feedback & Recommendation */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-left space-y-2">
            <span className="font-bold text-slate-800 block">Saran Belajar Guru:</span>
            {finalScore >= 80 ? (
              <p className="text-emerald-900 font-medium">
                Masya Allah! Pemahamanmu terhadap Surah Al-A'la sudah sangat matang dan luar biasa. Terus jaga hafalanmu dan amalkan pesannya dalam salat sehari-hari!
              </p>
            ) : finalScore >= 50 ? (
              <p className="text-slate-700">
                Alhamdulillah, hasil yang baik! Kamu sudah memahami garis besar surah. Cobalah mengulang bagian <strong>Membaca 19 Ayat</strong> atau membaca kembali <strong>Kisah Makna</strong> agar nilai kuis berikutnya makin sempurna!
              </p>
            ) : (
              <p className="text-slate-700">
                Tetap semangat! Belajar Al-Qur'an membutuhkan ketekunan. Buka kembali menu <strong>Kenali Surah</strong> dan mainkan permainan susun ayat untuk mengingat urutan ayat dengan mudah.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={startNewSession}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-sm cursor-pointer transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Coba Lagi (10 Soal Acak Baru)</span>
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onNavigate('reading');
              }}
              className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm cursor-pointer transition-all"
            >
              Ulas 19 Ayat Al-Qur'an
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
