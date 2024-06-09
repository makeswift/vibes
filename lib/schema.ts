import { z } from 'zod'

export const submitLeadSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email('Email is invalid'),
})
