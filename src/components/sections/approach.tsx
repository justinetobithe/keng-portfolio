import { AppStagger, AppStaggerItem } from "@/components/app/app-reveal"
import { AppSection } from "@/components/app/app-section"
import { approach } from "@/lib/data"

export function Approach() {
  return (
    <AppSection
      tone="blush"
      eyebrow="How I work"
      title={
        <>
          A simple, <span className="italic text-primary">human</span> approach
        </>
      }
    >
      <AppStagger className="grid gap-px overflow-hidden rounded-[1.25rem] bg-primary/15 md:grid-cols-3">
        {approach.map((item) => (
          <AppStaggerItem
            key={item.step}
            className="group bg-secondary p-7 transition-colors duration-500 hover:bg-card sm:p-10"
          >
            <span className="font-heading text-6xl leading-none text-primary/25 transition-colors duration-500 group-hover:text-primary">
              {item.step}
            </span>
            <p className="mt-8 font-heading text-3xl">{item.title}</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/70">{item.text}</p>
          </AppStaggerItem>
        ))}
      </AppStagger>
    </AppSection>
  )
}
