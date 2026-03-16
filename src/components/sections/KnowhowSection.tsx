import { KnowhowSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type KnowhowData = z.infer<typeof KnowhowSchema>

interface Props {
  data: KnowhowData
}

export function KnowhowSection({ data }: Props) {
  return (
    <SectionWrapper bgColor="#f8f7f4">
      <div className="text-center mb-12">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Co dostanete</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] max-w-3xl mx-auto leading-tight">
          {data.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {data.items.map((item, i) => (
          <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-[#1a3a2a] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
              {i + 1}
            </div>
            <p className="text-gray-700 leading-relaxed pt-0.5">{item.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
