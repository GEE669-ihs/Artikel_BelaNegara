import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Editorial Intro */}
      <div className="pb-8 mb-8 border-b border-gray-200">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Daftar Artikel Bela Negara
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
          Kumpulan naskah dan dokumentasi refleksi kegiatan mahasiswa Program Studi Informatika UPN &quot;Veteran&quot; Jawa Timur dalam mengamalkan nilai-nilai bela negara.
        </p>
      </div>

      {/* Clean Article List */}
      <div className="divide-y divide-gray-100">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} priority={index === 0} />
        ))}
      </div>
    </div>
  );
}
