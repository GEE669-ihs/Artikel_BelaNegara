import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';
import { Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Generasi Muda': {
    bg: 'bg-emerald-50',
    text: 'text-emerald-800',
    border: 'border-emerald-200',
  },
  'Wawasan Kebangsaan': {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    border: 'border-amber-200',
  },
  'Digital': {
    bg: 'bg-blue-50',
    text: 'text-blue-800',
    border: 'border-blue-200',
  },
  'Lingkungan': {
    bg: 'bg-teal-50',
    text: 'text-teal-800',
    border: 'border-teal-200',
  },
};

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const catStyle = categoryColors[article.category] || {
    bg: 'bg-gray-50',
    text: 'text-gray-800',
    border: 'border-gray-200',
  };

  if (featured) {
    return (
      <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
        <Link href={`/artikel/${article.slug}`} className="block">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-gray-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 backdrop-blur-sm ${catStyle.bg} ${catStyle.text} border ${catStyle.border}`}
              >
                {article.category}
              </span>
              <h2 className="text-xl md:text-3xl font-serif font-bold leading-snug mb-3 group-hover:text-patriot-200 transition-colors">
                {article.title}
              </h2>
              <div className="flex items-center gap-4 text-xs md:text-sm text-gray-200">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200">
      <Link href={`/artikel/${article.slug}`} className="block relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-2.5">
          <Link
            href={`/kategori/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
            className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}
          >
            {article.category}
          </Link>
          <span className="text-xs text-ink-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-serif font-bold text-ink-900 group-hover:text-patriot-700 transition-colors leading-snug mb-2 flex-1">
          <Link href={`/artikel/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-ink-600 line-clamp-2 mb-4 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-ink-500">
          <span>{article.date}</span>
          <span className="font-medium text-patriot-700 group-hover:translate-x-0.5 transition-transform">
            Baca Selengkapnya &rarr;
          </span>
        </div>
      </div>
    </article>
  );
}
