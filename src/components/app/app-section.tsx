import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { AppReveal } from "@/components/app/app-reveal"

const appSectionVariants = cva("relative scroll-mt-20 overflow-hidden", {
  variants: {
    tone: {
      cream: "bg-background",
      blush: "bg-secondary",
      paper: "bg-card",
      taupe: "bg-taupe",
    },
    spacing: {
      default: "py-20 sm:py-28",
      compact: "py-14 sm:py-20",
      none: "",
    },
  },
  defaultVariants: {
    tone: "cream",
    spacing: "default",
  },
})

type AppSectionProps = Omit<React.ComponentProps<"section">, "title"> &
  VariantProps<typeof appSectionVariants> & {
    eyebrow?: string
    title?: React.ReactNode
    description?: React.ReactNode
    align?: "left" | "center"
    containerClassName?: string
  }

export function AppSection({
  className,
  containerClassName,
  tone,
  spacing,
  eyebrow,
  title,
  description,
  align = "left",
  children,
  ...props
}: AppSectionProps) {
  const hasHeader = eyebrow || title || description

  return (
    <section className={cn(appSectionVariants({ tone, spacing }), className)} {...props}>
      <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", containerClassName)}>
        {hasHeader && (
          <AppReveal
            className={cn(
              "mb-12 flex flex-col gap-4 sm:mb-16",
              align === "center" && "items-center text-center"
            )}
          >
            {eyebrow && <AppEyebrow>{eyebrow}</AppEyebrow>}
            {title && (
              <h2 className="font-heading text-4xl leading-[1.05] font-normal text-foreground sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground",
                  align === "center" && "mx-auto"
                )}
              >
                {description}
              </p>
            )}
          </AppReveal>
        )}
        {children}
      </div>
    </section>
  )
}

export function AppEyebrow({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[0.78rem] font-medium tracking-[0.32em] text-primary uppercase",
        className
      )}
    >
      <span className="h-px w-8 bg-primary/50" />
      {children}
    </span>
  )
}
