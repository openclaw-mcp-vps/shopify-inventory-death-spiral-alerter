import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Inventory Death Spiral Alerter — Stop Stockouts Before They Kill Conversions',
  description: 'Monitors Shopify inventory levels and predicts stockouts based on sales velocity. Get email/SMS alerts before you hit zero. Built for stores with 100+ SKUs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bbf4ff49-72a6-46f1-bf10-898c7d009b9c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
