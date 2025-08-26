import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ChartWrapperProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  headerAction?: React.ReactNode
  compact?: boolean
}

export function ChartWrapper({
  title,
  description,
  children,
  className,
  headerAction,
  compact = false,
}: ChartWrapperProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader
        className={cn(
          'flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0',
          compact ? 'pb-2' : 'pb-4',
        )}
      >
        <div className="space-y-1">
          <CardTitle
            className={cn('font-semibold', compact ? 'text-sm' : 'text-base')}
          >
            {title}
          </CardTitle>
          {description && (
            <CardDescription
              className={cn(
                'text-muted-foreground',
                compact ? 'text-xs' : 'text-sm',
              )}
            >
              {description}
            </CardDescription>
          )}
        </div>
        {headerAction && (
          <div className="flex items-center space-x-2 flex-shrink-0">
            {headerAction}
          </div>
        )}
      </CardHeader>
      <CardContent className={compact ? 'pt-0' : ''}>
        <div className="w-full overflow-x-auto">{children}</div>
      </CardContent>
    </Card>
  )
}
