import * as React from "react"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  onValueChange?: (value: string) => void
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function Tabs({ defaultValue, onValueChange, children, ...props }: TabsProps) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue)

  React.useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue)
    }
  }, [defaultValue])

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    if (onValueChange) {
      onValueChange(value)
    }
  }

  return (
    <div {...props} className={`tabs-root ${props.className ?? ""}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null
        return React.cloneElement(child, {
          selectedValue,
          onValueChange: handleValueChange,
        })
      })}
    </div>
  )
}

export function TabsList({ children, ...props }: TabsListProps) {
  return (
    <div
      role="tablist"
      {...props}
      className={`tabs-list flex border-b border-gray-300 dark:border-gray-700 ${props.className ?? ""}`}
    >
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children, ...props }: TabsTriggerProps) {
  return (
    <button
      role="tab"
      aria-selected={props["aria-selected"]}
      {...props}
      className={`tabs-trigger px-4 py-2 cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 
        data-[selected=true]:border-b-2 data-[selected=true]:border-primary data-[selected=true]:text-primary
        hover:text-primary
        ${props.className ?? ""}`}
      data-selected={props["aria-selected"]}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, selectedValue, ...props }: TabsContentProps & { selectedValue?: string }) {
  if (value !== selectedValue) {
    return null
  }
  return (
    <div {...props} className={`tabs-content p-4 ${props.className ?? ""}`}>
      {children}
    </div>
  )
}
