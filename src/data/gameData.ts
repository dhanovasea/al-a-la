export interface VerseArrangeLevel {
  id: number;
  title: string;
  levelName: string;
  description: string;
  ayahNumbers: number[];
}

export const VERSE_ARRANGE_LEVELS: VerseArrangeLevel[] = [
  {
    id: 1,
    title: "Mengenal Pembuka Surah",
    levelName: "Level 1 (Ayat 1 – 4)",
    description: "Susun 4 ayat pertama Surah Al-A'la dari ayat 1 sampai ayat 4 dalam urutan yang tepat.",
    ayahNumbers: [1, 2, 3, 4]
  },
  {
    id: 2,
    title: "Kunci Keberuntungan & Salat",
    levelName: "Level 2 (Ayat 14 – 17)",
    description: "Susun ayat tentang menyucikan diri, berzikir, mendirikan salat, hingga keutamaan akhirat.",
    ayahNumbers: [14, 15, 16, 17]
  },
  {
    id: 3,
    title: "Wahyu & Bimbingan Allah",
    levelName: "Level 3 (Ayat 6 – 9)",
    description: "Susun ayat tentang janji hafalan wahyu, ilmu Allah, kemudahan, dan perintah memberi peringatan.",
    ayahNumbers: [6, 7, 8, 9]
  },
  {
    id: 4,
    title: "Penutup & Suhuf Para Nabi",
    levelName: "Level 4 (Ayat 15 – 19)",
    description: "Tantangan tingkat lanjut: susun 5 ayat terakhir Surah Al-A'la secara berurutan.",
    ayahNumbers: [15, 16, 17, 18, 19]
  }
];

export interface MatchPairItem {
  id: string;
  imageIcon: string; // identifier or label
  title: string;
  description: string;
  verseRef: string;
  pairKey: string;
}

export const IMAGE_MEANING_PAIRS = [
  {
    id: "p1",
    tag: "Langit & Bintang",
    title: "Matahari & Bintang Bertaburan",
    meaning: "Allah menciptakan alam semesta dan menyempurnakannya",
    verse: "Ayat 2 – 3",
    icon: "Sun"
  },
  {
    id: "p2",
    tag: "Tanaman Hijau & Kering",
    title: "Rumput Hijau Menjadi Jerami Kering",
    meaning: "Siklus tanaman yang subur lalu menjadi kering kehitam-hitaman",
    verse: "Ayat 4 – 5",
    icon: "Leaf"
  },
  {
    id: "p3",
    tag: "Membaca Al-Qur'an",
    title: "Anak Tekun Membaca Mushaf",
    meaning: "Wahyu Al-Qur'an yang dijaga Allah sehingga tidak lupa",
    verse: "Ayat 6",
    icon: "BookOpen"
  },
  {
    id: "p4",
    tag: "Berzikir & Tasbih",
    title: "Mengingat Nama Allah dengan Zikir",
    meaning: "Menyucikan asma Allah yang Maha Tinggi dan mengingat-Nya",
    verse: "Ayat 1 & 15",
    icon: "Heart"
  },
  {
    id: "p5",
    tag: "Mendirikan Salat",
    title: "Anak Bersujud Khusyuk di Sajadah",
    meaning: "Mengingat nama Allah lalu mendirikan salat tepat waktu",
    verse: "Ayat 15",
    icon: "Sparkles"
  },
  {
    id: "p6",
    tag: "Suhuf Bersejarah",
    title: "Gulungan Lembaran Kuno di Meja",
    meaning: "Pesan tauhid dalam suhuf Nabi Ibrahim dan Nabi Musa",
    verse: "Ayat 18 – 19",
    icon: "Scroll"
  }
];

