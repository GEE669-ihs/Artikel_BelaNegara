import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Konsep & Nilai Dasar Bela Negara | Sivitas Bela Negara',
  description:
    'Mengenal lima nilai dasar bela negara dan aktualisasinya bagi mahasiswa di era transformasi digital.',
};

export default function TentangBelaNegaraPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-6">
        <Link
          href="/"
          className="text-xs font-semibold text-emerald-900 hover:underline"
        >
          &larr; Kembali ke Daftar Artikel
        </Link>
      </div>

      <header className="mb-10 pb-6 border-b border-gray-200">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 block mb-2">
          Landasan Filosofis &amp; Akademis
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Konsep &amp; Nilai Dasar Bela Negara
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-serif italic">
          Bela negara bukan semata tugas militer atau pertahanan fisik, melainkan hak dan kewajiban konstitusional setiap warga negara Indonesia yang diaktualisasikan melalui karya, profesi, dan pengabdian keilmuan.
        </p>
      </header>

      <div className="space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-gray-900">
            Hakikat Bela Negara bagi Mahasiswa
          </h2>
          <p>
            Berdasarkan Undang-Undang Republik Indonesia Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara, Bela Negara adalah tekad, sikap, dan perilaku serta tindakan warga negara, baik secara perseorangan maupun kolektif dalam menjaga kedaulatan negara, keutuhan wilayah, dan keselamatan bangsa dan negara.
          </p>
          <p>
            Bagi mahasiswa Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur yang mengusung identitas sebagai Kampus Bela Negara, nilai-nilai ini diwujudkan bukan melalui angkat senjata, melainkan melalui keunggulan akademis, integritas moral, penguasaan sains dan teknologi, serta kepedulian sosial di tengah masyarakat.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-gray-100">
          <h2 className="font-serif font-bold text-2xl text-gray-900">
            Lima Nilai Dasar Bela Negara
          </h2>

          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-emerald-800">
              <h3 className="font-serif font-bold text-lg text-gray-900">
                1. Cinta Tanah Air
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Diwujudkan dengan mengenal sejarah bangsa, mencintai dan melestarikan lingkungan hidup (seperti konservasi mangrove pesisir), bangga menggunakan produk dalam negeri, serta menjaga nama baik kehormatan Indonesia di kancah global.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-emerald-800">
              <h3 className="font-serif font-bold text-lg text-gray-900">
                2. Sadar Berbangsa dan Bernegara
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Diwujudkan dengan menjunjung tinggi hukum, merawat toleransi kerukunan antarsuku dan agama, aktif dalam kegiatan kemahasiswaan yang positif, serta mengutamakan kepentingan bersama di atas kepentingan golongan.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-emerald-800">
              <h3 className="font-serif font-bold text-lg text-gray-900">
                3. Setia pada Pancasila sebagai Ideologi Negara
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Menjadikan nilai-nilai Pancasila sebagai kompas moral dalam bersikap, bermusyawarah, dan menolak segala bentuk paham ekstremisme atau radikalisme yang berupaya merongrong persatuan bangsa.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-emerald-800">
              <h3 className="font-serif font-bold text-lg text-gray-900">
                4. Rela Berkorban untuk Bangsa dan Negara
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Kesediaan menyumbangkan waktu, tenaga, keahlian profesi, dan pikiran demi membantu sesama warga, memecahkan persoalan masyarakat, serta siap berkontribusi ketika bangsa menghadapi tantangan atau krisis.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-emerald-800">
              <h3 className="font-serif font-bold text-lg text-gray-900">
                5. Mempunyai Kemampuan Awal Bela Negara
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Secara psikis memiliki kecerdasan emosional, spiritual, dan intelektual yang tangguh. Secara fisik senantiasa menjaga kebugaran tubuh, kedisiplinan, dan ketangkasan melalui kegiatan latihan lapangan maupun pola hidup sehat.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3 pt-4 border-t border-gray-100">
          <h2 className="font-serif font-bold text-2xl text-gray-900">
            Peran Mahasiswa Informatika
          </h2>
          <p>
            Di era digital, kedaulatan informasi dan keamanan siber merupakan palang pintu utama pertahanan negara. Mahasiswa Program Studi Informatika terpanggil untuk membangun benteng pertahanan digital melalui penulisan algoritma yang etis, perlindungan privasi data warga, perlawanan terhadap perang hoaks, serta pengembangan piranti lunak mandiri yang memajukan perekonomian nasional.
          </p>
        </section>
      </div>
    </main>
  );
}
