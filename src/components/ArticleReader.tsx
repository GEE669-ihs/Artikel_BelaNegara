'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ContentBlock } from '@/types/article';

interface ArticleReaderProps {
  content: ContentBlock[];
}

export default function ArticleReader({ content }: ArticleReaderProps) {
  // fontSize: 'normal' | 'medium' | 'large'
  const [fontSize, setFontSize] = useState<'normal' | 'medium' | 'large'>('normal');

  const textClasses = {
    normal: 'text-base sm:text-lg leading-relaxed',
    medium: 'text-lg sm:text-xl leading-relaxed',
    large: 'text-xl sm:text-2xl leading-relaxed',
  };

  return (
    <div>
      {/* Font Size Adjuster Bar */}
      <div className="flex items-center justify-between text-xs text-gray-500 pb-3 mb-6 border-b border-gray-100 print:hidden">
        <span className="font-medium text-gray-600">Ukuran Teks Naskah:</span>
        <div className="flex items-center space-x-1.5 bg-gray-50 p-1 rounded border border-gray-200">
          <button
            type="button"
            onClick={() => setFontSize('normal')}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'normal'
                ? 'bg-white text-emerald-900 font-bold shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            A (Normal)
          </button>
          <button
            type="button"
            onClick={() => setFontSize('medium')}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'medium'
                ? 'bg-white text-emerald-900 font-bold shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            A+ (Sedang)
          </button>
          <button
            type="button"
            onClick={() => setFontSize('large')}
            className={`px-2 py-0.5 rounded transition-colors ${
              fontSize === 'large'
                ? 'bg-white text-emerald-900 font-bold shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            A++ (Besar)
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      <div className={`space-y-6 text-gray-800 font-sans ${textClasses[fontSize]}`}>
        {content.map((block, index) => {
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
      </div>
    </div>
  );
}
