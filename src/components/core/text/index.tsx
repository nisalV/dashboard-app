import { textSizes } from '../../../common/commonStyles'
import { colors } from '../../../common/values'
import { TextSizes } from '../../../types/dataTypes'

type TextProps = {
  text: string
  id?: string
  textType?: TextSizes
  textColor?: string
  style?: React.CSSProperties
}

export const Text = ({
  text,
  id,
  textType = TextSizes.SMALL,
  textColor = colors.neutral5,
  style,
}: TextProps) => {
  return (
    <p id={id} style={{ ...textSizes[textType], color: textColor, ...style }}>
      {text}
    </p>
  )
}
