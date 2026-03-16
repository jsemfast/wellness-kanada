import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = schema.parse(body)

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'revenue-gate',
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {})
    }

    console.log('Lead captured:', email)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
