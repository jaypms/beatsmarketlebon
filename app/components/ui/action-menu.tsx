"use client"
import React, { useState, useRef, useEffect } from "react"

interface ActionMenuProps {
  onEdit?: () => void
  onBan?: () => void
  onDelete?: () => void
}

export function ActionMenu({ onEdit, onBan, onDelete }: ActionMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary px-3 py-1 rounded hover:bg-primary/80 text-sm font-semibold"
      >
        Actions
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-md bg-darkbg2 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 text-sm text-white">
            {onEdit && (
              <button
                className="block w-full text-left px-4 py-2 hover:bg-primary/70"
                onClick={() => {
                  setOpen(false)
                  onEdit()
                }}
              >
                Éditer
              </button>
            )}
            {onBan && (
              <button
                className="block w-full text-left px-4 py-2 hover:bg-red-600"
                onClick={() => {
                  setOpen(false)
                  onBan()
                }}
              >
                Bannir
              </button>
            )}
            {onDelete && (
              <button
                className="block w-full text-left px-4 py-2 hover:bg-red-700"
                onClick={() => {
                  setOpen(false)
                  onDelete()
                }}
              >
                Supprimer
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
