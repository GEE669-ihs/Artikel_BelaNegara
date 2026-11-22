import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/data/articles';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import ShareButtons from '@/components/ShareButtons';
import ArticleCard from '@/components/ArticleCard';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  Share2,
} from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: `${article.title} | Sivitas Bela Negara`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      images: [
        {
          url: article.image,
          width: 800,
          height: 480,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <ReadingProgressBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Navigasi Jejak"
          className="flex items-center gap-2 text-xs text-ink-500 mb-8 pb-4 border-b border-gray-200"
        >
          <Link
            href="/"
            className="hover:text-patriot-800 flex items-center gap-1.5 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Beranda Utama
          </Link>
          <span>/</span>
          <Link
            href={`/kategori/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-patriot-800 transition-colors"
          >
            {article.category}
          </Link>
          <span>/</span>
          <span className="text-ink-700 font-medium truncate max-w-xs">
            {article.title}
          </span>
        </nav>

        {/* Article Header (Editorial Magazine Style) */}
        <header className="max-w-4xl mx-auto mb-10 text-center">
          <Link
            href={`/kategori/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-patriot-900 bg-patriot-100 border border-patriot-300 hover:bg-patriot-200 transition-colors mb-4"
          >
            Rubrik: {article.category}
          </Link>

          <h1 className="font-serif font-black text-2xl sm:text-4xl md:text-5xl text-ink-900 leading-tight tracking-tight mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed mb-6 italic font-serif">
            &ldquo;{article.excerpt}&rdquo;
          </p>

          {/* Author Byline */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-ink-500 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-patriot-800 text-white flex items-center justify-center font-bold text-xs">
                UPN
              </div>
              <span className="font-semibold text-ink-900">
                {article.author.name}
              </span>
            </div>
            <span>•</span>
            <span>{article.author.institution}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-patriot-800 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </header>

        {/* Lead Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative aspect-[16/9] md:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-300 shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1080px"
              className="object-cover"
            />
          </div>
          {article.imageCaption && (
            <p className="mt-3 text-center text-xs text-ink-500 italic">
              Dokumentasi: {article.imageCaption}
            </p>
          )}
        </div>

        {/* 2-Column Content Grid: Main Article Body + Sticky Sidebar */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content (8 cols) */}
          <main className="lg:col-span-8">
            {/* Key Takeaways Box */}
            <div className="mb-8 p-6 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                Poin Inti Pengamalan Bela Negara
              </div>
              <ul className="space-y-2 text-sm text-emerald-950">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <span>
                    Aktualisasi nilai kebangsaan melalui aksi nyata di lingkungan perkuliahan dan masyarakat.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <span>
                    Menghubungkan keahlian spesifik program studi dengan ketahanan bangsa di masa depan.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <span>
                    Membangun integritas, disiplin, dan persatuan tanpa memandang sekat perbedaan latar belakang.
                  </span>
                </li>
              </ul>
            </div>

            {/* Paragraphs and Elements */}
            <div className="space-y-6 text-ink-800 text-base sm:text-lg leading-relaxed font-sans">
              {article.content.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={index}
                      className="font-serif font-bold text-xl sm:text-2xl text-ink-900 pt-6 pb-2 border-b border-gray-200 mt-8"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={index}
                      className="my-8 p-6 bg-patriot-900 text-white rounded-xl shadow-md border-l-4 border-amber-400 font-serif italic text-lg sm:text-xl leading-snug"
                    >
                      &ldquo;{block.text}&rdquo;
                      {block.author && (
                        <cite className="block text-xs font-sans font-semibold text-patriot-200 not-italic mt-3 tracking-wider uppercase">
                          ({block.author})
                        </cite>
                      )}
                    </blockquote>
                  );
                }
                if (block.type === 'highlight') {
                  return (
                    <div
                      key={index}
                      className="my-6 p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-amber-950 font-medium text-sm sm:text-base leading-relaxed"
                    >
                      {block.text}
                    </div>
                  );
                }
                if (block.type === 'image' && block.src) {
                  return (
                    <figure key={index} className="my-8">
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
                        <Image
                          src={block.src}
                          alt={block.caption || 'Dokumentasi kegiatan'}
                          fill
                          sizes="(max-width: 896px) 100vw, 800px"
                          className="object-cover"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="mt-2.5 text-center text-xs text-ink-500 italic">
                          Foto: {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                return (
                  <p key={index} className="leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Tag Pills */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-patriot-800 mr-1" />
                <span className="text-xs font-bold text-ink-600">Topik Terkait:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-ink-700 font-medium border border-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-8">
              <ShareButtons title={article.title} slug={article.slug} />
            </div>

            {/* Author Profile Box */}
            <div className="mt-12 p-6 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-patriot-900 text-white flex items-center justify-center font-serif font-black text-xl shrink-0">
                BN
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-ink-900">
                  {article.author.name}
                </h4>
                <p className="text-xs text-ink-600 mt-0.5">
                  {article.author.role} • {article.author.institution}
                </p>
                <p className="text-xs text-ink-500 mt-2 leading-relaxed">
                  Ditulis sebagai bagian dari luaran praktikum Mata Kuliah Wajib Kurikulum Bela Negara untuk membagikan gagasan dan dokumentasi aksi kebangsaan mahasiswa.
                </p>
              </div>
            </div>
          </main>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Quick Info Widget */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-patriot-800 pb-3 border-b border-gray-100">
                  <Bookmark className="w-4 h-4" />
                  Informasi Penerbitan
                </div>
                <div className="mt-4 space-y-3 text-xs text-ink-600">
                  <div className="flex justify-between">
                    <span className="text-ink-400">Penerbit:</span>
                    <span className="font-semibold text-ink-900">Sivitas Bela Negara</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-400">Kampus:</span>
                    <span className="font-semibold text-ink-900">UPN &quot;Veteran&quot; Jatim</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-400">Waktu Baca:</span>
                    <span className="font-semibold text-patriot-800">{article.readTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-400">Status:</span>
                    <span className="inline-block px-2 py-0.5 bg-green-100 text-green-800 font-bold rounded text-[10px]">
                      Terverifikasi
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Mini List */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-serif font-bold text-sm text-ink-900 pb-3 border-b border-gray-100 mb-4">
                  Artikel Terkait Lainnya
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/artikel/${rel.slug}`}
                      className="block group"
                    >
                      <span className="text-[10px] font-bold uppercase text-patriot-700 block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-serif font-semibold text-xs text-ink-900 group-hover:text-patriot-800 transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h4>
                      <span className="text-[10px] text-ink-400 mt-1 block">
                        {rel.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Full Grid of Related Articles */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif font-bold text-2xl text-ink-900">
              Eksplorasi Artikel Lainnya
            </h3>
            <Link
              href="/"
              className="text-xs font-bold text-patriot-800 hover:text-patriot-900 transition-colors"
            >
              Lihat Semua &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
