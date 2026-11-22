import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles, getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import { ArrowLeft, Layers } from 'lucide-react';

const categoryMap: Record<string, { title: string; desc: string }> = {
  'wawasan-kebangsaan': {
    title: 'Wawasan Kebangsaan',
    desc: 'Artikel refleksi sejarah, persatuan, nilai-nilai kepahlawanan, dan pengamalan Pancasila dalam kehidupan sehari-hari.',
  },
  'generasi-muda': {
    title: 'Generasi Muda',
    desc: 'Kiprah, kedisiplinan, dinamika kampus, studi ekskursi, dan pembangunan karakter mahasiswa sebagai agen perubahan bangsa.',
  },
  'digital': {
    title: 'Digital',
    desc: 'Kedaulatan siber, etika bermedia sosial, verifikasi data, dan peran mahasiswa teknologi dalam menangkal hoaks.',
  },
  'lingkungan': {
    title: 'Lingkungan',
    desc: 'Aksi nyata menjaga tanah dan air melalui konservasi ekosistem pesisir, penghijauan, dan kepedulian iklim.',
  },
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((cat) => ({
    category: cat,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const cat = categoryMap[params.category.toLowerCase()];
  if (!cat) return { title: 'Kategori Tidak Ditemukan' };

  return {
    title: `Kategori: ${cat.title} | Bela Negara Media`,
    description: cat.desc,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const catKey = params.category.toLowerCase();
  const catInfo = categoryMap[catKey];

  if (!catInfo) {
    notFound();
  }

  const categoryArticles = articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, '-') === catKey
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Navigasi Jejak" className="flex items-center gap-2 text-xs text-ink-500 mb-6">
        <Link href="/" className="hover:text-patriot-700 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Beranda
        </Link>
        <span>/</span>
        <span className="text-ink-700 font-medium">Kategori</span>
        <span>/</span>
        <span className="text-patriot-800 font-semibold">{catInfo.title}</span>
      </nav>

      {/* Category Header Banner */}
      <header className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 mb-10 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-patriot-800 bg-patriot-100 mb-4 border border-patriot-200">
          <Layers className="w-3.5 h-3.5" />
          Kategori Rubrik
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink-900 mb-3">
          {catInfo.title}
        </h1>
        <p className="text-sm sm:text-base text-ink-600 max-w-2xl leading-relaxed">
          {catInfo.desc}
        </p>
      </header>

      {/* Articles Grid */}
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
          <p className="text-ink-600 mb-4">
            Belum ada artikel tambahan untuk kategori ini.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-patriot-700 text-white font-semibold rounded-lg text-sm hover:bg-patriot-800 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      )}
    </div>
  );
}
