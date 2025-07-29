import React from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:scale-105 transform'

    const variants = {
      primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 dark:from-green-500 dark:to-green-600 dark:hover:from-green-600 dark:hover:to-green-700 dark:hover:shadow-green-500/25 active:shadow-inner',
      secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-700 hover:bg-white/20 hover:border-white/30 dark:bg-gray-800/50 dark:border-gray-700/30 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:border-gray-600/30 active:bg-white/30 dark:active:bg-gray-600/50',
      outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/20 dark:hover:border-green-400 active:bg-primary-100 dark:active:bg-green-900/30',
      ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700',
      gradient: 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 dark:from-green-500 dark:via-green-600 dark:to-green-500 dark:hover:shadow-green-500/25 active:shadow-inner'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl',
      xl: 'px-10 py-5 text-xl rounded-2xl'
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }