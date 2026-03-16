import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { ContentSchema } from '@/types/content'
import { saveBlobContent } from '@/lib/blob'

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const parsed = ContentSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid content', details: parsed.error.issues }, { status: 400 })
    }

    const url = await saveBlobContent(JSON.stringify(parsed.data, null, 2))
    return NextResponse.json({ success: true, url })
  } catch (error) {
    console.error('Save content error:', error)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
