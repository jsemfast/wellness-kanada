'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const summerImages = [
  { src: '/images/gallery/ALBĚŘDRON_FOTO-1.JPG', alt: 'Areál Albeř — letecký pohled léto' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-2.JPG', alt: 'Areál Albeř — letecký pohled léto 2' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-3.JPG', alt: 'Areál Albeř — letecký pohled léto 3' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-4.JPG', alt: 'Areál Albeř — letecký pohled léto 4' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-5.JPG', alt: 'Areál Albeř — letecký pohled léto 5' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-1.JPG', alt: 'Areál Albeř — léto' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-2.JPG', alt: 'Areál Albeř — léto 2' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-3.JPG', alt: 'Areál Albeř — léto 3' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-4.JPG', alt: 'Areál Albeř — léto 4' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-5.JPG', alt: 'Areál Albeř — léto 5' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-6.JPG', alt: 'Areál Albeř — léto 6' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-7.JPG', alt: 'Areál Albeř — léto 7' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-8.JPG', alt: 'Areál Albeř — léto 8' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-9.JPG', alt: 'Areál Albeř — léto 9' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-10.JPG', alt: 'Areál Albeř — léto 10' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-11.JPG', alt: 'Areál Albeř — léto 11' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-12.JPG', alt: 'Areál Albeř — léto 12' },
]

const winterImages = [
  { src: '/images/gallery/ALBĚŘDRON_FOTO-6.JPG', alt: 'Areál Albeř — zima letecky' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-7.JPG', alt: 'Areál Albeř — zima letecky 2' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-8.JPG', alt: 'Areál Albeř — zima letecky 3' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-9.JPG', alt: 'Areál Albeř — zima letecky 4' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-10.JPG', alt: 'Areál Albeř — zima letecky 5' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-11.JPG', alt: 'Areál Albeř — zima letecky 6' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO-3.JPG', alt: 'Areál Albeř — zima' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO-4.JPG', alt: 'Areál Albeř — zima 2' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO-5.JPG', alt: 'Areál Albeř — zima 3' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO-6.JPG', alt: 'Areál Albeř — zima 4' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO-7.JPG', alt: 'Areál Albeř — zima 5' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO-8.JPG', alt: 'Areál Albeř — zima 6' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO-9.JPG', alt: 'Areál Albeř — zima 7' },
]

type Season = 'summer' | 'winter'

export function GallerySection() {
  const [season, setSeason] = useState<Season>('summer')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const images = season === 'summer' ? summerImages : winterImages

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i - 1 + images.length) % images.length : null))
  }, [images.length])

  const next = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i + 1) % images.length : null))
  }, [images.length])

  return (
    <>
      <section id="gallery" className="py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Galerie</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a]">
              Prohlédněte si areál
            </h2>
          </div>

          {/* Season tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <button
                onClick={() => { setSeason('summer'); setLightboxIdx(null) }}
                className={`px-8 py-3 text-sm font-semibold transition-colors ${
                  season === 'summer'
                    ? 'bg-[#1a3a2a] text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                ☀️ Léto
              </button>
              <button
                onClick={() => { setSeason('winter'); setLightboxIdx(null) }}
                className={`px-8 py-3 text-sm font-semibold transition-colors ${
                  season === 'winter'
                    ? 'bg-[#1a3a2a] text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                ❄️ Zima
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <button
                key={`${season}-${i}`}
                onClick={() => openLightbox(i)}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md group focus:outline-none focus:ring-2 focus:ring-[#c9882a]"
                aria-label={`Zobrazit: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10 w-10 h-10 flex items-center justify-center"
            onClick={closeLightbox}
            aria-label="Zavřít"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Předchozí"
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-5xl max-h-[90vh] mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].alt}
              width={1400}
              height={900}
              className="object-contain w-full h-full max-h-[90vh] rounded-lg"
              priority
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/30 rounded-full"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Další"
          >
            ›
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIdx + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
