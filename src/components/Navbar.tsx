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
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-bottle-900/10 bg-paper sticky top-0 z-40">
      {/* Top Title Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-7 pb-5 text-center">
        <Link href="/" className="inline-block group">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-bottle-700 mb-1">
            Publikasi Mahasiswa UPN Veteran Jawa Timur
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-bottle-950 group-hover:text-bottle-800 transition-colors">
            Artikel Bela Negara
          </h1>
          <p className="text-xs sm:text-sm text-ink-600 mt-1 font-serif italic">
            Dokumentasi Kegiatan dan Pemikiran Aksi Kebangsaan Mahasiswa
          </p>
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className="border-t border-bottle-900/10 py-2.5 bg-white/60" aria-label="Navigasi Utama">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full space-x-6 text-xs sm:text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all py-1 ${
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
              Menu Kategori
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-xs font-semibold text-bottle-900 py-1 px-3 rounded border border-bottle-900/20 hover:bg-bottle-50"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? 'Tutup' : 'Pilih Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-bottle-900/10 px-4 pt-3 pb-3 space-y-1 bg-paper">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 px-2 rounded text-sm ${
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
