import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Audio Digital Conseil | Audioprothésiste à Reims',
  description:
    'Hervé LEFEBVRE, audioprothésiste diplômé d’État au 55 rue Chanzy à Reims. Bilan auditif gratuit, 30 jours d’essai sans engagement, 100 % Santé et suivi illimité.',
  generator: 'v0.app',
  icons: {
    icon: '/images/caducee.png',
    apple: '/images/caducee.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#103d4d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
