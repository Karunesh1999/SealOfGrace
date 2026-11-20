import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-label text-label-sm font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary",
        secondary: "bg-secondary text-on-secondary",
        cta: "bg-cta text-on-cta shadow-sm",
        tertiary: "bg-tertiary text-on-tertiary",
        gold: "bg-gold-soft text-on-tertiary-container",
        outline: "border border-outline text-secondary",
        success: "bg-success/15 text-success border border-success/30",
        live: "bg-cta text-white animate-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
