"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { AppEyebrow } from "@/components/app/app-section"

const ease = [0.22, 1, 0.36, 1] as const

type AppPageHeaderProps = {
  index: string
  eyebrow: string
  title: string
  accent: string
  description: string
  aside?: React.ReactNode
}

export function AppPageHeader({
  index,
  eyebrow,
  title,
  accent,
  description,
  aside,
}: AppPageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply" />
      <motion.div
        aria-hidden
        className="absolute top-0 right-0 hidden h-full w-[30%] bg-secondary md:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease }}
        style={{ originX: 1 }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-4 -bottom-16 font-heading text-[11rem] leading-none text-primary/[0.07] italic select-none sm:text-[16rem] lg:text-[20rem]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease }}
      >
        {index}
      </motion.span>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_16rem] md:items-end lg:grid-cols-[1fr_20rem]">
        <div>
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex items-center gap-2 text-[0.75rem] tracking-[0.22em] text-muted-foreground uppercase"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span className="text-primary">/</span>
            <span className="text-foreground">{eyebrow}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            <AppEyebrow>
              {index} — {eyebrow}
            </AppEyebrow>
          </motion.div>

          <h1 className="mt-6 font-heading text-[3.2rem] leading-[0.95] font-light tracking-tight sm:text-7xl lg:text-8xl">
            {[title, accent].map((word, i) => (
              <span key={word} className="block overflow-hidden pb-2">
                <motion.span
                  className={i === 1 ? "block italic text-primary" : "block"}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, delay: 0.3 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-foreground/70 sm:text-[1.2rem]"
          >
            {description}
          </motion.p>
        </div>

        {aside && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  )
}
