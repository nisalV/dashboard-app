import { colors, taskStatusHeaders } from '../../../../common/values'
import { TextSizes } from '../../../../types/dataTypes'
import { ButtonIcon } from '../../../core/button'
import { Text } from '../../../core/text'

const styles: Record<string, React.CSSProperties> = {
  plus: {
    marginLeft: 'auto',
    padding: 8,
  },
  dots: {
    marginRight: -5,
  },
}

type SwimlaneHeaderProps = {
  index: number
}

export const SwimlaneHeader = ({ index }: SwimlaneHeaderProps) => {
  return (
    <div className="swimlane-header">
      <div
        className="swimlane-header-text"
        style={{ backgroundColor: taskStatusHeaders[index].color }}
      >
        <Text
          textType={TextSizes.MEDIUM_BOLD}
          text={taskStatusHeaders[index].name}
          textColor={taskStatusHeaders[index].textColor}
        />
      </div>
      <ButtonIcon
        icon={'Plus'}
        iconColor={colors.neutral3}
        iconHeight={10}
        iconWidth={10}
        style={styles.plus}
        onClick={() => {}}
      />
      <ButtonIcon
        icon={'Dots'}
        iconColor={colors.neutral3}
        iconHeight={20}
        iconWidth={20}
        style={styles.dots}
        onClick={() => {}}
      />
    </div>
  )
}
