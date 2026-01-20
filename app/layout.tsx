import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bachata Exotica | The Evolution of Bachata',
  description: 'Experience the elegance of connection. Exclusive events and masterclasses for the refined dancer.',
  keywords: ['bachata', 'dance', 'events', 'masterclass', 'luxury dance', 'bachata exotica'],
  openGraph: {
    title: 'Bachata Exotica | The Evolution of Bachata',
    description: 'Experience the elegance of connection. Exclusive events and masterclasses arriving soon.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}