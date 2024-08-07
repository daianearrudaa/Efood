// Button.tsx

import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  background: 'orange' | 'white'
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
}

export const Button = ({
  background,
  type,
  title,
  to,
  children,
  disabled,
  onClick
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        background={background}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink href={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
