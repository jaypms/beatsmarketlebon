'use client'

import { cn } from '@/lib/utils'
import React from 'react'

export const buttonVariants = {
  default: 'bg-pink-600 text-white hover:bg-pink-700',
  outline: 'border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white',
  ghost: 'bg-transparent text-white hover:bg-white/10',
  icon: 'p-2 rounded-md',
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', className, ...props }, ref) => {
    const variantClasses = buttonVariants[variant]
    const sizeClasses = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
      icon: 'p-2',
    }[size]

    return (
      <button
        ref={ref}
        className={`${variantClasses} ${sizeClasses} rounded-md font-semibold transition-colors duration-200 ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
