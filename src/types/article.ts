export interface ArticleAuthor {
  name: string;
  role: string;
  institution: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'highlight' | 'image';
  text?: string;
  author?: string;
  src?: string;
  caption?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Generasi Muda' | 'Wawasan Kebangsaan' | 'Digital' | 'Lingkungan';
  date: string;
  readTime: string;
  author: ArticleAuthor;
  image: string;
  imageCaption: string;
  excerpt: string;
  content: ContentBlock[];
  tags: string[];
  popularRank?: number;
}
