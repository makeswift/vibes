'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import * as React from 'react'

import { DraggableProvider } from '@/components/ui/draggable'
import { env } from '@/lib/env'

if (typeof window !== 'undefined') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    capture_pageleave: true, // Enable automatic pageleave capture, since we don't capture manually
    person_profiles: 'identified_only',
  })
}

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
      <DraggableProvider>
        <PostHogProvider client={posthog}>{children}</PostHogProvider>
      </DraggableProvider>
    </NextThemesProvider>
  )
}
