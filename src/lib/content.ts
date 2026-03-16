import { Content, ContentSchema } from '@/types/content'
import seedData from '@/content/content.json'

export async function getContent(): Promise<Content> {
  // Try Vercel Blob first
  try {
    const blobUrl = process.env.BLOB_CONTENT_URL
    if (blobUrl) {
      const res = await fetch(blobUrl, {
        next: { revalidate: 60 },
      })
      if (res.ok) {
        const json = await res.json()
        const parsed = ContentSchema.safeParse(json)
        if (parsed.success) return parsed.data
      }
    }
  } catch {
    // fall through to seed data
  }

  // Fallback to seed data
  return seedData as Content
}