export const TRUE_FALSE_DATA = [
  {
    id: 1,
    statement: "Surah Al-A'la terdiri dari 19 ayat dan termasuk surah Makkiyah.",
    isTrue: true,
    explanation: "Tepat sekali! Surah Al-A'la berjumlah 19 ayat dan diturunkan di kota Makkah."
  },
  {
    id: 2,
    statement: "Nama Al-A'la memiliki arti 'Yang Maha Pengasih'.",
    isTrue: false,
    explanation: "Salah. Nama Al-A'la berarti 'Yang Maha Tinggi'. Maha Pengasih adalah Ar-Rahman."
  },
  {
    id: 3,
    statement: "Setelah padang rumput tumbuh subur, ayat ke-5 menyebutkan ia menjadi kering kehitam-hitaman.",
    isTrue: true,
    explanation: "Tepat! 'Fa ja'alahuu ghutsaa-an ahwaa' berarti lalu menjadikannya kering kehitaman."
  },
  {
    id: 4,
    statement: "Nabi Muhammad SAW khawatir lupa terhadap wahyu, lalu Allah menjamin beliau tidak akan lupa.",
    isTrue: true,
    explanation: "Tepat! Allah menenangkan beliau dengan firman 'Sanuqri'uka falaa tansaa' (ayat 6)."
  },
  {
    id: 5,
    statement: "Kita tidak perlu mendengarkan nasihat baik dari orang tua maupun guru.",
    isTrue: false,
    explanation: "Salah! Nasihat yang baik sangat bermanfaat bagi orang yang bertakwa dan berhati lembut (ayat 9-10)."
  },
  {
    id: 6,
    statement: "Orang yang beruntung menurut ayat ke-14 adalah orang yang menyucikan dirinya dengan iman dan kebaikan.",
    isTrue: true,
    explanation: "Tepat! 'Qad aflaha man tazakkaa' (Sungguh beruntung orang yang menyucikan diri)."
  },
  {
    id: 7,
    statement: "Kehidupan duniawi dikatakan lebih kekal daripada kehidupan akhirat.",
    isTrue: false,
    explanation: "Salah! Ayat 17 menegaskan 'Wal-aakhiratu khairuw wa abqaa' (Akhirat itu lebih baik dan lebih kekal)."
  },
  {
    id: 8,
    statement: "Dua nabi yang suhufnya disebutkan di akhir Surah Al-A'la adalah Nabi Ibrahim dan Nabi Musa.",
    isTrue: true,
    explanation: "Tepat! Ayat 19 menyebutkan 'Shuhufi Ibraahiima wa Muusaa'."
  },
  {
    id: 9,
    statement: "Salat adalah salah satu amalan yang diperintahkan secara nyata dalam Surah Al-A'la.",
    isTrue: true,
    explanation: "Tepat! Ayat 15 berbunyi 'Wa dzakarasma rabbihii fa shallaa' (mengingat nama Tuhannya lalu dia salat)."
  },
  {
    id: 10,
    statement: "Allah hanya mengetahui perbuatan yang dilakukan di tempat terang saja.",
    isTrue: false,
    explanation: "Salah! Allah mengetahui segala sesuatu, baik yang terang maupun yang tersembunyi (ayat 7)."
  }
];

export const MEMORY_CARDS_DATA = [
  { id: 1, pairId: "c1", label: "Al-A'la", detail: "Yang Maha Tinggi", icon: "Shield" },
  { id: 2, pairId: "c1", label: "Arti Al-A'la", detail: "Yang Maha Tinggi", icon: "Shield" },
  { id: 3, pairId: "c2", label: "19 Ayat", detail: "Jumlah Ayat Surah", icon: "Layers" },
  { id: 4, pairId: "c2", label: "Jumlah Ayat", detail: "19 Ayat", icon: "Layers" },
  { id: 5, pairId: "c3", label: "Rumput Hijau", detail: "Tumbuh Padang Gembala", icon: "Leaf" },
  { id: 6, pairId: "c3", label: "Ghutsaa-an Ahwaa", detail: "Kering Kehitaman", icon: "Leaf" },
  { id: 7, pairId: "c4", label: "Fa Shallaa", detail: "Mendirikan Salat", icon: "Sun" },
  { id: 8, pairId: "c4", label: "Salat Lima Waktu", detail: "Mengingat Allah", icon: "Sun" },
  { id: 9, pairId: "c5", label: "Suhuf Ibrahim", detail: "Lembaran Wahyu Kuno", icon: "BookOpen" },
  { id: 10, pairId: "c5", label: "Suhuf Musa", detail: "Pesan Kitab Dahulu", icon: "BookOpen" },
  { id: 11, pairId: "c6", label: "Khairun wa Abqaa", detail: "Akhirat Lebih Baik & Kekal", icon: "Sparkles" },
  { id: 12, pairId: "c6", label: "Pahala Akhirat", detail: "Abadi Selamanya", icon: "Sparkles" }
];

