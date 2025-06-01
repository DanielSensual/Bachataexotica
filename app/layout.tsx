
import './globals.css';
import { Montserrat, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-body' });
const playfair  = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Bachata Exotica',
  description: ' Bachata Dance • Classes • Events • Workshops',
  openGraph: {
    title: 'Bachata Exotica',
    description: 'Bachata Dance • Classes • Events • Workshops',
    images: '/og.jpg',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-night text-white font-body">
        <nav className="sticky top-0 z-50 flex w-full justify-center gap-8 bg-slate/70 backdrop-blur py-5 text-lg">
          {['Home','About','Gallery','Calendar','Blog','Podcast'].map((x) => (
            <a key={x} href={`/${x.toLowerCase()}`} className="nav-link uppercase">
              {x}
            </a>
          ))}
        </nav>
        {children}
        <footer className="py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Bachata Exotica. All rights reserved.
        </footer>
      </body>
    </html>
  );
}