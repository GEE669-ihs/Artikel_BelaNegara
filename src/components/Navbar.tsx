'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, Search, Send, Calendar } from 'lucide-react';

const categories = [
  { name: 'Beranda', href: '/' },
  { name: 'Wawasan Kebangsaan', href: '/kategori/wawasan-kebangsaan' },
  { name: 'Generasi Muda', href: '/kategori/generasi-muda' },
  { name: 'Digital', href: '/kategori/digital' },
  { name: 'Lingkungan', href: '/kategori/lingkungan' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-patriot-900 text-white text-xs py-2 px-4 border-b border-patriot-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-patriot-600 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase shrink-0">
              Terkini
            </span>
            <Link
              href="/artikel/studi-ekskursi-ke-petrokimia-gresik-dan-indosat-cara-mahasiswa-informatika-membela-negara"
              className="text-gray-200 hover:text-white truncate transition-colors"
            >
              Generasi Muda: Studi Ekskursi ke Petrokimia Gresik dan Indosat Ooredoo Hutchison
            </Link>
          </div>
          <div className="flex items-center gap-1.5 text-patriot-200 text-[11px] shrink-0">
            <Calendar className="w-3.5 h-3.5" />
            <span>Minggu, 22 November 2026</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-patriot-700 flex items-center justify-center text-white shadow-sm group-hover:bg-patriot-800 transition-colors">
                <Shield className="w-6 h-6 fill-patriot-50 text-patriot-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl md:text-2xl text-patriot-900 leading-tight tracking-tight">
                  Bela Negara
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-patriot-600 uppercase">
                  Media Mahasiswa
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Menu Utama">
              {categories.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-patriot-800 bg-patriot-50 font-semibold'
                        : 'text-ink-700 hover:text-patriot-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-patriot-700 text-patriot-800 hover:bg-patriot-50 rounded-lg text-sm font-semibold transition-colors"
                aria-label="Kirim artikel untuk redaksi"
              >
                <Send className="w-4 h-4" />
                Kirim Artikel
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-ink-700 hover:text-patriot-800 hover:bg-gray-100 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {categories.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-patriot-800 bg-patriot-50 font-semibold'
                      : 'text-ink-700 hover:text-patriot-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-patriot-700 text-white rounded-lg text-sm font-semibold hover:bg-patriot-800 transition-colors"
              >
                <Send className="w-4 h-4" />
                Kirim Artikel
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Submission Information Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Tutup jendela informasi"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-patriot-100 text-patriot-800 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 id="modal-title" className="text-xl font-serif font-bold text-ink-900 mb-2">
              Kirim Naskah Bela Negara
            </h3>
            <p className="text-sm text-ink-600 mb-4 leading-relaxed">
              Portal ini memfasilitasi publikasi karya tulis, esai opini, dan laporan kegiatan bertema Bela Negara bagi mahasiswa UPN &quot;Veteran&quot; Jawa Timur.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6 space-y-2 text-xs text-ink-700">
              <p><strong>Ketentuan Naskah:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Tema: Wawasan Kebangsaan, Kepemudaan, Teknologi Digital, atau Lingkungan.</li>
                <li>Panjang artikel: 400 hingga 800 kata.</li>
                <li>Wajib menyertakan dokumentasi kegiatan asli yang orisinal.</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="w-full py-2.5 bg-patriot-700 text-white font-semibold rounded-lg hover:bg-patriot-800 transition-colors text-sm"
            >
              Mengerti &amp; Lanjutkan Membaca
            </button>
          </div>
        </div>
      )}
    </>
  );
}
