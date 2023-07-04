import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Memoria',
  description: 'Share Photos Albums Seemlessly!!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} container mx-auto p-4`}>{children}</body>
    </html>
  )
}
