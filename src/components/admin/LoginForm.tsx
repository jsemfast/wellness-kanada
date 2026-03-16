'use client'

import { useState } from 'react'

export function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        window.location.reload()
      } else {
        setError('Nesprávné heslo')
      }
    } catch {
      setError('Chyba připojení')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm">
        <h1 className="font-serif text-2xl font-bold text-[#1a3a2a] mb-2 text-center">Admin</h1>
        <p className="text-gray-500 text-sm text-center mb-8">Apartmány Albeř</p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Heslo</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a2a]"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a3a2a] text-white py-3 rounded-lg font-semibold hover:bg-[#2d5a42] transition-colors disabled:opacity-60"
          >
            {loading ? 'Přihlašuji...' : 'Přihlásit se'}
          </button>
        </form>
      </div>
    </div>
  )
}
