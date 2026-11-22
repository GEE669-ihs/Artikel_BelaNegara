import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 py-12 bg-white text-xs text-gray-500">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        {/* Navigation & Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-600 font-medium">
          <Link href="/tentang-bela-negara" className="hover:text-emerald-900 transition-colors">
            Konsep Bela Negara
          </Link>
          <span>•</span>
          <Link href="/pedoman-redaksi" className="hover:text-emerald-900 transition-colors">
            Pedoman Redaksi
          </Link>
          <span>•</span>
          <Link href="/kebijakan-privasi" className="hover:text-emerald-900 transition-colors">
            Kebijakan Privasi
          </Link>
          <span>•</span>
          <Link href="/syarat-ketentuan" className="hover:text-emerald-900 transition-colors">
            Syarat &amp; Ketentuan
          </Link>
        </div>

        {/* Editorial Attribution */}
        <div className="pt-2 border-t border-gray-100 space-y-1">
          <p className="font-semibold text-gray-800">
            Tim Redaksi: Gian Ridho Firdaus dan Dimas Rahmanda Alfarizi
          </p>
          <p className="text-gray-500">
            Mahasiswa Program Studi Informatika, Fakultas Ilmu Komputer, UPN &quot;Veteran&quot; Jawa Timur, Surabaya
          </p>
          <p className="text-gray-400 text-[11px] pt-1">
            Diterbitkan untuk memenuhi luaran tugas Mata Kuliah Wajib Kurikulum (MKWK) Bela Negara.
          </p>
        </div>

        <p className="text-gray-400 text-[11px]">
          &copy; {new Date().getFullYear()} Sivitas Bela Negara. Seluruh hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
}
