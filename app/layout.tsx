import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Bachata Exotica',
  description: 'Bachata • Classes • Events • Workshops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="bg-[#111] text-white font-sans">{children}</body>
    </html>
  );
}