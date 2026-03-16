'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { RevenueRow } from '@/types/content'

const RevenueChart = dynamic(
  () => import('@/components/ui/RevenueChart').then((m) => m.RevenueChart),
  { ssr: false, loading: () => <div className="h-80 animate-pulse bg-gray-100 rounded-xl" /> }
)

const STORAGE_KEY = 'revenue_unlocked'

interface Props {
  data: RevenueRow[]
}

export function EmailGateChart({ data }: Props) {
  const [unlocked, setUnlocked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === '1') setUnlocked(true)
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) { setError('Zadejte platný email'); return }
    setLoading(true)
    setError('')
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      localStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
      setModalOpen(false)
    } catch {
      setError('Něco se pokazilo, zkuste znovu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="relative">
        {/* Chart */}
        <div className={unlocked ? '' : 'select-none pointer-events-none'}>
          <RevenueChart data={data} />
          {unlocked && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1a3a2a] text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg">Rok</th>
                    <th className="text-right px-4 py-3">Gastro</th>
                    <th className="text-right px-4 py-3">Ubytování</th>
                    <th className="text-right px-4 py-3">Festival</th>
                    <th className="text-right px-4 py-3 rounded-tr-lg font-bold">Celkem</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={row.year}
                      className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f7f4]'} ${
                        i === data.length - 1 ? 'font-semibold text-[#1a3a2a]' : ''
                      }`}
                    >
                      <td className="px-4 py-3">{row.year}</td>
                      <td className="text-right px-4 py-3">{row.gastro.toLocaleString('cs-CZ')} Kč</td>
                      <td className="text-right px-4 py-3">{row.ubytovani.toLocaleString('cs-CZ')} Kč</td>
                      <td className="text-right px-4 py-3">{row.festival > 0 ? `${row.festival.toLocaleString('cs-CZ')} Kč` : '—'}</td>
                      <td className="text-right px-4 py-3 text-[#c9882a]">{row.celkem.toLocaleString('cs-CZ')} Kč</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Blur overlay */}
        {!unlocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl"
            style={{ backdropFilter: 'blur(8px)', background: 'rgba(248,247,244,0.6)' }}
          >
            <p className="font-serif text-xl font-semibold text-[#1a3a2a] mb-1">Detailní čísla</p>
            <p className="text-gray-500 text-sm mb-5 text-center px-4">Zadejte email pro zobrazení grafu a tabulky tržeb</p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#c9882a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b07720] transition-colors shadow-lg"
            >
              Zobrazit detailní čísla →
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-2xl font-bold text-[#1a3a2a] mb-1">Detailní ekonomická data</h3>
            <p className="text-gray-500 text-sm mb-6">Zadejte svůj email a okamžitě zobrazíme kompletní graf a tabulku tržeb 2020–2025.</p>
            <form onSubmit={submit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.cz"
                autoFocus
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a2a]"
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c9882a] text-white py-3 rounded-lg font-semibold hover:bg-[#b07720] transition-colors disabled:opacity-60"
              >
                {loading ? 'Načítám...' : 'Zobrazit čísla →'}
              </button>
              <p className="text-xs text-gray-400 text-center">Žádný spam. Pouze pro účely této poptávky.</p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
