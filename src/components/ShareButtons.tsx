'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/artikel/${slug}`;
    }
    return `https://belanegara-media.vercel.app/artikel/${slug}`;
  };

  const shareToWhatsApp = () => {
    const url = getUrl();
    const text = encodeURIComponent(`*${title}*\n\nBaca artikel selengkapnya di:\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = getUrl();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareToTwitter = () => {
    const url = getUrl();
    const text = encodeURIComponent(`${title}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const printArticle = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="pt-6 border-t border-gray-200 text-xs text-gray-500 flex flex-wrap items-center gap-2 sm:gap-3">
      <span className="font-semibold text-gray-700">Bagikan:</span>
      <button
        type="button"
        onClick={shareToWhatsApp}
        className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
      >
        WhatsApp
      </button>
      <button
        type="button"
        onClick={shareToFacebook}
        className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
      >
        Facebook
      </button>
      <button
        type="button"
        onClick={shareToTwitter}
        className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
      >
        X (Twitter)
      </button>
      <button
        type="button"
        onClick={copyToClipboard}
        className={`px-3 py-1.5 rounded border transition-colors font-medium ${
          copied
            ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        {copied ? 'Tautan Tersalin' : 'Salin Tautan'}
      </button>
      <button
        type="button"
        onClick={printArticle}
        className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
        title="Cetak artikel atau simpan sebagai file PDF"
      >
        Cetak / PDF
      </button>
    </div>
  );
}
