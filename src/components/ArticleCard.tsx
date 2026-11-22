import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
  priority?: boolean;
}

export default function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <article className="py-8 first:pt-0 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-start justify-between">
        {/* Text Details */}
        <div className="flex-1 space-y-2.5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="font-semibold text-emerald-900">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-snug hover:text-emerald-900 transition-colors">
            <Link href={`/artikel/${article.slug}`}>
              {article.title}
            </Link>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          <div className="pt-2 text-xs text-gray-500">
            <span>{article.author.name}</span>
            <span className="mx-1.5">•</span>
            <span>{article.author.institution}</span>
          </div>
        </div>

        {/* Thumbnail Image */}
        <div className="w-full md:w-56 md:shrink-0 aspect-[16/10] relative rounded-lg overflow-hidden bg-gray-100">
          <Link href={`/artikel/${article.slug}`}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 224px"
              className="object-cover hover:opacity-95 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
