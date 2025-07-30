import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type CardVariant = 'default' | 'glass' | 'glass-dark' | 'gradient' | 'glassmorphism'

interface CardProps {
  variant?: CardVariant
  children: React.ReactNode
  animate?: boolean
  delay?: number
  className?: string
  [key: string]: any
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, animate = false, delay = 0, ...props }, ref) => {
    const variants: Record<CardVariant, string> = {
      default: 'bg-white border border-gray-200 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-green-500/25',
      glass: 'glass hover:bg-white/20 hover:border-white/30 dark:hover:bg-gray-700/50 dark:hover:border-gray-600/30',
      'glass-dark': 'glass-dark hover:bg-dark-700/60 hover:border-dark-500/40 dark:hover:bg-gray-700/60 dark:hover:border-gray-600/40',
      gradient: 'bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/30 hover:from-white/90 hover:to-white/50 dark:from-gray-800/80 dark:to-gray-800/40 dark:border-gray-700/30 dark:hover:from-gray-700/90 dark:hover:to-gray-700/50',
      glassmorphism: 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:bg-white/15 hover:border-white/30 hover:shadow-2xl dark:bg-gray-800/20 dark:border-gray-700/30 dark:hover:bg-gray-700/30 dark:hover:border-gray-600/40 dark:hover:shadow-green-500/25'
    }

    // Responsive animation variants
    const animationVariants = {
      hidden: {
        opacity: 0,
        scale: 0.95, // Reduced scale for mobile
        y: 10 // Reduced movement for mobile
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.5, // Faster animation for mobile
          delay: delay,
          ease: "easeOut"
        }
      }
    }

    const baseClassName = cn(
      'rounded-2xl p-6 transition-all duration-300 card-hover',
      variants[variant as CardVariant],
      // Responsive hover effects
      'md:hover:scale-105', // Only scale on larger screens
      'sm:hover:scale-102', // Smaller scale on small screens
      'hover:scale-100', // No scale on mobile
      className
    )

    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={baseClassName}
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-20px", // Smaller margin for mobile
            amount: 0.3 // Trigger when 30% visible
          }}
          whileHover={{
            scale: 1.01, // Reduced hover scale for mobile
            transition: { duration: 0.2 }
          }}
          {...props}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div
        ref={ref}
        className={baseClassName}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }