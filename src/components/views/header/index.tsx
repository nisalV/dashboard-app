import {
  colors,
  logo,
  namedLogo,
  sizes,
  spaces,
  values,
} from '../../../common/values'
import { ButtonBase, ButtonIcon, ButtonImageRound } from '../../core/button'
import { Input } from '../../core/input'
import profileImage from '../../../assets/images/user.png'
import { useLayout, useWindowDimensions } from '../../../hooks/layoutHooks'
import { TextSizes } from '../../../types/dataTypes'
import { Image } from '../../core/image'
import './headerStyles.css'

const styles: Record<string, React.CSSProperties> = {
  logo: {
    marginRight: spaces.medium,
  },
  imageButton: {
    width: '24.6px',
    height: '24px',
    marginRight: spaces.medium,
  },
  createButton: {
    marginLeft: 'auto',
    backgroundColor: colors.primary,
  },
  createIconButton: {
    width: sizes.button.medium,
    minWidth: sizes.button.medium,
    height: sizes.button.medium,
    marginLeft: 'auto',
    backgroundColor: colors.primary,
  },
  input: {
    marginLeft: spaces.medium,
    minWidth: '100px',
  },
  settingsButton: {
    marginLeft: spaces.large,
  },
  settingsButtonMobile: {
    marginLeft: spaces.small,
  },
  notificationButton: {
    marginLeft: spaces.small - spaces.smallest,
  },
  avatar: {
    marginLeft: spaces.small - spaces.smallest,
  },
}

export const Header = () => {
  const { searchQuery, setSearchQuery } = useLayout()
  const { windowWidth, isTabSizeLarge } = useWindowDimensions()

  const setQuery = (query: string) => {
    if (!query) {
      setSearchQuery(null)
    } else {
      setSearchQuery(query)
    }
  }

  return (
    <div id="header-container">
      <>
        {windowWidth && windowWidth < 500 ? (
          <Image
            width={24.6}
            height={24}
            src={logo}
            style={styles.imageButton}
          />
        ) : (
          <Image width={97.6} height={24} src={namedLogo} style={styles.logo} />
        )}
      </>
      {isTabSizeLarge ? (
        <ButtonIcon
          icon={'Plus'}
          iconColor={colors.white}
          iconWidth={sizes.icon.medium}
          iconHeight={sizes.icon.medium}
          style={styles.createIconButton}
          onClick={() => {}}
        />
      ) : (
        <ButtonBase
          textType={TextSizes.SMALL_SEMI_BOLD}
          label={'Create new board'}
          width={170}
          rightIcon="Plus"
          style={styles.createButton}
          onClick={() => {}}
        />
      )}
      <Input
        value={searchQuery || ''}
        maxLength={values.inputMaxLength.search}
        placeholder="Search tasks ..."
        style={styles.input}
        onChange={setQuery}
      />
      <ButtonIcon
        icon="Settings"
        style={
          isTabSizeLarge ? styles.settingsButtonMobile : styles.settingsButton
        }
        onClick={() => {}}
      />
      <ButtonIcon
        showIndicator
        icon="Bell"
        style={styles.notificationButton}
        onClick={() => {}}
      />
      <ButtonImageRound
        size={30}
        src={profileImage}
        style={styles.avatar}
        onClick={() => {}}
      />
    </div>
  )
}
