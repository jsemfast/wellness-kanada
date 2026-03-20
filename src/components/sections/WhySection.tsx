import { WhySchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type WhyData = z.infer<typeof WhySchema>

interface Props {
  data: WhyData
}

export function WhySection({ data }: Props) {
  return (
    <SectionWrapper bgColor="#f8f7f4">
      <div className="text-center mb-14">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Proč tento projekt</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] max-w-3xl mx-auto leading-tight">
          {data.headline}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl p-7 shadow-sm border hover:shadow-md transition-shadow ${
              i === 2
                ? 'bg-[#1a3a2a] border-[#1a3a2a] text-white'
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="text-4xl mb-5">{item.icon}</div>
            <p className={`leading-relaxed font-semibold text-base md:text-lg ${i === 2 ? 'text-white' : 'text-gray-800'}`}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
