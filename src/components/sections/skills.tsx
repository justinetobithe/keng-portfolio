import { AppCard } from "@/components/app/app-card"
import { AppReveal, AppStagger, AppStaggerItem } from "@/components/app/app-reveal"
import { AppSection } from "@/components/app/app-section"
import { skills } from "@/lib/data"

export function Skills() {
  return (
    <AppSection id="skills" tone="taupe">
      <AppReveal scale>
        <AppCard tone="paper" className="grid gap-0 overflow-hidden py-0 lg:grid-cols-[5rem_1fr_18rem]">
          <div className="flex items-center justify-center border-b border-border/60 bg-card py-6 lg:border-r lg:border-b-0 lg:py-10">
            <h2 className="font-heading text-4xl font-normal whitespace-nowrap lg:rotate-180 lg:text-5xl lg:[writing-mode:vertical-rl]">
              Skills <span className="italic text-primary">&amp;</span> tools
            </h2>
          </div>

          <AppStagger className="divide-y divide-border/70 bg-secondary/60 px-5 py-4 sm:px-10 sm:py-8" stagger={0.08}>
            {skills.map((s) => (
              <AppStaggerItem key={s.group} className="grid gap-3 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <p className="text-[0.78rem] font-medium tracking-[0.22em] text-primary uppercase underline decoration-primary/40 underline-offset-[6px]">
                  {s.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/15 bg-card/80 px-3 py-1.5 text-[0.82rem] text-foreground/80 transition-colors hover:border-primary/40 hover:bg-card"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </AppStaggerItem>
            ))}
          </AppStagger>

          <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#d9c3b4] via-[#e9d8cb] to-[#f5ebe2] lg:block">
            <div className="absolute -top-10 -left-16 h-[140%] w-24 rotate-[25deg] bg-white/40 blur-2xl" />
            <div className="absolute top-12 left-24 h-[140%] w-10 rotate-[25deg] bg-white/30 blur-xl" />
            <div className="absolute right-8 bottom-10 left-8">
              <p className="font-heading text-3xl leading-tight italic text-foreground/80">
                &ldquo;Every interaction is a chance to build trust.&rdquo;
              </p>
            </div>
          </div>
        </AppCard>
      </AppReveal>
    </AppSection>
  )
}
