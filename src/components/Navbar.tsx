'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, PenTool, Sparkles, BookOpen } from 'lucide-react';

const navItems = [
  { name: 'Semua Artikel', href: '/' },
  { name: 'Wawasan Kebangsaan', href: '/kategori/wawasan-kebangsaan' },
  { name: 'Generasi Muda', href: '/kategori/generasi-muda' },
  { name: 'Digital & Siber', href: '/kategori/digital' },
  { name: 'Lingkungan Hidup', href: '/kategori/lingkungan' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Journal Metadata Bar */}
      <div className="bg-patriot-950 text-patriot-200 text-[11px] py-1.5 px-4 border-b border-patriot-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Edisi 2026</span>
            <span>•</span>
            <span>Surabaya, Jawa Timur</span>
            <span>•</span>
            <span className="text-patriot-400">Minggu, 22 November 2026</span>
          </div>
          <div className="flex items-center gap-2 text-patriot-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Publikasi Praktikum Bela Negara UPN &quot;Veteran&quot; Jatim</span>
          </div>
        </div>
      </div>

      {/* Main Journal Masthead (Distinct Editorial Header) */}
      <div className="bg-white border-b border-gray-200 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex flex-col items-center justify-center">
            <Link href="/" className="group inline-flex flex-col items-center">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[1px] w-8 md:w-16 bg-patriot-700" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-patriot-800">
                  Jurnal Independen Mahasiswa
                </span>
                <span className="h-[1px] w-8 md:w-16 bg-patriot-700" />
              </div>
              <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-ink-900 tracking-tight leading-none group-hover:text-patriot-900 transition-colors">
                SIVITAS BELA NEGARA
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-ink-500 max-w-xl font-serif italic">
                Meneguhkan Nilai Kebangsaan Melalui Intelektualitas, Riset, dan Aksi Nyata
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Category Navigation Strip */}
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Menu Utama">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'text-white bg-patriot-800 shadow-sm'
                        : 'text-ink-700 hover:text-patriot-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Title & Menu Toggle */}
            <div className="flex items-center md:hidden">
              <span className="font-serif font-bold text-sm text-patriot-900">
                SIVITAS BELA NEGARA
              </span>
            </div>

            {/* Right Action: Kirim Opini */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-patriot-800 hover:bg-patriot-900 text-white rounded-full text-xs font-semibold transition-colors shadow-sm"
                aria-label="Kirim artikel untuk redaksi"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Kirim Opini</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 rounded-md text-ink-700 hover:bg-gray-100"
                aria-label="Buka navigasi mobile"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-1 shadow-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-patriot-800 font-semibold'
                      : 'text-ink-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Info Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-patriot-100 text-patriot-800 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-ink-900 mb-2">
              Kirim Naskah Mahasiswa
            </h3>
            <p className="text-sm text-ink-600 mb-4 leading-relaxed">
              Portal Sivitas Bela Negara menerima karya tulis orisinal mahasiswa berupa artikel opini, laporan kegiatan lapangan, atau esai refleksi kebangsaan.
            </p>
            <div className="bg-paper rounded-xl p-4 border border-gray-200 mb-6 space-y-2 text-xs text-ink-700">
              <p className="font-bold text-ink-900">Ketentuan Umum:</p>
              <ul className="list-disc list-inside space-y-1 text-ink-600">
                <li>Tema: Bela negara, kebangsaan, teknologi, lingkungan, atau etika pemuda.</li>
                <li>Menyertakan dokumentasi foto asli mahasiswa di lapangan.</li>
                <li>Bebas dari plagiarisme dan ujaran kebencian.</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="w-full py-2.5 bg-patriot-800 text-white font-semibold rounded-lg hover:bg-patriot-900 transition-colors text-sm"
            >
              Tutup &amp; Lanjutkan Membaca
            </button>
          </div>
        </div>
      )}
    </>
  );
}
