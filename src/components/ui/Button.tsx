import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'solid' | 'outline'
  showArrow?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'solid',
  showArrow = false,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${
    variant === 'solid'
      ? 'bg-ink text-cream hover:bg-clay hover:text-ink'
      : 'border border-taupe text-ink hover:bg-sand'
  } ${className}`

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        {showArrow && <ArrowRight size={16} />}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </button>
  )
}