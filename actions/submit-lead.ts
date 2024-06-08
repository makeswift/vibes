'use server'

import Airtable from 'airtable'
import { strict } from 'assert'
import { Resend } from 'resend'

import WaitlistEmail from '@/components/emails/waitlist'

strict(process.env.AIRTABLE_BASE_ID, 'AIRTABLE_BASE_ID is required')
strict(process.env.AIRTABLE_ACCESS_TOKEN, 'AIRTABLE_ACCESS_TOKEN is required')
strict(process.env.RESEND_API_KEY, 'RESEND_API_KEY is required')

var base = new Airtable({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID
)

const resend = new Resend(process.env.RESEND_API_KEY)

interface Props {
  Email: string
}

export async function submitLead(body: Props) {
  strict(process.env.AIRTABLE_LEADS_TABLE_ID, 'AIRTABLE_LEADS_TABLE_ID is required')

  try {
    await base(process.env.AIRTABLE_LEADS_TABLE_ID).create(
      { ...body, Source: 'Vibes' },
      { typecast: true }
    )
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
