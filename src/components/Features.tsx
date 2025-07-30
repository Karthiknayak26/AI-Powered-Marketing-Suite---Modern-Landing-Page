'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import {
  Brain,
  BarChart3,
  Target,
  Zap,
  Users,
  Shield,
  TrendingUp,
  Palette,
  MessageSquare,
  Globe
} from 'lucide-react'

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create compelling marketing copy, social media posts, and email campaigns with our advanced AI writing assistant.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your campaign performance with real-time analytics and predictive modeling.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      icon: Target,
      title: 'Smart Audience Targeting',
      description: 'Reach the right audience with AI-powered segmentation and personalized marketing strategies.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      icon: Zap,
      title: 'Automated Campaigns',
      description: 'Set up intelligent marketing workflows that adapt and optimize based on real-time performance data.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team using shared workspaces, real-time editing, and approval workflows.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, data encryption, and role-based access controls.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'ROI Optimization',
      description: 'Maximize your marketing budget with AI-driven recommendations and automated bid management.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      icon: Palette,
      title: 'Brand Consistency',
      description: 'Maintain your brand identity across all channels with automated style guides and asset management.',
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    }
  ]

  // Responsive container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger for mobile
        delayChildren: 0.05
      }
    }
  }

  // Responsive card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30, // Reduced movement for mobile
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5, // Faster animation for mobile
        ease: "easeOut"
      }
    }
  }

  // Responsive header variants
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={containerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6 dark:bg-green-900/20 dark:text-green-400">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Everything You Need to
            <span className="block text-gradient"> Scale Your Brand</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Our comprehensive suite of AI-powered tools helps you create, optimize, and scale your marketing campaigns with unprecedented efficiency.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4, // Reduced hover movement for mobile
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <Card className="p-4 md:p-6 h-full card-hover">
                <motion.div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-gradient transition-colors dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: 0.8, // Reduced delay for mobile
            ease: "easeOut"
          }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-green-50 rounded-2xl p-6 md:p-8 border border-primary-100 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto dark:text-gray-300">
              Join thousands of businesses that are already using our AI-powered platform to scale their marketing efforts and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg dark:bg-green-500 dark:hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="text-primary-600 hover:text-primary-700 font-semibold px-6 py-3 rounded-xl transition-colors dark:text-green-400 dark:hover:text-green-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Features →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Features }