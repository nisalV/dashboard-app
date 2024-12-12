import fallbackUser from '../../../../src/assets/images/fallback-user.png'
import './image.css'

type ImageProps = {
  width: number
  height: number
  src?: string
  fallback?: string
  alt?: string
  style?: React.CSSProperties
}

export const Image = ({
  width,
  height,
  src,
  fallback,
  alt,
  style,
}: ImageProps) => {
  return (
    <img src={src || fallback} style={{ ...style, width, height }} alt={alt} />
  )
}

export const Avatar = ({
  width,
  height,
  src,
  fallback,
  alt = 'user',
}: ImageProps) => {
  return (
    <img
      id="avatar-img"
      src={src || fallback || fallbackUser}
      style={{ width, height }}
      alt={alt}
    />
  )
}
