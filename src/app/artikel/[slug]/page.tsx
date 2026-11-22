import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/data/articles';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import ShareButtons from '@/components/ShareButtons';
import ArticleCard from '@/components/ArticleCard';
import { Calendar, Clock, User, ArrowLeft, Tag, ShieldCheck } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: `${article.title} | Bela Negara Media`,
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

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Get related articles (other articles)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <ReadingProgressBar />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Navigasi Jejak" className="flex items-center gap-2 text-xs text-ink-500 mb-6">
          <Link href="/" className="hover:text-patriot-700 flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Beranda
          </Link>
          <span>/</span>
          <Link
            href={`/kategori/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-patriot-700 transition-colors"
          >
            {article.category}
          </Link>
          <span>/</span>
          <span className="text-ink-700 truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Category Badge & Headline */}
        <header className="mb-8">
          <Link
            href={`/kategori/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-patriot-800 bg-patriot-100 hover:bg-patriot-200 transition-colors mb-4 border border-patriot-200"
          >
            {article.category}
          </Link>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-ink-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 text-xs sm:text-sm text-ink-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-patriot-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                BN
              </div>
              <div>
                <p className="font-semibold text-ink-900 flex items-center gap-1.5">
                  {article.author.name}
                  <ShieldCheck className="w-3.5 h-3.5 text-patriot-600" />
                </p>
                <p className="text-xs text-ink-500">
                  {article.author.role} • {article.author.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-ink-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Main Cover Image */}
        <figure className="mb-10">
          <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          {article.imageCaption && (
            <figcaption className="mt-3 text-center text-xs text-ink-500 italic">
              Foto: {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Article Body Content */}
        <div className="space-y-6 text-base sm:text-lg text-ink-800 leading-relaxed font-sans">
          {article.content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  className="font-serif font-bold text-xl sm:text-2xl text-ink-900 pt-6 pb-1 border-b border-gray-100"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={index}
                  className="my-6 p-5 sm:p-6 bg-patriot-50 border-l-4 border-patriot-700 rounded-r-xl italic text-patriot-900 font-serif text-lg sm:text-xl"
                >
                  &ldquo;{block.text}&rdquo;
                  {block.author && (
                    <cite className="block text-xs font-sans font-semibold text-patriot-700 not-italic mt-2">
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
                  className="my-6 p-5 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-medium text-sm sm:text-base"
                >
                  {block.text}
                </div>
              );
            }
            return (
              <p key={index} className="leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Tags Section */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-ink-500 mr-1" />
            <span className="text-xs font-semibold text-ink-500">Kata Kunci:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-md bg-gray-100 text-ink-700 border border-gray-200"
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

        {/* Related Articles Section */}
        <section className="mt-16 pt-12 border-t-2 border-gray-200">
          <h3 className="font-serif font-bold text-xl text-ink-900 mb-6">
            Artikel Bela Negara Lainnya
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
