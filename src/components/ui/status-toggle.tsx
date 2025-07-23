import { Switch } from "@/components/ui/switch"

interface StatusToggleProps {
  checked: boolean
  onChange: (value: boolean) => void
  label?: string
}

export function StatusToggle({ checked, onChange, label }: StatusToggleProps) {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  )
}
