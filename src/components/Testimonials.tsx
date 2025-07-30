'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

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

  // Animation variants for carousel
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleDragEnd = (event: any, { offset, velocity }: PanInfo) => {
    setIsDragging(false)
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      nextTestimonial()
    } else if (swipe > swipeConfidenceThreshold) {
      prevTestimonial()
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

        {/* Animated Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            ref={carouselRef}
            className="relative h-96 md:h-80"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={1}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute inset-0"
              >
                <Card className="p-6 md:p-8 h-full relative group">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-8 h-8 text-primary-500 dark:text-green-400" />
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary-100 dark:border-green-900/30 mr-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-lg md:text-xl">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110 dark:bg-gray-800 dark:hover:bg-gray-700 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110 dark:bg-gray-800 dark:hover:bg-gray-700 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
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