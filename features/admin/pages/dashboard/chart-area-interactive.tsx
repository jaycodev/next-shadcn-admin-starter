'use client'

import * as React from 'react'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useIsMobile } from '@/hooks/use-mobile'

const chartData = [
  { date: '2024-04-01', sales: 45, revenue: 38 },
  { date: '2024-04-02', sales: 52, revenue: 41 },
  { date: '2024-04-03', sales: 38, revenue: 45 },
  { date: '2024-04-04', sales: 61, revenue: 49 },
  { date: '2024-04-05', sales: 73, revenue: 58 },
  { date: '2024-04-06', sales: 68, revenue: 62 },
  { date: '2024-04-07', sales: 42, revenue: 51 },
  { date: '2024-04-08', sales: 79, revenue: 64 },
  { date: '2024-04-09', sales: 35, revenue: 43 },
  { date: '2024-04-10', sales: 56, revenue: 47 },
  { date: '2024-04-11', sales: 71, revenue: 59 },
  { date: '2024-04-12', sales: 63, revenue: 55 },
  { date: '2024-04-13', sales: 48, revenue: 52 },
  { date: '2024-04-14', sales: 41, revenue: 46 },
  { date: '2024-04-15', sales: 37, revenue: 40 },
  { date: '2024-04-16', sales: 44, revenue: 39 },
  { date: '2024-04-17', sales: 82, revenue: 68 },
  { date: '2024-04-18', sales: 76, revenue: 71 },
  { date: '2024-04-19', sales: 54, revenue: 58 },
  { date: '2024-04-20', sales: 39, revenue: 44 },
  { date: '2024-04-21', sales: 43, revenue: 48 },
  { date: '2024-04-22', sales: 59, revenue: 53 },
  { date: '2024-04-23', sales: 47, revenue: 51 },
  { date: '2024-04-24', sales: 72, revenue: 61 },
  { date: '2024-04-25', sales: 65, revenue: 57 },
  { date: '2024-04-26', sales: 33, revenue: 42 },
  { date: '2024-04-27', sales: 78, revenue: 73 },
  { date: '2024-04-28', sales: 46, revenue: 50 },
  { date: '2024-04-29', sales: 69, revenue: 60 },
  { date: '2024-04-30', sales: 84, revenue: 75 },
  { date: '2024-05-01', sales: 51, revenue: 56 },
  { date: '2024-05-02', sales: 67, revenue: 63 },
  { date: '2024-05-03', sales: 58, revenue: 52 },
  { date: '2024-05-04', sales: 81, revenue: 76 },
  { date: '2024-05-05', sales: 88, revenue: 79 },
  { date: '2024-05-06', sales: 92, revenue: 85 },
  { date: '2024-05-07', sales: 74, revenue: 68 },
  { date: '2024-05-08', sales: 49, revenue: 54 },
  { date: '2024-05-09', sales: 55, revenue: 50 },
  { date: '2024-05-10', sales: 70, revenue: 65 },
  { date: '2024-05-11', sales: 77, revenue: 69 },
  { date: '2024-05-12', sales: 62, revenue: 58 },
  { date: '2024-05-13', sales: 53, revenue: 49 },
  { date: '2024-05-14', sales: 86, revenue: 82 },
  { date: '2024-05-15', sales: 83, revenue: 77 },
  { date: '2024-05-16', sales: 75, revenue: 71 },
  { date: '2024-05-17', sales: 89, revenue: 80 },
  { date: '2024-05-18', sales: 71, revenue: 67 },
  { date: '2024-05-19', sales: 57, revenue: 53 },
  { date: '2024-05-20', sales: 50, revenue: 55 },
  { date: '2024-05-21', sales: 40, revenue: 45 },
  { date: '2024-05-22', sales: 38, revenue: 43 },
  { date: '2024-05-23', sales: 64, revenue: 60 },
  { date: '2024-05-24', sales: 68, revenue: 62 },
  { date: '2024-05-25', sales: 60, revenue: 56 },
  { date: '2024-05-26', sales: 54, revenue: 50 },
  { date: '2024-05-27', sales: 85, revenue: 79 },
  { date: '2024-05-28', sales: 61, revenue: 57 },
  { date: '2024-05-29', sales: 36, revenue: 41 },
  { date: '2024-05-30', sales: 73, revenue: 66 },
  { date: '2024-05-31', sales: 52, revenue: 58 },
  { date: '2024-06-01', sales: 55, revenue: 51 },
  { date: '2024-06-02', sales: 87, revenue: 81 },
  { date: '2024-06-03', sales: 44, revenue: 48 },
  { date: '2024-06-04', sales: 80, revenue: 74 },
  { date: '2024-06-05', sales: 41, revenue: 46 },
  { date: '2024-06-06', sales: 66, revenue: 61 },
  { date: '2024-06-07', sales: 72, revenue: 68 },
  { date: '2024-06-08', sales: 78, revenue: 72 },
  { date: '2024-06-09', sales: 91, revenue: 84 },
  { date: '2024-06-10', sales: 53, revenue: 59 },
  { date: '2024-06-11', sales: 42, revenue: 47 },
  { date: '2024-06-12', sales: 88, revenue: 82 },
  { date: '2024-06-13', sales: 39, revenue: 44 },
  { date: '2024-06-14', sales: 82, revenue: 76 },
  { date: '2024-06-15', sales: 70, revenue: 65 },
  { date: '2024-06-16', sales: 76, revenue: 70 },
  { date: '2024-06-17', sales: 93, revenue: 87 },
  { date: '2024-06-18', sales: 48, revenue: 53 },
  { date: '2024-06-19', sales: 74, revenue: 68 },
  { date: '2024-06-20', sales: 84, revenue: 78 },
  { date: '2024-06-21', sales: 56, revenue: 61 },
  { date: '2024-06-22', sales: 69, revenue: 64 },
  { date: '2024-06-23', sales: 94, revenue: 88 },
  { date: '2024-06-24', sales: 51, revenue: 56 },
  { date: '2024-06-25', sales: 49, revenue: 54 },
  { date: '2024-06-26', sales: 81, revenue: 75 },
  { date: '2024-06-27', sales: 86, revenue: 80 },
  { date: '2024-06-28', sales: 57, revenue: 62 },
  { date: '2024-06-29', sales: 45, revenue: 50 },
  { date: '2024-06-30', sales: 85, revenue: 79 },
]

const chartConfig = {
  visitors: {
    label: 'Actividad',
  },
  sales: {
    label: 'Ventas',
    color: 'var(--chart-2)',
  },
  revenue: {
    label: 'Ingresos',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState('90d')

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange('7d')
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date('2024-06-30')
    let daysToSubtract = 90
    if (timeRange === '30d') {
      daysToSubtract = 30
    } else if (timeRange === '7d') {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Actividad General</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Ventas e ingresos de los últimos 3 meses
          </span>
          <span className="@[540px]/card:hidden">Últimos 3 meses</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Últimos 3 meses</ToggleGroupItem>
            <ToggleGroupItem value="30d">Últimos 30 días</ToggleGroupItem>
            <ToggleGroupItem value="7d">Últimos 7 días</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Últimos 3 meses" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Últimos 3 meses
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Últimos 30 días
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 días
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('es-ES', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="min-w-40"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('es-ES', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillSales)"
              stroke="var(--color-sales)"
              stackId="a"
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              stroke="var(--color-revenue)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
