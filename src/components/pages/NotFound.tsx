import { colors } from '../../common/values'
import { TextSizes } from '../../types/dataTypes'
import { Text } from '../core/text'

const NotFound = () => {
  return (
    <div className="empty-container">
      <Text
        textType={TextSizes.EXTRA_LARGE_BOLD}
        text={'Page not found'}
        textColor={colors.neutral4}
      />
    </div>
  )
}

export default NotFound
