import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  CheckCircle, 
  Check, 
  X, 
  Star, 
  Trophy, 
  ArrowRight,
  Layers,
  Heart,
  Sun,
  Leaf,
  BookOpen,
  Scroll,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  VERSE_ARRANGE_LEVELS, 
  IMAGE_MEANING_PAIRS, 
  TRUE_FALSE_DATA, 
  MEMORY_CARDS_DATA, 
  QUEST_STAGES 
} from '../../data/gameData';
import { SURAH_AYAHS } from '../../data/surahData';
import { sounds } from '../../utils/soundEffects';

interface GamesViewProps {
  completedGames: {
    susunAyat: boolean;
    pasangkanGambar: boolean;
    benarSalah: boolean;
    cariPasangan: boolean;
    petualanganBintang: boolean;
  };
  questStage: number;
  onUpdateGameStatus: (gameKey: 'susunAyat' | 'pasangkanGambar' | 'benarSalah' | 'cariPasangan' | 'petualanganBintang', completed: boolean) => void;
  onAdvanceQuestStage: (stage: number) => void;
  onAddStar: (count: number) => void;
}

export const GamesView: React.FC<GamesViewProps> = ({
  completedGames,
  questStage,
  onUpdateGameStatus,
  onAdvanceQuestStage,
  onAddStar
}) => {
  const [activeGame, setActiveGame] = useState<'susun' | 'pasang' | 'bs' | 'memori' | 'petualangan'>('susun');

  // ==========================================
  // GAME 1: SUSUN AYAT STATE
  // ==========================================
  const [currentLevelIdx, setCurrentLevelIdx] = useState<number>(0);
  const currentLevel = VERSE_ARRANGE_LEVELS[currentLevelIdx];
  const [pickedSequence, setPickedSequence] = useState<number[]>([]);
  const [susunStatus, setSusunStatus] = useState<'playing' | 'success' | 'retry'>('playing');

  // Randomize available cards for current level
  const [shuffledCards, setShuffledCards] = useState<number[]>(() => {
    return [...currentLevel.ayahNumbers].sort(() => Math.random() - 0.5);
  });

  const resetSusunLevel = (levelIdx = currentLevelIdx) => {
    setCurrentLevelIdx(levelIdx);
    setPickedSequence([]);
    setSusunStatus('playing');
    setShuffledCards([...VERSE_ARRANGE_LEVELS[levelIdx].ayahNumbers].sort(() => Math.random() - 0.5));
  };

  const handlePickCard = (num: number) => {
    sounds.playClick();
    if (pickedSequence.includes(num)) return;
    const newSeq = [...pickedSequence, num];
    setPickedSequence(newSeq);

    // If all cards picked, check order
    if (newSeq.length === currentLevel.ayahNumbers.length) {
      const isCorrect = newSeq.every((val, idx) => val === currentLevel.ayahNumbers[idx]);
      if (isCorrect) {
        sounds.playFanfare();
        setSusunStatus('success');
        onAddStar(3);
        onUpdateGameStatus('susunAyat', true);
        confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
      } else {
        sounds.playWrong();
        setSusunStatus('retry');
      }
    }
  };

  // ==========================================
  // GAME 2: PASANGKAN GAMBAR & MAKNA STATE
  // ==========================================
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

  const handleSelectLeft = (id: string) => {
    if (matchedPairs.includes(id)) return;
    sounds.playClick();
    setSelectedLeft(id);
    if (selectedRight) {
      checkPair(id, selectedRight);
    }
  };

  const handleSelectRight = (id: string) => {
    if (matchedPairs.includes(id)) return;
    sounds.playClick();
    setSelectedRight(id);
    if (selectedLeft) {
      checkPair(selectedLeft, id);
    }
  };

  const checkPair = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      sounds.playCorrect();
      const newMatches = [...matchedPairs, leftId];
      setMatchedPairs(newMatches);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (newMatches.length === IMAGE_MEANING_PAIRS.length) {
        sounds.playFanfare();
        onAddStar(4);
        onUpdateGameStatus('pasangkanGambar', true);
        confetti({ particleCount: 70, spread: 60 });
      }
    } else {
      sounds.playWrong();
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 500);
    }
  };

  const resetMatchGame = () => {
    sounds.playClick();
    setMatchedPairs([]);
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  // ==========================================
  // GAME 3: BENAR ATAU SALAH STATE
  // ==========================================
  const [tfIndex, setTfIndex] = useState<number>(0);
  const [tfAnswered, setTfAnswered] = useState<{ [qId: number]: boolean }>({});
  const [tfScore, setTfScore] = useState<number>(0);
  const [tfFinished, setTfFinished] = useState<boolean>(false);

  const handleTfAnswer = (userChoice: boolean) => {
    const q = TRUE_FALSE_DATA[tfIndex];
    if (tfAnswered[q.id] !== undefined) return;

    const isCorrect = userChoice === q.isTrue;
    if (isCorrect) {
      sounds.playCorrect();
      setTfScore(prev => prev + 10);
    } else {
      sounds.playWrong();
    }

    setTfAnswered(prev => ({ ...prev, [q.id]: isCorrect }));

    setTimeout(() => {
      if (tfIndex < TRUE_FALSE_DATA.length - 1) {
        setTfIndex(prev => prev + 1);
      } else {
        setTfFinished(true);
        sounds.playFanfare();
        onAddStar(4);
        onUpdateGameStatus('benarSalah', true);
        confetti({ particleCount: 70, spread: 60 });
      }
    }, 1200);
  };

  const resetTfGame = () => {
    sounds.playClick();
    setTfIndex(0);
    setTfAnswered({});
    setTfScore(0);
    setTfFinished(false);
  };

  // ==========================================
  // GAME 4: CARI PASANGAN (MEMORY CARDS)
  // ==========================================
  const [memCards, setMemCards] = useState(() => {
    return [...MEMORY_CARDS_DATA].sort(() => Math.random() - 0.5);
  });
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [solvedPairIds, setSolvedPairIds] = useState<string[]>([]);

  const handleFlipCard = (card: typeof MEMORY_CARDS_DATA[0]) => {
    if (flippedIds.includes(card.id) || solvedPairIds.includes(card.pairId)) return;
    if (flippedIds.length === 2) return;

    sounds.playCardFlip();
    const newFlipped = [...flippedIds, card.id];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      const card1 = memCards.find(c => c.id === newFlipped[0])!;
      const card2 = memCards.find(c => c.id === newFlipped[1])!;

      if (card1.pairId === card2.pairId) {
        sounds.playCorrect();
        const newSolved = [...solvedPairIds, card1.pairId];
        setSolvedPairIds(newSolved);
        setFlippedIds([]);

        if (newSolved.length === MEMORY_CARDS_DATA.length / 2) {
          sounds.playFanfare();
          onAddStar(4);
          onUpdateGameStatus('cariPasangan', true);
          confetti({ particleCount: 70, spread: 60 });
        }
      } else {
        setTimeout(() => {
          setFlippedIds([]);
        }, 900);
      }
    }
  };

  const resetMemoryGame = () => {
    sounds.playClick();
    setMemCards([...MEMORY_CARDS_DATA].sort(() => Math.random() - 0.5));
    setFlippedIds([]);
    setSolvedPairIds([]);
  };

  // ==========================================
  // GAME 5: PETUALANGAN BINTANG QUR'ANI STATE
  // ==========================================
  const [selectedQuestPos, setSelectedQuestPos] = useState<number>(questStage);
  const [questAnswer, setQuestAnswer] = useState<number | null>(null);
  const [questResult, setQuestResult] = useState<boolean | null>(null);

  const activeQuest = QUEST_STAGES.find(q => q.id === selectedQuestPos) || QUEST_STAGES[0];

  const handleSolveQuest = (idx: number) => {
    sounds.playClick();
    setQuestAnswer(idx);
    const isCorrect = idx === activeQuest.correctOptionIndex;
    setQuestResult(isCorrect);

    if (isCorrect) {
      sounds.playCorrect();
      onAddStar(activeQuest.rewardStar);
      if (selectedQuestPos === questStage && questStage < QUEST_STAGES.length) {
        onAdvanceQuestStage(questStage + 1);
      }
      if (selectedQuestPos === 5) {
        onUpdateGameStatus('petualanganBintang', true);
        sounds.playFanfare();
        confetti({ particleCount: 100, spread: 70 });
      }
    } else {
      sounds.playWrong();
    }
  };

  const resetQuestQuestion = () => {
    sounds.playClick();
    setQuestAnswer(null);
    setQuestResult(null);
  };

  return (
    <div className="space-y-8">
      {/* Header Tabs for 5 Games */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Zona Bermain & Mengasah Pemahaman</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            5 Permainan Edukasi Surah Al-A'la
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Setiap permainan dirancang untuk menguatkan hafalan dan ketajaman berpikirmu. Raih bintang kemenangan!
          </p>
        </div>

        {/* Game Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveGame('susun');
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeGame === 'susun'
                ? 'bg-amber-500 text-amber-950 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            1. Susun Ayat {completedGames.susunAyat && '★'}
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveGame('pasang');
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeGame === 'pasang'
                ? 'bg-amber-500 text-amber-950 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            2. Pasang Gambar {completedGames.pasangkanGambar && '★'}
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveGame('bs');
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeGame === 'bs'
                ? 'bg-amber-500 text-amber-950 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            3. Benar / Salah {completedGames.benarSalah && '★'}
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveGame('memori');
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeGame === 'memori'
                ? 'bg-amber-500 text-amber-950 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            4. Kartu Memori {completedGames.cariPasangan && '★'}
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveGame('petualangan');
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeGame === 'petualangan'
                ? 'bg-amber-500 text-amber-950 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            5. Peta Bintang {completedGames.petualanganBintang && '★'}
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* GAME 1: SUSUN AYAT (URUTAN AYAT AL-QUR'AN UTUH)               */}
      {/* ============================================================== */}
      {activeGame === 'susun' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Permainan 1 · {currentLevel.levelName}
              </span>
              <h2 className="text-xl font-bold text-slate-900">{currentLevel.title}</h2>
              <p className="text-xs text-slate-500">{currentLevel.description}</p>
            </div>

            {/* Level Switcher */}
            <div className="flex items-center gap-1">
              {VERSE_ARRANGE_LEVELS.map((lvl, idx) => (
                <button
                  key={lvl.id}
                  onClick={() => resetSusunLevel(idx)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    currentLevelIdx === idx ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Lvl {lvl.id}
                </button>
              ))}
            </div>
          </div>

          {/* Area Kartu yang Sudah Dipilih (Target Susunan) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Susunanmu ({pickedSequence.length} dari {currentLevel.ayahNumbers.length} kartu):
              </span>
              {pickedSequence.length > 0 && (
                <button
                  onClick={() => resetSusunLevel()}
                  className="text-xs text-amber-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Ulangi Susunan</span>
                </button>
              )}
            </div>

            <div className="min-h-24 p-4 rounded-2xl bg-amber-50/40 border-2 border-dashed border-amber-200 flex flex-col gap-2.5">
              {pickedSequence.length === 0 ? (
                <p className="text-xs text-amber-800/60 text-center my-auto">
                  Klik kartu ayat di bawah sesuai urutan dari yang paling awal!
                </p>
              ) : (
                pickedSequence.map((ayahNum, idx) => {
                  const ayah = SURAH_AYAHS.find(a => a.number === ayahNum)!;
                  return (
                    <div
                      key={ayahNum}
                      className="p-3 rounded-xl bg-white border border-amber-200 shadow-2xs flex items-center justify-between gap-3 animate-fadeIn"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-600">Ayat {ayah.number}</span>
                      </div>
                      <div className="text-right font-quran text-lg text-slate-800">
                        {ayah.arabic}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Pilihan Kartu yang Tersedia untuk Diklik */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Pilih Kartu Ayat Berikutnya:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {shuffledCards.map(ayahNum => {
                const ayah = SURAH_AYAHS.find(a => a.number === ayahNum)!;
                const isPicked = pickedSequence.includes(ayahNum);

                return (
                  <button
                    key={ayahNum}
                    onClick={() => handlePickCard(ayahNum)}
                    disabled={isPicked || susunStatus === 'success'}
                    className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                      isPicked
                        ? 'bg-slate-100 border-slate-200 opacity-40 cursor-not-allowed'
                        : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xs active:scale-98'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-[11px] font-bold text-slate-400">Ayat {ayah.number}</span>
                      <span className="text-xs text-slate-400 font-sans italic">"{ayah.transliteration.substring(0, 24)}..."</span>
                    </div>
                    <p className="font-quran text-xl text-slate-900 leading-relaxed">
                      {ayah.arabic}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Banner */}
          {susunStatus === 'success' && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-2 animate-fadeIn">
              <Trophy className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="text-base font-bold text-emerald-950">
                Masya Allah, Hebat! Susunan ayatmu tepat sekali! (+3 Bintang)
              </p>
              <div className="flex justify-center gap-3 pt-2">
                {currentLevelIdx < VERSE_ARRANGE_LEVELS.length - 1 ? (
                  <button
                    onClick={() => resetSusunLevel(currentLevelIdx + 1)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                  >
                    Lanjut ke Level {currentLevelIdx + 2} →
                  </button>
                ) : (
                  <p className="text-xs font-semibold text-emerald-800">
                    Kamu telah menamatkan semua tingkat susun ayat!
                  </p>
                )}
              </div>
            </div>
          )}

          {susunStatus === 'retry' && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center space-y-2 animate-fadeIn">
              <p className="text-xs font-bold text-rose-900">
                Urutan ayat belum tepat. Jangan bersedih, yuk coba susun kembali!
              </p>
              <button
                onClick={() => resetSusunLevel()}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer"
              >
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* GAME 2: PASANGKAN GAMBAR & MAKNA                                */}
      {/* ============================================================== */}
      {activeGame === 'pasang' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Permainan 2 · Pasangkan Gambar & Makna
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Hubungkan Konsep dengan Makna Ayat
              </h2>
              <p className="text-xs text-slate-500">
                Pilih satu kartu di sebelah kiri, lalu pilih pasangan maknanya di sebelah kanan.
              </p>
            </div>
            <button
              onClick={resetMatchGame}
              className="text-xs text-amber-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Acak Ulang</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Visual Concepts */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Daftar Simbol / Ilustrasi:
              </h3>
              {IMAGE_MEANING_PAIRS.map(item => {
                const isMatched = matchedPairs.includes(item.id);
                const isSelected = selectedLeft === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectLeft(item.id)}
                    disabled={isMatched}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-300 opacity-60 cursor-default'
                        : isSelected
                        ? 'bg-amber-100 border-amber-400 ring-2 ring-amber-300'
                        : 'bg-white border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                        {item.id === 'p1' && <Sun className="w-5 h-5 text-amber-500" />}
                        {item.id === 'p2' && <Leaf className="w-5 h-5 text-emerald-500" />}
                        {item.id === 'p3' && <BookOpen className="w-5 h-5 text-sky-500" />}
                        {item.id === 'p4' && <Heart className="w-5 h-5 text-rose-500" />}
                        {item.id === 'p5' && <Sparkles className="w-5 h-5 text-teal-500" />}
                        {item.id === 'p6' && <Scroll className="w-5 h-5 text-orange-500" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.verse}</p>
                      </div>
                    </div>
                    {isMatched && <Check className="w-5 h-5 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Meanings */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pilihan Makna Ayat yang Tepat:
              </h3>
              {[...IMAGE_MEANING_PAIRS].sort((a, b) => b.id.localeCompare(a.id)).map(item => {
                const isMatched = matchedPairs.includes(item.id);
                const isSelected = selectedRight === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectRight(item.id)}
                    disabled={isMatched}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-300 opacity-60 cursor-default'
                        : isSelected
                        ? 'bg-amber-100 border-amber-400 ring-2 ring-amber-300'
                        : 'bg-white border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item.meaning}
                      </p>
                      <span className="text-[11px] font-bold text-emerald-700">Rujukan {item.verse}</span>
                    </div>
                    {isMatched && <Check className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {matchedPairs.length === IMAGE_MEANING_PAIRS.length && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-1 animate-fadeIn">
              <p className="text-base font-bold text-emerald-950">
                Alhamdulillah! Semua 6 pasangan berhasil kamu cocokkan! (+4 Bintang)
              </p>
              <p className="text-xs text-emerald-800">
                Kamu sangat teliti memahami hubungan antara simbol dan makna ayat.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* GAME 3: BENAR ATAU SALAH (TRUE / FALSE)                         */}
      {/* ============================================================== */}
      {activeGame === 'bs' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Permainan 3 · Tantangan Benar atau Salah
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Tentukan Kebenaran Pernyataan
              </h2>
            </div>
            <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
              Skor: {tfScore} Poin
            </div>
          </div>

          {!tfFinished ? (
            <div className="max-w-xl mx-auto space-y-6 py-4">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
                <span>Pernyataan {tfIndex + 1} dari {TRUE_FALSE_DATA.length}</span>
                <span>Poin Tiap Jawaban Benar: +10</span>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-amber-50/40 border border-slate-200 text-center space-y-4 shadow-2xs">
                <p className="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed">
                  "{TRUE_FALSE_DATA[tfIndex].statement}"
                </p>
              </div>

              {/* Action Buttons: Benar vs Salah */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleTfAnswer(true)}
                  disabled={tfAnswered[TRUE_FALSE_DATA[tfIndex].id] !== undefined}
                  className="py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold text-base shadow-sm transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>BENAR</span>
                </button>
                <button
                  onClick={() => handleTfAnswer(false)}
                  disabled={tfAnswered[TRUE_FALSE_DATA[tfIndex].id] !== undefined}
                  className="py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-extrabold text-base shadow-sm transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  <span>SALAH</span>
                </button>
              </div>

              {/* Explanation Reveal */}
              {tfAnswered[TRUE_FALSE_DATA[tfIndex].id] !== undefined && (
                <div className={`p-4 rounded-2xl text-xs sm:text-sm animate-fadeIn ${
                  tfAnswered[TRUE_FALSE_DATA[tfIndex].id]
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : 'bg-rose-50 text-rose-900 border border-rose-200'
                }`}>
                  <p className="font-bold mb-1">
                    {tfAnswered[TRUE_FALSE_DATA[tfIndex].id] ? 'Tepat sekali!' : 'Kurang tepat!'}
                  </p>
                  <p>{TRUE_FALSE_DATA[tfIndex].explanation}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200 text-center space-y-4 max-w-md mx-auto">
              <Trophy className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">
                Sesi Benar atau Salah Selesai!
              </h3>
              <p className="text-2xl font-black text-amber-950 tabular-nums">
                Skor Akhir: {tfScore} / 100
              </p>
              <p className="text-xs text-slate-600">
                Kamu telah menyelesaikan 10 pernyataan Surah Al-A'la (+4 Bintang).
              </p>
              <button
                onClick={resetTfGame}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-xs cursor-pointer shadow-xs"
              >
                Mainkan Lagi
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* GAME 4: CARI PASANGAN (MEMORY MATCH CARDS)                     */}
      {/* ============================================================== */}
      {activeGame === 'memori' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Permainan 4 · Cari Pasangan (Kartu Memori)
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Buka & Temukan Pasangan Kartu yang Cocok
              </h2>
            </div>
            <button
              onClick={resetMemoryGame}
              className="text-xs text-amber-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Kocok Kartu</span>
            </button>
          </div>

          {/* 12 Memory Cards Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {memCards.map(card => {
              const isFlipped = flippedIds.includes(card.id);
              const isSolved = solvedPairIds.includes(card.pairId);
              const showFront = isFlipped || isSolved;

              return (
                <button
                  key={card.id}
                  onClick={() => handleFlipCard(card)}
                  disabled={showFront}
                  className={`aspect-3/4 rounded-2xl border p-3 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
                    showFront
                      ? 'bg-amber-50 border-amber-300 shadow-xs'
                      : 'bg-emerald-700 border-emerald-800 hover:bg-emerald-600 shadow-md text-white'
                  }`}
                >
                  {showFront ? (
                    <div className="space-y-1.5 animate-fadeIn">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto text-xs font-bold">
                        ★
                      </div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">{card.label}</p>
                      <p className="text-[10px] text-emerald-700 leading-tight">{card.detail}</p>
                    </div>
                  ) : (
                    <div className="text-emerald-200 text-center space-y-1">
                      <div className="text-xl">🕌</div>
                      <span className="text-[10px] font-bold tracking-wider uppercase block">Al-A'la</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {solvedPairIds.length === MEMORY_CARDS_DATA.length / 2 && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-1 animate-fadeIn">
              <p className="text-base font-bold text-emerald-950">
                Luar Biasa! Daya ingatmu sangat tajam! (+4 Bintang)
              </p>
              <p className="text-xs text-emerald-800">
                Semua 6 pasangan kartu berhasil kamu temukan.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* GAME 5: PETUALANGAN BINTANG QUR'ANI (QUEST MAP)                */}
      {/* ============================================================== */}
      {activeGame === 'petualangan' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              Permainan 5 · Peta Petualangan Bintang
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Jelajahi 5 Pos Petualangan Qur'ani
            </h2>
            <p className="text-xs text-slate-500">
              Selesaikan tantangan di setiap pos untuk membuka pos berikutnya dan raih Mahkota Al-A'la!
            </p>
          </div>

          {/* Interactive Quest Map Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {QUEST_STAGES.map(stage => {
              const isUnlocked = stage.id <= questStage;
              const isSelected = selectedQuestPos === stage.id;
              const isFinished = stage.id < questStage || (stage.id === 5 && completedGames.petualanganBintang);

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    if (isUnlocked) {
                      sounds.playClick();
                      setSelectedQuestPos(stage.id);
                      resetQuestQuestion();
                    }
                  }}
                  disabled={!isUnlocked}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-100 border-amber-400 ring-2 ring-amber-300'
                      : isFinished
                      ? 'bg-emerald-50 border-emerald-300'
                      : isUnlocked
                      ? 'bg-white border-slate-200 hover:border-amber-300'
                      : 'bg-slate-50 border-slate-200 opacity-40 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold">{stage.name}</span>
                    {isFinished ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : isUnlocked ? (
                      <Star className="w-4 h-4 text-amber-500" />
                    ) : (
                      <span className="text-slate-400">🔒</span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-900 line-clamp-1">{stage.location}</p>
                  <span className="text-[10px] text-slate-500 mt-1">{stage.versesRange}</span>
                </button>
              );
            })}
          </div>

          {/* Active Quest Challenge Details */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase">
                  Misi {activeQuest.name}: {activeQuest.location}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{activeQuest.missionTitle}</h3>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1.5 rounded-xl self-start">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Hadiah: +{activeQuest.rewardStar} Bintang</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeQuest.missionDescription}
            </p>

            {/* Quest Question */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-800">
                Tantangan Pos: "{activeQuest.challengeQuestion}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeQuest.challengeOptions.map((opt, optIdx) => {
                  const isChosen = questAnswer === optIdx;
                  let style = 'bg-white border-slate-200 text-slate-800 hover:border-amber-300';

                  if (questResult !== null) {
                    if (optIdx === activeQuest.correctOptionIndex) {
                      style = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                    } else if (isChosen) {
                      style = 'bg-rose-100 border-rose-300 text-rose-950';
                    }
                  } else if (isChosen) {
                    style = 'bg-amber-100 border-amber-400 text-amber-950 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSolveQuest(optIdx)}
                      disabled={questResult !== null}
                      className={`p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quest Result Feedback */}
            {questResult === true && (
              <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-bold flex items-center justify-between">
                <span>Hebat! Jawabanmu tepat. Pos ini berhasil diselesaikan!</span>
                {selectedQuestPos < 5 && (
                  <button
                    onClick={() => {
                      setSelectedQuestPos(selectedQuestPos + 1);
                      resetQuestQuestion();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    Lanjut Pos {selectedQuestPos + 1} →
                  </button>
                )}
              </div>
            )}

            {questResult === false && (
              <div className="p-4 rounded-2xl bg-rose-100 border border-rose-300 text-rose-950 text-xs font-semibold flex items-center justify-between">
                <span>Belum tepat. Yuk telaah kembali dan coba lagi!</span>
                <button
                  onClick={resetQuestQuestion}
                  className="px-3 py-1.5 rounded-lg bg-rose-700 text-white text-xs font-bold cursor-pointer"
                >
                  Coba Lagi
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
