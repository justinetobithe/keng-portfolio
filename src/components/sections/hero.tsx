"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { ArrowDown, Download, MapPin } from "lucide-react"
import { AppButton } from "@/components/app/app-button"
import { AppEyebrow } from "@/components/app/app-section"
import { profile } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden bg-background pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply" />
      <motion.div
        aria-hidden
        className="absolute top-0 right-0 hidden h-full w-[42%] bg-secondary lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease }}
        style={{ originY: 0 }}
      />
      <motion.div
        aria-hidden
        className="absolute top-0 right-0 hidden h-full w-[9%] bg-card lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease }}
        style={{ originY: 0 }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <motion.div style={{ y: textY }} className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <AppEyebrow>Portfolio · {profile.year}</AppEyebrow>
          </motion.div>

          <h1 className="mt-6 font-heading text-[3.4rem] leading-[0.92] font-light tracking-tight sm:text-7xl lg:text-[6.5rem]">
            {[profile.firstName, profile.lastName].map((word, i) => (
              <span key={word} className="block overflow-hidden pb-2">
                <motion.span
                  className={i === 1 ? "block italic text-primary" : "block"}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.4 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
          >
            <p className="mt-6 text-[0.8rem] tracking-[0.28em] text-muted-foreground uppercase sm:text-[0.82rem]">
              {profile.title} <span className="mx-2 text-primary">/</span> {profile.subtitle}
            </p>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-foreground/75 sm:text-[1.2rem]">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AppButton href={profile.resume} download={profile.resumeFileName} size="lg">
                <Download />
                Download resume
              </AppButton>
              <AppButton href="/contact" tone="outline" size="lg">
                Let&apos;s work together
              </AppButton>
            </div>

            <div className="mt-10 flex items-center gap-2 text-[0.95rem] text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {profile.location}
            </div>
          </motion.div>
        </motion.div>

        <div className="relative order-1 mx-auto w-full max-w-[22rem] sm:max-w-sm lg:order-2 lg:max-w-none">
          <motion.div
            aria-hidden
            className="absolute -inset-4 rounded-t-full bg-secondary lg:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
          />
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, delay: 0.3, ease }}
            className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-t-full shadow-[0_40px_80px_-40px_rgba(91,64,51,0.6)] lg:w-[85%]"
          >
            <Image
              src={profile.photo}
              alt={profile.fullName}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7b5b4c]/25 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="absolute bottom-8 -left-2 rounded-2xl border border-white/70 bg-card/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6 lg:left-0"
          >
            <p className="font-heading text-3xl leading-none text-primary">5+</p>
            <p className="mt-1 text-[0.8rem] tracking-[0.2em] text-muted-foreground uppercase">
              Years in CX
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
            className="absolute top-10 -right-2 rounded-full border border-white/70 bg-card/85 px-4 py-2 text-[0.75rem] tracking-[0.2em] uppercase shadow-xl backdrop-blur-md sm:-right-6 lg:right-0"
          >
            <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-emerald-500 align-middle" />
            Open to work
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#highlights"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
