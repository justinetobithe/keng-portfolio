import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Button } from "@/components/ui/button"

const appButtonVariants = cva(
  "rounded-full font-sans tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5",
  {
    variants: {
      tone: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(123,91,76,0.7)] hover:bg-primary/90 hover:shadow-[0_14px_34px_-12px_rgba(123,91,76,0.8)]",
        soft: "bg-secondary text-secondary-foreground hover:bg-accent",
        outline:
          "border-primary/30 bg-transparent text-foreground hover:border-primary hover:bg-primary/5",
        ghost: "bg-transparent text-foreground hover:bg-secondary/60",
      },
      size: {
        sm: "h-9 px-4 text-[0.78rem]",
        md: "h-11 px-6 text-[0.8rem]",
        lg: "h-13 px-8 text-[0.82rem]",
        icon: "size-10 p-0 tracking-normal",
      },
    },
    defaultVariants: {
      tone: "primary",
      size: "md",
    },
  }
)

type AppButtonProps = Omit<React.ComponentProps<typeof Button>, "size" | "variant"> &
  VariantProps<typeof appButtonVariants> & {
    href?: string
    download?: boolean | string
    external?: boolean
  }

export function AppButton({
  className,
  tone,
  size,
  href,
  download,
  external,
  ...props
}: AppButtonProps) {
  const classes = cn(appButtonVariants({ tone, size }), className)

  if (href && href.startsWith("/") && !download && !external) {
    return (
      <Button nativeButton={false} className={classes} render={<Link href={href} />} {...props} />
    )
  }

  if (href) {
    return (
      <Button
        nativeButton={false}
        className={classes}
        render={
          <a
            href={href}
            download={download}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          />
        }
        {...props}
      />
    )
  }

  return <Button className={classes} {...props} />
}
