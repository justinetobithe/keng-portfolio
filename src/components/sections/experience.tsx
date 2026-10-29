"use client"

import { AnimatePresence, motion } from "motion/react"
import { Plus } from "lucide-react"
import { cn } from "cn"
import { AppCard } from "@/components/app/app-card"
import { AppReveal } from "@/components/app/app-reveal"
import { AppSection } from "@/components/app/app-section"
import { experienceFilters, experiences } from "@/lib/data"
import { useAppStore } from "@/store/use-app-store"

export function Experience({ withHeader = true }: { withHeader?: boolean }) {
  const filter = useAppStore((s) => s.experienceFilter)
  const setFilter = useAppStore((s) => s.setExperienceFilter)
  const expandedRole = useAppStore((s) => s.expandedRole)
  const toggleRole = useAppStore((s) => s.toggleRole)

  const visible = experiences.filter((e) => filter === "all" || e.category === filter)

  return (
    <AppSection
      id="experience"
      tone="paper"
      {...(withHeader && {
        eyebrow: "Experience",
        title: (
          <>
            Where I&apos;ve <span className="italic text-primary">grown</span>
          </>
        ),
        description:
          "Seven roles across fintech, banking, retail and digital marketing, each one sharpening how I lead, listen and solve.",
      })}
    >
      <AppReveal className="-mx-5 mb-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-2 rounded-full border border-border bg-background/70 p-1.5">
          {experienceFilters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                "relative rounded-full px-4 py-2 text-[0.78rem] tracking-[0.16em] whitespace-nowrap uppercase transition-colors",
                filter === f.value ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {filter === f.value && (
                <motion.span
                  layoutId="exp-filter"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>
      </AppReveal>

      <motion.ol layout className="relative flex flex-col gap-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((exp, i) => {
            const open = expandedRole === exp.id
            return (
              <motion.li
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <AppCard
                  tone={open ? "blush" : "paper"}
                  className="gap-0 py-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleRole(exp.id)}
                    aria-expanded={open}
                    className="grid w-full grid-cols-[1fr_auto] items-start gap-4 px-5 py-6 text-left sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-8 sm:px-8"
                  >
                    <span className="order-2 col-span-2 text-[0.78rem] tracking-[0.2em] text-primary uppercase sm:order-none sm:col-span-1">
                      {exp.period}
                    </span>
                    <span className="order-1 sm:order-none">
                      <span className="block font-heading text-2xl leading-tight sm:text-[1.7rem]">
                        {exp.role}
                      </span>
                      <span className="mt-1 block text-[0.95rem] text-muted-foreground">
                        {exp.company} · {exp.meta}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      className={cn(
                        "order-1 flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors sm:order-none",
                        open ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground"
                      )}
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="grid gap-3 border-t border-primary/15 px-5 pt-5 pb-7 sm:grid-cols-2 sm:gap-x-10 sm:px-8 sm:pl-[14rem]">
                          {exp.highlights.map((h, j) => (
                            <motion.li
                              key={h}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 * j + 0.1 }}
                              className="flex gap-3 text-[0.95rem] leading-relaxed text-foreground/80"
                            >
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                              {h}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AppCard>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </motion.ol>
    </AppSection>
  )
}
