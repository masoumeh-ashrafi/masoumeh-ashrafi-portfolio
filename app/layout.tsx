import './globals.css'

import { Footer } from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Frontend Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Frontend Engineer specializing in React, Next.js, TypeScript, performance-focused UI, accessible interfaces, and SEO-ready web applications.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    'Masoumeh Ashrafi',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Frontend Portfolio',
    'Web Performance',
    'SEO Frontend',
    'Accessible UI',
    'UI Architecture',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} | Frontend Engineer`,
    description:
      'Frontend Engineer building fast, accessible, and SEO-ready web interfaces with React, Next.js, and TypeScript.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Frontend Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Frontend Engineer`,
    description:
      'Frontend Engineer building fast, accessible, and SEO-ready web interfaces with React, Next.js, and TypeScript.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}