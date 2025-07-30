'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, PanInfo, useAnimation } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'ADmyBRAND AI Suite has completely transformed our marketing strategy. The AI content generation alone has saved us 20+ hours per week, and our campaign performance has improved by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'As a startup, we needed to maximize our marketing ROI with limited resources. This platform has been a game-changer. The automated campaigns and smart targeting have helped us scale faster than ever.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Manager',
      company: 'Global Retail Co.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The analytics and reporting features are incredible. We can now track every campaign in real-time and make data-driven decisions. Our conversion rates have increased by 150% since switching.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'Creative Agency',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The AI-powered content generation is mind-blowing. It creates high-quality, engaging content that matches our brand voice perfectly. Our clients are amazed by the results.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Marketing',
      company: 'Enterprise Solutions',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      content: 'The enterprise features and security compliance are exactly what we needed. The dedicated support team is incredibly responsive, and the platform integrates seamlessly with our existing tools.',
      rating: 5
    },
    {
      name: 'Alex Martinez',
      role: 'Growth Manager',
      company: 'ScaleUp Ventures',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      content: 'The ROI optimization features are incredible. We\'ve seen a 400% increase in our marketing efficiency. The AI recommendations are spot-on and have helped us allocate our budget much more effectively.',
      rating: 5
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered || isDragging) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isHovered, isDragging, testimonials.length])

  // Responsive animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Responsive card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95, // Reduced scale for mobile
      y: 20 // Reduced movement for mobile
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5, // Faster animation for mobile
        ease: "easeOut"
      }
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 30 // Reduced threshold for mobile

    if (info.offset.x > threshold) {
      prevTestimonial()
    } else if (info.offset.x < -threshold) {
      nextTestimonial()
    }
  }

  const handleDragStart = () => {
    setIsDragging(true)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
            <span className="text-sm font-medium">Customer Success</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Loved by
            <span className="block text-gradient"> 10,000+ Marketers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            See what our customers have to say about how ADmyBRAND AI Suite has transformed their marketing efforts.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full sm:w-80 md:w-96"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.01, // Reduced scale for mobile
                  y: -4, // Reduced movement for mobile
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="p-4 md:p-6 h-full relative group">
                  {/* Quote icon */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary-500 dark:text-green-400" />
                  </div>

                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary-100 dark:border-green-900/30 mr-3 md:mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm md:text-base">
                    "{testimonial.content}"
                  </blockquote>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110 dark:bg-gray-800 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110 dark:bg-gray-800 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-primary-500 dark:bg-green-500 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2">500%</div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Customer Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Testimonials }