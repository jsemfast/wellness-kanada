'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  suffix?: string
  duration?: number
  formatNumber?: boolean
}

export function AnimatedCounter({ target, suffix = '', duration = 2000, formatNumber = true }: Props) {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const raf = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [started, target, duration])

  const display = formatNumber ? current.toLocaleString('cs-CZ') : current

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}
