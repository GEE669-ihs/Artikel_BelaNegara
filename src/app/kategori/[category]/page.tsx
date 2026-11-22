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
          className="text-xs font-semibold text-bottle-800 hover:text-bottle-950 transition-colors"
        >
          &larr; Kembali ke Semua Artikel
        </Link>
      </div>

      {/* Category Header */}
      <header className="pb-6 mb-8 border-b border-bottle-900/10">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-bottle-800 block mb-1.5">
          Rubrik Khusus
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-bottle-950 mb-2">
          {catInfo.title}
        </h1>
        <p className="text-sm text-ink-600 leading-relaxed max-w-2xl font-serif">
          {catInfo.desc}
        </p>
      </header>

      {/* Articles List */}
      {categoryArticles.length > 0 ? (
        <div className="divide-y divide-bottle-900/10">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-sm text-ink-500 font-serif italic">
          Belum ada artikel tambahan untuk rubrik ini.
        </div>
      )}
    </div>
  );
}
