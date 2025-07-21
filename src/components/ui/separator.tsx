import * as React from "react"

export const Separator = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={`my-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
    {...props}
  />
))
Separator.displayName = "Separator"
