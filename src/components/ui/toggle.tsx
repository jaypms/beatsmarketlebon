import * as React from "react"

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export function Toggle({ checked, onCheckedChange, ...props }: ToggleProps) {
  const [isChecked, setIsChecked] = React.useState(checked ?? false)

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    if (onCheckedChange) {
      onCheckedChange(e.target.checked)
    }
  }

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only"
        {...props}
      />
      <span
        className={`w-10 h-6 bg-gray-300 rounded-full relative
          ${isChecked ? "bg-primary" : "bg-gray-300"}
          transition-colors duration-200 ease-in-out`}
      >
        <span
          className={`block w-4 h-4 bg-white rounded-full shadow transform
            ${isChecked ? "translate-x-4" : "translate-x-0"}
            transition-transform duration-200 ease-in-out`}
        ></span>
      </span>
    </label>
  )
}
