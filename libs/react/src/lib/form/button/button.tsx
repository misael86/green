import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ButtonSize, ButtonVariant } from '@sebgroup/extract'
import classNames from 'classnames'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** Button styling. Available options: 'primary', 'secondary', 'ghost' and 'tertiary'. */
  variant?: ButtonVariant
  /** Styling button as active or not */
  active?: boolean
  /** Button size. Available options: 'small' and 'large'. */
  size?: ButtonSize
  /** Renders as a `data-testid` attribute on the `<button>` element, useful in testing scenarios. */
  testId?: string
}

export function Button({
  className,
  variant,
  active = false,
  type = 'button',
  size,
  testId,
  ...otherProps
}: ButtonProps) {
  const buttonClassName =
    classNames(className, variant, size, {
      active: active,
    }) || undefined

  return variant == 'close' ? (
    <button
      className={buttonClassName}
      aria-label={otherProps['aria-label'] ?? 'Close'}
      data-testid={testId}
      {...otherProps}
    >
      <i></i>
    </button>
  ) : (
    <button
      className={buttonClassName}
      type={type}
      data-testid={testId}
      {...otherProps}
    />
  )
}

export default Button
