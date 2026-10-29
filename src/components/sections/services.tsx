import { AppCard, AppCardContent } from "@/components/app/app-card"
import { AppStagger, AppStaggerItem } from "@/components/app/app-reveal"
import { AppSection } from "@/components/app/app-section"
import { services } from "@/lib/data"

export function Services() {
  return (
    <AppSection
      tone="paper"
      eyebrow="What I handled"
      title={
        <>
          From idea to <span className="italic text-primary">inbox</span>
        </>
      }
      description="The day-to-day work behind the content: planning, producing and looking after the community that forms around it."
    >
      <AppStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {services.map((service, i) => (
          <AppStaggerItem key={service.title}>
            <AppCard tone={i === 1 || i === 3 ? "blush" : "paper"} interactive className="h-full py-7">
              <AppCardContent>
                <span className="text-[0.75rem] tracking-[0.25em] text-primary uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 font-heading text-[1.7rem] leading-tight">{service.title}</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/70">{service.text}</p>
              </AppCardContent>
            </AppCard>
          </AppStaggerItem>
        ))}
      </AppStagger>
    </AppSection>
  )
}
