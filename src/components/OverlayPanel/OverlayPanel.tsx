import type { FC, ReactNode } from 'react'
import cn from 'classnames'
import { RoundedSize } from '@/lib/roundedClassName'
import Border from '@/components/Border'

interface Props {
  children: ReactNode
  className?: string
}

const OverlayPanel: FC<Props> = ({ children, className = undefined }) => {
  const glassyClassName = cn(['bg-[rgba(255, 255, 255, 0.01)]', 'bg-glassy', 'backdrop-blur-xs'])
  
  return (
    <div className={cn(
      glassyClassName,
      ['p-1', 'border', 'border-white', 'rounded-panel', 'shadow-overlay-panel'],
      className
    )}>
      <Border roundedSize={RoundedSize.PanelInner}>
        <div className={cn(glassyClassName, 'rounded-panel-content')}>
          {children}
        </div>
      </Border>
    </div>
  )
}

export default OverlayPanel
