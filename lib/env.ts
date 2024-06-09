import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    AIRTABLE_BASE_ID: z.string(),
    AIRTABLE_ACCESS_TOKEN: z.string(),
    RESEND_API_KEY: z.string(),
    AIRTABLE_LEADS_TABLE_ID: z.string(),
    VERCEL_URL: z.string().optional(),
  },
  experimental__runtimeEnv: {},
})
