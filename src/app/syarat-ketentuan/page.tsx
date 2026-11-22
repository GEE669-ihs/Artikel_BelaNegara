import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan | Sivitas Bela Negara',
  description: 'Syarat dan ketentuan penggunaan situs portal Sivitas Bela Negara.',
};

export default function SyaratKetentuanPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-6">
        <Link href="/" className="text-xs font-semibold text-emerald-900 hover:underline">
          &larr; Kembali ke Beranda
        </Link>
      </div>

      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Syarat &amp; Ketentuan
        </h1>
        <p className="text-xs text-gray-500">Terakhir diperbarui: 22 November 2026</p>
      </header>

      <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">1. Ketentuan Umum</h2>
          <p>
            Dengan mengakses dan membaca materi pada situs Sivitas Bela Negara, Anda menyatakan setuju untuk terikat oleh syarat dan ketentuan penggunaan yang berlaku demi kepentingan edukasi, penelitian, dan penyebaran wawasan kebangsaan.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">2. Hak Kekayaan Intelektual</h2>
          <p>
            Seluruh naskah tulisan, analisis, dan dokumentasi foto kegiatan orisinal pada situs ini merupakan karya intelektual dari Tim Redaksi Mahasiswa (Gian Ridho Firdaus dan Dimas Rahmanda Alfarizi) bersama sivitas akademika UPN &quot;Veteran&quot; Jawa Timur.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">3. Izin Pengutipan</h2>
          <p>
            Pengutipan naskah untuk keperluan rujukan karya ilmiah, tugas perkuliahan, atau kajian diperbolehkan dengan syarat mencantumkan nama penulis serta tautan sumber rujukan asli ke portal ini secara jelas.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-gray-900">4. Penafian Tanggung Jawab</h2>
          <p>
            Materi opini dan ulasan dalam situs ini ditujukan semata-mata sebagai sarana refleksi akademis dan perwujudan praktikum nilai-nilai kebangsaan, bebas dari unsur komersial maupun kepentingan politik praktis.
          </p>
        </section>
      </div>
    </main>
  );
}
