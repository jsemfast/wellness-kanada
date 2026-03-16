'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { RevenueRow } from '@/types/content'

interface Props {
  data: RevenueRow[]
}

const formatMillions = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)} M`
  if (value >= 1000) return `${(value / 1000).toFixed(0)} tis.`
  return `${value}`
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg text-sm">
      <p className="font-semibold mb-2">{label}</p>
      {payload.map((item) => (
        <p key={item.name} style={{ color: item.color }}>
          {item.name}: {item.value.toLocaleString('cs-CZ')} Kč
        </p>
      ))}
    </div>
  )
}

export function RevenueChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
        <defs>
          <linearGradient id="gastroGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1a3a2a" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1a3a2a" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="ubytovaniGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c9882a" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#c9882a" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="festivalGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6b9e78" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6b9e78" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="year" tick={{ fontSize: 13 }} />
        <YAxis tickFormatter={formatMillions} tick={{ fontSize: 12 }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          formatter={(value) => {
            const labels: Record<string, string> = {
              gastro: 'Gastro',
              ubytovani: 'Ubytování',
              festival: 'Festival / Eventy',
            }
            return labels[value] || value
          }}
        />
        <Area
          type="monotone"
          dataKey="gastro"
          name="gastro"
          stackId="1"
          stroke="#1a3a2a"
          fill="url(#gastroGrad)"
        />
        <Area
          type="monotone"
          dataKey="ubytovani"
          name="ubytovani"
          stackId="1"
          stroke="#c9882a"
          fill="url(#ubytovaniGrad)"
        />
        <Area
          type="monotone"
          dataKey="festival"
          name="festival"
          stackId="1"
          stroke="#6b9e78"
          fill="url(#festivalGrad)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
