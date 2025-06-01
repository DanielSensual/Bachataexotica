import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import React from 'react';

/* —— Google Font optimisation —— */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bachata Exotica',
  description: 'Luxury Bachata movement • Classes • Events • Workshops',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-luxe-black text-white font-body selection:bg-luxe-gold/20">
        {/* —— nav —— */}
        <nav className="sticky top-0 z-50 w-full bg-luxe-gray/80 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-6xl px-6 flex justify-center gap-8 py-5 text-lg">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/gallery', 'Gallery'],
              ['/calendar', 'Calendar'],
              ['/blog', 'Blog'],
              ['/podcast', 'Podcast'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="nav-link font-heading tracking-wide"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* —— main content —— */}
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        {/* —— footer —— */}
        <footer className="border-t border-luxe-gray mt-24 py-12 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Bachata Exotica. All rights reserved.
        </footer>
      </body>
    </html>
  );
}