import type {
  FC,
  ReactNode,
  ElementType,
  ButtonHTMLAttributes,
  HTMLAttributeAnchorTarget
} from 'react'
import Link from 'next/link'
import cn from 'classnames'

export enum Variant {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  icon?: ReactNode
  target?: HTMLAttributeAnchorTarget
  variant?: Variant
}

const Button: FC<Props> = (props) => {
  const {
    children,
    href = undefined,
    icon = undefined,
    variant = Variant.Secondary
  } = props

  const classNames = cn(
    ['py-2', 'font-poppins', 'font-medium', 'text-primary', 'rounded-full', 'relative', 'bg-white'],
    ['transition', 'ease-in-out'],
    ['hover:bg-white/90'],
    ['active:bg-white/0', 'active:text-white'],
    ['after:absolute', 'after:bg-purple-radial', 'after:rounded-full', 'after:z-under'],
    icon && ['inline-flex', 'gap-1', 'items-center'],
    variant === Variant.Primary && [
      'm-border-primary',
      'after:inset-border-primary',
      icon ? ['pl-5', 'pr-7'] : 'px-5',
    ],
    variant === Variant.Secondary && [
      'm-border-secondary',
      'after:inset-border-secondary',
      icon ? ['pl-4', 'pr-6'] : 'px-5',
    ]
  )

  const Component: ElementType = href ? Link : 'button'

  return (
    <Component {...props} className={classNames}>
      {icon}
      {children}
    </Component>
  )
}

export default Button
