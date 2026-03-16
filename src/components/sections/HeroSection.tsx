import { Hero } from '@/types/content'
import Image from 'next/image'

interface Props {
  data: Hero
}

export function HeroSection({ data }: Props) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/ALBĚŘDRON_FOTO-1.JPG"
          alt="Turistický areál Albeř — letecký pohled"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-[#c9882a]/20 border border-[#c9882a] text-[#f0b96a] text-sm font-medium px-4 py-1.5 rounded-full">
            Exkluzivní prodej — Česká Kanada
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          {data.headline}
        </h1>

        <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          {data.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#c9882a] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#b07720] transition-all hover:scale-105 shadow-lg"
          >
            {data.ctaPrimary} →
          </a>
          <a
            href="#stats"
            className="border-2 border-white/70 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-all"
          >
            {data.ctaSecondary} ↓
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto text-center">
          <div>
            <div className="text-2xl font-bold font-serif text-[#f0b96a]">6 let</div>
            <div className="text-xs text-white/70 mt-1">provozu</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#f0b96a]">4,8 ★</div>
            <div className="text-xs text-white/70 mt-1">hodnocení</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#f0b96a]">95 %</div>
            <div className="text-xs text-white/70 mt-1">obsazenost</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-0.5 h-10 bg-white/40 mx-auto" />
      </div>
    </section>
  )
}
