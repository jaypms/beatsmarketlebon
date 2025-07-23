'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Music, User, ShieldAlert } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const stats = [
  {
    icon: <User className="w-5 h-5 text-pink-500" />,
    label: 'Nouveaux inscrits',
    value: 143
  },
  {
    icon: <Music className="w-5 h-5 text-purple-500" />,
    label: 'Beats en ligne',
    value: 862
  },
  {
    icon: <DollarSign className="w-5 h-5 text-green-500" />,
    label: 'Revenus mensuels',
    value: '4 327€'
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
    label: 'Modération urgente',
    value: 3
  }
]

const data = [
  { name: 'Jan', revenue: 1200 },
  { name: 'Fév', revenue: 2100 },
  { name: 'Mar', revenue: 800 },
  { name: 'Avr', revenue: 1600 },
  { name: 'Mai', revenue: 2500 },
  { name: 'Juin', revenue: 2000 },
  { name: 'Juil', revenue: 4327 }
]

const recentSales = [
  {
    artist: 'Luna Waves',
    beat: 'Midnight Flow',
    amount: '39,90 €',
    date: '22/07/2025'
  },
  {
    artist: 'Neo Black',
    beat: 'Trap Soul Vibes',
    amount: '14,90 €',
    date: '21/07/2025'
  },
  {
    artist: 'Sonic Rain',
    beat: 'Sunset Dream',
    amount: '79,90 €',
    date: '20/07/2025'
  }
]

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord administrateur</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenus mensuels</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#ff4c8b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ventes récentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div>
                <div className="font-medium">{sale.artist}</div>
                <div className="text-muted-foreground">{sale.beat}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{sale.amount}</div>
                <div className="text-muted-foreground text-xs">{sale.date}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
