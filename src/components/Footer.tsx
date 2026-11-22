import Link from 'next/link';
import { Shield, BookOpen, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-patriot-950 text-gray-300 border-t border-patriot-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-patriot-800 flex items-center justify-center text-white border border-patriot-700">
                <Shield className="w-5 h-5 fill-patriot-200" />
              </div>
              <span className="font-serif font-black text-xl text-white tracking-wide">
                SIVITAS BELA NEGARA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              Jurnal independen dan warta digital aksi nyata mahasiswa Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur dalam mengaktualisasikan nilai-nilai bela negara di era transformasi digital.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-amber-300 text-xs border border-white/10">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Praktikum Mata Kuliah Wajib Kurikulum (MKWK) Bela Negara</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Rubrik Liputan
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/kategori/wawasan-kebangsaan" className="hover:text-amber-400 transition-colors">
                  Wawasan Kebangsaan
                </Link>
              </li>
              <li>
                <Link href="/kategori/generasi-muda" className="hover:text-amber-400 transition-colors">
                  Generasi Muda
                </Link>
              </li>
              <li>
                <Link href="/kategori/digital" className="hover:text-amber-400 transition-colors">
                  Digital &amp; Siber
                </Link>
              </li>
              <li>
                <Link href="/kategori/lingkungan" className="hover:text-amber-400 transition-colors">
                  Lingkungan Hidup
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Afiliasi Kampus
            </h4>
            <div className="space-y-1.5 text-xs text-gray-400 leading-relaxed">
              <p className="text-white font-semibold">UPN &quot;Veteran&quot; Jawa Timur</p>
              <p>Fakultas Ilmu Komputer</p>
              <p>Program Studi Informatika</p>
              <p className="text-[11px] text-gray-500 pt-2">
                Jl. Raya Rungkut Madya, Gunung Anyar, Surabaya
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-patriot-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Sivitas Bela Negara. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-patriot-300">
            Didedikasikan untuk Kemandirian &amp; Kedaulatan Bangsa
          </p>
        </div>
      </div>
    </footer>
  );
}
