'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ContentBlock } from '@/types/article';

interface ArticleReaderProps {
  content: ContentBlock[];
}

export default function ArticleReader({ content }: ArticleReaderProps) {
  const [fontSize, setFontSize] = useState<'normal' | 'medium' | 'large'>('normal');

  const textClasses = {
    normal: 'text-base sm:text-[1.125rem] leading-[1.8]',
    medium: 'text-lg sm:text-[1.25rem] leading-[1.85]',
    large: 'text-xl sm:text-[1.375rem] leading-[1.9]',
  };

  return (
    <div>
      {/* Font Size Adjuster Bar */}
      <div className="flex items-center justify-between text-xs text-ink-500 pb-3 mb-8 border-b border-bottle-900/10 print:hidden">
        <span className="font-serif italic text-ink-600">Kenyamanan Membaca:</span>
        <div className="flex items-center space-x-1.5 bg-bottle-50/70 p-1 rounded-md border border-bottle-900/10">
          <button
            type="button"
            onClick={() => setFontSize('normal')}
            className={`px-2.5 py-0.5 rounded text-xs transition-colors ${
              fontSize === 'normal'
                ? 'bg-bottle-900 text-white font-semibold'
                : 'text-ink-600 hover:text-bottle-900'
            }`}
          >
            A Normal
          </button>
          <button
            type="button"
            onClick={() => setFontSize('medium')}
            className={`px-2.5 py-0.5 rounded text-xs transition-colors ${
              fontSize === 'medium'
                ? 'bg-bottle-900 text-white font-semibold'
                : 'text-ink-600 hover:text-bottle-900'
            }`}
          >
            A+ Sedang
          </button>
          <button
            type="button"
            onClick={() => setFontSize('large')}
            className={`px-2.5 py-0.5 rounded text-xs transition-colors ${
              fontSize === 'large'
                ? 'bg-bottle-900 text-white font-semibold'
                : 'text-ink-600 hover:text-bottle-900'
            }`}
          >
            A++ Besar
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      <div className={`space-y-7 text-ink-800 font-sans ${textClasses[fontSize]}`}>
        {content.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h2
                key={index}
                className="font-serif font-bold text-2xl text-bottle-950 pt-6 pb-2 border-b border-bottle-900/10 mt-10"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === 'quote') {
            return (
              <blockquote
                key={index}
                className="my-8 pl-6 pr-4 py-3 bg-bottle-50/50 border-l-[3px] border-bottle-800 italic font-serif text-bottle-950 text-lg sm:text-xl leading-relaxed rounded-r-md"
              >
                &ldquo;{block.text}&rdquo;
                {block.author && (
                  <cite className="block text-xs font-sans font-semibold text-bottle-800 not-italic mt-2.5 tracking-wide">
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
                className="my-7 p-5 bg-bottle-50/60 border-l-[3px] border-bottle-700 text-bottle-950 text-sm sm:text-base leading-relaxed rounded-r-md"
              >
                {block.text}
              </div>
            );
          }
          if (block.type === 'image' && block.src) {
            return (
              <figure key={index} className="my-9">
                <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden bg-bottle-50 border border-bottle-900/10">
                  <Image
                    src={block.src}
                    alt={block.caption || 'Dokumentasi kegiatan'}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-2.5 text-center text-xs text-ink-500 font-serif italic">
                    Dokumentasi: {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          // First paragraph gets a subtle, classic literary drop-cap
          const isFirstParagraph = index === 0;

          return (
            <p
              key={index}
              className={`leading-relaxed ${
                isFirstParagraph
                  ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-bottle-950'
                  : ''
              }`}
            >
              {block.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
