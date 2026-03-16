import { AreaSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import Image from 'next/image'

type AreaData = z.infer<typeof AreaSchema>

interface Props {
  data: AreaData
}

const areaImages = [
  '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-3.JPG',
  '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-5.JPG',
  '/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-7.JPG',
  '/images/gallery/ALBĚŘDRON_FOTO-5.JPG',
]

export function AreaSection({ data }: Props) {
  return (
    <SectionWrapper id="area" bgColor="white">
      <div className="text-center mb-12">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Co kupujete</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] leading-tight">
          {data.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* List */}
        <div className="space-y-4">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 bg-[#f8f7f4] rounded-xl border-l-4 border-[#1a3a2a]"
            >
              <span className="text-[#1a3a2a] font-bold text-xl flex-shrink-0">{i + 1}</span>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          ))}

          <div className="mt-6 p-5 bg-[#1a3a2a] rounded-xl text-white">
            <p className="text-sm font-semibold text-green-300 uppercase tracking-wider mb-1">Bonus</p>
            <p className="font-medium">Projektová dokumentace pro rozšíření o dalších 4 apartmány v 1. patře — stavební povolení připraveno.</p>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3">
          {areaImages.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Areál Albeř — pohled ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
