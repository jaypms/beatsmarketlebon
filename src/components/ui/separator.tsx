import * as React from "react"

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={`border-gray-300 dark:border-gray-700 my-4 ${className ?? ""}`}
        {...props}
      />
    )
  }
)

Separator.displayName = "Separator"
