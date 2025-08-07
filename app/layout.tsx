import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import StructuredData from '@/components/seo/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Your Name — Data Science & Information Systems',
    template: '%s | Your Name'
  },
  description:
    'Data Science and Information Systems portfolio: projects, research, skills, and timelines. Machine learning, analytics, and creative data visualization.',
  keywords: [
    'Data Science',
    'Information Systems',
    'Machine Learning',
    'Statistics',
    'Analytics',
    'Portfolio',
    'Next.js',
    'Visualization',
    'AI'
  ],
  authors: [{ name: 'Your Name', url: 'https://your-domain.com' }],
  creator: 'Your Name',
  alternates: {
    canonical: 'https://your-domain.com'
  },
  openGraph: {
    type: 'website',
    url: 'https://your-domain.com',
    title: 'Your Name — Data Science & Information Systems',
    description:
      'Projects, research, skills, and timelines in Data Science and Information Systems.',
    siteName: 'Your Name — DS & IS',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Name — Data Science & Information Systems'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name — Data Science & Information Systems',
    description:
      'Projects, research, skills, and timelines in Data Science and Information Systems.',
    images: ['/opengraph-image.png'],
    creator: '@your_handle'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
