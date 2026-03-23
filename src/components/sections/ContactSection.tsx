import { ContactSchema } from '@/types/content'
import { z } from 'zod'
import { ContactForm } from '@/components/ui/ContactForm'

type ContactData = z.infer<typeof ContactSchema>

interface Props {
  data: ContactData
}

export function ContactSection({ data }: Props) {
  return (
    <section id="contact" className="py-20 px-6 bg-[#1a3a2a]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div className="text-white">
            <p className="text-[#f0b96a] text-sm font-semibold uppercase tracking-widest mb-3">Kontakt</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {data.headline}
            </h2>
            <p className="text-green-200 text-lg mb-8">{data.subheadline}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c9882a]/20 border border-[#c9882a]/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#f0b96a]">🔒</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Osobní přístup</p>
                  <p className="text-green-200 text-sm">Potkejme se osobně v Praze nebo přímo na místě.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c9882a]/20 border border-[#c9882a]/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#f0b96a]">📋</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Poskytneme potřebná data</p>
                  <p className="text-green-200 text-sm">Stav nemovitosti, výkon podnikání a taky rezervace na budoucí období.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c9882a]/20 border border-[#c9882a]/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#f0b96a]">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Aktivní jednání</p>
                  <p className="text-green-200 text-sm">Není na co čekat. Jednáme ihned a proaktivně.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
