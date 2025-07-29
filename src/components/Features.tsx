'use client'

import React from 'react'
import { motion } from 'framer-motion'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6 dark:bg-green-900/20 dark:text-green-400">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Everything You Need to
            <span className="block text-gradient"> Scale Your Brand</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Our comprehensive suite of AI-powered tools helps you create, optimize, and scale your marketing campaigns with unprecedented efficiency.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <Card className="p-6 h-full card-hover">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-colors dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-green-50 rounded-2xl p-8 border border-primary-100 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto dark:text-gray-300">
              Join thousands of businesses that are already using our AI-powered platform to scale their marketing efforts and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg dark:bg-green-500 dark:hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="text-primary-600 hover:text-primary-700 font-semibold px-8 py-3 rounded-xl transition-colors dark:text-green-400 dark:hover:text-green-300"
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