import { OwnersSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import Image from 'next/image'

type OwnersData = z.infer<typeof OwnersSchema>

interface Props {
  data: OwnersData
}

export function OwnersSection({ data }: Props) {
  const paragraphs = data.text.split('\n\n')

  return (
    <SectionWrapper bgColor="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/ALBĚŘKAMERA_FOTO_VYLEPSENO-1.JPG"
              alt={data.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#c9882a]/10 rounded-full -z-10" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1a3a2a]/10 rounded-full -z-10" />
        </div>

        {/* Text */}
        <div>
          <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Příběh majitelů</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-8 leading-tight">
            {data.headline}
          </h2>
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-8 border-l-4 border-[#c9882a] pl-5">
            <p className="text-[#1a3a2a] font-serif italic text-lg">
              &ldquo;Ne opustit — předat.&rdquo;
            </p>
            <footer className="text-sm text-gray-500 mt-2">— Pavel a Lucie Rychlý</footer>
          </blockquote>
        </div>
      </div>
    </SectionWrapper>
  )
}
