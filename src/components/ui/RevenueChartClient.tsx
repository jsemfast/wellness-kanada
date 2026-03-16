'use client'

import dynamic from 'next/dynamic'
import { RevenueRow } from '@/types/content'

const RevenueChart = dynamic(
  () => import('@/components/ui/RevenueChart').then((m) => m.RevenueChart),
  { ssr: false, loading: () => <div className="h-80 animate-pulse bg-gray-100 rounded-xl" /> }
)

interface Props {
  data: RevenueRow[]
}

export function RevenueChartClient({ data }: Props) {
  return <RevenueChart data={data} />
}
