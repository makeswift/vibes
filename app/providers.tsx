'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
