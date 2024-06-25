import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import clsx from 'clsx'

import { Toaster } from '@/components/ui/toaster'
import '@/style/globals.css'

import { Providers } from './providers'

const title = 'Vibes: Stunning React components for commerce & marketing | Coming soon'
const description =
  'Stunning React components for commerce and marketing, optimized for fashion and function.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://vibes.site',
    images: [
      {
        url: 'https://vibes.site/social-image.png',
        width: 800,
        height: 600,
        alt: 'Vibes logo on gradient background with stickers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: '@MakeswiftHQ',
    creator: '@MakeswiftHQ',
    images: ['https://vibes.site/social-image.png'],
  },
}

const PolysansWide = localFont({
  src: './fonts/PolySans-BulkyWide.woff2',
  display: 'swap',
  variable: '--font-docs-heading',
})

const Polysans = localFont({
  src: [
    {
      path: './fonts/PolySans-Slim.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PolySans-Median.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-docs-sans',
})

const IBMPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-docs-mono',
})

const PostHogPageView = dynamic(() => import('./post-hog-page-view'), { ssr: false })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(Polysans.variable, PolysansWide.variable, IBMPlexMono.variable)}>
        <Providers>
          <PostHogPageView />
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
