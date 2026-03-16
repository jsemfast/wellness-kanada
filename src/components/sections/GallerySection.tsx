'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: '/images/gallery/ALBĚŘDRON_FOTO-1.JPG', alt: 'Areál Albeř — letecký pohled' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-2.JPG', alt: 'Areál Albeř — letecký pohled 2' },
  { src: '/images/gallery/ALBĚŘDRON_FOTO-4.JPG', alt: 'Areál Albeř — letecký pohled 3' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-1.JPG', alt: 'Areál Albeř' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-2.JPG', alt: 'Areál Albeř 2' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-3.JPG', alt: 'Areál Albeř 3' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-4.JPG', alt: 'Areál Albeř 4' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-5.JPG', alt: 'Areál Albeř 5' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-6.JPG', alt: 'Areál Albeř 6' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-7.JPG', alt: 'Areál Albeř 7' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-8.JPG', alt: 'Areál Albeř 8' },
  { src: '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-9.JPG', alt: 'Areál Albeř 9' },
]

export function GallerySection() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null))
  }, [])

  const next = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i + 1) % galleryImages.length : null))
  }, [])

  return (
    <>
      <section id="gallery" className="py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Galerie</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a]">
              Prohlédněte si areál
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={i}
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
              src={galleryImages[lightboxIdx].src}
              alt={galleryImages[lightboxIdx].alt}
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
            {lightboxIdx + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </>
  )
}
