import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AppReveal } from "@/components/app/app-reveal"

export function PageNext({ href, label }: { href: string; label: string }) {
  return (
    <section className="bg-taupe">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <AppReveal>
          <Link
            href={href}
            className="group flex flex-col gap-4 border-y border-foreground/15 py-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-[0.78rem] tracking-[0.3em] text-foreground/60 uppercase">
              Next page
            </span>
            <span className="flex items-center gap-4 sm:gap-6">
              <span className="font-heading text-5xl leading-none text-foreground transition-all duration-500 group-hover:italic sm:text-7xl lg:text-8xl">
                {label}
              </span>
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-45 sm:size-20">
                <ArrowUpRight className="size-6 sm:size-8" strokeWidth={1.4} />
              </span>
            </span>
          </Link>
        </AppReveal>
      </div>
    </section>
  )
}
