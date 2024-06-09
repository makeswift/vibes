'use server'

import Airtable from 'airtable'
import { Resend } from 'resend'

import WaitlistEmail from '@/components/emails/waitlist'
import { env } from '@/lib/env'

var base = new Airtable({ apiKey: env.AIRTABLE_ACCESS_TOKEN }).base(env.AIRTABLE_BASE_ID)

const resend = new Resend(env.RESEND_API_KEY)

interface Props {
  Email: string
}

export async function submitLead(body: Props) {
  try {
    await base(env.AIRTABLE_LEADS_TABLE_ID).create({ ...body, Source: 'Vibes' }, { typecast: true })
  } catch (e) {
    console.error(e)

    throw new Error('Failed to submit lead')
  }

  resend.emails.send({
    from: 'Vibes <hello@vibes.site>',
    to: [body.Email],
    subject: `Welcome to Vibes!`,
    react: WaitlistEmail(),
  })
}
