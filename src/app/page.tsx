import { ContentWork } from "@/components/sections/content-work"
import { CtaBand } from "@/components/sections/cta-band"
import { Hero } from "@/components/sections/hero"
import { Highlights } from "@/components/sections/highlights"
import { Stats } from "@/components/sections/stats"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Highlights />
      <ContentWork showLink />
      <CtaBand />
    </>
  )
}
