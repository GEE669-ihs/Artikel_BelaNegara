import { Article } from '@/types/article';

const defaultAuthor = {
  name: 'Gian Ridho Firdaus dan Dimas Rahmanda Alfarizi',
  role: 'Tim Redaksi Mahasiswa',
  institution: "Mahasiswa UPN 'Veteran' Jawa Timur, Surabaya",
};

export const articles: Article[] = [
  {
    id: 'studi-ekskursi-petrokimia-gresik',
    slug: 'studi-ekskursi-ke-petrokimia-gresik-dan-indosat-cara-mahasiswa-informatika-membela-negara',
    title: 'Studi Ekskursi ke Petrokimia Gresik dan Indosat: Cara Mahasiswa Informatika Membela Negara',
    category: 'Generasi Muda',
    date: '28 Oktober 2026',
    readTime: '3 menit baca',
    image: '/images/studi-ekskursi.jpg',
    imageCaption: 'Mahasiswa Informatika UPN "Veteran" Jawa Timur berfoto bersama dalam kegiatan Studi Ekskursi ke PT Petrokimia Gresik dan Indosat Ooredoo Hutchison.',
    excerpt: 'Lewat Studi Ekskursi 2026 ke PT Petrokimia Gresik dan Indosat, mahasiswa Informatika UPN "Veteran" Jawa Timur belajar menopang industri nasional.',
    tags: ['Informatika', 'Industri Nasional', 'Bela Negara', 'Studi Ekskursi', 'Kedaulatan Teknologi'],
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Bela negara kerap kali dipersepsikan sebatas latihan baris-berbaris atau kewajiban angkat senjata. Namun bagi mahasiswa Program Studi Informatika UPN "Veteran" Jawa Timur, ruang pengabdian itu terbentang luas di ranah sains, sistem informasi, dan kedaulatan industri modern. Pemahaman inilah yang mengemuka saat rombongan mahasiswa menggelar Studi Ekskursi ke dua objek vital nasional: PT Petrokimia Gresik dan Indosat Ooredoo Hutchison.',
      },
      {
        type: 'heading',
        text: 'Melihat Tulang Punggung Industri Pupuk Nasional',
      },
      {
        type: 'paragraph',
        text: 'Kunjungan pertama membawa mahasiswa menyelami denyut operasional PT Petrokimia Gresik, produsen pupuk terlengkap di Indonesia. Di balik ribuan ton pupuk yang menjamin swasembada pangan jutaan petani Indonesia, terdapat sistem otomasi terintegrasi, pemantauan sensor real-time, serta arsitektur basis data yang bekerja tanpa henti. Mahasiswa menyaksikan secara langsung bagaimana stabilitas pasokan pangan negeri ini bertumpu pada keandalan infrastruktur teknologi dan kontrol industri.',
      },
      {
        type: 'quote',
        text: 'Kedaulatan pangan sebuah negara tidak akan kokoh tanpa kedaulatan teknologi yang menopangnya dari balik layar.',
        author: 'Refleksi Studi Ekskursi Informatika',
      },
      {
        type: 'image',
        src: '/images/studi-ekskursi-indoor.jpg',
        caption: 'Mahasiswa Informatika UPN "Veteran" Jawa Timur saat menyimak pemaparan operasional sistem dan infrastruktur industri di aula PT Petrokimia Gresik.',
      },
      {
        type: 'heading',
        text: 'Konektivitas Digital dan Ketahanan Komunikasi',
      },
      {
        type: 'paragraph',
        text: 'Destinasi berikutnya adalah fasilitas jaringan telekomunikasi Indosat Ooredoo Hutchison. Di sini, mahasiswa diajak memahami bagaimana data mengalir melintasi pulau, mengamankan lalu lintas transaksi perbankan, sistem pemerintahan, hingga komunikasi jutaan warga. Ketahanan jaringan telekomunikasi terbukti bukan sekadar urusan bisnis korporasi, melainkan urat nadi pertahanan dan stabilitas ekonomi nasional yang wajib dijaga dari ancaman siber.',
      },
      {
        type: 'image',
        src: '/images/studi-ekskursi-indosat.jpg',
        caption: 'Kunjungan dan sesi foto bersama mahasiswa Informatika UPN "Veteran" Jawa Timur di fasilitas Indosat Ooredoo Hutchison.',
      },
      {
        type: 'paragraph',
        text: 'Bagi mahasiswa Informatika yang menyandang identitas Kampus Bela Negara, kegiatan ekskursi ini membuka mata bahwa baris kode, arsitektur jaringan yang aman, dan algoritma cerdas yang mereka bangun di laboratorium perkuliahan kelak adalah pilar benteng pertahanan bangsa di era digital.',
      },
      {
        type: 'highlight',
        text: 'Kesimpulan Nyata: Membela negara di masa kini berarti menguasai keahlian profesi setinggi mungkin dan mempersembahkannya demi kemandirian serta kemajuan bangsa.',
      },
    ],
  },
  {
    id: 'kunjungan-museum-sepuluh-nopember',
    slug: 'menyusuri-jejak-sejarah-kunjungan-ke-museum-sepuluh-nopember-sebagai-wujud-bela-negara',
    title: 'Menyusuri Jejak Sejarah: Kunjungan ke Museum Sepuluh Nopember sebagai Wujud Bela Negara',
    category: 'Wawasan Kebangsaan',
    date: '8 November 2026',
    readTime: '3 menit baca',
    image: '/images/museum-sepuluh-nopember.jpg',
    imageCaption: 'Mahasiswa UPN "Veteran" Jawa Timur saat mengunjungi Museum Sepuluh Nopember di kompleks Monumen Tugu Pahlawan Surabaya.',
    excerpt: 'Kunjungan ke Museum Sepuluh Nopember Surabaya bukan sekadar wisata, melainkan ruang refleksi mahasiswa untuk menyerap nilai pengorbanan dan bela negara.',
    tags: ['Wawasan Kebangsaan', 'Sejarah Perjuangan', 'Arek Suroboyo', 'Tugu Pahlawan', 'Nilai Patriotisme'],
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Kota Surabaya tidak pernah kehilangan denyut heroisme. Berdiri megah di bawah bayang-bayang Monumen Tugu Pahlawan, Museum Sepuluh Nopember menjadi saksi bisu peristiwa pertempuran paling sengit dalam mempertahankan kemerdekaan Republik Indonesia. Bagi mahasiswa UPN "Veteran" Jawa Timur, langkah kaki memasuki lorong bawah tanah museum ini bukan sekadar agenda wisata sejarah, melainkan sarana menggali kembali akar identitas kebangsaan.',
      },
      {
        type: 'heading',
        text: 'Menghirup Kembali Semangat Arek-Arek Suroboyo',
      },
      {
        type: 'paragraph',
        text: 'Di dalam museum, rekaman suara pidato Bung Tomo yang menggelegar dan diorama pertempuran rakyat menyambut setiap pengunjung. Senjata-senjata peninggalan perjuangan, foto dokumentasi para syuhada kemerdekaan, hingga peninggalan pribadi para pejuang memperlihatkan betapa mahalnya harga sebuah kedaulatan. Para pejuang masa itu mengorbankan masa muda, kenyamanan, bahkan nyawa demi memastikan generasi penerus dapat hidup di bawah naungan negeri yang merdeka.',
      },
      {
        type: 'image',
        src: '/images/museum-sepuluh-nopember-interior.jpg',
        caption: 'Monumen perjuangan dan diorama heroisme pertempuran rakyat Surabaya di lantai utama Museum Sepuluh Nopember.',
      },
      {
        type: 'quote',
        text: 'Bangsa yang besar adalah bangsa yang tidak pernah melupakan tetesan keringat dan darah para perintis kemerdekaannya.',
        author: 'Catatan Kunjungan Sejarah',
      },
      {
        type: 'heading',
        text: 'Dari Medan Tempur Menuju Meja Perkuliahan',
      },
      {
        type: 'paragraph',
        text: 'Sebagai kampus yang lahir dari rahim para pejuang veteran, nilai-nilai kepahlawanan ini terasa begitu dekat dan personal bagi mahasiswa UPN. Menatap seragam compang-camping dan replika bambu runcing di balik etalase kaca memicu pertanyaan mendasar: jika para pendahulu rela mengorbankan nyawa, apa yang telah kita sumbangkan untuk negeri ini di masa damai?',
      },
      {
        type: 'paragraph',
        text: 'Refleksi inilah yang melahirkan kesadaran baru. Bela negara di era sekarang tidak lagi menuntut kita berhadapan dengan meriam musuh di jalanan Bubutan atau Jembatan Merah. Tantangan mahasiswa kini adalah melawan kemalasan intelektual, keputusasaan, dan sikap apatis terhadap persoalan bangsa.',
      },
      {
        type: 'highlight',
        text: 'Pesan Utama: Mengunjungi museum sejarah menumbuhkan rasa syukur dan tanggung jawab moral. Mahasiswa yang memahami sejarah bangsanya tidak akan mudah goyah oleh pengaruh yang memecah belah persatuan.',
      },
    ],
  },
  {
    id: 'outbound-bela-negara',
    slug: 'outbound-bela-negara-saat-nilai-kebangsaan-diuji-di-luar-kelas',
    title: 'Outbound Bela Negara: Saat Nilai Kebangsaan Diuji di Luar Kelas',
    category: 'Generasi Muda',
    date: '27 Oktober 2026',
    readTime: '3 menit baca',
    image: '/images/outbound-bela-negara.jpg',
    imageCaption: 'Foto bersama seluruh mahasiswa dan instruktur praktikum Outbound Bela Negara UPN "Veteran" Jawa Timur dengan seragam lapangan lengkap.',
    excerpt: 'Di UPN "Veteran" Jawa Timur, praktikum Bela Negara tidak berhenti di kelas. Lewat outbound, nilai yang biasanya dihafal harus benar-benar dipraktikkan.',
    tags: ['Outbound', 'Karakter', 'Disiplin', 'Kerjasama Tim', 'Kampus Bela Negara'],
    popularRank: 1,
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Di dalam ruang kelas ber-AC, konsep bela negara sering kali terdengar seperti teori yang rapi dan mudah dipahami: cinta tanah air, rela berkorban, setia pada Pancasila, dan menjaga persatuan. Namun ketika matahari mulai meninggi dan lumpur mengotori seragam lapangan, teori-teori tersebut diuji langsung dalam bentuk nyata melalui praktikum Outbound Bela Negara UPN "Veteran" Jawa Timur.',
      },
      {
        type: 'heading',
        text: 'Melebur Ego Menjadi Solidaritas',
      },
      {
        type: 'paragraph',
        text: 'Dalam berbagai simulasi permainan rintangan (problem solving game), mahasiswa dipaksa keluar dari zona nyaman. Di lapangan, tidak ada mahasiswa yang bisa menyelesaikan tantangan seorang diri. Ketika satu anggota regu kelelahan atau ragu melompati halang rintang, rekan lainnya wajib mengulurkan tangan. Latihan ini secara langsung melatih empati, kesabaran, serta kepemimpinan lapangan yang adaptif.',
      },
      {
        type: 'quote',
        text: 'Nilai kebangsaan yang sejati tidak diuji lewat kemampuan berdebat, melainkan lewat kesediaan menahan ego demi keselamatan dan keberhasilan tim.',
        author: 'Instruktur Outbound Bela Negara',
      },
      {
        type: 'heading',
        text: 'Membangun Ketahanan Fisik dan Integritas Mental',
      },
      {
        type: 'paragraph',
        text: 'Kebugaran fisik dan ketahanan mental adalah modal dasar seorang pembela negara. Rasa lelah, haus, dan tekanan waktu melatih mahasiswa untuk tidak mudah menyerah di tengah jalan. Disiplin waktu dan kepatuhan pada instruksi regu menjadi cerminan kepatuhan pada hukum dan norma kemasyarakatan dalam kehidupan bernegara.',
      },
      {
        type: 'image',
        src: '/images/outbound-bela-negara-lapangan.jpg',
        caption: 'Simulasi dinamika kelompok dan latihan kekompakan formasi regu di lapangan terbuka.',
      },
      {
        type: 'paragraph',
        text: 'Saat peluit tanda selesainya kegiatan ditiup dan seluruh peserta berkumpul dalam formasi lingkaran, keletihan fisik sirna berganti senyum kebanggaan. Tali persaudaraan yang terbangun di lapangan rumput terbukti jauh lebih rekat dibandingkan interaksi lewat layar ponsel pintar.',
      },
      {
        type: 'highlight',
        text: 'Esensi Kegiatan: Outbound membuktikan bahwa bela negara adalah sikap mental yang hidup. Solidaritas dan daya tahan yang terbentuk di lapangan menjadi bekal kepemimpinan mahasiswa saat kembali ke masyarakat.',
      },
    ],
  },
  {
    id: 'literasi-digital-bela-negara',
    slug: 'cek-dulu-baru-bagikan-literasi-digital-sebagai-bentuk-bela-negara',
    title: 'Cek Dulu, Baru Bagikan: Literasi Digital sebagai Bentuk Bela Negara',
    category: 'Digital',
    date: '1 November 2026',
    readTime: '3 menit baca',
    image: '/images/literasi-digital.jpg',
    imageCaption: 'Ketajaman literasi digital dan verifikasi data menjadi benteng pertahanan intelektual mahasiswa di era luapan informasi.',
    excerpt: 'Menjaga kedaulatan bangsa hari ini tidak lagi sebatas menjaga perbatasan teritorial, melainkan juga menjaga ruang siber dari gempuran hoaks dan polarisasi sosial.',
    tags: ['Literasi Digital', 'Anti Hoaks', 'Keamanan Siber', 'Etika Bermedsos', 'Ruang Digital'],
    popularRank: 2,
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Perang modern abad ke-21 tidak selalu diawali dengan deru mesin pesawat tempur atau ledakan artileri. Pertempuran paling sengit saat ini terjadi di layar kaca berukuran enam inci yang berada di genggaman kita setiap detik. Ruang digital Indonesia kerap disusupi informasi palsu, manipulasi algoritma, serta ujaran kebencian yang dirancang untuk memecah belah kerukunan masyarakat.',
      },
      {
        type: 'heading',
        text: 'Jempol Cerdas Penjaga Persatuan',
      },
      {
        type: 'paragraph',
        text: 'Di tengah derasnya arus pesan di grup WhatsApp dan linimasa media sosial, kemampuan menyaring informasi sebelum menekan tombol bagikan adalah wujud nyata pertahanan diri bangsa. Satu informasi palsu yang dibiarkan menyebar tanpa klarifikasi dapat menyulut kepanikan publik, merusak reputasi individu, bahkan memicu konflik horizontal di tengah warga.',
      },
      {
        type: 'quote',
        text: 'Di era banjir informasi, menahan diri untuk tidak membagikan kabar yang belum terverifikasi adalah bentuk patriotisme intelektual yang paling mulia.',
        author: 'Etika Digital Mahasiswa',
      },
      {
        type: 'heading',
        text: 'Langkah Praktis Verifikasi bagi Mahasiswa',
      },
      {
        type: 'paragraph',
        text: 'Sebagai akademisi, mahasiswa dibekali kemampuan berpikir kritis dan metodologis. Budaya memeriksa sumber rujukan primer, membandingkan minimal tiga media kredibel, dan memanfaatkan platform pemeriksa fakta (seperti TurnBackHoax atau Cek Fakta) harus menjadi kebiasaan sehari-hari sebelum menanggapi isu hangat.',
      },
      {
        type: 'paragraph',
        text: 'Lebih dari itu, mahasiswa rumpun teknologi informasi memiliki tanggung jawab ganda: mengedukasi keluarga dan lingkungan sekitar agar tidak mudah menjadi korban rekayasa sosial (social engineering) maupun penipuan siber. Ruang digital yang sehat dan damai adalah fondasi kedaulatan masa depan Indonesia.',
      },
      {
        type: 'highlight',
        text: 'Ajakan Aksi: Jadikan jempol kita benteng pertahanan informasi. Verifikasi sebelum bereaksi, tabayun sebelum membagikan, dan sebarkan narasi persatuan di jagat maya.',
      },
    ],
  },
  {
    id: 'mangrove-wonorejo-bela-negara',
    slug: 'belajar-dari-mangrove-wonorejo-merawat-lingkungan-juga-bela-negara',
    title: 'Belajar dari Mangrove Wonorejo: Merawat Lingkungan juga Bela Negara',
    category: 'Lingkungan',
    date: '21 November 2026',
    readTime: '3 menit baca',
    image: '/images/mangrove-wonorejo.jpg',
    imageCaption: 'Aksi pelestarian kawasan hutan mangrove di Wonorejo Rungkut Surabaya sebagai ikhtiar menjaga garis pantai dan ekosistem bumi nusantara.',
    excerpt: 'Membela negara berarti menjaga tanah dan air secara harfiah. Aksi konservasi di pesisir timur Surabaya menjadi bukti bahwa kepedulian ekologis adalah bagian tak terpisahkan dari cinta tanah air.',
    tags: ['Lingkungan Hidup', 'Mangrove Wonorejo', 'Konservasi Surabaya', 'Aksi Ekologis', 'Bumi Nusantara'],
    popularRank: 4,
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Istilah "Tanah Air" bukan sekadar kiasan puitis dalam lagu kebangsaan. Tanah adalah tempat kita berpijak dan menanam pengharapan, sementara air adalah sumber kehidupan yang mengalirkan peradaban. Ketika tanah dan air di sekitar kita tercemar, abrasi menggerus garis pantai, dan sampah menumpuk tak terkendali, sesungguhnya kedaulatan dan masa depan bangsa sedang terancam secara nyata.',
      },
      {
        type: 'heading',
        text: 'Benteng Alami di Pantai Timur Surabaya',
      },
      {
        type: 'paragraph',
        text: 'Kawasan Ekowisata Mangrove Wonorejo di Kecamatan Rungkut menjadi salah satu benteng hijau pertahanan Surabaya. Hutan bakau ini menjalankan fungsi vital yang luar biasa: meredam intrusi air laut ke sumur-sumur warga, menahan gelombang pasang, menyerap karbon dalam jumlah masif, serta menyediakan rumah bagi ratusan spesies burung migran dan biota perairan.',
      },
      {
        type: 'quote',
        text: 'Menjaga pohon bakau tetap berakar kokoh di pesisir sama pentingnya dengan menjaga pos perbatasan negara, karena keduanya melindungi tumpah darah Indonesia dari kehancuran.',
        author: 'Refleksi Pegiat Lingkungan Kampus',
      },
      {
        type: 'heading',
        text: 'Aksi Nyata Generasi Muda',
      },
      {
        type: 'paragraph',
        text: 'Keterlibatan mahasiswa dalam kegiatan penanaman bibit bakau, pembersihan sampah plastik di muara sungai, serta riset pemantauan vegetasi berbasis sensor atau drone adalah perwujudan bela negara yang konkret. Kita tidak bisa mengaku mencintai negeri ini jika kita terus membuang sampah sembarangan dan abai terhadap krisis lingkungan.',
      },
      {
        type: 'paragraph',
        text: 'Kesadaran ekologis ini hendaknya dimulai dari kebiasaan harian di dalam kampus: mengurangi penggunaan botol plastik sekali pakai, mematikan pendingin ruangan saat ruang kuliah kosong, dan aktif mengkampanyekan gaya hidup ramah lingkungan.',
      },
      {
        type: 'highlight',
        text: 'Pesan Lingkungan: Membela negara hari ini adalah menjaga agar generasi mendatang tetap mewarisi bumi nusantara yang hijau, asri, dan layak huni.',
      },
    ],
  },
  {
    id: 'kantin-satria-wimaya',
    slug: 'kantin-satria-wimaya-wajah-baru-ruang-interaksi-dan-karakter-mahasiswa-upn-jatim',
    title: 'Kantin Satria Wimaya: Wajah Baru Ruang Interaksi dan Karakter Mahasiswa UPN Jatim',
    category: 'Generasi Muda',
    date: '15 November 2026',
    readTime: '3 menit baca',
    image: '/images/kantin-satria-wimaya.jpg',
    imageCaption: 'Gedung Kantin Satria Wimaya UPN "Veteran" Jawa Timur sebagai ruang interaksi dan pembentukan karakter disiplin mahasiswa.',
    excerpt: 'Kantin Satria Wimaya menjadi ruang temu sivitas akademika UPN Jatim. Di balik kenyamanan fasilitasnya, tersimpan ruang penempaan etika antre, kejujuran, dan kebersihan sebagai wujud dasar bela negara.',
    tags: ['Kantin Satria Wimaya', 'Karakter Mahasiswa', 'Budaya Antre', 'Etika Kampus', 'Integritas'],
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Di lingkungan perguruan tinggi, pembentukan karakter tidak hanya berlangsung di dalam ruang kuliah yang formal. Ruang publik kampus seperti kantin justru menjadi cermin kejujuran, kedisiplinan, dan etika sosial mahasiswa sehari-hari. Hadirnya Kantin Satria Wimaya di kampus UPN "Veteran" Jawa Timur bukan sekadar pembaruan fasilitas kuliner, melainkan laboratorium sosial pembentukan karakter generasi muda.',
      },
      {
        type: 'heading',
        text: 'Budaya Tertib dan Menghargai Hak Sesama',
      },
      {
        type: 'paragraph',
        text: 'Pemandangan antrean rapi di setiap tenant makanan dan kebiasaan membersihkan meja secara mandiri (self-clearing) menjadi bukti bahwa nilai bela negara hidup dalam hal-hal sederhana. Disiplin mengantre mencerminkan penghormatan terhadap hak orang lain, sementara kebiasaan membuang sisa makanan pada tempatnya menunjukkan tanggung jawab moral terhadap fasilitas bersama.',
      },
      {
        type: 'quote',
        text: 'Karakter kebangsaan seseorang tidak diukur dari tingginya gelar akademis, melainkan dari kesediaannya menghargai antrean dan menjaga kebersihan ruang bersama.',
        author: 'Catatan Etika Kampus',
      },
      {
        type: 'paragraph',
        text: 'Ruang interaksi yang bersih, nyaman, dan inklusif di Kantin Satria Wimaya mempertemukan mahasiswa dari berbagai jurusan dan angkatan. Di tempat inilah dialog gagasan, diskusi tugas kelompok, dan persahabatan kebangsaan terjalin secara alami tanpa memandang latar belakang kesukuan maupun kedaerahan.',
      },
      {
        type: 'highlight',
        text: 'Refleksi Harian: Membela negara dimulai dari merawat adab di tempat umum. Tertib, jujur saat bertransaksi, dan menjaga kebersihan adalah cermin sejati mahasiswa berkarakter Bela Negara.',
      },
    ],
  },
  {
    id: 'kedaulatan-pangan-lokal',
    slug: 'kedaulatan-pangan-lokal-eksplorasi-inovasi-pertanian-mahasiswa-untuk-ketahanan-nasional',
    title: 'Kedaulatan Pangan Lokal: Eksplorasi Inovasi Pertanian Mahasiswa untuk Ketahanan Nasional',
    category: 'Lingkungan',
    date: '12 November 2026',
    readTime: '3 menit baca',
    image: '/images/pangan-lokal.jpg',
    imageCaption: 'Pengembangan produk pangan lokal dan pertanian presisi berbasis teknologi sebagai pilar ketahanan pangan Indonesia.',
    excerpt: 'Ketergantungan pangan pada impor adalah ancaman nyata kedaulatan bangsa. Mahasiswa berinovasi mengangkat potensi komoditas pangan lokal sebagai benteng ketahanan nasional.',
    tags: ['Ketahanan Pangan', 'Inovasi Pertanian', 'Pangan Lokal', 'Kemandirian Bangsa'],
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Sebuah bangsa tidak akan pernah merdeka sepenuhnya jika urusan perut dan ketersediaan pangannya masih sangat bergantung pada belas kasihan negara lain. Di tengah ketidakpastian iklim global dan disrupsi rantai pasok dunia, ketahanan pangan telah bergeser menjadi isu strategis pertahanan dan kedaulatan nasional.',
      },
      {
        type: 'heading',
        text: 'Hilirisasi Riset dan Keberpihakan pada Petani',
      },
      {
        type: 'paragraph',
        text: 'Melalui kolaborasi lintas keilmuan antara mahasiswa teknologi informasi, pertanian, dan ekonomi, berbagai inovasi mulai dirintis. Mulai dari sistem monitoring kelembapan tanah berbasis Internet of Things (IoT), platform rantai pasok cerdas yang memotong rantai tengkulak, hingga diversifikasi olahan pangan non-beras berbasis umbi-umbian lokal.',
      },
      {
        type: 'quote',
        text: 'Membeli dan mengonsumsi produk tani lokal bukan sekadar pilihan gaya hidup, melainkan tindakan nyata memperkuat ketahanan ekonomi petani dan kedaulatan bangsa.',
        author: 'Komitmen Ketahanan Pangan',
      },
      {
        type: 'paragraph',
        text: 'Ketika generasi muda bangga mengonsumsi pangan lokal dan terlibat aktif dalam memodernisasi sektor pertanian, fondasi kemandirian bangsa akan berdiri kokoh. Inilah bentuk bela negara yang berdampak langsung pada kesejahteraan rakyat.',
      },
      {
        type: 'highlight',
        text: 'Pilar Ketahanan: Menjaga kedaulatan pangan adalah menjaga eksistensi Republik. Setiap riset dan kepedulian pada petani lokal adalah sumbangsih nyata pembelaan negara.',
      },
    ],
  },
  {
    id: 'menghidupkan-bhinneka-tunggal-ika',
    slug: 'menghidupkan-bhinneka-tunggal-ika-di-kamar-kos-dan-ruang-diskusi-kampus',
    title: 'Menghidupkan Bhinneka Tunggal Ika di Kamar Kos dan Ruang Diskusi Kampus',
    category: 'Wawasan Kebangsaan',
    date: '5 November 2026',
    readTime: '3 menit baca',
    image: '/images/kolaborasi-kebangsaan.jpg',
    imageCaption: 'Kolaborasi dan persaudaraan mahasiswa dari berbagai latar belakang budaya di ruang diskusi perkuliahan.',
    excerpt: 'Surabaya sebagai kota pendidikan menjadi miniatur Indonesia. Di lingkungan indekos dan kerja kelompok kampus, toleransi dan solidaritas antar suku diuji dan dirawat setiap hari.',
    tags: ['Bhinneka Tunggal Ika', 'Toleransi', 'Mahasiswa Rantau', 'Persatuan Nasional'],
    author: defaultAuthor,
    content: [
      {
        type: 'paragraph',
        text: 'Kampus UPN "Veteran" Jawa Timur di Surabaya dihuni oleh ribuan mahasiswa yang datang dari berbagai pelosok tanah air: dari ujung barat Sumatra hingga tanah Papua. Keberagaman ini adalah kekayaan sekaligus ujian kedewasaan dalam berbangsa. Menghidupkan Bhinneka Tunggal Ika tidak cukup lewat hafalan teks undang-undang, melainkan diwujudkan dalam dinamika keseharian.',
      },
      {
        type: 'heading',
        text: 'Belajar Mendengarkan di Tengah Perbedaan',
      },
      {
        type: 'paragraph',
        text: 'Di dalam tugas kelompok perkuliahan dan pergaulan di rumah indekos, mahasiswa belajar beradaptasi dengan beragam dialek, adat istiadat, dan perspektif kultural. Kemampuan untuk menahan diri, menghargai perbedaan keyakinan saat jam ibadah tiba, dan saling membantu ketika ada rekan rantau yang sakit adalah bentuk solidaritas kebangsaan yang paling murni.',
      },
      {
        type: 'quote',
        text: 'Persatuan Indonesia tidak lahir dari keseragaman, melainkan dari keberanian untuk saling merangkul di tengah indahnya perbedaan.',
        author: 'Refleksi Keberagaman Mahasiswa',
      },
      {
        type: 'paragraph',
        text: 'Di tengah maraknya polarisasi sosial dan politik identitas di media sosial, generasi muda kampus harus menjadi teladan perekat persaudaraan. Ruang diskusi kampus harus tetap menjadi tempat yang aman bagi pertukaran gagasan yang sehat tanpa cemooh atau prasangka kesukuan.',
      },
      {
        type: 'highlight',
        text: 'Simpulan Kebangsaan: Merawat persatuan bangsa dimulai dari meja belajar dan lingkaran pertemanan kita. Menghargai kawan adalah bukti cinta tanah air yang tak terbantahkan.',
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}
