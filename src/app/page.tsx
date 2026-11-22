import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Editorial Intro */}
      <div className="pb-8 mb-8 border-b border-bottle-900/10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-bottle-800" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-bottle-800">
            Arsip Publikasi Mahasiswa
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bottle-950 mb-2">
          Daftar Tulisan &amp; Refleksi Lapangan
        </h2>
        <p className="text-sm text-ink-600 leading-relaxed max-w-2xl font-serif">
          Dokumentasi aksi dan kajian nilai-nilai bela negara mahasiswa Program Studi Informatika UPN &quot;Veteran&quot; Jawa Timur dalam berbagai dimensi pengabdian masyarakat dan sains.
        </p>
      </div>

      {/* Clean Article List */}
      <div className="divide-y divide-bottle-900/10">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} priority={index === 0} />
        ))}
      </div>
    </div>
  );
}