export interface QuestStage {
  id: number;
  name: string;
  location: string;
  versesRange: string;
  missionTitle: string;
  missionDescription: string;
  challengeQuestion: string;
  challengeOptions: string[];
  correctOptionIndex: number;
  rewardStar: number;
  badgeName: string;
}

export const QUEST_STAGES: QuestStage[] = [
  {
    id: 1,
    name: "Pos 1",
    location: "Lembah Ciptaan Nan Asri",
    versesRange: "Ayat 1 – 5",
    missionTitle: "Misi Mengagungkan Nama Allah",
    missionDescription: "Buktikan pemahamanmu tentang penciptaan langit, bumi, dan tanaman hijau.",
    challengeQuestion: "Ketika melihat ciptaan Allah yang sempurna, lafaz zikir apa yang diajarkan pada ayat 1?",
    challengeOptions: ["Astaghfirullah", "Subhana Rabbiyal A'la", "Alhamdulillahilladzi", "Laa hawla"],
    correctOptionIndex: 1,
    rewardStar: 3,
    badgeName: "Penjelajah Alam Qur'ani"
  },
  {
    id: 2,
    name: "Pos 2",
    location: "Bukit Cahaya Wahyu",
    versesRange: "Ayat 6 – 8",
    missionTitle: "Misi Kemudahan Belajar",
    missionDescription: "Allah menjanjikan jalan kemudahan bagi siapa saja yang ingin mempelajari kalam-Nya.",
    challengeQuestion: "Apa jaminan Allah kepada Nabi Muhammad SAW mengenai hafalan wahyu Al-Qur'an?",
    challengeOptions: ["Akan cepat lupa", "Tidak akan lupa kecuali yang Allah kehendaki", "Hanya diingat 3 hari", "Harus ditulis di batu"],
    correctOptionIndex: 1,
    rewardStar: 3,
    badgeName: "Sahabat Kalam Ilahi"
  },
  {
    id: 3,
    name: "Pos 3",
    location: "Taman Nasihat Bijak",
    versesRange: "Ayat 9 – 13",
    missionTitle: "Misi Berlapang Hati Menerima Nasihat",
    missionDescription: "Nasihat yang baik menyegarkan jiwa anak sholeh seperti embun pagi hari.",
    challengeQuestion: "Siapakah yang menyambut baik dan mengambil pelajaran dari nasihat kebajikan?",
    challengeOptions: ["Orang yang takut kepada Allah (bertaqwa)", "Orang yang sombong", "Orang yang suka marah", "Orang yang malas"],
    correctOptionIndex: 0,
    rewardStar: 3,
    badgeName: "Bintang Nasihat Sejati"
  },
  {
    id: 4,
    name: "Pos 4",
    location: "Menara Salat & Zikir",
    versesRange: "Ayat 14 – 17",
    missionTitle: "Misi Keberuntungan Hakiki",
    missionDescription: "Bandingkan kesenangan duniawi yang sementara dengan kebahagiaan akhirat yang abadi.",
    challengeQuestion: "Dua amalan kunci dalam ayat 15 yang mendatangkan keberuntungan adalah...",
    challengeOptions: ["Membeli baju baru dan pamer", "Mengingat nama Tuhan lalu mendirikan salat", "Tidur larut malam", "Bermain gim seharian"],
    correctOptionIndex: 1,
    rewardStar: 3,
    badgeName: "Pendekar Salat Khusyuk"
  },
  {
    id: 5,
    name: "Pos 5",
    location: "Gerbang Suhuf Kuno",
    versesRange: "Ayat 18 – 19",
    missionTitle: "Misi Menelusuri Warisan Para Nabi",
    missionDescription: "Pesan ketauhidan dan kesucian jiwa telah disampaikan melalui suhuf para nabi terdahulu.",
    challengeQuestion: "Dua nabi agung yang suhufnya disebutkan pada penutup Surah Al-A'la adalah...",
    challengeOptions: ["Nabi Ibrahim AS dan Nabi Musa AS", "Nabi Nuh AS dan Nabi Luth AS", "Nabi Isa AS dan Nabi Zakaria AS", "Nabi Yusuf AS dan Nabi Ya'qub AS"],
    correctOptionIndex: 0,
    rewardStar: 5,
    badgeName: "Pemenang Mahkota Al-A'la"
  }
];
