'use client'

import { Pie, PieChart } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart'

const chartData = [
  { status: 'available', count: 650, fill: 'var(--color-available)' },
  { status: 'loaned', count: 250, fill: 'var(--color-loaned)' },
  { status: 'reserved', count: 80, fill: 'var(--color-reserved)' },
  { status: 'maintenance', count: 20, fill: 'var(--color-maintenance)' },
  { status: 'lost', count: 5, fill: 'var(--color-lost)' },
]

const chartConfig = {
  count: {
    label: 'Cantidad',
  },
  available: {
    label: 'Activo',
    color: 'var(--chart-1)',
  },
  loaned: {
    label: 'Pendiente',
    color: 'var(--chart-2)',
  },
  reserved: {
    label: 'Archivado',
    color: 'var(--chart-3)',
  },
  maintenance: {
    label: 'Borrador',
    color: 'var(--chart-4)',
  },
  lost: {
    label: 'Otro',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig

export function ChartPieLegend() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribución de Estado</CardTitle>
        <CardDescription>Estado actual de todos los items.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <Pie data={chartData} dataKey="count" />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
