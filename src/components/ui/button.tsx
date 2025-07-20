import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "secondary" | "destructive" | "ghost"
  size?: "sm" | "md" | "lg"
}

const variants = {
  default: "bg-pink-600 text-white hover:bg-pink-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
}

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
