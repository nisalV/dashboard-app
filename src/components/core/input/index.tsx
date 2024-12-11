import { forwardRef } from 'react'
import './inputStyles.css'
import Icon from '../Icon'
import { colors, spaces } from '../../../common/values'

const styles: Record<string, React.CSSProperties> = {
  icon: {
    marginRight: spaces.small,
  },
}

type InputProps = {
  value: string
  id?: string
  isRequired?: boolean
  placeholder?: string
  style?: React.CSSProperties
  maxLength?: number
  onChange: (v: string) => void
  onSubmit?: () => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      id = 'input-common-container',
      placeholder,
      isRequired,
      style,
      maxLength,
      onChange,
      onSubmit,
    },
    forwardRef
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!onSubmit) return

      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        onSubmit?.()
      }
    }

    return (
      <div id={id} style={style}>
        <Icon
          name="Search"
          fill={colors.neutral4}
          style={styles.icon}
        />
        <input
          id="input-common"
          ref={forwardRef}
          value={value}
          required={isRequired}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    )
  }
)
