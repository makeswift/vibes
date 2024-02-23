import type { Metadata } from 'next'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { cn } from '@/lib/utils'
import '@/style/globals.css'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Vibes',
  description: 'A composable theme library for React marketing sites',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, GeistMono.variable, 'font-sans')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
