import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../../../build/web/brand-1/tailwind.css'
import '../../../build/web/brand-1/variables-dark.css'
import '../../../build/web/brand-1/variables-small.css'
import '../../../build/web/brand-1/variables-medium.css'
import '../../../build/web/brand-1/variables-large.css'
import '../../../build/web/brand-1/variables-xLarge.css'
import '../../../build/web/brand-1/variables-xxLarge.css'
import '../../../build/web/brand-1/variables-xxxLarge.css'
import { ThemeProvider } from '@/src/contexts/uds'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
