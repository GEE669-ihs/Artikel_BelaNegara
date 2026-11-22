'use client';

import { useState } from 'react';
import { Share2, Check, MessageCircle, Send } from 'lucide-react';

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
    const text = encodeURIComponent(`*${title}*\n\nBaca artikel selengkapnya di Bela Negara Media:\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareToTwitter = () => {
    const url = getUrl();
    const text = encodeURIComponent(`${title} via Bela Negara Media UPN Jatim`);
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

  return (
    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-200">
      <span className="text-sm font-medium text-ink-600 flex items-center gap-1.5 mr-2">
        <Share2 className="w-4 h-4 text-patriot-700" /> Bagikan:
      </span>
      <button
        type="button"
        onClick={shareToWhatsApp}
        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md transition-colors shadow-sm"
        aria-label="Bagikan ke WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </button>
      <button
        type="button"
        onClick={shareToTwitter}
        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#0f1419] hover:bg-[#272c30] rounded-md transition-colors shadow-sm"
        aria-label="Bagikan ke X Twitter"
      >
        <Send className="w-3.5 h-3.5" />
        X (Twitter)
      </button>
      <button
        type="button"
        onClick={copyToClipboard}
        className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold border rounded-md transition-all shadow-sm ${
          copied
            ? 'bg-patriot-50 border-patriot-600 text-patriot-800'
            : 'bg-white border-gray-300 text-ink-700 hover:bg-gray-50'
        }`}
        aria-label="Salin tautan artikel"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-patriot-600" />
            Tautan Tersalin!
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-gray-500" />
            Salin Link
          </>
        )}
      </button>
    </div>
  );
}
