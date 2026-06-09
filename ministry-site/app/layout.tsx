import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Reaching the Unreached | Urban Youth Ministry Sri Lanka',
  description: 'Transforming lives across Colombo — Dematagoda, Wattala, Wellawatte & Kirulapone through faith, community, and hope.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${nunito.variable} font-body bg-stone-50 text-stone-800`}>
        {children}
      </body>
    </html>
  )
}
