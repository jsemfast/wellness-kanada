import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  message: z.string().optional(),
  gdpr: z.boolean(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL

    // Try webhook first
    if (webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message || '',
            source: 'wellness-kanada-web',
            timestamp: new Date().toISOString(),
          }),
        })
        if (webhookRes.ok) {
          return NextResponse.json({ success: true })
        }
      } catch {
        // fall through to Resend
      }
    }

    // Fallback: Resend
    const resendKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL

    if (resendKey && contactEmail) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)

      await resend.emails.send({
        from: 'web@wellness-kanada.cz',
        to: contactEmail,
        subject: `Nová poptávka: ${data.name}`,
        html: `
          <h2>Nová poptávka z webu</h2>
          <p><strong>Jméno:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          <p><strong>Zpráva:</strong> ${data.message || '—'}</p>
          <p><strong>Čas:</strong> ${new Date().toLocaleString('cs-CZ')}</p>
        `,
      })

      return NextResponse.json({ success: true })
    }

    // Neither configured — log and return success anyway (dev mode)
    console.log('Contact form submission (no delivery configured):', data)
    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.issues }, { status: 400 })
    }
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
