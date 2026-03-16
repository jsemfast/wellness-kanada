import { put, head } from '@vercel/blob'

const BLOB_KEY = 'content.json'

export async function getBlobContent(): Promise<string | null> {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN
    if (!token) return null

    // Try to fetch the blob
    const url = process.env.BLOB_CONTENT_URL
    if (!url) return null

    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) return null
    return await res.text()
  } catch {
    return null
  }
}

export async function saveBlobContent(content: string): Promise<string> {
  const blob = await put(BLOB_KEY, content, {
    access: 'public',
    contentType: 'application/json',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    allowOverwrite: true,
  })
  return blob.url
}
