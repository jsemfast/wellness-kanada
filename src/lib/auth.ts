import { cookies } from 'next/headers'

const SESSION_COOKIE = 'admin_session'

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  const token = process.env.ADMIN_SESSION_TOKEN
  if (!session || !token) return false
  return session.value === token
}

export { SESSION_COOKIE }
