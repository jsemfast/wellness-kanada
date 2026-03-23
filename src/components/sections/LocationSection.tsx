import { LocationSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import Image from 'next/image'

type LocationData = z.infer<typeof LocationSchema>

interface Props {
  data: LocationData
}

export function LocationSection({ data }: Props) {
  return (
    <SectionWrapper id="location" bgColor="#f8f7f4">
      <div className="text-center mb-12">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Lokalita</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] max-w-3xl mx-auto leading-tight">
          {data.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              <span className="text-[#c9882a] font-bold text-lg flex-shrink-0">✓</span>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/gallery/letni/ALBĚŘKAMERA_FOTO-12.JPG"
            alt="Česká Kanada — letecký pohled na krajinu"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-medium">
              Albeř, Česká Kanada — přírodní ráj jižních Čech
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
