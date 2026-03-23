'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

const summerImages = [
  { src: '/images/gallery/letni/ALBĚŘKAMERA_FOTO_VYLEPSENO-1.JPG', alt: 'Areál Albeř — léto' },
  { src: '/images/gallery/letni/ALBĚŘKAMERA_FOTO_VYLEPSENO-9.JPG', alt: 'Areál Albeř — léto 2' },
  { src: '/images/gallery/letni/ALBĚŘKAMERA_FOTO_VYLEPSENO-10.JPG', alt: 'Areál Albeř — léto 3' },
  { src: '/images/gallery/letni/ALBĚŘKAMERA_FOTO-10.JPG', alt: 'Areál Albeř — léto 4' },
  { src: '/images/gallery/letni/ALBĚŘKAMERA_FOTO-11.JPG', alt: 'Areál Albeř — léto 5' },
  { src: '/images/gallery/letni/ALBĚŘKAMERA_FOTO-12.JPG', alt: 'Areál Albeř — léto 6' },
  { src: '/images/gallery/letni/ALBĚŘKAMERA_FOTO-13.JPG', alt: 'Areál Albeř — léto 7' },
  { src: '/images/gallery/letni/ApartmanAlberLoznice01.png', alt: 'Apartmán Albeř — ložnice' },
  { src: '/images/gallery/letni/ApartmanAlberLoznice02.png', alt: 'Apartmán Albeř — ložnice 2' },
  { src: '/images/gallery/letni/Apartmány Albeř (1).png', alt: 'Apartmány Albeř — interiér' },
  { src: '/images/gallery/letni/Apartmány Albeř (2).png', alt: 'Apartmány Albeř — interiér 2' },
  { src: '/images/gallery/letni/Apartmány Albeř (3).png', alt: 'Apartmány Albeř — interiér 3' },
  { src: '/images/gallery/letni/Apartmány Albeř (4).png', alt: 'Apartmány Albeř — interiér 4' },
  { src: '/images/gallery/letni/Apartmány Albeř (5).png', alt: 'Apartmány Albeř — interiér 5' },
  { src: '/images/gallery/letni/Apartmány Albeř (6).png', alt: 'Apartmány Albeř — interiér 6' },
  { src: '/images/gallery/letni/Apartmány Albeř (7).png', alt: 'Apartmány Albeř — interiér 7' },
  { src: '/images/gallery/letni/Apartmány Albeř (8).png', alt: 'Apartmány Albeř — interiér 8' },
  { src: '/images/gallery/letni/Apartmány Albeř (8).JPG', alt: 'Apartmány Albeř — exteriér' },
  { src: '/images/gallery/letni/Apartmány Albeř (14).JPG', alt: 'Apartmány Albeř — exteriér 2' },
  { src: '/images/gallery/letni/Apartmány Albeř (15).JPG', alt: 'Apartmány Albeř — exteriér 3' },
  { src: '/images/gallery/letni/Untitled-1.png', alt: 'Areál Albeř — pohled 1' },
  { src: '/images/gallery/letni/Untitled-2.png', alt: 'Areál Albeř — pohled 2' },
  { src: '/images/gallery/letni/Untitled-3.png', alt: 'Areál Albeř — pohled 3' },
  { src: '/images/gallery/letni/Untitled-4.png', alt: 'Areál Albeř — pohled 4' },
  { src: '/images/gallery/letni/Untitled-5.png', alt: 'Areál Albeř — pohled 5' },
  { src: '/images/gallery/letni/Untitled-6.png', alt: 'Areál Albeř — pohled 6' },
  { src: '/images/gallery/letni/Untitled-7.png', alt: 'Areál Albeř — pohled 7' },
  { src: '/images/gallery/letni/Untitled-8.png', alt: 'Areál Albeř — pohled 8' },
  { src: '/images/gallery/letni/hf_20260211_184626_eb5bcd89-4acc-4d5f-8293-f6257fa9d94b.png', alt: 'Areál Albeř — léto pohled' },
  { src: '/images/gallery/letni/hf_20260211_192040_fd71154b-2463-4e34-994c-49c6bfbb2c5c.jpeg', alt: 'Areál Albeř — léto pohled 2' },
  { src: '/images/gallery/letni/hf_20260212_110831_3b74c084-b3c8-4377-9c93-b2ff22bbe588.png', alt: 'Areál Albeř — léto pohled 3' },
  { src: '/images/gallery/letni/hf_20260212_164334_f02a785a-e185-419b-95e4-0826b5c3846c.png', alt: 'Areál Albeř — léto pohled 4' },
  { src: '/images/gallery/letni/hf_20260212_172324_3b38235f-a8c2-49c7-9c84-adb65e5c45aa.png', alt: 'Areál Albeř — léto pohled 5' },
  { src: '/images/gallery/letni/hf_20260212_174844_d7e672d3-f55e-47de-b2a9-760564d501a4.jpeg', alt: 'Areál Albeř — léto pohled 6' },
  { src: '/images/gallery/letni/hf_20260215_175503_60ac0c0a-d3dc-406f-b46e-ca7a17430ba8.png', alt: 'Areál Albeř — léto pohled 7' },
  { src: '/images/gallery/letni/hf_20260215_175803_64f5c9bb-e879-4028-bb8d-38b3adc9ca19.png', alt: 'Areál Albeř — léto pohled 8' },
  { src: '/images/gallery/letni/hf_20260216_173958_1d3b666c-7d4a-4ddb-905a-d43361a98596.png', alt: 'Areál Albeř — léto pohled 9' },
  { src: '/images/gallery/letni/hf_20260216_175248_862ab5e6-422b-43a7-9ba6-58859ff969bb.png', alt: 'Areál Albeř — léto pohled 10' },
]

