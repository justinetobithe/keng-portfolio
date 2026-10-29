import { Heart, Lightbulb, MessagesSquare, ScanSearch } from "lucide-react"
import { AppCard, AppCardContent } from "@/components/app/app-card"
import { AppReveal, AppStagger, AppStaggerItem } from "@/components/app/app-reveal"
import { AppEyebrow, AppSection } from "@/components/app/app-section"
import { AppButton } from "@/components/app/app-button"
import { education, profile } from "@/lib/data"

const strengthIcons = [MessagesSquare, Lightbulb, Heart, ScanSearch]

export function About() {
  return (
    <AppSection id="about" tone="cream">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <AppReveal direction="left">
          <AppEyebrow>About me</AppEyebrow>
          <h2 className="mt-5 font-heading text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.firstName} <span className="italic text-primary">—</span>
            <br />
            nice to meet you.
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-foreground/75">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-heading text-2xl italic text-primary">Let&apos;s work together!</p>
          <AppButton href="/contact" tone="soft" className="mt-6">
            Get in touch
          </AppButton>
        </AppReveal>

        <div className="flex flex-col gap-5">
          <AppStagger className="grid grid-cols-2 gap-4 sm:gap-5">
            {profile.strengths.map((strength, i) => {
              const Icon = strengthIcons[i]
              return (
                <AppStaggerItem key={strength}>
                  <AppCard
                    tone={i % 3 === 0 ? "blush" : "paper"}
                    interactive
                    className="h-full py-6"
                  >
                    <AppCardContent className="px-5 sm:px-6">
                      <span className="flex size-11 items-center justify-center rounded-full bg-background/80 text-primary">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <p className="mt-6 font-heading text-xl leading-tight sm:text-2xl">
                        {strength}
                      </p>
                    </AppCardContent>
                  </AppCard>
                </AppStaggerItem>
              )
            })}
          </AppStagger>

          <AppReveal delay={0.2}>
            <AppCard tone="paper" className="py-6">
              <AppCardContent className="flex flex-col gap-1 px-5 sm:px-6">
                <span className="text-[0.75rem] tracking-[0.25em] text-primary uppercase">
                  Education · {education.period}
                </span>
                <p className="font-heading text-xl leading-snug sm:text-2xl">{education.degree}</p>
                <p className="text-[0.95rem] text-muted-foreground">{education.school}</p>
              </AppCardContent>
            </AppCard>
          </AppReveal>
        </div>
      </div>
    </AppSection>
  )
}
