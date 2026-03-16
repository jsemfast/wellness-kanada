'use client'

import { useState } from 'react'
import { FaqSchema } from '@/types/content'
import { z } from 'zod'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type FaqData = z.infer<typeof FaqSchema>

interface Props {
  data: FaqData
}

export function FaqSection({ data }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <SectionWrapper id="faq" bgColor="white">
      <div className="text-center mb-12">
        <p className="text-[#c9882a] text-sm font-semibold uppercase tracking-widest mb-3">Časté otázky</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a2a]">
          {data.headline}
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {data.items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              aria-expanded={openIdx === i}
            >
              <span className="font-semibold text-[#1a3a2a] pr-4">{item.question}</span>
              <span className={`text-[#c9882a] text-xl flex-shrink-0 transition-transform duration-200 ${openIdx === i ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            {openIdx === i && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
