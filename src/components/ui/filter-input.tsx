import React from "react"

interface FilterInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function FilterInput({ value, onChange, placeholder = "Rechercher..." }: FilterInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  )
}
