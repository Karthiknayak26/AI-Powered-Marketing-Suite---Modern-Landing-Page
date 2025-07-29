'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured?: boolean
}

const BlogSection: React.FC = () => {
  // Consistent date formatting function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 AI Marketing Strategies That Actually Work in 2025',
      excerpt: 'Discover the most effective AI-powered marketing strategies that are driving real results for businesses this year.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: '2',
      title: 'How to Create Content That Converts Using AI',
      excerpt: 'Learn how to leverage AI tools to create compelling content that drives conversions and engagement.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'The Future of Marketing Analytics: AI-Powered Insights',
      excerpt: 'Explore how AI is revolutionizing marketing analytics and providing deeper insights than ever before.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'Building High-Performing Marketing Teams with AI',
      excerpt: 'Discover how AI tools are helping marketing teams work more efficiently and achieve better results.',
      author: 'David Thompson',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Team Management',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'ROI Optimization: Getting More from Your Marketing Budget',
      excerpt: 'Learn proven strategies to maximize your marketing ROI using AI-powered optimization techniques.',
      author: 'Lisa Wang',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'ROI',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'The Complete Guide to AI-Powered Customer Segmentation',
      excerpt: 'Master the art of customer segmentation using AI to deliver personalized marketing experiences.',
      author: 'Alex Kim',
      date: '2025-01-03',
      readTime: '12 min read',
      category: 'Customer Segmentation',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
            <Tag className="w-4 h-4" />
            <span className="text-sm font-medium">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Marketing Insights &
            <span className="block text-gradient"> Industry Trends</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Stay ahead of the curve with our latest articles on AI marketing, industry trends, and best practices.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium dark:bg-green-500">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4 dark:text-gray-400">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-medium dark:bg-green-900/20 dark:text-green-400">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-colors dark:text-white">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center dark:from-green-500 dark:to-green-600">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>

                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.filter(post => !post.featured).map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium dark:bg-green-500">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-colors line-clamp-2 dark:text-white">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 dark:text-gray-300">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center dark:from-green-500 dark:to-green-600">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>

                    <Button variant="ghost" size="sm" className="group">
                      Read
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Get weekly updates on AI marketing trends, best practices, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                Subscribe to Newsletter
              </Button>
              <Button variant="secondary" size="lg">
                View All Posts
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { BlogSection }