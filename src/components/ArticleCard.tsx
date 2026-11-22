import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
  priority?: boolean;
}

export default function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <article className="py-8 first:pt-0 border-b border-bottle-900/10 last:border-b-0 group">
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-start justify-between">
        {/* Text Area */}
        <div className="flex-1 space-y-2.5">
          <div className="flex flex-wrap items-center gap-x-2 text-xs text-ink-500">
            <span className="font-semibold text-bottle-800">
              {article.category}
            </span>
            <span>,</span>
            <span>{article.date}</span>
            <span className="text-ink-400">({article.readTime})</span>
          </div>

          <h2 className="font-serif text-xl sm:text-[1.35rem] font-bold text-ink-900 leading-snug group-hover:text-bottle-800 transition-colors">
            <Link href={`/artikel/${article.slug}`}>
              {article.title}
            </Link>
          </h2>

          <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          <div className="pt-2 text-xs text-ink-500 flex items-center justify-between">
            <span>{article.author.name}</span>
            <Link
              href={`/artikel/${article.slug}`}
              className="font-medium text-bottle-800 hover:text-bottle-950 underline decoration-bottle-300 underline-offset-4 transition-colors"
            >
              Baca Selengkapnya &rarr;
            </Link>
          </div>
        </div>

        {/* Image Thumbnail */}
        <div className="w-full md:w-56 md:shrink-0 aspect-[16/10] relative rounded bg-bottle-50 border border-bottle-900/10 overflow-hidden">
          <Link href={`/artikel/${article.slug}`}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 224px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
