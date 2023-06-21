import type { FC, ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import cn from 'classnames'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
  display: 'swap',
})

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
  <html className={cn(poppins.variable, 'dark')} lang="en">
    <body className="dark:bg-dark dark:text-white">{children}</body>
  </html>
)

export default RootLayout
