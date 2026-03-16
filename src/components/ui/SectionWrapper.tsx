'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  id?: string
  className?: string
  children: React.ReactNode
  bgColor?: string
}

export function SectionWrapper({ id, className = '', children, bgColor = 'white' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-6 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
