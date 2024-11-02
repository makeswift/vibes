import { z } from 'zod'

export const schema = z.object({
  id: z.string(),
  name: z.string().optional(),
  street1: z.string(),
  street2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  zipcode: z.string().optional(),
  country: z.string().optional(),
})
