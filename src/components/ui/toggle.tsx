import * as React from "react"

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className={`inline-flex relative items-center cursor-pointer ${className ?? ""}`}>
        <input
          type="checkbox"
          className="sr-only peer"
          ref={ref}
          {...props}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors duration-300"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform duration-300"></div>
      </label>
    )
  }
)

Toggle.displayName = "Toggle"
