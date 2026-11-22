import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  Clock,
  Calendar,
  ShieldCheck,
} from 'lucide-react';

export default function HomePage() {
  const leadArticle = articles[0]; // Studi Ekskursi Petrokimia & Indosat
  const otherArticles = articles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* 1. LEAD STORY: Full Width Split Magazine Showcase (Distinct from friend's site!) */}
      <section className="mb-16 pb-12 border-b-2 border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-patriot-900">
            Laporan Utama Redaksi
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
          {/* Left Column: Big Framed Image (7 cols) */}
          <div className="lg:col-span-7">
            <Link
              href={`/artikel/${leadArticle.slug}`}
              className="block group relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200"
            >
              <Image
                src={leadArticle.image}
                alt={leadArticle.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-patriot-900/90 backdrop-blur-sm rounded-full shadow-sm">
                  {leadArticle.category}
                </span>
              </div>
            </Link>
            <p className="mt-2.5 text-xs text-ink-500 italic">
              Dokumentasi: {leadArticle.imageCaption}
            </p>
          </div>

          {/* Right Column: Narrative Presentation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs text-ink-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-patriot-700" />
                {leadArticle.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-patriot-800">
                <Clock className="w-3.5 h-3.5" />
                {leadArticle.readTime}
              </span>
            </div>

            <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-ink-900 leading-tight mb-4 hover:text-patriot-800 transition-colors">
              <Link href={`/artikel/${leadArticle.slug}`}>
                {leadArticle.title}
              </Link>
            </h2>

            <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-6">
              {leadArticle.excerpt}
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-xs text-ink-500">
                <span className="font-semibold text-ink-800 block">
                  {leadArticle.author.name}
                </span>
                <span>{leadArticle.author.institution}</span>
              </div>

              <Link
                href={`/artikel/${leadArticle.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-patriot-800 hover:bg-patriot-900 text-white font-semibold text-xs rounded-full transition-colors shadow-sm"
              >
                <span>Baca Laporan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION TITLE: Warta Lapangan & Gagasan Kebangsaan */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-patriot-800 uppercase tracking-widest mb-1">
              <Layers className="w-4 h-4" />
              Rubrik Lengkap
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-ink-900">
              Dokumentasi &amp; Refleksi Lapangan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-500 max-w-md">
            Rangkaian artikel orisinal pengamalan nilai bela negara mahasiswa dalam berbagai ranah pengabdian.
          </p>
        </div>

        {/* 4 Cards Grid with Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 3. MANIFESTO BANNER: Nilai-Nilai Dasar Bela Negara (High-end Institutional Look) */}
      <section className="bg-patriot-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-patriot-900 relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            Landasan Pengabdian Mahasiswa
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl leading-tight mb-4">
            Lima Nilai Dasar Bela Negara di Lingkungan Kampus
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Bela negara bukan hanya konsep bela diri fisik, melainkan kesadaran moral dan intelektual warga negara untuk menjaga keutuhan serta kemajuan Republik Indonesia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-amber-400 font-bold text-xs block mb-1">01. Cinta Tanah Air</span>
              <p className="text-xs text-gray-300">Menjaga kelestarian lingkungan dan memajukan produk serta kebudayaan lokal.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-amber-400 font-bold text-xs block mb-1">02. Sadar Berbangsa &amp; Bernegara</span>
              <p className="text-xs text-gray-300">Menjunjung tinggi toleransi, kerukunan, serta disiplin hukum dan sosial.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-amber-400 font-bold text-xs block mb-1">03. Setia pada Pancasila</span>
              <p className="text-xs text-gray-300">Menjadikan nilai Pancasila sebagai pedoman moral dalam berinteraksi dan berkarya.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-amber-400 font-bold text-xs block mb-1">04. Rela Berkorban</span>
              <p className="text-xs text-gray-300">Menyumbangkan waktu, tenaga, dan pikiran demi kepentingan kemaslahatan publik.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 sm:col-span-2 lg:col-span-2">
              <span className="text-amber-400 font-bold text-xs block mb-1">05. Kemampuan Awal Bela Negara</span>
              <p className="text-xs text-gray-300">Menjaga kesehatan fisik, ketahanan mental, serta mengasah keunggulan kompetensi sains dan teknologi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
