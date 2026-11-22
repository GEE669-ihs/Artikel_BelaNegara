import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-bottle-900/10 mt-20 py-12 bg-white/60 text-xs text-ink-500">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        {/* Navigation & Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-ink-600 font-medium">
          <Link href="/tentang-bela-negara" className="hover:text-bottle-900 transition-colors">
            Konsep Bela Negara
          </Link>
          <span className="text-bottle-900/20">•</span>
          <Link href="/pedoman-redaksi" className="hover:text-bottle-900 transition-colors">
            Pedoman Redaksi
          </Link>
          <span className="text-bottle-900/20">•</span>
          <Link href="/kebijakan-privasi" className="hover:text-bottle-900 transition-colors">
            Kebijakan Privasi
          </Link>
          <span className="text-bottle-900/20">•</span>
          <Link href="/syarat-ketentuan" className="hover:text-bottle-900 transition-colors">
            Syarat &amp; Ketentuan
          </Link>
        </div>

        {/* Editorial Attribution */}
        <div className="pt-3 border-t border-bottle-900/10 space-y-1">
          <p className="font-semibold text-bottle-950">
            Tim Redaksi: Gian Ridho Firdaus dan Dimas Rahmanda Alfarizi
          </p>
          <p className="text-ink-500">
            Mahasiswa Program Studi Informatika, Fakultas Ilmu Komputer, UPN &quot;Veteran&quot; Jawa Timur, Surabaya
          </p>
          <p className="text-ink-400 text-[11px] pt-1">
            Diterbitkan untuk memenuhi luaran tugas Mata Kuliah Wajib Kurikulum (MKWK) Bela Negara.
          </p>
        </div>

        <p className="text-ink-400 text-[11px]">
          &copy; {new Date().getFullYear()} Sivitas Bela Negara. Seluruh hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
}
