import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Apartmány Albeř — Turistický areál k prodeji | Česká Kanada',
  description:
    'Etablovaný turistický areál v Albeři, Česká Kanada. 4 apartmány, restaurace, bazén. Tržby 2025: 4,2 mil. Kč. Funkční byznys připravený k předání.',
  keywords: ['prodej areálu', 'turistický areál', 'Česká Kanada', 'Albeř', 'investice do ubytování', 'HoReCa'],
  openGraph: {
    title: 'Apartmány Albeř — Funkční byznys k prodeji',
    description: 'Etablovaný turistický areál v Albeři, Česká Kanada. Tržby 4,2 mil. Kč, obsazenost 95 % v sezoně.',
    type: 'website',
    locale: 'cs_CZ',
    images: [
      {
        url: '/images/gallery/ALBĚŘDRON_FOTO-1.JPG',
        width: 1200,
        height: 630,
        alt: 'Turistický areál Albeř, Česká Kanada',
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
