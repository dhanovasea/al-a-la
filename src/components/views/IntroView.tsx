import React from 'react';
import { Compass, BookOpen, Layers, MapPin, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';
import { SURAH_INFO } from '../../data/surahData';
import { ReadingBoyIllustration } from '../illustrations/EducationalIllustrations';
import { sounds } from '../../utils/soundEffects';

interface IntroViewProps {
  onNavigate: (tab: string) => void;
  onAddStar: (count: number) => void;
}

export const IntroView: React.FC<IntroViewProps> = ({ onNavigate, onAddStar }) => {
  const [learnedIntro, setLearnedIntro] = React.useState(false);

  const handleCompleteIntro = () => {
    if (!learnedIntro) {
      setLearnedIntro(true);
      sounds.playCorrect();
      onAddStar(2);
    }
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/40 border border-emerald-300/30 text-emerald-100 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Mengenal Surah Ke-87</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kenali Surah Al-A'la
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Mari mengenal identitas, keutamaan, dan tema agung yang terkandung di dalam Surah Al-A'la sebelum kita membaca seluruh ayatnya secara berurutan.
          </p>
        </div>

        {/* Decorative background Arabic calligraphy */}
        <div className="absolute right-4 -bottom-6 text-emerald-500/20 text-8xl sm:text-9xl font-quran select-none pointer-events-none">
          الأعلى
        </div>
      </div>

      {/* Grid 4 Key Facts */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-700 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Nama Surah</span>
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 font-quran text-right mb-1">الأعلى</div>
            <div className="text-lg font-bold text-emerald-900">Al-A'la</div>
            <p className="text-xs text-slate-500 mt-0.5">Artinya: "Yang Maha Tinggi"</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-700 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Jumlah Ayat</span>
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-950 tabular-nums">19</div>
            <div className="text-sm font-semibold text-slate-700">Ayat Lengkap</div>
            <p className="text-xs text-slate-500 mt-0.5">Surah ke-87 dalam Al-Qur'an</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-700 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Golongan Surah</span>
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-950">Makkiyah</div>
            <div className="text-sm font-semibold text-slate-700">Kota Makkah</div>
            <p className="text-xs text-slate-500 mt-0.5">Diturunkan sebelum Nabi hijrah</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-700 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Letak Juz</span>
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-950 tabular-nums">30</div>
            <div className="text-sm font-semibold text-slate-700">Juz 'Amma</div>
            <p className="text-xs text-slate-500 mt-0.5">Sering dibaca saat salat Witir & 'Id</p>
          </div>
        </div>
      </div>

      {/* Main Info Narrative & Illustration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Explanation Column */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Kisah & Asal Usul Nama Surah
          </h2>

          <div className="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Surah Al-A'la dinamakan dari ayat pertamanya: <strong>سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى</strong> yang artinya <em>"Sucikanlah nama Tuhanmu Yang Mahatinggi."</em>
            </p>
            <p>
              Ketika ayat ini turun kepada Rasulullah SAW, beliau sangat gembira dan bersabda kepada para sahabat: <em>"Jadikanlah bacaan ini dalam sujudmu!"</em> Karena itu, setiap kali kita bersujud dalam salat, kita membaca <strong>"Subhana Rabbiyal A'la wa bihamdih"</strong> (Maha Suci Tuhanku Yang Maha Tinggi dan dengan memuji-Nya).
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900">
              Tema-Tema Utama Surah Al-A'la:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {SURAH_INFO.keyThemes.map((theme, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={handleCompleteIntro}
              disabled={learnedIntro}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                learnedIntro
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm active:scale-95'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{learnedIntro ? 'Hebat! Kamu Paham Pengenalan (+2 Bintang)' : 'Tandai Selesai Dipahami (+2 Bintang)'}</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onNavigate('reading');
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-sm transition-all active:scale-95 cursor-pointer ml-auto"
            >
              <span>Lanjut: Belajar Membaca 19 Ayat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Keutamaan & Educational Illustration */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/60 rounded-3xl p-6 border border-emerald-200 text-center space-y-4">
            <div className="flex justify-center">
              <ReadingBoyIllustration className="w-32 h-32" />
            </div>
            <h3 className="font-bold text-emerald-950 text-base">
              Keutamaan Membaca Al-A'la
            </h3>
            <p className="text-xs text-emerald-900/80 leading-relaxed text-left">
              Imam Ahmad dan An-Nasa'i meriwayatkan bahwa Rasulullah SAW sering membaca Surah Al-A'la dalam salat Witir karena pesannya yang sangat mendalam mengingatkan manusia akan kebesaran Allah dan kemuliaan kehidupan akhirat.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              <span>Pesan Moral untuk Siswa</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Belajar Surah Al-A'la mengajak kita menjadi anak yang selalu memuji Allah, rajin mendirikan salat lima waktu, gemar berzikir, dan senang menerima nasihat dari orang tua serta guru.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
