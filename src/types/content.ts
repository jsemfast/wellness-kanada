import { z } from 'zod'

export const HeroSchema = z.object({
  headline: z.string(),
  subheadline: z.string(),
  ctaPrimary: z.string(),
  ctaSecondary: z.string(),
})

export const StatItemSchema = z.object({
  value: z.string(),
  label: z.string(),
  suffix: z.string().optional(),
})

export const StatsSchema = z.object({
  items: z.array(StatItemSchema),
})

export const WhyItemSchema = z.object({
  icon: z.string(),
  text: z.string(),
})

export const WhySchema = z.object({
  headline: z.string(),
  items: z.array(WhyItemSchema),
})

export const OwnersSchema = z.object({
  headline: z.string(),
  text: z.string(),
  imageAlt: z.string(),
})

export const LocationItemSchema = z.object({
  text: z.string(),
})

export const LocationSchema = z.object({
  headline: z.string(),
  items: z.array(LocationItemSchema),
})

export const AreaItemSchema = z.object({
  text: z.string(),
})

export const AreaSchema = z.object({
  headline: z.string(),
  items: z.array(AreaItemSchema),
})

export const RevenueRowSchema = z.object({
  year: z.number(),
  gastro: z.number(),
  ubytovani: z.number(),
  festival: z.number(),
  celkem: z.number(),
})

export const EconomicsSchema = z.object({
  headline: z.string(),
  note: z.string(),
  revenueData: z.array(RevenueRowSchema),
})

export const PotentialItemSchema = z.object({
  text: z.string(),
})

export const PotentialSchema = z.object({
  headline: z.string(),
  intro: z.string(),
  items: z.array(PotentialItemSchema),
})

export const KnowhowItemSchema = z.object({
  text: z.string(),
})

export const KnowhowSchema = z.object({
  headline: z.string(),
  items: z.array(KnowhowItemSchema),
})

export const TargetGroupSchema = z.object({
  title: z.string(),
  description: z.string(),
})

export const TargetSchema = z.object({
  headline: z.string(),
  groups: z.array(TargetGroupSchema),
})

export const FaqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

export const FaqSchema = z.object({
  headline: z.string(),
  items: z.array(FaqItemSchema),
})

export const ContactSchema = z.object({
  headline: z.string(),
  subheadline: z.string(),
})

export const ContentSchema = z.object({
  hero: HeroSchema,
  stats: StatsSchema,
  why: WhySchema,
  owners: OwnersSchema,
  location: LocationSchema,
  area: AreaSchema,
  economics: EconomicsSchema,
  potential: PotentialSchema,
  knowhow: KnowhowSchema,
  target: TargetSchema,
  faq: FaqSchema,
  contact: ContactSchema,
})

export type Content = z.infer<typeof ContentSchema>
export type Hero = z.infer<typeof HeroSchema>
export type StatItem = z.infer<typeof StatItemSchema>
export type RevenueRow = z.infer<typeof RevenueRowSchema>
export type FaqItem = z.infer<typeof FaqItemSchema>
export type TargetGroup = z.infer<typeof TargetGroupSchema>
