import { isAuthenticated } from '@/lib/auth'
import { getContent } from '@/lib/content'
import { AdminEditor } from '@/components/admin/AdminEditor'
import { LoginForm } from '@/components/admin/LoginForm'

export default async function AdminPage() {
  const authed = await isAuthenticated()

  if (!authed) {
    return <LoginForm />
  }

  const content = await getContent()
  return <AdminEditor initialContent={content} />
}
