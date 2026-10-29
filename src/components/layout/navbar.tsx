"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Download, Menu } from "lucide-react"
import { cn } from "cn"
import { AppButton } from "@/components/app/app-button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { navLinks, profile } from "@/lib/data"
import { useAppStore } from "@/store/use-app-store"

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href)

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const isMenuOpen = useAppStore((s) => s.isMenuOpen)
  const setMenuOpen = useAppStore((s) => s.setMenuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-heading text-2xl font-medium tracking-tight">
            {profile.firstName}
          </span>
          <span className="font-heading text-2xl italic text-primary">{profile.lastName}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative block px-3.5 py-2 text-[0.8rem] tracking-[0.18em] uppercase transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3.5 bottom-0.5 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <AppButton
            href={profile.resume}
            download={profile.resumeFileName}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Download />
            Resume
          </AppButton>
          <AppButton
            tone="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-5" />
          </AppButton>
        </div>
      </nav>

      <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" className="w-[85%] bg-background px-6 pt-16 pb-8">
          <SheetTitle className="font-heading text-3xl font-normal">
            {profile.firstName} <span className="italic text-primary">{profile.lastName}</span>
          </SheetTitle>
          <ul className="mt-6 flex flex-col">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between border-b border-border/70 py-4 font-heading text-2xl",
                    isActive(pathname, link.href) ? "italic text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                  <span className="font-sans text-[0.75rem] tracking-[0.2em] text-muted-foreground not-italic">
                    0{i + 1}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <AppButton
            href={profile.resume}
            download={profile.resumeFileName}
            className="mt-auto w-full"
          >
            <Download />
            Download resume
          </AppButton>
        </SheetContent>
      </Sheet>
    </motion.header>
  )
}
