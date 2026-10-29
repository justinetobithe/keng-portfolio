import type { Metadata } from "next"
import { AppPageHeader } from "@/components/app/app-page-header"
import { PageNext } from "@/components/layout/page-next"
import { Experience } from "@/components/sections/experience"
import { Stats } from "@/components/sections/stats"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Jesseca Gimo across fintech, banking, retail and marketing.",
}

export default function ExperiencePage() {
  return (
    <>
      <AppPageHeader
        index="03"
        eyebrow="Experience"
        title="Where I've"
        accent="grown"
        description="Seven roles across fintech, banking, retail and digital marketing. Filter by focus, then open a role to see the details."
        aside={
          <div className="rounded-[1.25rem] border border-primary/15 bg-card/80 p-6 shadow-[0_24px_60px_-30px_rgba(91,64,51,0.35)] backdrop-blur">
            <p className="text-[0.8rem] tracking-[0.22em] text-primary uppercase">Now</p>
            <p className="mt-2 font-heading text-2xl leading-tight">Call Concierge Team Leader</p>
            <p className="mt-1 text-[0.95rem] text-muted-foreground">Q4 Inc. · since April 2026</p>
          </div>
        }
      />
      <Experience withHeader={false} />
      <Stats />
      <PageNext href="/work" label="Work" />
    </>
  )
}
