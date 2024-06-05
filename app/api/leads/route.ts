import Airtable from 'airtable'
import { strict } from 'assert'
import { NextRequest, NextResponse } from 'next/server'

strict(process.env.AIRTABLE_BASE_ID)
strict(process.env.AIRTABLE_ACCESS_TOKEN)

var base = new Airtable({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID
)

export async function POST(req: NextRequest) {
  const body = await req.json()

  strict(process.env.AIRTABLE_LEADS_TABLE_ID)

  try {
    const data = await base(process.env.AIRTABLE_LEADS_TABLE_ID).create(body, {
      typecast: true,
    })

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
