import type { FC, ReactNode } from 'react'
import cn from 'classnames'

interface Props {
  children: ReactNode
  className?: string
}

const Border: FC<Props> = ({ children, className = undefined }) => (
  <div className={cn(
    ['m-border-primary', 'rounded', 'relative'],
    ['dark:bg-dark', 'bg-white'],
    [
      'after:inset-border-primary',
      'after:absolute',
      'after:bg-purple-radial',
      'after:rounded',
      'after:z-under'
    ],
    className
  )}>
    {children}
  </div>
)

export default Border
