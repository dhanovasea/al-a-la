import React from 'react';
import { BookOpen } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">Petualangan Qur'ani</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Media Pembelajaran Pendidikan Agama Islam (PAI) interaktif tentang Surah Al-A'la untuk siswa sekolah dasar. Menghafal, memahami, dan mengamalkan nilai-nilai Al-Qur'an dengan ceria dan santun.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">
              Materi Pembelajaran
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('intro')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Fakta & Keutamaan Surah Al-A'la
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('reading')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Membaca 19 Ayat & Audio Qari
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('story')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Kisah Makna 5 Kelompok Ayat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('games')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  5 Permainan Edukasi Interaktif
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('quiz')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Kuis Tantangan (Bank 50 Soal)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">
              Prinsip & Pedoman
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Materi disusun berpedoman pada Al-Qur'an dan Terjemah Kementerian Agama Republik Indonesia. Teks Arab ditampilkan dengan harakat lengkap dan menjaga adab penghormatan tanpa penggambaran fisik para nabi dan zat Allah.
            </p>
            <p className="text-xs text-emerald-400/90 font-medium">
              Audio Tilawah: Syaikh Misyari Rasyid Al-Afasy (EveryAyah)
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Petualangan Qur'ani — Media Pembelajaran PAI SD Kelas 3–6</p>
          <p>Belajar Al-Qur'an dengan Senang, Santun, dan Penuh Berkah</p>
        </div>
      </div>
    </footer>
  );
};
