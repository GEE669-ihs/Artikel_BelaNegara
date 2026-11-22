import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import { ArrowLeft, Layers, BookOpen } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav aria-label="Navigasi Jejak" className="flex items-center gap-2 text-xs text-ink-500 mb-8">
        <Link href="/" className="hover:text-patriot-800 flex items-center gap-1 transition-colors font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          Beranda Utama
        </Link>
        <span>/</span>
        <span className="text-ink-600">Rubrik Khusus</span>
        <span>/</span>
        <span className="text-patriot-900 font-bold">{catInfo.title}</span>
      </nav>

      {/* Category Header */}
      <header className="bg-gradient-to-r from-patriot-900 via-patriot-800 to-patriot-950 text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-patriot-200 bg-patriot-700/60 border border-patriot-500/40 mb-4">
            <Layers className="w-3.5 h-3.5 text-patriot-300" />
            Rubrik Sivitas Bela Negara
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl mb-4 leading-tight">
            {catInfo.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
            {catInfo.desc}
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-patriot-300 font-medium">
            <BookOpen className="w-4 h-4" />
            <span>Memuat {categoryArticles.length} artikel terbitan</span>
          </div>
        </div>
      </header>

      {/* Articles Grid */}
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <p className="text-ink-600 mb-4">
            Belum ada artikel tambahan untuk kategori ini.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-patriot-800 text-white font-semibold rounded-lg text-sm hover:bg-patriot-900 transition-colors shadow"
          >
            Kembali ke Beranda
          </Link>
        </div>
      )}
    </div>
  );
}
