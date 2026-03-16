import { StatItem } from '@/types/content'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

interface Props {
  items: StatItem[]
}

export function StatsSection({ items }: Props) {
  return (
    <section id="stats" className="bg-[#1a3a2a] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter
                  target={Number(item.value)}
                  suffix={item.suffix || ''}
                  formatNumber={Number(item.value) > 999}
                />
              </div>
              <p className="text-green-200 text-sm leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
