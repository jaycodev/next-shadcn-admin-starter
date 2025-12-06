'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { level: 'primary', items: 320, fill: 'var(--color-primary)' },
  { level: 'secondary', items: 450, fill: 'var(--color-secondary)' },
  { level: 'superior', items: 610, fill: 'var(--color-superior)' },
  { level: 'general', items: 180, fill: 'var(--color-general)' },
]

const chartConfig = {
  items: {
    label: 'Items',
  },
  primary: {
    label: 'Categoría A',
    color: 'var(--chart-1)',
  },
  secondary: {
    label: 'Categoría B',
    color: 'var(--chart-2)',
  },
  superior: {
    label: 'Categoría C',
    color: 'var(--chart-3)',
  },
  general: {
    label: 'Categoría D',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig

export function ChartBarMixed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Items por Categoría</CardTitle>
        <CardDescription>Distribución de items entre categorías.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 20,
            }}
          >
            <YAxis
              dataKey="level"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
            />
            <XAxis dataKey="items" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="items" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          La Categoría C tiene el mayor número de items.
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Total de categorías analizadas.</div>
      </CardFooter>
    </Card>
  )
}
