'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check, Star, Zap, Crown, Users } from 'lucide-react'

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: isAnnual ? 29 : 39,
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Content Generation (50/month)',
        'Basic Analytics Dashboard',
        'Email Campaigns',
        'Social Media Integration',
        '5 Team Members',
        'Email Support'
      ],
      popular: false,
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      name: 'Professional',
      icon: Crown,
      price: isAnnual ? 99 : 129,
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        'AI Content Generation (500/month)',
        'Advanced Analytics & Reporting',
        'Automated Campaigns',
        'Smart Audience Targeting',
        'Unlimited Team Members',
        'Priority Support',
        'Custom Integrations',
        'A/B Testing'
      ],
      popular: true,
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    },
    {
      name: 'Enterprise',
      icon: Users,
      price: isAnnual ? 299 : 399,
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited AI Content Generation',
        'Custom AI Models',
        'Advanced Security & Compliance',
        'Dedicated Account Manager',
        'Custom Workflows',
        'API Access',
        'White-label Solutions',
        '24/7 Phone Support'
      ],
      popular: false,
      color: 'from-primary-500 to-primary-600 dark:from-green-500 dark:to-green-600'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900">
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
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Choose Your
            <span className="block text-gradient"> Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 dark:text-gray-300">
            Start free and scale as you grow. All plans include our core AI features with different usage limits and advanced capabilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-primary-500 dark:bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full dark:bg-green-900/20 dark:text-green-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-primary-500 text-white text-sm font-semibold px-4 py-1 rounded-full dark:bg-green-500">
                    Most Popular
                  </div>
                </motion.div>
              )}
              <Card className={`p-8 h-full ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl dark:ring-green-500' : ''}`}>
                <div className="text-center mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-300">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0 dark:text-green-400" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-green-50 rounded-2xl p-8 border border-primary-100 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Need a Custom Plan?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto dark:text-gray-300">
              Contact our sales team to discuss custom pricing and enterprise solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary">
                  Contact Sales
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline">
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Pricing }