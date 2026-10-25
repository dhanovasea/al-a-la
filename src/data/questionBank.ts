import { QuizQuestion } from '../types';

export const QUESTION_BANK: QuizQuestion[] = [
  // ==========================================
  // KATEGORI 1: PENGENALAN SURAH (10 Soal)
  // ==========================================
  {
    id: 1,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "multiple_choice",
    question: "Surah Al-A'la merupakan surah ke berapa di dalam susunan mushaf Al-Qur'an?",
    options: ["Surah ke-85", "Surah ke-86", "Surah ke-87", "Surah ke-88"],
    correctAnswer: 2,
    explanation: "Surah Al-A'la menempati urutan ke-87 dalam Al-Qur'an, tepat sebelum Surah Al-Ghasyiyah."
  },
  {
    id: 2,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "multiple_choice",
    question: "Apa arti nama 'Al-A'la' dalam bahasa Indonesia?",
    options: ["Yang Maha Pengampun", "Yang Maha Tinggi", "Yang Maha Mendengar", "Yang Maha Kuasa"],
    correctAnswer: 1,
    explanation: "Nama Al-A'la (الأعلى) berarti Yang Maha Tinggi, merujuk kepada keagungan Allah SWT."
  },
  {
    id: 3,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "multiple_choice",
    question: "Berapakah jumlah keseluruhan ayat dalam Surah Al-A'la?",
    options: ["15 ayat", "17 ayat", "19 ayat", "21 ayat"],
    correctAnswer: 2,
    explanation: "Surah Al-A'la terdiri dari 19 ayat yang lengkap dan tersusun berurutan."
  },
  {
    id: 4,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "multiple_choice",
    question: "Berdasarkan tempat turunnya, Surah Al-A'la tergolong surah apa?",
    options: ["Madaniyah", "Makkiyah", "Yamaniyah", "Syamsiyah"],
    correctAnswer: 1,
    explanation: "Surah Al-A'la diturunkan di kota Makkah sebelum Nabi hijrah, sehingga termasuk surah Makkiyah."
  },
  {
    id: 5,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "multiple_choice",
    question: "Di dalam juz berapa kita dapat menemukan Surah Al-A'la?",
    options: ["Juz 28", "Juz 29", "Juz 30 (Juz 'Amma)", "Juz 1"],
    correctAnswer: 2,
    explanation: "Surah Al-A'la berada di dalam Juz 30 yang sering disebut juga sebagai Juz 'Amma."
  },
  {
    id: 6,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "true_false",
    question: "Benar atau Salah: Kata 'Al-A'la' diambil dari kata terakhir yang ada di ayat pertama surah ini.",
    options: ["Benar", "Salah"],
    correctAnswer: 0,
    explanation: "Benar! Ayat pertama berbunyi 'Sabbiḥisma rabbikal-a'lā', diakhiri kata Al-A'la."
  },
  {
    id: 7,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "true_false",
    question: "Benar atau Salah: Nabi Muhammad SAW sering membaca Surah Al-A'la pada salat Witir dan salat hari raya Idulfitri.",
    options: ["Benar", "Salah"],
    correctAnswer: 0,
    explanation: "Benar! Hadis riwayat Muslim meriwayatkan Nabi SAW menyukai surah ini dan sering membacanya saat salat Witir dan 'Idain."
  },
  {
    id: 8,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "fill_blank",
    question: "Lengkapi kalimat: Surah Al-A'la diawali dengan kalimat perintah untuk [...] nama Tuhan Yang Mahatinggi.",
    options: ["Melupakan", "Menyucikan / Mengagungkan", "Menyembunyikan", "Menulis di batu"],
    correctAnswer: 1,
    explanation: "Kata 'Sabbiḥ' pada ayat pertama bermakna sucikanlah / agungkanlah nama Tuhanmu."
  },
  {
    id: 9,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "multiple_choice",
    question: "Surah Al-A'la diapit di antara dua surah, yaitu setelah Surah Ath-Thariq dan sebelum surah apa?",
    options: ["Surah Al-Fajr", "Surah Al-Ghasyiyah", "Surah Asy-Syams", "Surah Al-Balad"],
    correctAnswer: 1,
    explanation: "Dalam urutan mushaf Al-Qur'an, Surah ke-87 adalah Al-A'la dan Surah ke-88 adalah Al-Ghasyiyah."
  },
  {
    id: 10,
    category: "pengenalan_surah",
    categoryLabel: "Pengenalan Surah",
    type: "multiple_choice",
    question: "Dua nama nabi terdahulu yang secara nyata diabadikan pada ayat terakhir Surah Al-A'la adalah...",
    options: ["Nabi Nuh dan Nabi Hud", "Nabi Ibrahim dan Nabi Musa", "Nabi Isa dan Nabi Yahya", "Nabi Daud dan Nabi Sulaiman"],
    correctAnswer: 1,
    explanation: "Ayat ke-19 menyebutkan 'Ṣuḥufi ibrāhīma wa mūsā' (suhuf-suhuf Ibrahim dan Musa)."
  },

  // ==========================================
  // KATEGORI 2: PEMAHAMAN AYAT DAN MAKNA (10 Soal)
  // ==========================================
  {
    id: 11,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Perhatikan arti ayat: 'Yang menciptakan, lalu menyempurnakan (ciptaan-Nya).' Ini merupakan terjemahan dari ayat ke berapa?",
    options: ["Ayat 1", "Ayat 2", "Ayat 3", "Ayat 4"],
    correctAnswer: 1,
    explanation: "Ayat 2 berbunyi 'Allażī khalaqa fasawwā' (Yang menciptakan lalu menyempurnakan)."
  },
  {
    id: 12,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Apa arti dari lafaz 'Faj'alahuu ghutsaa-an ahwaa' pada ayat ke-5?",
    options: [
      "Lalu menjadikannya bunga yang harum semerbak",
      "Lalu menjadikannya kering kehitam-hitaman",
      "Lalu menyimpannya di dalam gua",
      "Lalu menumbuhkannya menjadi pohon kurma"
    ],
    correctAnswer: 1,
    explanation: "Ghutsaa-an ahwaa artinya rumput kering yang berwarna kehitam-hitaman setelah layu."
  },
  {
    id: 13,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Ayat ke-6 berbunyi 'Sanuqri'uka falaa tansaa'. Janji apa yang terkandung di dalamnya?",
    options: [
      "Janji kemenangan perang",
      "Janji bahwa Nabi akan dibacakan Al-Qur'an dan tidak akan lupa",
      "Janji diberi kekayaan emas",
      "Janji dibangunkan rumah di surga"
    ],
    correctAnswer: 1,
    explanation: "Allah berjanji membacakan Al-Qur'an kepada Nabi SAW sehingga beliau tidak lupa terhadap wahyu tersebut."
  },
  {
    id: 14,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Pada ayat ke-7, Allah menegaskan bahwa Dia mengetahui...",
    options: [
      "Hanya hal yang nampak di depan mata",
      "Hanya masa lalu saja",
      "Yang terang-terangan dan yang tersembunyi",
      "Hanya benda yang ada di bumi"
    ],
    correctAnswer: 2,
    explanation: "Allah Maha Mengetahui yang terang maupun yang tersembunyi di lubuk hati hamba-Nya."
  },
  {
    id: 15,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Siapakah yang akan mengambil pelajaran saat diberikan peringatan menurut ayat ke-10?",
    options: ["Orang yang kaya raya", "Orang yang takut kepada Allah", "Orang yang suka membantah", "Orang yang berbadan kuat"],
    correctAnswer: 1,
    explanation: "Lafaz 'Sayażżakkaru may yakhsyā' artinya orang yang takut (kepada Allah) akan mendapat pelajaran."
  },
  {
    id: 16,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Apakah makna dari 'Qad aflaha man tazakkaa' pada ayat ke-14?",
    options: [
      "Sungguh celaka orang yang malas",
      "Sungguh beruntung orang yang menyucikan diri",
      "Sungguh kaya orang yang berdagang",
      "Sungguh cepat anak yang berlari"
    ],
    correctAnswer: 1,
    explanation: "Ayat 14 menerangkan keberuntungan orang yang menyucikan hatinya dengan iman dan kebajikan."
  },
  {
    id: 17,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Dua amalan penting yang berurutan disebutkan dalam ayat ke-15 adalah...",
    options: [
      "Mengingat nama Tuhan lalu mendirikan salat",
      "Makan bersama lalu tidur",
      "Berlari lalu beristirahat",
      "Membeli baju lalu menyimpannya"
    ],
    correctAnswer: 0,
    explanation: "Ayat 15 berbunyi 'Wa żakarasma rabbihī fa ṣallā' (dan mengingat nama Tuhannya, lalu dia salat)."
  },
  {
    id: 18,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "multiple_choice",
    question: "Pada ayat ke-16 dan 17, Allah membandingkan dunia dan akhirat. Manakah pernyataan yang sesuai?",
    options: [
      "Dunia itu kekal dan akhirat sementara",
      "Dunia dan akhirat sama persis nilainya",
      "Kehidupan akhirat itu lebih baik dan lebih kekal",
      "Manusia sebaiknya melupakan akhirat"
    ],
    correctAnswer: 2,
    explanation: "Ayat 17 menegaskan: 'Wal-ākhiratu khairuw wa abqā' (kehidupan akhirat itu lebih baik dan lebih kekal)."
  },
  {
    id: 19,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "true_false",
    question: "Benar atau Salah: Rumput yang mengering dalam ayat ke-5 merupakan pengingat bahwa keindahan dunia ini bersifat sementara.",
    options: ["Benar", "Salah"],
    correctAnswer: 0,
    explanation: "Benar! Siklus tanaman dari subur hingga kering mengingatkan bahwa segala materi duniawi pasti akan usai."
  },
  {
    id: 20,
    category: "pemahaman_makna",
    categoryLabel: "Pemahaman Ayat & Makna",
    type: "fill_blank",
    question: "Lafaz 'Wallażī qaddara fahadā' pada ayat ke-3 berarti Yang menentukan [...] dan memberi petunjuk.",
    options: ["Kadar / Ukuran", "Warna baju", "Nama jalan", "Nomor rumah"],
    correctAnswer: 0,
    explanation: "Qaddara artinya menentukan kadar, potensi, dan ketentuan rezeki setiap makhluk ciptaan-Nya."
  },

  // ==========================================
  // KATEGORI 3: MENCOCOKKAN PESAN DENGAN ILUSTRASI (10 Soal)
  // ==========================================
  {
    id: 21,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar matahari bersinar di siang hari dan langit berbintang di malam hari paling tepat melambangkan pesan dari ayat mana?",
    options: [
      "Ayat 1-3: Mengenal kebesaran ciptaan dan kesempurnaan takdir Allah",
      "Ayat 12: Memasuki api neraka yang besar",
      "Ayat 18: Suhuf yang terdahulu",
      "Ayat 16: Memilih kehidupan dunia"
    ],
    correctAnswer: 0,
    explanation: "Keteraturan siang, malam, matahari, dan bintang adalah bukti kebesaran Allah Yang Maha Pencipta."
  },
  {
    id: 22,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar rumput segar yang hijau lalu berubah menjadi jerami kuning kecokelatan melambangkan ayat...",
    options: ["Ayat 4 dan 5 (Akhrajal mar'aa - fa ja'alahuu ghutsaa-an ahwaa)", "Ayat 14 (Qad aflaha)", "Ayat 10 (Sayadz-dzakkar)", "Ayat 1 (Sabbiḥisma)"],
    correctAnswer: 0,
    explanation: "Ayat 4 dan 5 menggambarkan tumbuhnya padang rumput hijau yang kemudian menjadi kering kehitam-hitaman."
  },
  {
    id: 23,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar seorang anak yang sedang bersujud di atas sajadah dengan tenang paling cocok mewakili ayat...",
    options: ["Ayat 15 (Wa dzakarasma rabbihii fa shallaa)", "Ayat 5 (Fa ja'alahuu)", "Ayat 11 (Wa yatajannabuhal-asyqaa)", "Ayat 19 (Shuhufi Ibrahim)"],
    correctAnswer: 0,
    explanation: "Ayat 15 memerintahkan untuk mengingat nama Tuhan dan mendirikan salat."
  },
  {
    id: 24,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar lembaran-lembaran kertas kuno (gulungan naskah bertinta) di atas meja kayu melambangkan...",
    options: [
      "Suhuf yang diturunkan kepada Nabi Ibrahim dan Nabi Musa (Ayat 18-19)",
      "Buku catatan hutang di pasar",
      "Peta harta karun dongeng",
      "Koran terbitan pagi hari"
    ],
    correctAnswer: 0,
    explanation: "Lembaran kuno melambangkan suhuf-suhuf mulia yang diterima para nabi terdahulu."
  },
  {
    id: 25,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar dua orang anak di mana satu anak tersenyum mendengarkan nasihat guru dan satu anak cemberut berpaling menggambarkan perbandingan antara...",
    options: [
      "Orang yang takut kepada Allah vs orang yang celaka/menolak nasihat (Ayat 10 dan 11)",
      "Anak yang gemar berenang vs anak yang bersepeda",
      "Petani desa vs nelayan pantai",
      "Orang yang membaca puisi vs orang yang berpidato"
    ],
    correctAnswer: 0,
    explanation: "Perbedaan sikap anak itu mencerminkan orang yang menerima peringatan (yakhsyaa) vs orang yang menjauhinya (al-asyqaa)."
  },
  {
    id: 26,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar anak memegang tasbih dan berbisik 'Subhanallah' paling tepat untuk menerangkan...",
    options: [
      "Menyucikan asma Allah Yang Mahatinggi (Ayat 1) dan berzikir (Ayat 15)",
      "Menghitung tabungan uang jajan",
      "Bermain kelereng dengan teman",
      "Menghitung langkah kaki saat berlari"
    ],
    correctAnswer: 0,
    explanation: "Tasbih digunakan sebagai sarana membantu menghitung zikir dalam memuji dan menyucikan asma Allah."
  },
  {
    id: 27,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar mushaf Al-Qur'an terbuka di atas rehal kayu dengan pencahayaan sejuk melambangkan...",
    options: [
      "Wahyu suci yang diajarkan Allah kepada Nabi agar tidak lupa (Ayat 6)",
      "Album foto keluarga",
      "Buku gambar mewarnai",
      "Buku komik dongeng"
    ],
    correctAnswer: 0,
    explanation: "Mushaf Al-Qur'an mewakili wahyu mulia dari Allah SWT yang senantiasa dijaga keasliannya."
  },
  {
    id: 28,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "true_false",
    question: "Benar atau Salah: Dalam membuat ilustrasi edukasi Islami, kita tidak boleh menggambarkan sosok wajah maupun tubuh para nabi.",
    options: ["Benar", "Salah"],
    correctAnswer: 0,
    explanation: "Benar! Adab dalam Islam melarang penggambaran wujud para nabi; kita gunakan simbol seperti lembaran suhuf atau alam."
  },
  {
    id: 29,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Perbandingan gambar sebuah robot mainan plastik yang retak di sebelah gambar taman surga yang bercahaya abadi menunjukkan pesan...",
    options: [
      "Kesenangan dunia itu sementara, sedangkan akhirat lebih baik dan kekal (Ayat 16-17)",
      "Kita harus membeli mainan yang lebih mahal",
      "Dunia lebih penting daripada surga",
      "Mainan plastik tidak boleh dibersihkan"
    ],
    correctAnswer: 0,
    explanation: "Ilustrasi ini mengingatkan anak bahwa benda duniawi cepat rusak, sedangkan amal saleh untuk akhirat bernilai abadi."
  },
  {
    id: 30,
    category: "mencocokkan_ilustrasi",
    categoryLabel: "Mencocokkan Ilustrasi",
    type: "illustration_match",
    question: "Gambar burung memberi makan anaknya di sarang tinggi dengan naluri kasih sayang adalah cerminan dari lafaz...",
    options: [
      "'Wallażī qaddara fahadā' (Yang menentukan kadar dan memberi petunjuk)",
      "'Fa ja'alahuu ghutsaa-an'",
      "'Bal tu'tsiruunal hayaatad dunyaa'",
      "'Inna haadzaa lafish-shuhufil uulaa'"
    ],
    correctAnswer: 0,
    explanation: "Naluri induk burung merawat anaknya merupakan petunjuk alami (hidayah takwiniyah) yang dianugerahkan Allah."
  },

  // ==========================================
  // KATEGORI 4: PENERAPAN NILAI DALAM KEHIDUPAN (10 Soal)
  // ==========================================
  {
    id: 31,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Saat sedang sujud dalam salat, bacaan zikir apa yang diajarkan dan bersumber dari pesan Surah Al-A'la?",
    options: [
      "Subhana Rabbiyal 'Azhim wa bihamdih",
      "Subhana Rabbiyal A'la wa bihamdih",
      "Rabbighfirli warhamni",
      "Attahiyyatu lillah"
    ],
    correctAnswer: 1,
    explanation: "Rasulullah SAW memerintahkan membaca 'Subhana Rabbiyal A'la' (Maha Suci Tuhanku Yang Maha Tinggi) dalam sujud."
  },
  {
    id: 32,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Ketika melihat pemandangan alam yang sangat indah seperti air terjun atau pelangi, kalimat thoyyibah apa yang sebaiknya kita ucapkan?",
    options: ["Astaghfirullah", "Subhanallah / Masya Allah", "Inna lillahi wa inna ilaihi raji'un", "Laa hawla"],
    correctAnswer: 1,
    explanation: "Mengucap Subhanallah atau Masya Allah adalah bentuk mengagungkan dan menyucikan asma Allah atas keindahan ciptaan-Nya."
  },
  {
    id: 33,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Ibu mengingatkan Danu agar mematikan televisi dan bersiap salat Magrib. Sikap Danu yang mencerminkan ayat ke-10 adalah...",
    options: [
      "Pura-pura tidur di sofa",
      "Segera mematikan televisi, berterima kasih atas nasihat ibu, dan mengambil wudhu",
      "Menangis dan mengunci kamar",
      "Menjawab dengan nada kesal"
    ],
    correctAnswer: 1,
    explanation: "Mendengarkan nasihat dengan santun dan bergegas beribadah mencerminkan anak yang beriman dan bertakwa."
  },
  {
    id: 34,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Bagaimanakah cara seorang siswa 'menyucikan diri' (tazkiyah) di lingkungan sekolah?",
    options: [
      "Menjauhi sifat sombong, jujur saat ujian, dan memaafkan teman",
      "Memamerkan barang mahal kepada teman",
      "Menyimpan dendam saat diejek",
      "Mengambil pensil teman tanpa izin"
    ],
    correctAnswer: 0,
    explanation: "Menyucikan diri mencakup membersihkan hati dari kecurangan, iri hati, dan sifat tercela lainnya."
  },
  {
    id: 35,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Ayat ke-8 berbunyi 'Wa nuyassiruka lil-yusrā' (Kami mudahkan bagimu ke jalan kemudahan). Sikap apa yang harus kita miliki saat belajar?",
    options: [
      "Langsung menyerah jika materi hafalan terasa panjang",
      "Optimis, rajin berdoa, dan tekun berlatih karena yakin Allah akan memberi kemudahan",
      "Tidak perlu belajar karena pasti pintar sendiri",
      "Menyuruh teman mengerjakan tugas kita"
    ],
    correctAnswer: 1,
    explanation: "Kita harus berikhtiar sungguh-sungguh dan berdoa, mempercayai pertolongan dan kemudahan dari Allah."
  },
  {
    id: 36,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Contoh perilaku yang TIDAK mencerminkan ayat ke-16 (larangan terlalu mementingkan dunia hingga lupa akhirat) adalah...",
    options: [
      "Membagi waktu dengan seimbang antara belajar, bermain, dan salat tepat waktu",
      "Bermain game online seharian sampai meninggalkan salat lima waktu",
      "Menolak bersedekah karena takut uang jajannya berkurang",
      "Hanya mau berteman dengan anak yang kaya saja"
    ],
    correctAnswer: 0,
    explanation: "Pilihan A adalah perilaku yang terpuji dan seimbang dalam membagi waktu ibadah dan dunia."
  },
  {
    id: 37,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "true_false",
    question: "Benar atau Salah: Memberikan nasihat kepada teman harus dilakukan dengan tutur kata yang sopan, lembut, dan tidak mempermalukannya di depan umum.",
    options: ["Benar", "Salah"],
    correctAnswer: 0,
    explanation: "Benar! Nasihat yang baik disampaikan dengan kasih sayang dan hikmah agar mudah diterima."
  },
  {
    id: 38,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Apa yang harus kita lakukan terhadap tanaman di sekitar rumah sebagai wujud syukur atas rezeki dari Allah (Ayat 4)?",
    options: [
      "Menginjak-injak rumput hingga rusak",
      "Menyiramnya dengan teratur dan merawatnya dengan baik",
      "Memotong semua dahan sampai gundul",
      "Membuang sampah plastik di atas pot bunga"
    ],
    correctAnswer: 1,
    explanation: "Merawat flora dan lingkungan adalah wujud nyata rasa syukur atas nikmat ciptaan Allah SWT."
  },
  {
    id: 39,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "multiple_choice",
    question: "Sebelum mulai menghafal Surah Al-A'la, doa belajar yang sangat dianjurkan untuk dibaca adalah...",
    options: [
      "Bismillahi tawakkaltu 'alallah",
      "Rabbi zidnī 'ilmā warzuqnī fahmā",
      "Allahumma bāriklanā fīmā razaqtanā",
      "Bismika Allahumma ahyā wa amūt"
    ],
    correctAnswer: 1,
    explanation: "'Rabbi zidnī 'ilmā warzuqnī fahmā' berarti Ya Allah tambahkanlah ilmuku dan karuniakanlah aku pemahaman."
  },
  {
    id: 40,
    category: "penerapan_sehari_hari",
    categoryLabel: "Penerapan Sehari-hari",
    type: "fill_blank",
    question: "Sebagai bukti iman kepada kitab-kitab Allah (Ayat 18-19), sikap kita terhadap mushaf Al-Qur'an adalah menyimpannya di tempat yang [...] dan suci.",
    options: ["Tinggi dan terhormat", "Lantai bawah", "Kotak sampah", "Tempat basah"],
    correctAnswer: 0,
    explanation: "Al-Qur'an dan buku agama harus ditempatkan di tempat yang tinggi, bersih, dan dijaga kehormatannya."
  },

  // ==========================================
  // KATEGORI 5: URUTAN AYAT & FAKTA SURAH (10 Soal)
  // ==========================================
  {
    id: 41,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Ayat yang berbunyi 'Fażakkir in nafa'atiż-żikrā' terletak pada urutan ayat ke berapa?",
    options: ["Ayat 7", "Ayat 8", "Ayat 9", "Ayat 10"],
    correctAnswer: 2,
    explanation: "Ayat 9 berbunyi: 'Fażakkir in nafa'atiż-żikrā' (Oleh sebab itu berikanlah peringatan...)."
  },
  {
    id: 42,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Lafaz setelah ayat pertama 'Sabbiḥisma rabbikal-a'lā' adalah...",
    options: [
      "Wallażī akhrajal-mar'ā",
      "Allażī khalaqa fasawwā",
      "Sanuqri'uka falā tansā",
      "Qad aflaḥa man tazakkā"
    ],
    correctAnswer: 1,
    explanation: "Ayat ke-2 adalah 'Allażī khalaqa fasawwā'."
  },
  {
    id: 43,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Perhatikan urutan: (1) Allażī khalaqa fasawwā, (2) Wallażī qaddara fahadā, (3) Wallażī akhrajal-mar'ā. Apakah urutan ini sudah benar?",
    options: ["Sudah benar (Ayat 2, 3, dan 4)", "Salah, harusnya ayat 4 di awal", "Salah, ayat 3 adalah fa ja'alahu", "Salah semua"],
    correctAnswer: 0,
    explanation: "Urutan tersebut tepat, yakni ayat ke-2, ke-3, dan ke-4 dari Surah Al-A'la."
  },
  {
    id: 44,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Apakah bunyi ayat terakhir (ayat ke-19) dari Surah Al-A'la?",
    options: [
      "Inna hāżā lafiṣ-ṣuḥufil-ūlā",
      "Ṣuḥufi ibrāhīma wa mūsā",
      "Wal-ākhiratu khairuw wa abqā",
      "Ṡumma lā yamūtu fīhā wa lā yaḥyā"
    ],
    correctAnswer: 1,
    explanation: "Ayat 19 adalah penutup surah yang berbunyi 'Ṣuḥufi ibrāhīma wa mūsā'."
  },
  {
    id: 45,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Lafaz yang melengkapi ayat ke-15: 'Wa żakarasma rabbihī fa [...]'",
    options: ["ṣallā", "sawwā", "tazakkā", "abqā"],
    correctAnswer: 0,
    explanation: "Bunyi lengkap ayat ke-15 adalah 'Wa żakarasma rabbihī fa ṣallā'."
  },
  {
    id: 46,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Sebelum ayat ke-17 'Wal-ākhiratu khairuw wa abqā', ayat ke-16 berbunyi...",
    options: [
      "Bal tu'ṡirūnal-ḥayātad-dun-yā",
      "Allażī yaṣlan-nāral-kubrā",
      "Wa yatajannabuhal-asyqā",
      "Sanuqri'uka falā tansā"
    ],
    correctAnswer: 0,
    explanation: "Ayat 16 adalah 'Bal tu'ṡirūnal-ḥayātad-dun-yā' (Tetapi kamu memilih kehidupan duniawi)."
  },
  {
    id: 47,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "true_false",
    question: "Benar atau Salah: Ayat ke-13 menyatakan orang kafir di neraka 'lā yamūtu fīhā wa lā yaḥyā' (tidak mati dan tidak pula hidup tenteram).",
    options: ["Benar", "Salah"],
    correctAnswer: 0,
    explanation: "Benar! Ayat 13 menggambarkan penderitaan yang tiada henti bagi orang yang mendustakan kebenaran."
  },
  {
    id: 48,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Berapakah jumlah huruf 'Al-A'la' dalam tulisan Arab (الأعلى) jika dihitung huruf dasarnya?",
    options: ["3 huruf", "4 huruf", "5 huruf (Alif-Lam-Alif-Ain-Lam-Alif Maqshurah)", "8 huruf"],
    correctAnswer: 2,
    explanation: "Secara penulisan lafaz 'al-a'la' terdiri dari alif lam ta'rif dan akar kata ain-lam-waw/ya (al-'uluw)."
  },
  {
    id: 49,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "multiple_choice",
    question: "Ayat ke-11 'Wa yatajannabuhal-asyqā' berbicara tentang orang yang...",
    options: [
      "Orang yang paling beruntung",
      "Orang yang celaka yang menjauhi peringatan",
      "Orang yang rajin bersedekah",
      "Para malaikat yang taat"
    ],
    correctAnswer: 1,
    explanation: "Al-Asyqaa bermakna orang yang paling celaka karena enggan mendengarkan nasihat kebajikan."
  },
  {
    id: 50,
    category: "urutan_dan_fakta",
    categoryLabel: "Urutan Ayat & Fakta",
    type: "fill_blank",
    question: "Keseluruhan ayat 1 sampai 19 dalam Surah Al-A'la ditutup dengan sajak rima akhir yang indah, mayoritas berakhiran bunyi vokal...",
    options: ["Alif Maqshurah / Bunyi 'A' (seperti a'la, sawwa, fahada, tansaa)", "Huruf Mim mati", "Huruf Qaf", "Huruf Ra'"],
    correctAnswer: 0,
    explanation: "Surah Al-A'la memiliki rima akhir yang serasi dan merdu dengan vokal panjang 'ā' di hampir setiap akhir ayat."
  }
];
