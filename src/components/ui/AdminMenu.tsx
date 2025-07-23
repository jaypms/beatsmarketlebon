'use client'

import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'

type AdminMenuProps = {
  onEdit: () => void
  onDelete: () => void
  onView: () => void
}

export default function AdminMenu({ onEdit, onDelete, onView }: AdminMenuProps) {
  return (
    <Menu
      menuButton={<MenuButton className="btn btn-ghost">Actions</MenuButton>}
      transition
    >
      <MenuItem onClick={onView}>Voir</MenuItem>
      <MenuItem onClick={onEdit}>Modifier</MenuItem>
      <MenuItem onClick={onDelete} className="text-red-600">
        Supprimer
      </MenuItem>
    </Menu>
  )
}
