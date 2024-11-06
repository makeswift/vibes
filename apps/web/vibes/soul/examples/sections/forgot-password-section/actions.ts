import { SubmissionResult } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'

import { schema } from '@/vibes/soul/sections/forgot-password-section/schema'

export async function forgotPasswordAction(
  lastResult: SubmissionResult | null,
  formData: FormData
) {
  'use server'

  const submission = parseWithZod(formData, { schema })

  if (submission.status !== 'success') {
    return submission.reply({ formErrors: ['Boom!'] })
  }

  // Simulate a network request
  await new Promise(resolve => setTimeout(resolve, 1000))

  // const user = await logIn(submission.value)

  return submission.reply({ resetForm: true })
}