const winterImages = [
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-1.JPG', alt: 'Areál Albeř — zima letecky' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-2.JPG', alt: 'Areál Albeř — zima letecky 2' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-3.JPG', alt: 'Areál Albeř — zima letecky 3' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-4.JPG', alt: 'Areál Albeř — zima letecky 4' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-5.JPG', alt: 'Areál Albeř — zima letecky 5' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-6.JPG', alt: 'Areál Albeř — zima letecky 6' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-7.JPG', alt: 'Areál Albeř — zima letecky 7' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-8.JPG', alt: 'Areál Albeř — zima letecky 8' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-9.JPG', alt: 'Areál Albeř — zima letecky 9' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-10.JPG', alt: 'Areál Albeř — zima letecky 10' },
  { src: '/images/gallery/zimni/ALBĚŘDRON_FOTO-11.JPG', alt: 'Areál Albeř — zima letecky 11' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-3.JPG', alt: 'Areál Albeř — zima' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-4.JPG', alt: 'Areál Albeř — zima 2' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-5.JPG', alt: 'Areál Albeř — zima 3' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-6.JPG', alt: 'Areál Albeř — zima 4' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-7.JPG', alt: 'Areál Albeř — zima 5' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-8.JPG', alt: 'Areál Albeř — zima 6' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-9.JPG', alt: 'Areál Albeř — zima 7' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO-14.JPG', alt: 'Areál Albeř — zima 8' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-2.JPG', alt: 'Areál Albeř — zima 9' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-3.JPG', alt: 'Areál Albeř — zima 10' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-4.JPG', alt: 'Areál Albeř — zima 11' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-5.JPG', alt: 'Areál Albeř — zima 12' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-6.JPG', alt: 'Areál Albeř — zima 13' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-7.JPG', alt: 'Areál Albeř — zima 14' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-8.JPG', alt: 'Areál Albeř — zima 15' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-11.JPG', alt: 'Areál Albeř — zima 16' },
  { src: '/images/gallery/zimni/ALBĚŘKAMERA_FOTO_VYLEPSENO-12.JPG', alt: 'Areál Albeř — zima 17' },
  { src: '/images/gallery/zimni/Apartmány Albeř (1).JPG', alt: 'Apartmány Albeř — zima' },
  { src: '/images/gallery/zimni/Apartmány Albeř (2).JPG', alt: 'Apartmány Albeř — zima 2' },
  { src: '/images/gallery/zimni/Apartmány Albeř (3).JPG', alt: 'Apartmány Albeř — zima 3' },
  { src: '/images/gallery/zimni/Apartmány Albeř (4).JPG', alt: 'Apartmány Albeř — zima 4' },
  { src: '/images/gallery/zimni/Apartmány Albeř (5).JPG', alt: 'Apartmány Albeř — zima 5' },
  { src: '/images/gallery/zimni/Apartmány Albeř (6).JPG', alt: 'Apartmány Albeř — zima 6' },
  { src: '/images/gallery/zimni/Apartmány Albeř (7).JPG', alt: 'Apartmány Albeř — zima 7' },
  { src: '/images/gallery/zimni/Apartmány Albeř (9).JPG', alt: 'Apartmány Albeř — zima 8' },
  { src: '/images/gallery/zimni/Apartmány Albeř (10).JPG', alt: 'Apartmány Albeř — zima 9' },
  { src: '/images/gallery/zimni/Apartmány Albeř (11).JPG', alt: 'Apartmány Albeř — zima 10' },
  { src: '/images/gallery/zimni/Apartmány Albeř (12).JPG', alt: 'Apartmány Albeř — zima 11' },
  { src: '/images/gallery/zimni/Apartmány Albeř (13).JPG', alt: 'Apartmány Albeř — zima 12' },
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
