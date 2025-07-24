"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface CheckboxGroupProps {
  options: { label: string; value: string }[]
  selectedValues: string[]
  onChange: (values: string[]) => void
}

export function CheckboxGroup({ options, selectedValues, onChange }: CheckboxGroupProps) {
  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value))
    } else {
      onChange([...selectedValues, value])
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {options.map(({ label, value }) => (
        <label
          key={value}
          className="inline-flex cursor-pointer items-center space-x-2"
        >
          <Checkbox
            checked={selectedValues.includes(value)}
            onCheckedChange={() => toggleValue(value)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  )
}
