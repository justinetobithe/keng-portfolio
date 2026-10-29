import type { Metadata } from "next"
import { AppPageHeader } from "@/components/app/app-page-header"
import { PageNext } from "@/components/layout/page-next"
import { ContentWork } from "@/components/sections/content-work"
import { Services } from "@/components/sections/services"

export const metadata: Metadata = {
  title: "Work",
  description: "Social media and content work by Jesseca Gimo.",
}

export default function WorkPage() {
  return (
    <>
      <AppPageHeader
        index="04"
        eyebrow="Work"
        title="Social stories,"
        accent="crafted"
        description="As a marketing and social media manager I planned, created and edited content for Facebook, Instagram and TikTok."
        aside={
          <div className="flex flex-wrap gap-2 md:flex-col md:items-start">
            {["Canva", "CapCut", "Facebook", "Instagram", "TikTok"].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-primary/20 bg-card/80 px-4 py-1.5 text-[0.82rem] tracking-wide"
              >
                {tool}
              </span>
            ))}
          </div>
        }
      />
      <ContentWork withHeader={false} />
      <Services />
      <PageNext href="/contact" label="Contact" />
    </>
  )
}
