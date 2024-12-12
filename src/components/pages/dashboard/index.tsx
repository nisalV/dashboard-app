import { textStyles } from '../../../common/commonStyles'
import {
  colors,
  fallbackTeam,
  layoutBreakPoint,
  sizes,
} from '../../../common/values'
import { useLayout, useWindowDimensions } from '../../../hooks/layoutHooks'
import { TextSizes } from '../../../types/dataTypes'
import { ButtonBase, ButtonIcon } from '../../core/button'
import { Avatar } from '../../core/image'
import { Text } from '../../core/text'
import './dashboardStyles.css'

const styles: Record<string, React.CSSProperties> = {
  rootText: {
    width: 136,
    ...textStyles.oneLineClip,
  },
  floatButton: {
    width: sizes.button.large,
    height: sizes.button.large,
    borderRadius: sizes.button.large,
    marginLeft: 'auto',
    backgroundColor: colors.primary,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
  buttonCommon: {
    borderRadius: 8,
    marginBottom: 14,
  },
  logoutText: {
    marginLeft: 8,
  },
}
export const Dashboard = () => {
  const { showLeftPanel, setShowLeftPanel } = useLayout()
  const { windowWidth } = useWindowDimensions()

  const showPanel =
    showLeftPanel || (!!windowWidth && windowWidth > layoutBreakPoint.leftPanel)

  return (
    <>
      <div className={`left-panel-container ${showPanel ? 'show' : 'hide'}`}>
        <div id="folder-container">
          <div id="root-data-container">
            <Avatar width={30} height={30} src={''} fallback={fallbackTeam} />
            <div>
              <Text
                text="workspace"
                textType={TextSizes.MEDIUM}
                style={styles.rootText}
              />
              <Text
                text="Root folder"
                textType={TextSizes.LARGE_BOLD}
                textColor={colors.neutral3}
                style={styles.rootText}
              />
            </div>
            <ButtonIcon icon={'ArrowDown'} onClick={() => {}} />
          </div>
          <ButtonBase
            label={'Dashboard'}
            leftIcon="Grid"
            color={colors.white}
            textColor={colors.neutral4}
            textType={TextSizes.LARGE}
            width={'100%'}
            style={styles.buttonCommon}
            textStyles={styles.logoutText}
            onClick={() => {}}
          />
          <ButtonBase
            label={'Boards'}
            leftIcon="Folder"
            color={colors.white}
            textColor={colors.neutral4}
            textType={TextSizes.LARGE}
            width={'100%'}
            style={styles.buttonCommon}
            textStyles={styles.logoutText}
            onClick={() => {}}
          />
          <ButtonBase
            label={'Messages'}
            leftIcon="Comment"
            color={colors.white}
            textColor={colors.neutral4}
            textType={TextSizes.LARGE}
            width={'100%'}
            style={styles.buttonCommon}
            textStyles={styles.logoutText}
            onClick={() => {}}
          />
          <ButtonBase
            label={'Calendar'}
            leftIcon="Calendar"
            color={colors.white}
            textColor={colors.neutral4}
            textType={TextSizes.LARGE}
            width={'100%'}
            style={styles.buttonCommon}
            textStyles={styles.logoutText}
            onClick={() => {}}
          />
          <ButtonBase
            label={'Team members'}
            leftIcon="User"
            color={colors.white}
            textColor={colors.neutral4}
            textType={TextSizes.LARGE}
            width={'100%'}
            style={styles.buttonCommon}
            textStyles={styles.logoutText}
            onClick={() => {}}
          />
        </div>
        <ButtonBase
          label={'Support'}
          leftIcon="Info"
          color={colors.white}
          textColor={colors.neutral4}
          textType={TextSizes.LARGE}
          width={'100%'}
          style={styles.buttonCommon}
          textStyles={styles.logoutText}
          onClick={() => {}}
        />
        <ButtonBase
          label={'Logout'}
          leftIcon="SignOut"
          color={colors.neutral3}
          textType={TextSizes.LARGE}
          width={'100%'}
          style={styles.buttonCommon}
          textStyles={styles.logoutText}
          onClick={() => {}}
        />
      </div>
      <div id="swimlanes-container">
        <div className="swimlane"></div>
        <div className="swimlane"></div>
        <div className="swimlane"></div>
        <div className="swimlane"></div>
      </div>
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
    </>
  )
}
