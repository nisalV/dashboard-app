import { textSizes } from '../../../common/commonStyles'
import { colors, spaces } from '../../../common/values'
import { ButtonTypes, TextSizes } from '../../../types/dataTypes'
import Icon from '../Icon'
import fallbackUser from '../../../assets/images/fallback-user.png'
import './button.css'

type ButtonProps = {
  label: string
  textType?: TextSizes
  buttonType?: ButtonTypes
  color?: string
  width?: number | string
  textColor?: string
  borderColor?: string
  leftIcon?: string
  rightIcon?: string
  rightElement?: React.ReactNode
  style?: React.CSSProperties
  textStyles?: React.CSSProperties
  onClick: () => void
}

type ButtonIconProps = {
  icon: string
  iconColor?: string
  iconWidth?: number
  iconHeight?: number
  showIndicator?: boolean
  style?: React.CSSProperties
  onClick: () => void
}

type ButtonImageProps = {
  src: string | undefined
  alt?: string
  size: number
  fallback?: string
  style?: React.CSSProperties
  onClick: () => void
}

export const ButtonBase = ({
  label,
  textType = TextSizes.MEDIUM_BOLD,
  buttonType,
  color = colors.primary,
  width = 'fit-content',
  textColor = colors.white,
  borderColor,
  leftIcon,
  rightIcon,
  rightElement,
  style,
  textStyles,
  onClick,
}: ButtonProps) => {
  return (
    <button
      id="button-base"
      type={buttonType}
      style={{
        color: textColor,
        width: width,
        backgroundColor: color,
        border: `2px solid ${borderColor || color}`,
        ...style,
      }}
      onClick={onClick}
    >
      <div id="button-base-left-container">
        {leftIcon && (
          <Icon
            id="button-base-left-icon"
            name={leftIcon}
            fill={textColor || colors.white}
          />
        )}
        <p
          id="button-base-text"
          style={{ ...textSizes[textType], color: textColor, ...textStyles }}
        >
          {label}
        </p>
      </div>
      {rightIcon && <Icon name={rightIcon} fill={textColor || colors.white} />}
      {rightElement}
    </button>
  )
}

export const ButtonIcon = ({
  icon,
  showIndicator = false,
  style,
  iconColor,
  iconWidth,
  iconHeight,
  onClick,
}: ButtonIconProps) => {
  return (
    <button id="button-icon" style={style} onClick={onClick}>
      <Icon
        name={icon}
        fill={iconColor}
        width={iconWidth}
        height={iconHeight}
      />
      {showIndicator && <div id="button-icon-indicator" />}
    </button>
  )
}

export const ButtonImage = ({ src, alt, style, onClick }: ButtonImageProps) => {
  return (
    <button id="button-image" style={style} onClick={onClick}>
      <img src={src || fallbackUser} alt={alt} />
    </button>
  )
}

export const ButtonImageRound = ({
  src,
  alt,
  size,
  style,
  fallback,
  onClick,
}: ButtonImageProps) => {
  return (
    <button
      id="button-image-round"
      style={{ width: size, height: size, minWidth: size, ...style }}
      onClick={onClick}
    >
      <img
        src={src || fallback || fallbackUser}
        alt={alt}
        style={{
          width: size + spaces.smallest,
          height: size + spaces.smallest,
        }}
      />
    </button>
  )
}

export const ButtonClearText = ({
  label,
  buttonType,
  textColor,
  style,
  onClick,
}: ButtonProps) => {
  return (
    <button
      id="button-clear-text"
      type={buttonType}
      style={{ color: textColor || colors.white, ...style }}
      onClick={onClick}
    >
      <p id="button-clear-text">{label}</p>
    </button>
  )
}
