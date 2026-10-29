"use client"

import { motion } from "motion/react"
import { Download } from "lucide-react"
import { AppButton } from "@/components/app/app-button"
import { AppReveal } from "@/components/app/app-reveal"
import { profile } from "@/lib/data"

const marquee = [
  "Team leadership",
  "Customer experience",
  "KPI monitoring",
  "AML & KYC",
  "Coaching",
  "Social media",
  "Multichannel support",
]

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="border-y border-primary/15 py-5">
        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-heading text-2xl italic text-primary/80 sm:text-3xl">
              {item}
              <span className="size-1.5 rounded-full bg-primary/40" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <AppReveal>
          <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-[1.05] sm:text-6xl">
            Need a steady hand for your <span className="italic text-primary">customers</span> and
            your team?
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-foreground/70">
            I&apos;m open to roles in customer experience, team leadership and social media
            management.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <AppButton href="/contact" size="lg">
              Let&apos;s talk
            </AppButton>
            <AppButton
              href={profile.resume}
              download={profile.resumeFileName}
              tone="outline"
              size="lg"
            >
              <Download />
              Download resume
            </AppButton>
          </div>
        </AppReveal>
      </div>
    </section>
  )
}
