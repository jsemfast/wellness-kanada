import { getContent } from '@/lib/content'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { WhySection } from '@/components/sections/WhySection'
import { OwnersSection } from '@/components/sections/OwnersSection'
import { LocationSection } from '@/components/sections/LocationSection'
import { AreaSection } from '@/components/sections/AreaSection'
import { EconomicsSection } from '@/components/sections/EconomicsSection'
import { PotentialSection } from '@/components/sections/PotentialSection'
import { KnowhowSection } from '@/components/sections/KnowhowSection'
import { TargetSection } from '@/components/sections/TargetSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default async function Home() {
  const content = await getContent()

  return (
    <main>
      <HeroSection data={content.hero} />
      <StatsSection items={content.stats.items} />
      <WhySection data={content.why} />
      <OwnersSection data={content.owners} />
      <LocationSection data={content.location} />
      <AreaSection data={content.area} />
      <EconomicsSection data={content.economics} />
      <PotentialSection data={content.potential} />
      <KnowhowSection data={content.knowhow} />
      <TargetSection data={content.target} />
      <GallerySection />
      <FaqSection data={content.faq} />
      <ContactSection data={content.contact} />
    </main>
  )
}
