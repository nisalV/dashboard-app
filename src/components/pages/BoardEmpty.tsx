import { colors } from '../../common/values'
import { TextSizes } from '../../types/dataTypes'
import { Text } from '../core/text'

const BoardEmpty = () => {
  return (
    <div className="empty-container">
      <Text
        textType={TextSizes.EXTRA_LARGE_BOLD}
        text={'Select a Board'}
        textColor={colors.neutral4}
      />
    </div>
  )
}

export default BoardEmpty
