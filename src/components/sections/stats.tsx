"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "motion/react"
import { AppSection } from "@/components/app/app-section"
import { AppStagger, AppStaggerItem } from "@/components/app/app-reveal"
import { stats } from "@/lib/data"

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <AppSection
      tone="blush"
      align="center"
      eyebrow="Why work with me"
      title={
        <>
          Service that builds <span className="italic text-primary">trust</span>
        </>
      }
      description="Calm under pressure, precise with details, and focused on leaving every customer and teammate better off than before."
    >
      <AppStagger className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <AppStaggerItem key={stat.label} className="text-center">
            <p className="font-heading text-5xl font-light text-foreground sm:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <div className="mx-auto my-4 h-px w-16 bg-primary/40" />
            <p className="text-[0.8rem] font-medium tracking-[0.22em] text-primary uppercase">
              {stat.label}
            </p>
            <p className="mx-auto mt-2 max-w-[13rem] text-[0.95rem] leading-relaxed text-muted-foreground">
              {stat.caption}
            </p>
          </AppStaggerItem>
        ))}
      </AppStagger>
    </AppSection>
  )
}
