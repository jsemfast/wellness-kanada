'use client'

import { useState } from 'react'
import { Content } from '@/types/content'

interface Props {
  initialContent: Content
}

type Tab = 'hero' | 'stats' | 'why' | 'owners' | 'location' | 'economics' | 'contact'

const tabs: { key: Tab; label: string }[] = [
  { key: 'hero', label: 'Hero' },
  { key: 'stats', label: 'Statistiky' },
  { key: 'why', label: 'Proč' },
  { key: 'owners', label: 'Majitelé' },
  { key: 'location', label: 'Lokalita' },
  { key: 'economics', label: 'Ekonomika' },
  { key: 'contact', label: 'Kontakt' },
]

export function AdminEditor({ initialContent }: Props) {
  const [content, setContent] = useState<Content>(initialContent)
  const [activeTab, setActiveTab] = useState<Tab>('hero')
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 3000)
  }

  const save = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      })
      if (res.ok) {
        showToast('success', 'Uloženo!')
      } else {
        showToast('error', 'Chyba při ukládání')
      }
    } catch {
      showToast('error', 'Nepodařilo se připojit k serveru')
    } finally {
      setSaving(false)
    }
  }

  const updateHero = (key: keyof Content['hero'], value: string) => {
    setContent((c) => ({ ...c, hero: { ...c.hero, [key]: value } }))
  }

  const updateOwners = (key: keyof Content['owners'], value: string) => {
    setContent((c) => ({ ...c, owners: { ...c.owners, [key]: value } }))
  }

  const updateContact = (key: keyof Content['contact'], value: string) => {
    setContent((c) => ({ ...c, contact: { ...c.contact, [key]: value } }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a3a2a] text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-xl font-bold">Admin — Apartmány Albeř</h1>
          <p className="text-green-300 text-xs mt-0.5">Správa obsahu webu</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" target="_blank" className="text-green-300 text-sm hover:text-white">
            → Zobrazit web
          </a>
          <button
            onClick={save}
            disabled={saving}
            className="bg-[#c9882a] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#b07720] disabled:opacity-60 transition-colors"
          >
            {saving ? 'Ukládám...' : 'Uložit změny'}
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-lg text-white font-medium shadow-lg ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-48 min-h-screen bg-white border-r border-gray-200 pt-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-[#1a3a2a] text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="flex-1 p-8 max-w-3xl">
          {activeTab === 'hero' && (
            <div className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#1a3a2a]">Hero sekce</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                <textarea
                  value={content.hero.headline}
                  onChange={(e) => updateHero('headline', e.target.value)}
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subheadline</label>
                <textarea
                  value={content.hero.subheadline}
                  onChange={(e) => updateHero('subheadline', e.target.value)}
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTA primární</label>
                  <input
                    value={content.hero.ctaPrimary}
                    onChange={(e) => updateHero('ctaPrimary', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTA sekundární</label>
                  <input
                    value={content.hero.ctaSecondary}
                    onChange={(e) => updateHero('ctaSecondary', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'owners' && (
            <div className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#1a3a2a]">Sekce Majitelé</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                <input
                  value={content.owners.headline}
                  onChange={(e) => updateOwners('headline', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Text (odstavce odděleny prázdným řádkem)</label>
                <textarea
                  value={content.owners.text}
                  onChange={(e) => updateOwners('text', e.target.value)}
                  rows={8}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none resize-none"
                />
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#1a3a2a]">Kontaktní sekce</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                <input
                  value={content.contact.headline}
                  onChange={(e) => updateContact('headline', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subheadline</label>
                <input
                  value={content.contact.subheadline}
                  onChange={(e) => updateContact('subheadline', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none"
                />
              </div>
            </div>
          )}

          {(activeTab === 'stats' || activeTab === 'why' || activeTab === 'location' || activeTab === 'economics') && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-[#1a3a2a]">
                {tabs.find((t) => t.key === activeTab)?.label}
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                Pro úpravu těchto sekcí upravte přímo JSON obsah níže a klikněte Uložit.
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">JSON obsah sekce</label>
                <textarea
                  value={JSON.stringify(content[activeTab], null, 2)}
                  onChange={(e) => {
                    try {
                      const parsed = JSON.parse(e.target.value)
                      setContent((c) => ({ ...c, [activeTab]: parsed }))
                    } catch {
                      // invalid JSON, ignore
                    }
                  }}
                  rows={20}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-xs font-mono focus:ring-2 focus:ring-[#1a3a2a] focus:outline-none resize-none"
                  spellCheck={false}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
