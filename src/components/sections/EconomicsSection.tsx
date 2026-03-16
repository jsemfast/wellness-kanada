import { EconomicsSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EmailGateChart } from '@/components/ui/EmailGateChart'

type EconomicsData = z.infer<typeof EconomicsSchema>

interface Props {
  data: EconomicsData
}

export function EconomicsSection({ data }: Props) {
  const last = data.revenueData[data.revenueData.length - 1]
  const first = data.revenueData[0]
  const growth = Math.round(((last.celkem - first.celkem) / first.celkem) * 100)

  return (
    <SectionWrapper id="economics" bgColor="#f8f7f4">
      <div className="text-center mb-12">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Ekonomika</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a] leading-tight">
          {data.headline}
        </h2>
      </div>

      {/* Key metrics — always visible */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
          <p className="text-3xl font-bold font-serif text-[#1a3a2a]">
            {last.celkem.toLocaleString('cs-CZ')} Kč
          </p>
          <p className="text-gray-500 text-sm mt-1">Celkové tržby 2025</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
          <p className="text-3xl font-bold font-serif text-[#c9882a]">
            +{growth} %
          </p>
          <p className="text-gray-500 text-sm mt-1">Růst od roku {first.year}</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
          <p className="text-3xl font-bold font-serif text-[#1a3a2a]">~20 %</p>
          <p className="text-gray-500 text-sm mt-1">Průměrný roční růst</p>
        </div>
      </div>

      {/* Chart + table — gated behind email */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
        <h3 className="font-serif text-lg font-semibold text-[#1a3a2a] mb-6">
          Vývoj tržeb 2020–2025 (Kč)
        </h3>
        <EmailGateChart data={data.revenueData} />
        <p className="text-xs text-gray-400 mt-4 text-center">
          {data.note}
        </p>
      </div>
    </SectionWrapper>
  )
}
