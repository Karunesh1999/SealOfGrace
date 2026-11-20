import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-label transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        tertiary: "bg-tertiary text-white hover:bg-tertiary/90",
        cta: "bg-cta text-white hover:bg-cta/90 shadow-sm font-semibold",
        outline: "border border-outline bg-surface text-secondary hover:bg-surface-container",
        ghost: "text-secondary hover:bg-surface-container-high/50",
        icon: "h-9 w-9 rounded-full bg-primary text-on-primary hover:bg-tertiary hover:text-on-tertiary p-0 flex items-center justify-center",
        filter: "bg-surface-container border border-outline text-on-surface-variant hover:text-secondary",
        "filter-active": "bg-secondary text-on-secondary shadow-sm",
      },
      size: {
        default: "px-gutter-xl py-gutter-md text-label-lg rounded-full",
        sm: "px-gutter-lg py-gutter-sm text-label-sm rounded-full",
        lg: "px-6 py-3.5 text-label-lg rounded-full",
        icon: "h-9 w-9 rounded-full",
        "icon-sm": "h-8 w-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
