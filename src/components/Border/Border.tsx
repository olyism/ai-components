import type { FC, ReactNode } from 'react'
import cn from 'classnames'
import roundedClassName, { RoundedSize } from '../../lib/roundedClassName'

interface Props {
  children: ReactNode
  className?: string
  roundedSize?: RoundedSize
}

const Border: FC<Props> = ({ children, className = undefined, roundedSize = RoundedSize.Default }) => (
  <div className={cn(
    ['m-border-primary', 'relative'],
    roundedClassName(roundedSize),
    ['dark:bg-dark', 'bg-white'],
    [
      'after:inset-border-primary',
      'after:absolute',
      'after:bg-purple-radial',
      'after:z-under',
      `after:${roundedClassName(roundedSize)}`,
    ],
    className
  )}>
    {children}
  </div>
)

export default Border
