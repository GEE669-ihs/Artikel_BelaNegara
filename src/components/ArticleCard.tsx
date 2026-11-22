import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const categoryPills: Record<string, { bg: string; text: string; border: string }> = {
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

export default function ArticleCard({ article }: ArticleCardProps) {
  const pill = categoryPills[article.category] || {
    bg: 'bg-gray-50',
    text: 'text-gray-800',
    border: 'border-gray-200',
  };

  return (
    <article className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-patriot-300 transition-all duration-300">
      {/* Image container */}
      <Link
        href={`/artikel/${article.slug}`}
        className="block relative aspect-[16/10] w-full overflow-hidden bg-gray-100"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full border shadow-xs ${pill.bg} ${pill.text} ${pill.border}`}
          >
            {article.category}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 text-[11px] text-ink-500 mb-2.5">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-patriot-700" />
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-patriot-700" />
            {article.readTime}
          </span>
        </div>

        <h3 className="font-serif font-bold text-base sm:text-lg text-ink-900 group-hover:text-patriot-800 transition-colors leading-snug mb-2 flex-1">
          <Link href={`/artikel/${article.slug}`} className="flex items-start justify-between gap-1">
            <span>{article.title}</span>
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-ink-600 line-clamp-2 leading-relaxed mb-4">
          {article.excerpt}
        </p>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-[11px] text-ink-500">
            {article.author.institution}
          </span>
          <Link
            href={`/artikel/${article.slug}`}
            className="font-semibold text-patriot-800 group-hover:translate-x-0.5 flex items-center gap-1 transition-transform"
          >
            <span>Baca</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
