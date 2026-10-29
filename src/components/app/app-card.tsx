import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const appCardVariants = cva(
  "rounded-[1.25rem] text-foreground ring-0 transition-all duration-500",
  {
    variants: {
      tone: {
        paper:
          "bg-card shadow-[0_24px_60px_-30px_rgba(91,64,51,0.35)] border border-border/70",
        blush: "bg-secondary shadow-[0_24px_60px_-30px_rgba(91,64,51,0.3)]",
        glass:
          "border border-white/60 bg-white/50 backdrop-blur-md shadow-[0_20px_50px_-30px_rgba(91,64,51,0.35)]",
        plain: "bg-transparent shadow-none",
      },
      interactive: {
        true: "hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(91,64,51,0.45)]",
        false: "",
      },
    },
    defaultVariants: {
      tone: "paper",
      interactive: false,
    },
  }
)

type AppCardProps = React.ComponentProps<typeof Card> &
  VariantProps<typeof appCardVariants>

export function AppCard({ className, tone, interactive, ...props }: AppCardProps) {
  return (
    <Card
      className={cn(appCardVariants({ tone, interactive }), className)}
      {...props}
    />
  )
}

export function AppCardHeader({
  className,
  ...props
}: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader className={cn("px-6 sm:px-8", className)} {...props} />
}

export function AppCardTitle({
  className,
  ...props
}: React.ComponentProps<typeof CardTitle>) {
  return (
    <CardTitle
      className={cn("font-heading text-2xl font-medium leading-tight", className)}
      {...props}
    />
  )
}

export function AppCardDescription({
  className,
  ...props
}: React.ComponentProps<typeof CardDescription>) {
  return (
    <CardDescription
      className={cn("text-[0.95rem] text-muted-foreground", className)}
      {...props}
    />
  )
}

export function AppCardContent({
  className,
  ...props
}: React.ComponentProps<typeof CardContent>) {
  return <CardContent className={cn("px-6 sm:px-8", className)} {...props} />
}

export function AppCardFooter({
  className,
  ...props
}: React.ComponentProps<typeof CardFooter>) {
  return (
    <CardFooter
      className={cn("border-border/60 bg-transparent px-6 sm:px-8", className)}
      {...props}
    />
  )
}
