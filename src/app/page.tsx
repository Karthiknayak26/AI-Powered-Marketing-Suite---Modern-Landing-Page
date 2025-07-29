import React from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { InteractivePricingCalculator } from '@/components/ui/InteractivePricingCalculator'
import { BlogSection } from '@/components/ui/BlogSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <InteractivePricingCalculator />
      <Pricing />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <Footer />
    </main>
  )
}