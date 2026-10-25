export interface Ayah {
  number: number;
  arabic: string;
  transliteration: string;
  translation: string;
  audioUrl: string;
  tafsirBrief: string;
}

export interface LearningGroup {
  id: number;
  title: string;
  versesRange: string;
  versesNumbers: number[];
  theme: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  story: string;
  easyExplanation: string;
  summary: string;
  dailyApplication: {
    action: string;
    example: string;
    tips: string;
  };
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export type QuestionType = 'multiple_choice' | 'true_false' | 'matching' | 'fill_blank' | 'illustration_match';

export type QuestionCategory = 
  | 'pengenalan_surah'
  | 'pemahaman_makna'
  | 'mencocokkan_ilustrasi'
  | 'penerapan_sehari_hari'
  | 'urutan_dan_fakta';

export interface QuizQuestion {
  id: number;
  category: QuestionCategory;
  categoryLabel: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: number; // index of options
  explanation: string;
  illustrationHint?: string;
}

export interface UserProgress {
  studiedGroups: number[];
  readVerses: number[];
  completedGames: {
    susunAyat: boolean;
    pasangkanGambar: boolean;
    benarSalah: boolean;
    cariPasangan: boolean;
    petualanganBintang: boolean;
  };
  questStage: number; // 1 to 5
  totalStars: number;
  bestQuizScore: number;
  quizzesTaken: number;
  lastActive: string;
  fontSizeArabic: 'normal' | 'large' | 'huge';
  fontSizeText: 'normal' | 'large';
  soundEnabled: boolean;
}
