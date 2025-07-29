'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Calculator, TrendingUp, Users, Zap, Crown } from 'lucide-react'

interface PricingTier {
  name: string
  icon: React.ComponentType<any>
  basePrice: number
  features: string[]
  color: string
  popular?: boolean
}

const InteractivePricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'professional' | 'enterprise'>('professional')
  const [teamSize, setTeamSize] = useState(5)
  const [monthlyContent, setMonthlyContent] = useState(100)
  const [isAnnual, setIsAnnual] = useState(true)

  const plans: Record<string, PricingTier> = {
    starter: {
      name: 'Starter',
      icon: Zap,
      basePrice: 29,
      features: ['AI Content Generation', 'Basic Analytics', 'Email Campaigns', '5 Team Members'],
      color: 'from-blue-500 to-cyan-500 dark:from-green-500 dark:to-green-600'
    },
    professional: {
      name: 'Professional',
      icon: Crown,
      basePrice: 99,
      features: ['Advanced Analytics', 'Automated Campaigns', 'Smart Targeting', 'Unlimited Team'],
      color: 'from-purple-500 to-pink-500 dark:from-green-500 dark:to-green-600',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      icon: TrendingUp,
      basePrice: 299,
      features: ['Custom AI Models', 'Advanced Security', 'Dedicated Support', 'API Access'],
      color: 'from-green-500 to-emerald-500 dark:from-green-500 dark:to-green-600'
    }
  }

  const calculatePrice = () => {
    const basePrice = plans[selectedPlan].basePrice
    let totalPrice = basePrice

    // Add team size multiplier for professional and enterprise
    if (selectedPlan === 'professional' && teamSize > 10) {
      totalPrice += (teamSize - 10) * 5
    } else if (selectedPlan === 'enterprise') {
      totalPrice += teamSize * 10
    }

    // Add content generation costs
    if (selectedPlan === 'starter' && monthlyContent > 50) {
      totalPrice += Math.ceil((monthlyContent - 50) / 10) * 5
    } else if (selectedPlan === 'professional' && monthlyContent > 500) {
      totalPrice += Math.ceil((monthlyContent - 500) / 100) * 10
    }

    return isAnnual ? totalPrice * 0.75 : totalPrice
  }

  const savings = isAnnual ? calculatePrice() * 0.25 : 0

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6 dark:bg-green-900/20 dark:text-green-400">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">Interactive Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Calculate Your
            <span className="block text-gradient"> Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Customize your plan based on your team size and content needs. See real-time pricing updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">Plan Selection</h3>

              <div className="space-y-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedPlan(key as any)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${selectedPlan === key
                      ? 'border-primary-500 bg-primary-50 dark:border-green-500 dark:bg-green-900/20'
                      : 'border-gray-200 hover:border-primary-300 dark:border-gray-700 dark:hover:border-green-400'
                      }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                        <plan.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-900 dark:text-white">{plan.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">${plan.basePrice}/month base</div>
                      </div>
                      {plan.popular && (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium dark:from-green-500 dark:to-green-600">
                          Popular
                        </div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">Customize Your Plan</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                    Team Size: {teamSize} members
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider dark:bg-gray-700"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1 dark:text-gray-400">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                    Monthly Content Pieces: {monthlyContent}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    value={monthlyContent}
                    onChange={(e) => setMonthlyContent(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider dark:bg-gray-700"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1 dark:text-gray-400">
                    <span>10</span>
                    <span>1000</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Annual Billing</span>
                  <button
                    onClick={() => setIsAnnual(!isAnnual)}
                    className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-primary-500 dark:bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                  >
                    <motion.div
                      className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                      animate={{ x: isAnnual ? 32 : 4 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">Your Custom Plan</h3>

                <div className="mb-8">
                  <div className="text-6xl font-bold text-gradient mb-2">
                    ${calculatePrice()}
                  </div>
                  <div className="text-gray-600 text-lg dark:text-gray-400">
                    per month
                    {isAnnual && <span className="text-primary-600 font-medium dark:text-green-400"> (billed annually)</span>}
                  </div>
                </div>

                {isAnnual && savings > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 dark:bg-green-900/20 dark:border-green-700">
                    <div className="text-green-800 font-medium dark:text-green-300">
                      You save ${savings.toFixed(0)}/month with annual billing!
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Plan Includes:</h4>
                  <ul className="space-y-2 text-left">
                    {plans[selectedPlan].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full dark:bg-green-400"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full dark:bg-green-400"></div>
                      <span className="text-gray-700 dark:text-gray-300">{teamSize} team members</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full dark:bg-green-400"></div>
                      <span className="text-gray-700 dark:text-gray-300">{monthlyContent} content pieces/month</span>
                    </li>
                  </ul>
                </div>

                <Button size="lg" className="w-full mb-4">
                  Start Free Trial
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No credit card required • 14-day free trial
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { InteractivePricingCalculator }