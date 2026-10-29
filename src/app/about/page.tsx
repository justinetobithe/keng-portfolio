import type { Metadata } from "next"
import { AppPageHeader } from "@/components/app/app-page-header"
import { PageNext } from "@/components/layout/page-next"
import { About } from "@/components/sections/about"
import { Approach } from "@/components/sections/approach"
import { Skills } from "@/components/sections/skills"
import { profile } from "@/lib/data"

export const metadata: Metadata = {
  title: "About",
  description: "The story, strengths and skills of Jesseca Gimo.",
}

export default function AboutPage() {
  return (
    <>
      <AppPageHeader
        index="02"
        eyebrow="About"
        title="The person"
        accent="behind the headset"
        description="Five years of helping customers, coaching teams and growing online communities, built on patience and a love for detail."
        aside={
          <dl className="grid grid-cols-2 gap-6 border-t border-primary/20 pt-6 md:grid-cols-1">
            <div>
              <dt className="text-[0.8rem] tracking-[0.22em] text-muted-foreground uppercase">Based in</dt>
              <dd className="mt-1 font-heading text-2xl">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-[0.8rem] tracking-[0.22em] text-muted-foreground uppercase">Currently</dt>
              <dd className="mt-1 font-heading text-2xl">Team Leader at Q4 Inc.</dd>
            </div>
          </dl>
        }
      />
      <About />
      <Approach />
      <Skills />
      <PageNext href="/experience" label="Experience" />
    </>
  )
}
