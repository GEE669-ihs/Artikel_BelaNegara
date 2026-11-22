import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://belanegara-media.vercel.app'),
  title: 'Sivitas Bela Negara | Jurnal Independen Mahasiswa UPN Veteran Jatim',
  description:
    'Portal warta dan jurnal independen aksi nyata nilai-nilai Bela Negara mahasiswa UPN Veteran Jawa Timur.',
  keywords: [
    'Bela Negara',
    'Sivitas Bela Negara',
    'UPN Veteran Jawa Timur',
    'Informatika',
    'Wawasan Kebangsaan',
    'Generasi Muda',
    'Literasi Digital',
    'Lingkungan Hidup',
  ],
  authors: [{ name: 'Mahasiswa Informatika UPN Veteran Jatim' }],
  openGraph: {
    title: 'Sivitas Bela Negara | Jurnal Independen Mahasiswa',
    description:
      'Portal warta dan jurnal independen aksi nyata nilai-nilai Bela Negara mahasiswa UPN Veteran Jawa Timur.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-paper text-ink-900 selection:bg-patriot-100 selection:text-patriot-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
