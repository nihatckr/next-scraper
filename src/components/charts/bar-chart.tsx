'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface BarChartData {
  name: string
  value?: number
  [key: string]: string | number | undefined
}

interface BarConfig {
  dataKey: string
  color: string
  name?: string
}

interface CustomBarChartProps {
  data: BarChartData[]
  height?: number
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  barColor?: string
  dataKey?: string
  xAxisKey?: string
  bars?: BarConfig[]
}

export function CustomBarChart({
  data,
  height = 300,
  showGrid = true,
  showTooltip = true,
  showLegend = false,
  barColor = '#8884d8',
  dataKey = 'value',
  xAxisKey = 'name',
  bars,
}: CustomBarChartProps) {
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
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
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
        {bars && bars.length > 0 ? (
          bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              fill={bar.color}
              name={bar.name || bar.dataKey}
              radius={[2, 2, 0, 0]}
            />
          ))
        ) : (
          <Bar dataKey={dataKey} fill={barColor} radius={[2, 2, 0, 0]} />
        )}
      </BarChart>
    </ResponsiveContainer>
  )
}
