'use server'

import { SubmissionResult } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import Airtable from 'airtable'
import { Resend } from 'resend'

import { ContributeEmail } from '@/components/emails/contribute'
import { WaitlistEmail } from '@/components/emails/waitlist'
import { env } from '@/lib/env'
import { submitLeadSchema } from '@/lib/schema'

const base = new Airtable({ apiKey: env.AIRTABLE_ACCESS_TOKEN }).base(env.AIRTABLE_BASE_ID)

const resend = new Resend(env.RESEND_API_KEY)

export async function submitLead(
  prevState: unknown,
  formData: FormData
): Promise<SubmissionResult> {
  const submission = parseWithZod(formData, { schema: submitLeadSchema })

  if (submission.status !== 'success') return submission.reply()

  const email = submission.value.email
  const intent = submission.value.intent

  try {
    await base(env.AIRTABLE_TABLE_ID).create({ Email: email, Intent: intent }, { typecast: true })

    if (intent === 'contribute') {
      await resend.emails.send({
        from: 'Vibes <hello@vibes.site>',
        to: [email],
        subject: `Contributing to VIBES`,
        react: ContributeEmail(),
      })
    } else {
      await resend.emails.send({
        from: 'Vibes <hello@vibes.site>',
        to: [email],
        subject: `Welcome to VIBES!`,
        react: WaitlistEmail(),
      })
    }

    return submission.reply()
  } catch (e) {
    console.error(e)

    return submission.reply({ formErrors: ['Failed to submit email'] })
  }
}
