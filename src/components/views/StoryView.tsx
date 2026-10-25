import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Lightbulb, 
  Heart, 
  Check, 
  X,
  Volume2
} from 'lucide-react';
import { LEARNING_GROUPS } from '../../data/learningGroups';
import { sounds } from '../../utils/soundEffects';

interface StoryViewProps {
  studiedGroups: number[];
  onCompleteGroup: (groupId: number) => void;
  onAddStar: (count: number) => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  studiedGroups,
  onCompleteGroup,
  onAddStar
}) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);
  const [showEasyLang, setShowEasyLang] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qIndex: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const currentGroup = LEARNING_GROUPS[activeGroupIndex];
  const isCompleted = studiedGroups.includes(currentGroup.id);

  const handleSelectGroup = (idx: number) => {
    sounds.playClick();
    setActiveGroupIndex(idx);
    setShowEasyLang(false);
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleAnswerSelect = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    sounds.playClick();
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleCheckAnswers = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    currentGroup.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    if (correctCount >= 2) {
      sounds.playCorrect();
      if (!isCompleted) {
        onCompleteGroup(currentGroup.id);
        onAddStar(3); // reward 3 stars!
      }
    } else {
      sounds.playWrong();
    }
  };

  const handleResetQuiz = () => {
    sounds.playClick();
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Tadabur Makna Surah Al-A'la</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Memahami Makna Ayat Melalui Cerita
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Belajar firman Allah terasa lebih asyik melalui 5 kelompok kisah, pengamatan alam ciptaan-Nya, dan teladan sehari-hari.
          </p>
        </div>

        {/* Group Selector Nav Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {LEARNING_GROUPS.map((grp, idx) => {
            const isDone = studiedGroups.includes(grp.id);
            const isCurrent = activeGroupIndex === idx;
            return (
              <button
                key={grp.id}
                onClick={() => handleSelectGroup(idx)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isCurrent
                    ? 'bg-sky-600 text-white shadow-xs'
                    : isDone
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Kisah {grp.id} {isDone && '✓'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Story Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Story & Easy Explanation */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Section Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Kelompok {currentGroup.id} · {currentGroup.versesRange}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentGroup.title}
              </h2>
            </div>

            {/* Easy Language Toggle */}
            <button
              onClick={() => {
                sounds.playClick();
                setShowEasyLang(!showEasyLang);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                showEasyLang
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>{showEasyLang ? 'Tampilkan Cerita Lengkap' : 'Jelaskan dengan Bahasa Lebih Mudah'}</span>
            </button>
          </div>

          {/* Story Narrative Box */}
          <div className="space-y-4">
            {showEasyLang ? (
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Penjelasan Sederhana untuk Sahabat Cilik:</span>
                </div>
                <p className="text-base text-slate-800 leading-relaxed font-medium">
                  {currentGroup.easyExplanation}
                </p>
              </div>
            ) : (
              <div className="prose text-slate-700 text-base leading-relaxed space-y-3">
                <p className="font-normal">{currentGroup.story}</p>
              </div>
            )}
          </div>

          {/* Core Summary (1-2 sentences) */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                Intisari Pesan Ayat
              </span>
              <p className="text-sm font-semibold text-slate-800">
                "{currentGroup.summary}"
              </p>
            </div>
          </div>

          {/* Daily Application (Contoh Perilaku Sehari-hari) */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <Heart className="w-4 h-4 text-emerald-600 fill-emerald-500" />
              <span>Penerapan Nyata: {currentGroup.dailyApplication.action}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {currentGroup.dailyApplication.example}
            </p>
            <div className="text-xs text-emerald-800/90 font-medium pt-1">
              💡 <strong>Tips Santun:</strong> {currentGroup.dailyApplication.tips}
            </div>
          </div>

          {/* 3 Interactive Comprehension Questions */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                <span>Uji Pemahaman Cerita (3 Pertanyaan)</span>
              </h3>
              {quizSubmitted && (
                <button
                  onClick={handleResetQuiz}
                  className="text-xs text-sky-700 font-bold hover:underline cursor-pointer"
                >
                  Coba Jawab Ulang
                </button>
              )}
            </div>

            <div className="space-y-4">
              {currentGroup.questions.map((q, qIdx) => {
                const userAns = selectedAnswers[qIdx];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div key={qIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <p className="text-sm font-bold text-slate-800">
                      {qIdx + 1}. {q.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = userAns === optIdx;
                        let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-sky-300';

                        if (quizSubmitted) {
                          if (optIdx === q.correctAnswer) {
                            btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                          } else if (isChosen && !isCorrect) {
                            btnStyle = 'bg-rose-100 border-rose-300 text-rose-900';
                          } else {
                            btnStyle = 'bg-white/60 border-slate-200 text-slate-400 opacity-60';
                          }
                        } else if (isChosen) {
                          btnStyle = 'bg-sky-100 border-sky-400 text-sky-900 font-bold shadow-xs';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerSelect(qIdx, optIdx)}
                            disabled={quizSubmitted}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctAnswer && (
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
                            )}
                            {quizSubmitted && isChosen && !isCorrect && (
                              <X className="w-4 h-4 text-rose-600 shrink-0 ml-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <p className={`text-xs p-2.5 rounded-lg ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                        {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Check Answers Button */}
            {!quizSubmitted ? (
              <button
                onClick={handleCheckAnswers}
                disabled={Object.keys(selectedAnswers).length < 3}
                className="w-full py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm shadow-sm transition-all cursor-pointer active:scale-95"
              >
                Periksa Jawabanku (+3 Bintang)
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                <p className="text-sm font-bold text-emerald-950">
                  {isCompleted ? 'Alhamdulillah! Kisah ini telah tuntas dipelajari.' : 'Bagus sekali! Tetap semangat mengulang.'}
                </p>
                <p className="text-xs text-emerald-800">
                  Kamu dapat melanjutkan ke kisah berikutnya di bawah ini.
                </p>
              </div>
            )}
          </div>

          {/* Group Pagination Controls */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => handleSelectGroup(activeGroupIndex - 1)}
              disabled={activeGroupIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kisah Sebelumnya</span>
            </button>

            <span className="text-xs font-bold text-slate-400">
              Kisah {activeGroupIndex + 1} dari {LEARNING_GROUPS.length}
            </span>

            <button
              onClick={() => handleSelectGroup(activeGroupIndex + 1)}
              disabled={activeGroupIndex === LEARNING_GROUPS.length - 1}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <span>Kisah Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Illustration & Visual Anchor */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={currentGroup.image}
                alt={currentGroup.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-4', 'text-center');
                    target.parentElement.innerHTML = `<div class="text-xs text-slate-600 font-medium">${currentGroup.imageCaption}</div>`;
                  }
                }}
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug">
                {currentGroup.imageCaption}
              </p>
              <p className="text-[11px] text-slate-400">
                Ilustrasi edukatif ramah anak sesuai kaidah Islami
              </p>
            </div>
          </div>

          {/* Quick List of Verses in this group */}
          <div className="bg-emerald-50/60 rounded-3xl p-5 border border-emerald-100 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              Cakupan Ayat ({currentGroup.versesRange}):
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {currentGroup.versesNumbers.map(num => (
                <span
                  key={num}
                  className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-xs font-bold text-emerald-800 shadow-2xs"
                >
                  Ayat {num}
                </span>
              ))}
            </div>
            <p className="text-xs text-emerald-950/80 leading-relaxed">
              Fokus pembelajaran: {currentGroup.theme}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
