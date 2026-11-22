import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

const categoryMap: Record<string, { title: string; desc: string }> = {
  'wawasan-kebangsaan': {
    title: 'Wawasan Kebangsaan',
    desc: 'Artikel refleksi sejarah, persatuan, nilai kepahlawanan, dan pengamalan Pancasila dalam kehidupan sehari-hari mahasiswa.',
  },
  'generasi-muda': {
    title: 'Generasi Muda',
    desc: 'Kiprah, kedisiplinan, dinamika kampus, studi ekskursi, dan pembangunan karakter mahasiswa sebagai pilar masa depan bangsa.',
  },
  'digital': {
    title: 'Digital',
    desc: 'Kedaulatan siber, etika bermedia sosial, verifikasi data, dan peran mahasiswa teknologi dalam menangkal hoaks di ruang publik.',
  },
  'lingkungan': {
    title: 'Lingkungan',
    desc: 'Aksi nyata menjaga tanah dan air melalui konservasi ekosistem pesisir, penghijauan, dan kesadaran ekologis generasi muda.',
  },
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categoryMap[category.toLowerCase()];
  if (!cat) return { title: 'Kategori Tidak Ditemukan' };

  return {
    title: `Rubrik: ${cat.title} | Sivitas Bela Negara`,
    description: cat.desc,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const catKey = (category || '').toLowerCase();
  const catInfo = categoryMap[catKey];

  if (!catInfo) {
    notFound();
  }

  const categoryArticles = articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, '-') === catKey
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Navigation Link Back */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-xs font-semibold text-emerald-900 hover:underline"
        >
          &larr; Kembali ke Semua Artikel
        </Link>
      </div>

      {/* Category Header */}
      <header className="pb-6 mb-8 border-b border-gray-200">
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">
          {catInfo.title}
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
          {catInfo.desc}
        </p>
      </header>

      {/* Articles List */}
      {categoryArticles.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-sm text-gray-500">
          Belum ada artikel tambahan untuk rubrik ini.
        </div>
      )}
    </div>
  );
}
