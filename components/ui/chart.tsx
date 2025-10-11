"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

const Chart = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.ResponsiveContainer>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.ResponsiveContainer>
>(({ className, children, ...props }, ref) => (
  <RechartsPrimitive.ResponsiveContainer
    ref={ref}
    className={cn("h-[350px] w-full", className)}
    {...props}
  >
    {children}
  </RechartsPrimitive.ResponsiveContainer>
))
Chart.displayName = "Chart"

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: {
  active?: boolean
  payload?: any[]
  className?: string
  indicator?: "line" | "dot" | "dashed"
  hideLabel?: boolean
  hideIndicator?: boolean
  label?: any
  labelFormatter?: any
  labelClassName?: string
  formatter?: any
  color?: string
  nameKey?: string
  labelKey?: string
}) {
  if (!active || !payload?.length) {
    return null
  }

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const value = item?.value

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [label, labelFormatter, payload, hideLabel, labelClassName, labelKey])

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const indicatorColor = color || item.payload?.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {!hideIndicator && (
                    <div
                      className={cn(
                        "flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-border bg-background",
                        indicator === "dot" && "h-2 w-2"
                      )}
                    >
                    </div>
                  )}
                  <div className="flex flex-1 items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2.5 w-2.5 rounded-full border-2 border-border bg-background"
                        style={{
                          backgroundColor: indicatorColor,
                        }}
                      />
                      <span className="text-muted-foreground">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-medium tabular-nums">
                      {item.value}
                    </span>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Legend>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Legend>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.Legend
    ref={ref}
    className={cn("flex items-center justify-center gap-4", className)}
    {...props}
  />
))
ChartLegend.displayName = "ChartLegend"

export {
  Chart,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
}
