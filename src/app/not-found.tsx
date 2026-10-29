import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppButton } from "@/components/app/app-button"
import { AppReveal } from "@/components/app/app-reveal"
import { AppEyebrow } from "@/components/app/app-section"
import { navLinks } from "@/lib/data"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-background pt-28 pb-16">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply" />
      <div className="absolute top-0 right-0 hidden h-full w-[30%] bg-secondary md:block" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <AppReveal>
          <AppEyebrow>Error 404</AppEyebrow>
          <h1 className="mt-6 font-heading text-[3.2rem] leading-[0.95] font-light sm:text-7xl lg:text-8xl">
            This page took
            <span className="block italic text-primary">a day off.</span>
          </h1>
          <p className="mt-7 max-w-md leading-relaxed text-foreground/70">
            The link may be broken or the page may have moved. Let&apos;s get you back to somewhere
            familiar.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AppButton href="/" size="lg">
              <ArrowLeft />
              Back home
            </AppButton>
            <AppButton href="/contact" tone="outline" size="lg">
              Contact me
            </AppButton>
          </div>
        </AppReveal>

        <AppReveal direction="left" delay={0.15} className="relative">
          <p
            aria-hidden
            className="font-heading text-[9rem] leading-none font-light text-primary/15 italic select-none sm:text-[13rem] md:text-right lg:text-[16rem]"
          >
            404
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 md:justify-end">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-[0.78rem] tracking-[0.18em] uppercase transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </AppReveal>
      </div>
    </section>
  )
}
