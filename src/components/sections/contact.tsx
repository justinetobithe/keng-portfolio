"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"
import { Check, Copy, Download, Mail, MapPin, Phone, Send } from "lucide-react"
import { AppButton } from "@/components/app/app-button"
import { AppCard, AppCardContent } from "@/components/app/app-card"
import { AppReveal } from "@/components/app/app-reveal"
import { AppEyebrow, AppSection } from "@/components/app/app-section"
import { Input } from "@/components/ui/input"
import { profile } from "@/lib/data"

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: "Based in", value: profile.location, href: undefined },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: "", message: "" })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Hello from ${form.name || "your portfolio"}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <AppSection id="contact" tone="cream" className="pt-32 sm:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <AppReveal direction="left">
          <AppEyebrow>05 — Contact</AppEyebrow>
          <h1 className="mt-5 font-heading text-5xl leading-none font-light sm:text-6xl lg:text-7xl">
            Let&apos;s work <span className="italic text-primary">together!</span>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-foreground/70">
            Looking for a team leader or customer experience specialist who cares about people and
            numbers alike? I&apos;d love to hear from you.
          </p>

          <ul className="mt-10 flex flex-col gap-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition-colors hover:border-border hover:bg-card"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-4" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.8rem] tracking-[0.22em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="block truncate text-[1.05rem] text-foreground">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AppButton href={profile.resume} download={profile.resumeFileName} size="lg">
              <Download />
              Download resume
            </AppButton>
            <AppButton tone="outline" size="lg" onClick={copyEmail}>
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy email"}
            </AppButton>
          </div>
          <p className="mt-6 text-[0.82rem] tracking-wide text-muted-foreground">
            Character references available upon request.
          </p>
        </AppReveal>

        <AppReveal direction="right" delay={0.1}>
          <AppCard tone="blush" className="relative py-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-card/50 blur-2xl"
            />
            <AppCardContent className="relative">
              <div className="mb-6 flex items-center gap-4 border-b border-primary/15 pb-6">
                <motion.div
                  className="relative size-16 shrink-0 overflow-hidden rounded-full border-4 border-card shadow-lg sm:size-20"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={profile.photo}
                    alt={profile.fullName}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </motion.div>
                <div className="min-w-0">
                  <p className="font-heading text-3xl leading-none">Send a note</p>
                  <p className="mt-2 flex items-center gap-2 text-[0.82rem] text-muted-foreground">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Open to new opportunities
                  </p>
                </div>
              </div>
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <Input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12 rounded-xl border-primary/15 bg-card/80 px-4 text-[0.95rem]"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="How can I help?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-primary/15 bg-card/80 px-4 py-3 text-[0.95rem] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
                <AppButton type="submit" size="lg" className="w-full">
                  <Send />
                  Send message
                </AppButton>
              </form>
            </AppCardContent>
          </AppCard>
        </AppReveal>
      </div>
    </AppSection>
  )
}
