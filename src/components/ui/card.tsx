import * as React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "elevated" | "flat" }
>(({ className, variant = "elevated", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg bg-surface border border-outline-variant overflow-hidden",
      variant === "elevated" && "shadow-mobile-card hover:shadow-md transition-shadow",
      variant === "flat" && "bg-surface-container-low border-outline-variant/60",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-gutter-lg pb-0 flex flex-col gap-gutter-xs", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-gutter-lg flex flex-col gap-gutter-sm", className)} {...props} />
))
CardContent.displayName = "CardContent"

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-gutter-lg pb-gutter-lg pt-gutter-sm flex items-center justify-between border-t border-outline-variant/60", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
