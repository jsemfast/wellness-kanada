import { PotentialSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type PotentialData = z.infer<typeof PotentialSchema>

interface Props {
  data: PotentialData
}

const icons: Record<number, string> = {
  0: '⛺',
  1: '🧖',
  2: '🏢',
  3: '❄️',
  4: '💒',
  5: '🚲',
}

export function PotentialSection({ data }: Props) {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Potenciál</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] max-w-3xl mx-auto leading-tight">
          {data.headline}
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{data.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.items.map((item, i) => (
          <div
            key={i}
            className="group flex items-start gap-4 p-6 bg-[#f8f7f4] rounded-xl hover:bg-[#1a3a2a] transition-colors duration-300"
          >
            <span className="text-2xl flex-shrink-0">{icons[i] || '✦'}</span>
            <div>
              <p className="text-gray-800 group-hover:text-white font-medium transition-colors leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center bg-gradient-to-r from-[#1a3a2a] to-[#2d5a42] rounded-2xl p-8 md:p-12 text-white">
        <p className="text-lg font-serif italic text-green-200 mb-2">
          &ldquo;Každý z těchto segmentů je profitabilní. Žádný z nich jsme nestihli rozvinout naplno.&rdquo;
        </p>
        <p className="text-sm text-green-300">— Pavel Rychlí, majitel</p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-[#c9882a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b07720] transition-colors"
        >
          Prodiskutujeme potenciál →
        </a>
      </div>
    </SectionWrapper>
  )
}
