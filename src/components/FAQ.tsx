'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does the AI content generation work?',
      answer: 'Our AI uses advanced natural language processing to understand your brand voice, target audience, and campaign goals. It then generates high-quality, engaging content that matches your style and resonates with your audience. You can provide prompts, keywords, and context to guide the AI in creating exactly what you need.'
    },
    {
      question: 'What makes ADmyBRAND different from other marketing tools?',
      answer: 'Unlike traditional marketing tools, ADmyBRAND combines AI-powered content creation, intelligent campaign automation, and predictive analytics in one platform. Our AI learns from your performance data to continuously optimize campaigns, saving you time while improving results. Plus, our enterprise-grade security and compliance features make it suitable for organizations of any size.'
    },
    {
      question: 'Can I integrate ADmyBRAND with my existing tools?',
      answer: 'Yes! ADmyBRAND integrates seamlessly with popular marketing tools like HubSpot, Mailchimp, Google Ads, Facebook Ads, and many more. We also provide API access for custom integrations. Our team can help you set up integrations and ensure everything works smoothly with your existing workflow.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. You can create campaigns, generate content, and explore all our AI features during the trial period. If you love it, you can upgrade to a paid plan at any time.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including live chat, email support, and detailed documentation. Professional and Enterprise plans include priority support and dedicated account managers. We also offer onboarding sessions and regular check-ins to ensure you\'re getting the most out of the platform.'
    },
    {
      question: 'How secure is my data with ADmyBRAND?',
      answer: 'Security is our top priority. We use bank-grade encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, redundant cloud infrastructure with role-based access controls. We never share your data with third parties and provide full data export capabilities.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your access will continue until the end of your current billing period. We also provide data export tools so you can take your data with you if needed.'
    },
    {
      question: 'Do you offer custom pricing for enterprise clients?',
      answer: 'Yes, we offer custom pricing and features for enterprise clients. This includes dedicated account managers, custom AI model training, white-label solutions, and advanced security features. Contact our sales team to discuss your specific needs and get a custom quote.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6 dark:bg-green-900/20 dark:text-green-400">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Got Questions?
            <span className="block text-gradient"> We've Got Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-green-500/25"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors dark:hover:bg-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 dark:text-white">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-500 dark:text-green-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Our support team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="button-primary">
                Contact Support
              </button>
              <button className="button-secondary">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { FAQ }