'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { DemoVideo } from '@/components/ui/DemoVideo'
import { Play, ArrowRight, Sparkles, Zap, Target, TrendingUp, Users } from 'lucide-react'

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  // Responsive animation variants
  const headerVariants = {
    hidden: {
      opacity: 0,
      x: -50 // Reduced movement for mobile
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const subtextVariants = {
    hidden: {
      opacity: 0,
      x: 50 // Reduced movement for mobile
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const ctaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Background Elements with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float dark:bg-green-400/20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-float dark:bg-green-400/20" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl animate-float dark:bg-green-300/10" style={{ animationDelay: '4s' }} />

        {/* Additional floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary-400/30 rounded-full dark:bg-green-400/30"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary-400/30 rounded-full dark:bg-green-400/30"
        />
      </motion.div>

      {/* Floating UI Elements - Background Only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-1/4 left-10 hidden lg:block z-10"
      >
        <motion.div
          className="glass rounded-2xl p-4 animate-float"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Zap className="w-8 h-8 text-primary-500 dark:text-green-400" />
          <div className="text-sm font-medium text-gray-700 mt-2 dark:text-gray-300">AI-Powered</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-1/4 right-10 hidden lg:block z-10"
      >
        <motion.div
          className="glass rounded-2xl p-4 animate-float"
          style={{ animationDelay: '1s' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Target className="w-8 h-8 text-primary-500 dark:text-green-400" />
          <div className="text-sm font-medium text-gray-700 mt-2 dark:text-gray-300">Smart Targeting</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute top-1/2 left-20 hidden xl:block z-10"
      >
        <motion.div
          className="glass rounded-2xl p-4 animate-float"
          style={{ animationDelay: '3s' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TrendingUp className="w-8 h-8 text-primary-500 dark:text-green-400" />
          <div className="text-sm font-medium text-gray-700 mt-2 dark:text-gray-300">Growth Focused</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-1/3 left-1/4 hidden xl:block z-10"
      >
        <motion.div
          className="glass rounded-2xl p-4 animate-float"
          style={{ animationDelay: '2s' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Users className="w-8 h-8 text-primary-500 dark:text-green-400" />
          <div className="text-sm font-medium text-gray-700 mt-2 dark:text-gray-300">Team Ready</div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 dark:bg-gray-800/50 dark:border-gray-700/30"
        >
          <Sparkles className="w-4 h-4 text-primary-500 dark:text-green-400" />
          <span className="text-gray-700 text-sm font-medium dark:text-gray-300">
            AI-Powered Marketing Suite
          </span>
        </motion.div>

        {/* Main Headline - Fades in from left */}
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight dark:text-white"
        >
          Transform Your
          <span className="block text-gradient"> Brand with AI</span>
        </motion.h1>

        {/* Subtext - Fades in from right */}
        <motion.p
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed dark:text-gray-300"
        >
          Create stunning campaigns, analyze performance, and grow your brand with our comprehensive AI-powered marketing suite.
        </motion.p>

        {/* CTA Buttons - Bounces in after 0.5s delay */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <Button size="lg" className="group">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <DemoVideo />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
        >
          <motion.div
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2"
              whileHover={{ scale: 1.1 }}
            >
              10K+
            </motion.div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Active Users</div>
          </motion.div>
          <motion.div
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2"
              whileHover={{ scale: 1.1 }}
            >
              500%
            </motion.div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">ROI Increase</div>
          </motion.div>
          <motion.div
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2"
              whileHover={{ scale: 1.1 }}
            >
              24/7
            </motion.div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">AI Support</div>
          </motion.div>
          <motion.div
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2"
              whileHover={{ scale: 1.1 }}
            >
              98%
            </motion.div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center dark:border-gray-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2 dark:bg-gray-600"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export { Hero }