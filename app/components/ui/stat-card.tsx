import React from "react"

interface StatCardProps {
  title: string
  value: string
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-darkbg2 rounded-lg p-6 shadow-md">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}
