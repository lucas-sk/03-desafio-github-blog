import { ReactNode } from 'react'
import * as S from './styles'

interface LinkProps {
  children: ReactNode
  href: string
  startAdorment?: ReactNode
  endAdorment?: ReactNode
}

export function Link({
  children,
  href,
  endAdorment,
  startAdorment,
}: LinkProps) {
  return (
    <S.LinkContainer to={href}>
      {startAdorment}
      {children}
      {endAdorment}
    </S.LinkContainer>
  )
}
