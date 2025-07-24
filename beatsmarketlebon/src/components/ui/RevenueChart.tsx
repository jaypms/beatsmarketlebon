'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type RevenueChartProps = {
  data: number[]
  labels: string[]
}

export default function RevenueChart({ data, labels }: RevenueChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Revenus mensuels (€)',
        data,
        fill: false,
        borderColor: '#ec4899', // rose vif
        backgroundColor: '#ec4899',
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Revenus du dernier semestre' },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Line data={chartData} options={options} />
}
