'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from './Card'
import { Star, Zap, Users, TrendingUp } from 'lucide-react'

const GlassmorphismDemo: React.FC = () => {
  const cards = [
    {
      icon: Star,
      title: 'Premium Features',
      description: 'Access to advanced AI tools and analytics',
      variant: 'glassmorphism' as const,
      delay: 0.1
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for instant results',
      variant: 'glassmorphism' as const,
      delay: 0.2
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with your team',
      variant: 'glassmorphism' as const,
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Track your progress with detailed insights',
      variant: 'glassmorphism' as const,
      delay: 0.4
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Glassmorphism
            <span className="block text-gradient"> Cards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Beautiful cards with backdrop blur, subtle gradients, and smooth animations
          </p>
        </motion.div>

        {/* Glassmorphism Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              variant={card.variant}
              animate={true}
              delay={card.delay}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Additional Glassmorphism Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <Card
            variant="glassmorphism"
            animate={true}
            delay={0.6}
            className="p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
                Enhanced Glassmorphism
              </h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                This card demonstrates the enhanced glassmorphism effect with backdrop blur,
                subtle transparency, and smooth hover animations.
              </p>
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </Card>

          <Card
            variant="glassmorphism"
            animate={true}
            delay={0.7}
            className="p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
                Smooth Animations
              </h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Each card animates with a soft fade-in and scale-up effect as it enters
                the viewport, creating a delightful user experience.
              </p>
              <motion.button
                className="bg-white/10 backdrop-blur-md border border-white/20 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export { GlassmorphismDemo } 