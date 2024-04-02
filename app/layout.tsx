import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import clsx from 'clsx'

import { Toaster } from '@/components/ui/toaster'
import '@/style/globals.css'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Vibes',
  description: 'A composable theme library for React marketing sites',
}

const PolysansWide = localFont({
  src: './fonts/PolySans-BulkyWide.woff2',
  display: 'swap',
  variable: '--font-heading',
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
  variable: '--font-sans',
})

const IBMPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          Polysans.variable,
          PolysansWide.variable,
          IBMPlexMono.variable,
          'font-sans'
        )}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
