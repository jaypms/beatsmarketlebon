"use client"

import NextLink, { LinkProps } from "next/link"
import React from "react"

interface Props extends LinkProps {
  className?: string
  children: React.ReactNode
}

export function Link({ className, children, ...props }: Props) {
  return (
    <NextLink {...props} className={className}>
      {children}
    </NextLink>
  )
}
