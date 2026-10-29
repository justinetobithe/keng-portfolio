import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AppButton } from "@/components/app/app-button"
import { AppCard, AppCardContent } from "@/components/app/app-card"
import { AppStagger, AppStaggerItem } from "@/components/app/app-reveal"
import { AppSection } from "@/components/app/app-section"
import { experiences } from "@/lib/data"

export function Highlights() {
  const featured = experiences.slice(0, 3)

  return (
    <AppSection
      id="highlights"
      tone="paper"
      eyebrow="Selected experience"
      title={
        <>
          Recent <span className="italic text-primary">chapters</span>
        </>
      }
      description="A quick look at my most recent roles. The full story, with every responsibility, lives on the experience page."
    >
      <AppStagger className="grid gap-5 md:grid-cols-3">
        {featured.map((exp, i) => (
          <AppStaggerItem key={exp.id}>
            <Link href="/experience" className="group block h-full">
              <AppCard
                tone={i === 0 ? "blush" : "paper"}
                interactive
                className="h-full justify-between py-7"
              >
                <AppCardContent className="flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="font-heading text-5xl leading-none text-primary/30">
                      0{i + 1}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-all duration-500 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-10 text-[0.75rem] tracking-[0.22em] text-primary uppercase">
                    {exp.period}
                  </p>
                  <p className="mt-3 font-heading text-[1.7rem] leading-tight">{exp.role}</p>
                  <p className="mt-2 text-[0.95rem] text-muted-foreground">{exp.company}</p>
                  <p className="mt-6 line-clamp-3 text-[0.95rem] leading-relaxed text-foreground/70">
                    {exp.highlights[0]}
                  </p>
                </AppCardContent>
              </AppCard>
            </Link>
          </AppStaggerItem>
        ))}
      </AppStagger>

      <div className="mt-12 flex justify-center">
        <AppButton href="/experience" tone="outline">
          View full experience
        </AppButton>
      </div>
    </AppSection>
  )
}
