'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Semua Artikel', href: '/' },
  { name: 'Wawasan Kebangsaan', href: '/kategori/wawasan-kebangsaan' },
  { name: 'Generasi Muda', href: '/kategori/generasi-muda' },
  { name: 'Digital', href: '/kategori/digital' },
  { name: 'Lingkungan', href: '/kategori/lingkungan' },
  { name: 'Konsep Bela Negara', href: '/tentang-bela-negara' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-bottle-900/10 bg-paper/95 backdrop-blur-sm sticky top-0 z-40 transition-colors">
      {/* Top Masthead */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-7 pb-5 text-center">
        <Link href="/" className="inline-block group">
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <span className="h-[1px] w-6 sm:w-12 bg-bottle-900/30" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-bottle-700">
              Jurnal Mahasiswa UPN Veteran Jatim
            </span>
            <span className="h-[1px] w-6 sm:w-12 bg-bottle-900/30" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-tight text-bottle-950 group-hover:text-bottle-800 transition-colors">
            Sivitas Bela Negara
          </h1>
          <p className="text-xs sm:text-sm text-ink-600 mt-1 font-serif italic max-w-lg mx-auto">
            Warta Pemikiran dan Dokumentasi Aksi Pengabdian Kebangsaan
          </p>
        </Link>
      </div>

      {/* Nav Strip with double border line */}
      <nav className="border-t border-b border-bottle-900/10 py-2.5 bg-white/70" aria-label="Navigasi Utama">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full space-x-6 text-xs sm:text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all py-1 tracking-wide ${
                    isActive
                      ? 'text-bottle-950 font-bold border-b-2 border-bottle-900'
                      : 'text-ink-600 hover:text-bottle-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-xs font-semibold text-bottle-800 uppercase tracking-wider">
              Rubrik Publikasi
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-xs font-semibold text-bottle-900 py-1 px-3 rounded-md border border-bottle-900/20 hover:bg-bottle-50 transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? 'Tutup' : 'Pilih Rubrik'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-bottle-900/10 px-4 pt-3 pb-3 space-y-1.5 bg-paper">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 px-2 rounded text-sm transition-colors ${
                    isActive
                      ? 'text-bottle-950 font-bold bg-bottle-100/60'
                      : 'text-ink-700 hover:text-bottle-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
