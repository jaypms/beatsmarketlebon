"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

const data = [
  { month: "Jan", revenue: 3200 },
  { month: "Fév", revenue: 4100 },
  { month: "Mar", revenue: 3900 },
  { month: "Avr", revenue: 5200 },
  { month: "Mai", revenue: 4800 },
  { month: "Juin", revenue: 6100 },
  { month: "Juil", revenue: 7250 },
]

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#e11d48"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
