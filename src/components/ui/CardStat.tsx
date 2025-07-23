'use client'

import React from 'react'

type CardStatProps = {
  title: string
  value: string | number
  icon?: React.ReactNode
  className?: string
}

export default function CardStat({ title, value, icon, className }: CardStatProps) {
  return (
    <div
      className={`bg-[#1e1e1e] p-6 rounded-lg shadow-md flex items-center space-x-4 ${className}`}
    >
      {icon && <div className="text-pink-600">{icon}</div>}
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white text-2xl font-bold">{value}</p>
      </div>
    </div>
  )
}
