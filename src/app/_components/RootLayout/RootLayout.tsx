import type { FC, ReactNode } from 'react'
import './globals.css'

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default RootLayout
