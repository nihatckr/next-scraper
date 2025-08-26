import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: number | string
  icon: LucideIcon
  description?: string
  trend?: {
    value: number
    isPositive: boolean
    label?: string
  }
  href?: string
  className?: string
  compact?: boolean
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  href,
  className,
  compact = false,
}: StatsCardProps) {
  const cardContent = (
    <Card
      className={cn(
        'transition-all duration-200 hover:bg-muted/50 hover:shadow-md',
        href && 'cursor-pointer hover:scale-[1.02]',
        className,
      )}
    >
      <CardHeader
        className={cn(
          'flex flex-row items-center justify-between space-y-0',
          compact ? 'pb-1' : 'pb-2',
        )}
      >
        <CardTitle
          className={cn(
            'font-medium text-muted-foreground',
            compact ? 'text-xs' : 'text-sm',
          )}
        >
          {title}
        </CardTitle>
        <Icon
          className={cn(
            'text-muted-foreground',
            compact ? 'h-3 w-3' : 'h-4 w-4',
          )}
        />
      </CardHeader>
      <CardContent className={compact ? 'pt-0' : ''}>
        <div className={cn('font-bold', compact ? 'text-lg' : 'text-2xl')}>
          {value}
        </div>
        {description && (
          <p
            className={cn(
              'text-muted-foreground mt-1',
              compact ? 'text-[10px]' : 'text-xs',
            )}
          >
            {description}
          </p>
        )}
        {trend && (
          <div className="flex items-center gap-2 mt-2">
            <Badge
              variant={trend.isPositive ? 'default' : 'destructive'}
              className={cn(compact ? 'text-[10px] px-1 py-0' : 'text-xs')}
            >
              {trend.isPositive ? '+' : ''}
              {trend.value}%
            </Badge>
            {trend.label && (
              <span
                className={cn(
                  'text-muted-foreground',
                  compact ? 'text-[10px]' : 'text-xs',
                )}
              >
                {trend.label}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )

  if (href) {
    return <Link href={href}>{cardContent}</Link>
  }

  return cardContent
}
