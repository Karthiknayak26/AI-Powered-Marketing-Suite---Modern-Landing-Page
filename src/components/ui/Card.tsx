import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'glass-dark' | 'gradient'
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-200 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-green-500/25',
      glass: 'glass hover:bg-white/20 hover:border-white/30 dark:hover:bg-gray-700/50 dark:hover:border-gray-600/30',
      'glass-dark': 'glass-dark hover:bg-dark-700/60 hover:border-dark-500/40 dark:hover:bg-gray-700/60 dark:hover:border-gray-600/40',
      gradient: 'bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/30 hover:from-white/90 hover:to-white/50 dark:from-gray-800/80 dark:to-gray-800/40 dark:border-gray-700/30 dark:hover:from-gray-700/90 dark:hover:to-gray-700/50'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6 transition-all duration-300 card-hover',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }