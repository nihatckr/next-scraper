'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface AreaChartData {
  name: string
  value: number
  [key: string]: string | number
}

interface CustomAreaChartProps {
  data: AreaChartData[]
  height?: number
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  areaColor?: string
  dataKey?: string
  xAxisKey?: string
  strokeWidth?: number
  fillOpacity?: number
}

export function CustomAreaChart({
  data,
  height = 300,
  showGrid = true,
  showTooltip = true,
  showLegend = false,
  areaColor = '#8884d8',
  dataKey = 'value',
  xAxisKey = 'name',
  strokeWidth = 2,
  fillOpacity = 0.6,
}: CustomAreaChartProps) {
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean
    payload?: Array<{ name: string; value: number }>
    label?: string
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-md">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry, index: number) => (
            <p key={index} className="text-sm text-muted-foreground">
              {entry.name}:{' '}
              <span className="font-medium text-foreground">{entry.value}</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={areaColor} stopOpacity={fillOpacity} />
            <stop offset="95%" stopColor={areaColor} stopOpacity={0.1} />
          </linearGradient>
        </defs>
        {showGrid && (
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        )}
        <XAxis
          dataKey={xAxisKey}
          className="text-xs fill-muted-foreground"
          tick={{ fontSize: 12 }}
        />
        <YAxis
          className="text-xs fill-muted-foreground"
          tick={{ fontSize: 12 }}
        />
        {showTooltip && <Tooltip content={<CustomTooltip />} />}
        {showLegend && <Legend />}
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={areaColor}
          strokeWidth={strokeWidth}
          fill="url(#colorArea)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
