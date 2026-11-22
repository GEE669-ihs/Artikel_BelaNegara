import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import { Clock, TrendingUp, Sparkles, BookMarked } from 'lucide-react';

export default function HomePage() {
  const featuredArticle = articles[0]; // Studi Ekskursi
  const secondaryArticles = articles.slice(1);
  const popularArticles = [
    articles[2], // Outbound
    articles[3], // Literasi Digital
    articles[1], // Museum Sepuluh Nopember
    articles[4], // Mangrove Wonorejo
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Top Editorial Section: Hero & Sidebar Terpopuler */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Main Featured Hero (8 cols) */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-patriot-600 animate-pulse" />
            <h2 className="text-xs uppercase tracking-widest font-bold text-patriot-800">
              Sorotan Utama
            </h2>
          </div>
          <ArticleCard article={featuredArticle} featured />
        </div>

        {/* Sidebar Terpopuler (4 cols) - Matches the layout from friend's example */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-patriot-700">
            <TrendingUp className="w-4 h-4 text-patriot-700" />
            <h2 className="font-serif font-bold text-lg text-ink-900">
              Terpopuler
            </h2>
          </div>
          <div className="divide-y divide-gray-200 bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex-1 flex flex-col justify-around">
            {popularArticles.map((article, index) => (
              <div key={article.id} className="py-3.5 first:pt-1 last:pb-1 group">
                <Link href={`/artikel/${article.slug}`} className="flex items-start gap-4">
                  <span className="font-serif font-black text-2xl text-patriot-700 w-6 shrink-0 leading-tight">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-patriot-700 block mb-1">
                      {article.category}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-ink-900 group-hover:text-patriot-700 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-ink-500 mt-1.5">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Pills Quick Filter */}
      <section className="mb-10">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-6">
          <h2 className="font-serif font-bold text-2xl text-ink-900 flex items-center gap-2">
            <BookMarked className="w-6 h-6 text-patriot-700" />
            Daftar Artikel Bela Negara
          </h2>
          <span className="text-xs text-ink-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
            {articles.length} Artikel Lengkap
          </span>
        </div>

        {/* 4 Cards Grid for remaining articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Campus Mission Callout Section */}
      <section className="mt-16 bg-gradient-to-br from-patriot-900 via-patriot-800 to-patriot-950 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <Sparkles className="w-96 h-96" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-patriot-700/60 border border-patriot-500/40 text-patriot-200 text-xs font-semibold uppercase tracking-wider mb-4">
            Komitmen Kebangsaan
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-3xl leading-snug mb-4">
            Membangun Indonesia dari Ruang Akademik dan Keahlian Profesi
          </h2>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
            Bela Negara di era modern merupakan aktualisasi nilai kecintaan pada tanah air yang diwujudkan melalui penguasaan ilmu pengetahuan, integritas moral, kepedulian lingkungan, serta pertahanan kedaulatan informasi digital.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <span className="font-serif font-bold text-2xl text-patriot-200 block">5</span>
              <span className="text-xs text-gray-300">Pilar Artikel</span>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <span className="font-serif font-bold text-2xl text-patriot-200 block">100%</span>
              <span className="text-xs text-gray-300">Aksi Orisinal</span>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <span className="font-serif font-bold text-2xl text-patriot-200 block">UPN</span>
              <span className="text-xs text-gray-300">Veteran Jatim</span>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <span className="font-serif font-bold text-2xl text-patriot-200 block">2026</span>
              <span className="text-xs text-gray-300">Tahun Publikasi</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
