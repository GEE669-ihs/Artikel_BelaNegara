import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Sivitas Bela Negara',
  description: 'Kebijakan privasi portal publikasi artikel Sivitas Bela Negara.',
};

export default function KebijakanPrivasiPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-6">
        <Link href="/" className="text-xs font-semibold text-emerald-900 hover:underline">
          &larr; Kembali ke Beranda
        </Link>
      </div>

      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Kebijakan Privasi
        </h1>
        <p className="text-xs text-gray-500">Terakhir diperbarui: 22 November 2026</p>
      </header>

      <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">1. Pengantar</h2>
          <p>
            Sivitas Bela Negara berkomitmen penuh untuk menghormati dan melindungi privasi setiap pengunjung situs. Halaman ini menjelaskan bagaimana informasi diproses saat Anda mengakses artikel dan dokumentasi pada portal ini.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">2. Pengumpulan Informasi</h2>
          <p>
            Situs ini dikembangkan sebagai portal publikasi edukatif non-komersial untuk keperluan akademis. Kami tidak mengumpulkan, menjual, atau memperdagangkan data pribadi pengunjung kepada pihak ketiga mana pun.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">3. Penggunaan Cookie &amp; Penyimpanan Lokal</h2>
          <p>
            Situs ini hanya menggunakan penyimpanan lokal peramban (local storage) seperlunya untuk menyimpan preferensi kenyamanan membaca (seperti ukuran teks naskah artikel).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">4. Tautan ke Situs Eksternal</h2>
          <p>
            Artikel pada situs ini dapat memuat tautan menuju platform resmi pihak ketiga (seperti tautan berbagi WhatsApp, X, atau Facebook). Kami menyarankan pengunjung untuk meninjau kebijakan privasi masing-masing platform tersebut secara mandiri.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">5. Kontak Redaksi</h2>
          <p>
            Pertanyaan mengenai kebijakan ini dapat disampaikan kepada Tim Redaksi Mahasiswa Informatika UPN &quot;Veteran&quot; Jawa Timur, Surabaya.
          </p>
        </section>
      </div>
    </main>
  );
}
