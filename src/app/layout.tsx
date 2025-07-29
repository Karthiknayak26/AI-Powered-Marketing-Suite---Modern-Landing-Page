import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
  description: 'Transform your marketing with AI-powered tools. Create stunning campaigns, analyze performance, and grow your brand with our comprehensive AI suite.',
  keywords: 'AI marketing, brand management, digital marketing, automation, analytics',
  authors: [{ name: 'ADmyBRAND Team' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered tools. Create stunning campaigns, analyze performance, and grow your brand.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}