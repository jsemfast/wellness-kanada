'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'O areálu', href: '#area' },
  { label: 'Ekonomika', href: '#economics' },
  { label: 'Lokalita', href: '#location' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className={`font-serif font-bold text-lg transition-colors ${
            scrolled ? 'text-[#1a3a2a]' : 'text-white'
          }`}
        >
          Apartmány Albeř
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#c9882a] ${
                scrolled ? 'text-[#1a3a2a]' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#c9882a] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#b07720] transition-colors"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-[#1a3a2a]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-[#1a3a2a] font-medium border-b border-gray-100 hover:text-[#c9882a]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 bg-[#c9882a] text-white text-center px-4 py-2 rounded font-medium hover:bg-[#b07720]"
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
    </header>
  )
}
