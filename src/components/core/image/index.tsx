import fallbackUser from '../../../../src/assets/images/fallback-user.png'
import './image.css'

type ImageProps = {
  width: number
  height: number
  src?: string
  alt?: string
}

export const Image = ({ width, height, src, alt }: ImageProps) => {
  return <img src={src} style={{ width, height }} alt={alt} />
}

export const Avatar = ({ width, height, src, alt = 'user' }: ImageProps) => {
  return (
    <img
      id="avatar-img"
      src={src || fallbackUser}
      style={{ width, height }}
      alt={alt}
    />
  )
}
