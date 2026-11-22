import Link from 'next/link';
import { Shield, BookOpen, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-gray-300 border-t border-ink-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-patriot-600 flex items-center justify-center text-white">
                <Shield className="w-5 h-5 fill-patriot-100" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                Bela Negara Media
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Portal publikasi karya tulis, gagasan, dan dokumentasi aksi nyata bela negara mahasiswa Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-ink-800 text-patriot-300 text-xs border border-ink-700">
              <BookOpen className="w-4 h-4 text-patriot-400" />
              <span>Praktikum Mata Kuliah Wajib Kurikulum (MKWK) Bela Negara</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kategori Artikel
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/kategori/wawasan-kebangsaan" className="hover:text-patriot-400 transition-colors">
                  Wawasan Kebangsaan
                </Link>
              </li>
              <li>
                <Link href="/kategori/generasi-muda" className="hover:text-patriot-400 transition-colors">
                  Generasi Muda
                </Link>
              </li>
              <li>
                <Link href="/kategori/digital" className="hover:text-patriot-400 transition-colors">
                  Digital &amp; Siber
                </Link>
              </li>
              <li>
                <Link href="/kategori/lingkungan" className="hover:text-patriot-400 transition-colors">
                  Lingkungan Hidup
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Attribution */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Informasi Kampus
            </h4>
            <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
              <p className="text-white font-medium">UPN &quot;Veteran&quot; Jawa Timur</p>
              <p>Fakultas Ilmu Komputer</p>
              <p>Program Studi Informatika</p>
              <p className="text-xs text-gray-500 pt-2">
                Surabaya, Jawa Timur, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bela Negara Media. Hak cipta dilindungi.
          </p>
          <p className="flex items-center gap-1.5">
            Didedikasikan untuk Indonesia Maju
          </p>
        </div>
      </div>
    </footer>
  );
}
