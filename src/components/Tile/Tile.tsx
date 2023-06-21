import type { FC, ReactNode } from 'react'
import cn from 'classnames'
import Border from '../Border'
import roundedClassName, { RoundedSize } from '@/lib/roundedClassName'

interface Props {
  children: ReactNode
  className?: string
  roundedFull?: boolean
}

const Tile: FC<Props> = ({ children, className, roundedFull = false }) => (
  <Border roundedSize={roundedFull ? RoundedSize.Full : RoundedSize.Tile}>
    <div className={cn(
      ['p-1', 'bg-white'],
      roundedClassName(roundedFull ? RoundedSize.Full : RoundedSize.TileInner),
      className
    )}>
      <div className={cn(
        ['p-4', 'bg-tile','bg-tile-gradient', 'border', 'border-white', 'shadow-tile-inner'],
        roundedClassName(roundedFull ? RoundedSize.Full : RoundedSize.Default),
      )}>
        {children}
      </div>
    </div>
  </Border>
)

export default Tile
