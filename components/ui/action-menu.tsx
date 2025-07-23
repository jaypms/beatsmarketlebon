import React from "react"
import { MoreHorizontal, Edit, Ban, Trash2 } from "lucide-react"

export function ActionMenu({
  onEdit,
  onBan,
  onDelete,
}: {
  onEdit: () => void
  onBan: () => void
  onDelete: () => void
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        <MoreHorizontal className="w-5 h-5 text-white" />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-darkbg2 shadow-lg ring-1 ring-black ring-opacity-5">
          <button
            onClick={() => {
              setOpen(false)
              onEdit()
            }}
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-700"
          >
            <Edit className="w-4 h-4 mr-2" />
            Modifier
          </button>
          <button
            onClick={() => {
              setOpen(false)
              onBan()
            }}
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-700"
          >
            <Ban className="w-4 h-4 mr-2" />
            Bannir
          </button>
          <button
            onClick={() => {
              setOpen(false)
              onDelete()
            }}
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-700 text-red-500"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Supprimer
          </button>
        </div>
      )}
    </div>
  )
}
