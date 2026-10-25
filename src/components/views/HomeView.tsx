import React from 'react';
import { BookOpen, Compass, Award, PlayCircle, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { UserProgress } from '../../types';
import { sounds } from '../../utils/soundEffects';

interface HomeViewProps {
  progress: UserProgress;
  onNavigate: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ progress, onNavigate }) => {
  const readCount = progress.readVerses.length;
  const groupsCount = progress.studiedGroups.length;
  const gamesDone = Object.values(progress.completedGames).filter(Boolean).length;
  const percentComplete = Math.round(((readCount / 19) * 0.4 + (groupsCount / 5) * 0.3 + (gamesDone / 5) * 0.3) * 100);

  const handleStart = (tab: string) => {
    sounds.playClick();
    onNavigate(tab);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-teal-800 to-emerald-950 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Text Left Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-600/40 border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Media Pembelajaran PAI SD Kelas 3–6</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Petualangan Qur'ani
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-100 max-w-xl">
                Ayo Mengenal Surah Al-A'la! Jelajahi 19 ayat suci dengan membaca, memahami maknanya melalui kisah seru, dan bermain teka-teki berhadiah bintang!
              </p>
            </div>

            {/* Quick Action Navigation Grid */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => handleStart('intro')}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Mulai Belajar</span>
              </button>
              <button
                onClick={() => handleStart('reading')}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-sm transition-all active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <BookOpen className="w-4 h-4 text-emerald-300" />
                <span>Belajar Membaca</span>
              </button>
              <button
                onClick={() => handleStart('story')}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-sm transition-all active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <PlayCircle className="w-4 h-4 text-sky-300" />
                <span>Jelajahi Makna Ayat</span>
              </button>
              <button
                onClick={() => handleStart('games')}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-sm transition-all active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Main & Berlatih</span>
              </button>
              <button
                onClick={() => handleStart('quiz')}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-sm transition-all active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <Award className="w-4 h-4 text-rose-300" />
                <span>Kuis Tantangan</span>
              </button>
            </div>
          </div>

          {/* Image Right Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-emerald-900/60 group">
              <img
                src="/src/assets/images/sampul_petualangan_qurani_1792900749898.jpg"
                alt="Ilustrasi Petualangan Qur'ani belajar Surah Al-A'la di alam asri"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback container if local image fails
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-6', 'text-center');
                    target.parentElement.innerHTML = '<div class="text-white"><div class="text-4xl mb-2">📖</div><p class="font-bold">Petualangan Mengenal Surah Al-A\'la</p></div>';
                  }
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white text-xs">
                <p className="font-semibold text-amber-300">Belajar dengan Ceria & Penuh Hormat</p>
                <p className="text-slate-200">Menghayati keagungan ciptaan Allah Yang Mahatinggi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Progress Overview Dashboard */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Jejak Langkah Petualanganku
            </h2>
            <p className="text-sm text-slate-500">
              Pantau kemajuan membaca, pemahaman kisah, dan lencana bintang yang telah kamu peroleh.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-bold text-sm">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
              <span>{progress.totalStars} Bintang Dikumpulkan</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-slate-600">
            <span>Kelengkapan Pembelajaran Mandiri</span>
            <span className="text-emerald-700 font-bold">{percentComplete}%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-700"
              style={{ width: `${Math.min(100, Math.max(5, percentComplete))}%` }}
            />
          </div>
        </div>

        {/* 4 Cards Progress Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col justify-between">
            <div className="flex items-center justify-between text-emerald-800 mb-2">
              <span className="text-xs font-semibold">Membaca Ayat</span>
              <BookOpen className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-emerald-950 tabular-nums">
              {readCount} <span className="text-xs font-medium text-slate-500">/ 19 ayat</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {readCount === 19 ? 'Tuntas dibaca!' : `${19 - readCount} ayat tersisa`}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 flex flex-col justify-between">
            <div className="flex items-center justify-between text-sky-800 mb-2">
              <span className="text-xs font-semibold">Kisah Makna</span>
              <PlayCircle className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-2xl font-black text-sky-950 tabular-nums">
              {groupsCount} <span className="text-xs font-medium text-slate-500">/ 5 kelompok</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {groupsCount === 5 ? 'Semua kisah selesai!' : 'Jelajahi pesan surah'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-800 mb-2">
              <span className="text-xs font-semibold">Tantangan Game</span>
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl font-black text-amber-950 tabular-nums">
              {gamesDone} <span className="text-xs font-medium text-slate-500">/ 5 game</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {gamesDone === 5 ? 'Juara semua permainan!' : 'Mainkan susun ayat & kuis'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 flex flex-col justify-between">
            <div className="flex items-center justify-between text-rose-800 mb-2">
              <span className="text-xs font-semibold">Skor Kuis Terbaik</span>
              <Award className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-2xl font-black text-rose-950 tabular-nums">
              {progress.bestQuizScore} <span className="text-xs font-medium text-slate-500">/ 100</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {progress.quizzesTaken > 0 ? `${progress.quizzesTaken}x sesi kuis` : 'Belum mencoba kuis'}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Big Learning Modules / Road to Adventure */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Pilihan Petualangan Belajar
            </h2>
            <p className="text-sm text-slate-500">
              Pilih aktivitas yang ingin kamu pelajari hari ini bersama teman atau guru di kelas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => handleStart('intro')}
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                1. Kenali Surah Al-A'la
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pelajari fakta penting: arti nama Yang Mahatinggi, 19 ayat, surah Makkiyah, dan kebiasaan Rasulullah SAW membacanya saat salat Witir dan hari raya.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              Buka Pengenalan →
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => handleStart('reading')}
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                2. Membaca 19 Ayat Al-Qur'an
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dengarkan lantunan merdu Syaikh Misyari Rasyid Al-Afasy, baca teks Arab berharakat jelas, transliterasi Latin, dan terjemahan bahasa Indonesia resmi Kemenag.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              Mulai Membaca →
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => handleStart('story')}
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                3. Kisah Makna & Refleksi Diri
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pahami kandungan surah yang dibagi dalam 5 kisah ramah anak: kebesaran alam semesta, kemudahan wahyu, nasihat berharga, salat & zikir, serta suhuf para nabi.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              Baca Cerita Makna →
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => handleStart('games')}
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                4. Lima Permainan Interaktif
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Asah kecerdasanmu dengan: Susun Ayat Berurutan, Pasangkan Gambar & Makna, Tebak Benar/Salah, Kartu Memori, dan Petualangan Peta Bintang Qur'ani.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              Pilih Permainan →
            </div>
          </div>

          {/* Card 5 */}
          <div
            onClick={() => handleStart('quiz')}
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                5. Kuis Tantangan (Bank 50 Soal)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Uji pemahamanmu dalam kuis 10 soal acak dari bank 50 soal! Dapatkan nilai, ulasan jawaban benar, serta saran bagian mana yang perlu kamu tingkatkan.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              Ikuti Kuis Sekarang →
            </div>
          </div>

          {/* Card 6: Adab Belajar */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">
                Adab Bersama Al-Qur'an
              </h3>
              <ul className="text-xs text-emerald-900/80 space-y-2">
                <li>• Memulai dengan membaca Basmalah dan doa belajar.</li>
                <li>• Duduk dengan sopan dan menjaga wudhu saat memegang mushaf.</li>
                <li>• Membaca ayat perlahan-lahan (tartil) dan memperhatikan harakat.</li>
                <li>• Mengamalkan nasihat kebaikan dalam kehidupan sehari-hari.</li>
              </ul>
            </div>
            <div className="pt-4 text-xs font-semibold text-emerald-700">
              Semoga Menjadi Anak Sholeh & Berprestasi
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
