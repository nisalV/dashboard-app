import { colors, sizes } from '../../../common/values'
import { useLayout } from '../../../hooks/layoutHooks'
import { ButtonIcon } from '../../core/button'

const styles: Record<string, React.CSSProperties> = {
  floatButton: {
    width: sizes.button.large,
    height: sizes.button.large,
    borderRadius: sizes.button.large,
    marginLeft: 'auto',
    backgroundColor: colors.primary,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}

export const FloatButton = () => {
  const { showLeftPanel, setShowLeftPanel } = useLayout()
  return (
    <div id="float-button-container">
      <ButtonIcon
        icon={'Grid'}
        iconColor={colors.white}
        iconWidth={sizes.icon.large}
        iconHeight={sizes.icon.large}
        style={styles.floatButton}
        onClick={() => setShowLeftPanel(!showLeftPanel)}
      />
    </div>
  )
}
