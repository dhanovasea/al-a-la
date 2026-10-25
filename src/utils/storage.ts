import { UserProgress } from '../types';

const STORAGE_KEY = 'petualangan_qurani_progress_v1';

export const DEFAULT_PROGRESS: UserProgress = {
  studiedGroups: [],
  readVerses: [],
  completedGames: {
    susunAyat: false,
    pasangkanGambar: false,
    benarSalah: false,
    cariPasangan: false,
    petualanganBintang: false
  },
  questStage: 1,
  totalStars: 5, // starting welcome stars
  bestQuizScore: 0,
  quizzesTaken: 0,
  lastActive: new Date().toISOString(),
  fontSizeArabic: 'large',
  fontSizeText: 'normal',
  soundEnabled: true
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    progress.lastActive = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore localStorage write error
  }
}

export function resetUserProgress(): UserProgress {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
  return { ...DEFAULT_PROGRESS };
}
