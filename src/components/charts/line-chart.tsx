'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface LineChartData {
  name: string
  value: number
  [key: string]: string | number
}

interface CustomLineChartProps {
  data: LineChartData[]
  height?: number
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  lineColor?: string
  dataKey?: string
  xAxisKey?: string
  strokeWidth?: number
  showDots?: boolean
}

export function CustomLineChart({
  data,
  height = 300,
  showGrid = true,
  showTooltip = true,
  showLegend = false,
  lineColor = '#8884d8',
  dataKey = 'value',
  xAxisKey = 'name',
  strokeWidth = 2,
  showDots = true,
}: CustomLineChartProps) {
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
      <LineChart
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
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={lineColor}
          strokeWidth={strokeWidth}
          dot={showDots ? { r: 4 } : false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
