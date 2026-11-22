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
    <header className="border-b border-gray-200 bg-white">
      {/* Top Header Title */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
        <Link href="/" className="inline-block group">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 group-hover:text-emerald-900 transition-colors">
            Sivitas Bela Negara
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1.5 font-sans">
            Catatan dan Dokumentasi Aksi Kebangsaan Mahasiswa UPN &quot;Veteran&quot; Jawa Timur
          </p>
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className="border-t border-gray-100 py-3" aria-label="Navigasi Utama">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Desktop Links */}
          <div className="hidden sm:flex items-center justify-center w-full space-x-6 text-xs sm:text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-emerald-900 font-semibold border-b-2 border-emerald-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex items-center justify-between w-full">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Menu Navigasi
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-xs font-semibold text-emerald-900 py-1 px-2.5 rounded border border-gray-300"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? 'Tutup' : 'Kategori'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-100 px-4 pt-3 pb-2 space-y-2 bg-gray-50">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 text-sm ${
                    isActive
                      ? 'text-emerald-900 font-bold'
                      : 'text-gray-600'
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
