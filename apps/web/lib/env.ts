import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    AIRTABLE_BASE_ID: z.string(),
    AIRTABLE_ACCESS_TOKEN: z.string(),
    RESEND_API_KEY: z.string(),
    AIRTABLE_TABLE_ID: z.string(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  },
  skipValidation: process.env.npm_lifecycle_event === 'lint',
})
