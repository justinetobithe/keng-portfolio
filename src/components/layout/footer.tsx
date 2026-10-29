import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { AppButton } from "@/components/app/app-button"
import { navLinks, profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-4xl sm:text-5xl">
            {profile.firstName} <span className="italic text-accent">{profile.lastName}</span>
          </p>
          <p className="mt-3 text-[0.78rem] tracking-[0.25em] text-background/60 uppercase">
            {profile.subtitle}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.78rem] tracking-[0.2em] text-background/70 uppercase transition-colors hover:text-background"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <AppButton
          href="/"
          size="icon"
          tone="ghost"
          aria-label="Back to top"
          className="border border-background/20 text-background hover:bg-background/10"
        >
          <ArrowUp className="size-4" />
        </AppButton>
      </div>
      <div className="border-t border-background/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-[0.82rem] text-background/50 sm:px-8">
          © {profile.year} {profile.fullName}. {profile.location}.
        </p>
      </div>
    </footer>
  )
}
