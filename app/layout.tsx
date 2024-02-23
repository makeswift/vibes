import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { GeistMono } from 'geist/font/mono'

import { cn } from '@/lib/utils'
import '@/style/globals.css'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

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
      <body className={cn(inter.variable, GeistMono.variable, 'font-sans')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
