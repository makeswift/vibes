import { z } from 'zod'

export const localeSchema = z.object({
  id: z.string(),
})

export const searchSchema = <T extends string>(searchParamName: T) =>
  z.object({
    [searchParamName]: z.string(),
  })
