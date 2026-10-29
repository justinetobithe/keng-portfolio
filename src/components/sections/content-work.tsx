"use client"

import { motion } from "motion/react"
import { Clapperboard, Heart, Megaphone, MessageCircle, Play, Sparkles } from "lucide-react"
import { cn } from "cn"
import { AppButton } from "@/components/app/app-button"
import { AppSection } from "@/components/app/app-section"
import { AppStagger, AppStaggerItem } from "@/components/app/app-reveal"
import { contentWork } from "@/lib/data"

const icons = [Clapperboard, Sparkles, Megaphone, MessageCircle]

function PhoneScreen({ index }: { index: number }) {
  const Icon = icons[index]

  if (index === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="flex size-14 items-center justify-center rounded-full bg-white/70 text-primary shadow-lg"
        >
          <Play className="size-5 translate-x-0.5" fill="currentColor" />
        </motion.span>
        <div className="absolute inset-x-4 bottom-5 h-1 overflow-hidden rounded-full bg-white/50">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
        </div>
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="flex h-full flex-col gap-2 p-3 pt-6">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/50">
              <motion.div
                className="h-full bg-white"
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 6, delay: i * 2, repeatDelay: 0 }}
              />
            </div>
          ))}
        </div>
        <div className="mt-auto mb-6 space-y-2 px-1">
          <div className="h-2 w-3/4 rounded-full bg-white/70" />
          <div className="h-2 w-1/2 rounded-full bg-white/50" />
        </div>
      </div>
    )
  }

  if (index === 2) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
        <Icon className="size-7 text-primary" strokeWidth={1.3} />
        <p className="font-heading text-2xl leading-none italic text-foreground">Giveaway</p>
        <span className="rounded-full bg-primary px-3 py-1 text-[0.5rem] tracking-[0.2em] text-primary-foreground uppercase">
          Join now
        </span>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col justify-end gap-2 p-3 pb-6">
      {["Love this!", "Where can I order?", "So beautiful"].map((msg, i) => (
        <motion.div
          key={msg}
          initial={{ opacity: 0, x: i % 2 ? 10 : -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.3 }}
          className={cn(
            "max-w-[85%] rounded-2xl px-3 py-1.5 text-[0.6rem] shadow-sm",
            i % 2 ? "self-end bg-primary text-primary-foreground" : "self-start bg-white/85 text-foreground"
          )}
        >
          {msg}
        </motion.div>
      ))}
      <div className="flex items-center gap-1 self-start text-[0.55rem] text-primary">
        <Heart className="size-3" fill="currentColor" /> 2.4k
      </div>
    </div>
  )
}

export function ContentWork({
  withHeader = true,
  showLink = false,
}: {
  withHeader?: boolean
  showLink?: boolean
}) {
  return (
    <AppSection
      id="work"
      tone="cream"
      {...(withHeader && {
        eyebrow: "Content examples",
        title: (
          <>
            Social stories, <span className="italic text-primary">crafted</span>
          </>
        ),
        description:
          "As a marketing and social media manager, I planned, created and edited content for Facebook, Instagram and TikTok using Canva and CapCut.",
      })}
    >
      <AppStagger className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-4" stagger={0.15}>
        {contentWork.map((item, i) => (
          <AppStaggerItem key={item.title} className="flex flex-col items-center">
            <motion.div
              whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative aspect-[9/18] w-full max-w-[11rem] rounded-[1.9rem] bg-[#1f1915] p-[5px] shadow-[0_30px_60px_-25px_rgba(58,44,37,0.65)]"
            >
              <div
                className={cn(
                  "relative h-full w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br",
                  item.tone
                )}
              >
                <div className="absolute top-2 left-1/2 z-10 h-4 w-14 -translate-x-1/2 rounded-full bg-[#1f1915]" />
                <div className="light-sweep absolute inset-0 opacity-40" />
                <PhoneScreen index={i} />
              </div>
            </motion.div>
            <p className="mt-5 font-heading text-2xl">{item.title}</p>
            <p className="mt-1 text-center text-[0.82rem] leading-relaxed text-muted-foreground">
              {item.caption}
            </p>
          </AppStaggerItem>
        ))}
      </AppStagger>
      {showLink && (
        <div className="mt-14 flex justify-center">
          <AppButton href="/work" tone="outline">
            Explore my work
          </AppButton>
        </div>
      )}
    </AppSection>
  )
}
