import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./DropDownMenu"
import { MoreHorizontal } from "lucide-react"

export function ActionMenuExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 rounded-full hover:bg-gray-200">
        <MoreHorizontal size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem onSelect={() => alert("Modifier")}>Modifier</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert("Supprimer")}>Supprimer</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert("Partager")}>Partager</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
