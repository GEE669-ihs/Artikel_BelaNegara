import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pedoman Redaksi | Sivitas Bela Negara',
  description: 'Pedoman penulisan dan etika redaksi publikasi Sivitas Bela Negara.',
};

export default function PedomanRedaksiPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-6">
        <Link href="/" className="text-xs font-semibold text-emerald-900 hover:underline">
          &larr; Kembali ke Beranda
        </Link>
      </div>

      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Pedoman Redaksi
        </h1>
        <p className="text-xs text-gray-500">Standar Etika dan Penulisan Karya Mahasiswa</p>
      </header>

      <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">1. Prinsip Dasar Orisinalitas</h2>
          <p>
            Setiap naskah yang dimuat wajib mengedepankan orisinalitas gagasan, kejujuran intelektual, serta menjunjung tinggi kode etik akademik dengan menolak keras segala bentuk plagiarisme atau fabrikasi data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">2. Keotentikan Dokumentasi</h2>
          <p>
            Foto dan dokumentasi lapangan yang dipublikasikan merupakan rekaman nyata atas kegiatan yang benar-benar diikuti oleh mahasiswa (seperti Studi Ekskursi ke kawasan industri, kunjungan museum sejarah, dan praktikum pelatihan kepemimpinan outbound).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">3. Netralitas dan Toleransi</h2>
          <p>
            Sivitas Bela Negara berpegang teguh pada konsensus kebangsaan: Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika. Naskah artikel dilarang memuat ujaran kebencian, diskriminasi suku, agama, ras, dan antargolongan (SARA).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">4. Susunan Dewan Redaksi</h2>
          <div className="p-4 bg-gray-50 rounded border border-gray-200 text-xs sm:text-sm space-y-1 text-gray-800">
            <p><strong>Penulis &amp; Editor:</strong> Gian Ridho Firdaus dan Dimas Rahmanda Alfarizi</p>
            <p><strong>Afiliasi:</strong> Program Studi Informatika, Fakultas Ilmu Komputer</p>
            <p><strong>Institusi:</strong> Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur, Surabaya</p>
          </div>
        </section>
      </div>
    </main>
  );
}
