import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/data/articles';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import ShareButtons from '@/components/ShareButtons';
import ArticleReader from '@/components/ArticleReader';

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
    title: `${article.title} | Artikel Bela Negara`,
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
        <div className="mb-8 print:hidden">
          <Link
            href="/"
            className="text-xs font-semibold text-bottle-800 hover:text-bottle-950 transition-colors inline-flex items-center gap-1"
          >
            &larr; Kembali ke Daftar Artikel
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="text-[11px] font-bold uppercase tracking-wider text-bottle-800 mb-2.5">
            Kategori: {article.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-bottle-950 leading-[1.2] mb-4">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-600 leading-relaxed font-serif italic mb-6">
            &ldquo;{article.excerpt}&rdquo;
          </p>

          <div className="flex flex-wrap items-center gap-x-2 text-xs text-ink-500 pt-4 border-t border-bottle-900/10">
            <span className="font-semibold text-bottle-950">{article.author.name}</span>
            <span>,</span>
            <span>{article.author.institution}</span>
            <span>,</span>
            <span>{article.date}</span>
            <span className="text-bottle-800 font-medium">({article.readTime})</span>
          </div>
        </header>

        {/* Main Photograph */}
        <figure className="mb-10">
          <div className="relative aspect-[16/10] w-full rounded bg-bottle-50 border border-bottle-900/10 overflow-hidden">
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
            <figcaption className="mt-2.5 text-center text-xs text-ink-500 font-serif italic">
              Dokumentasi: {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Article Body with Reader Controls */}
        <ArticleReader content={article.content} />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-bottle-900/10 text-xs text-ink-500 flex flex-wrap items-center gap-2 print:hidden">
            <span className="font-semibold text-bottle-900">Kata Kunci:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded bg-bottle-50/70 border border-bottle-200/50 text-bottle-900 text-[11px]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Share Buttons */}
        <div className="mt-6 print:hidden">
          <ShareButtons title={article.title} slug={article.slug} />
        </div>

        {/* Related Articles with Thumbnails */}
        <section className="mt-16 pt-10 border-t border-bottle-900/10 print:hidden">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-bottle-950 mb-6">
            Artikel Terkait Lainnya
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div key={rel.id} className="group flex flex-col space-y-2.5">
                <Link
                  href={`/artikel/${rel.slug}`}
                  className="block relative aspect-[16/10] w-full rounded bg-bottle-50 border border-bottle-900/10 overflow-hidden"
                >
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-bottle-800 block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-ink-900 group-hover:text-bottle-800 transition-colors leading-snug line-clamp-2">
                    <Link href={`/artikel/${rel.slug}`}>
                      {rel.title}
                    </Link>
                  </h4>
                  <span className="text-xs text-ink-500 mt-1 block">
                    {rel.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
