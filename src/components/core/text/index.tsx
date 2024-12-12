import { textSizes } from '../../../common/commonStyles'
import { colors } from '../../../common/values'
import { TextSizes } from '../../../types/dataTypes'

type TextProps = {
  text: string
  textType?: TextSizes
  textColor?: string
  style?: React.CSSProperties
}

export const Text = ({
  text,
  textType = TextSizes.SMALL,
  textColor = colors.neutral5,
  style,
}: TextProps) => {
  return (
    <p style={{ ...textSizes[textType], color: textColor, ...style }}>{text}</p>
  )
}
