import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/data/articles';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import ShareButtons from '@/components/ShareButtons';

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
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Navigation Link Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs font-semibold text-emerald-900 hover:underline"
          >
            &larr; Kembali ke Daftar Artikel
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-2">
            {article.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-serif italic mb-6">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 pt-4 border-t border-gray-200">
            <span className="font-semibold text-gray-900">{article.author.name}</span>
            <span>•</span>
            <span>{article.author.institution}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Main Photograph */}
        <figure className="mb-10">
          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          {article.imageCaption && (
            <figcaption className="mt-2 text-center text-xs text-gray-500 italic">
              Dokumentasi: {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Article Body */}
        <article className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed font-sans">
          {article.content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  className="font-serif font-bold text-2xl text-gray-900 pt-6 pb-2 border-b border-gray-100 mt-8"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={index}
                  className="my-8 pl-5 border-l-2 border-emerald-800 italic font-serif text-gray-800 text-lg sm:text-xl leading-relaxed"
                >
                  &ldquo;{block.text}&rdquo;
                  {block.author && (
                    <cite className="block text-xs font-sans font-semibold text-gray-500 not-italic mt-2">
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
                  className="my-6 p-4 bg-gray-50 border-l-2 border-gray-400 text-gray-700 text-sm sm:text-base leading-relaxed"
                >
                  {block.text}
                </div>
              );
            }
            if (block.type === 'image' && block.src) {
              return (
                <figure key={index} className="my-8">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={block.src}
                      alt={block.caption || 'Dokumentasi kegiatan'}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="mt-2 text-center text-xs text-gray-500 italic">
                      Dokumentasi: {block.caption}
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
        </article>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-500 flex flex-wrap items-center gap-2">
            <span className="font-semibold text-gray-700">Kata Kunci:</span>
            {article.tags.map((tag) => (
              <span key={tag} className="text-gray-600">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Share Buttons */}
        <div className="mt-6">
          <ShareButtons title={article.title} slug={article.slug} />
        </div>

        {/* Related Articles Clean List */}
        <section className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="font-serif font-bold text-xl text-gray-900 mb-6">
            Artikel Bela Negara Lainnya
          </h3>
          <div className="space-y-4">
            {relatedArticles.map((rel) => (
              <div key={rel.id} className="pb-4 border-b border-gray-100 last:border-b-0">
                <span className="text-[11px] font-semibold text-emerald-900 uppercase tracking-wider block mb-1">
                  {rel.category}
                </span>
                <Link
                  href={`/artikel/${rel.slug}`}
                  className="font-serif font-bold text-base text-gray-900 hover:text-emerald-900 transition-colors leading-snug block"
                >
                  {rel.title}
                </Link>
                <span className="text-xs text-gray-500 mt-1 block">
                  {rel.date} • {rel.readTime}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
