import { TargetSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type TargetData = z.infer<typeof TargetSchema>

interface Props {
  data: TargetData
}

const groupIcons = ['🏡', '📊', '🏦']
const groupColors = ['bg-green-50 border-green-200', 'bg-amber-50 border-amber-200', 'bg-blue-50 border-blue-200']
const groupTitleColors = ['text-[#1a3a2a]', 'text-[#c9882a]', 'text-blue-700']

export function TargetSection({ data }: Props) {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Pro koho</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] max-w-3xl mx-auto leading-tight">
          {data.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.groups.map((group, i) => (
          <div
            key={i}
            className={`rounded-2xl border-2 p-8 text-center ${groupColors[i]}`}
          >
            <div className="text-5xl mb-5">{groupIcons[i]}</div>
            <h3 className={`font-serif text-xl font-bold mb-3 ${groupTitleColors[i]}`}>
              {group.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">{group.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#contact"
          className="inline-block bg-[#1a3a2a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d5a42] transition-colors"
        >
          Jsem správný kupující →
        </a>
      </div>
    </SectionWrapper>
  )
}
