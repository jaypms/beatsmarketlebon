"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Flame, User, Music, Euro } from "lucide-react";

const kpis = [
  {
    title: "Revenus totaux",
    value: "12 340,50 €",
    icon: <Euro className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Beats vendus",
    value: "328",
    icon: <Music className="w-5 h-5 text-purple-500" />,
  },
  {
    title: "Nouveaux artistes",
    value: "+45",
    icon: <User className="w-5 h-5 text-green-500" />,
  },
  {
    title: "Tendance",
    value: "+18% ce mois",
    icon: <Flame className="w-5 h-5 text-orange-500" />,
  },
];

const revenueData = [
  { name: "Jan", revenue: 500 },
  { name: "Fév", revenue: 1100 },
  { name: "Mar", revenue: 900 },
  { name: "Avr", revenue: 2000 },
  { name: "Mai", revenue: 1850 },
  { name: "Juin", revenue: 2340 },
  { name: "Juil", revenue: 1620 },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              {kpi.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Graphique */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Revenus mensuels</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Section Ventes récentes */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Ventes récentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">"Drill Night" par BeatX</p>
              <p className="text-xs text-muted-foreground">19 juillet 2025</p>
            </div>
            <Badge variant="outline">29,90 €</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">"Melancholy" par DarkTune</p>
              <p className="text-xs text-muted-foreground">18 juillet 2025</p>
            </div>
            <Badge variant="outline">14,90 €</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
