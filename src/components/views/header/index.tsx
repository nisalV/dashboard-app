import { useState } from 'react'
import { namedLogo, spaces, values } from '../../../common/values'
import { TextSizes } from '../../../types/dataTypes'
import { ButtonBase, ButtonIcon, ButtonImage } from '../../core/button'
import { Image } from '../../core/image'
import { Input } from '../../core/input'
import profileImage from '../../../assets/images/user.png'
import './headerStyles.css'

const styles: Record<string, React.CSSProperties> = {
  createButton: {
    marginLeft: 'auto',
  },
  input: {
    marginLeft: spaces.medium,
  },
  settingsButton: {
    marginLeft: spaces.large,
  },
  notificationButton: {
    marginLeft: spaces.small - spaces.smallest,
  },
  avatar: {
    marginLeft: spaces.small - spaces.smallest,
  },
}

export const Header = () => {
  const [searchText, setSearchText] = useState<string>('')

  const onSubmit = () => {
    if (searchText.trim()) {
      setSearchText('')
    }
  }

  return (
    <div id="header-container">
      <Image width={97.6} height={24} src={namedLogo} />
      <ButtonBase
        textType={TextSizes.SMALL_SEMI_BOLD}
        label={'Create new board'}
        width={170}
        rightIcon="Plus"
        style={styles.createButton}
        onClick={() => {}}
      />
      <Input
        value={searchText}
        maxLength={values.inputMaxLength.search}
        placeholder="Search tasks ..."
        style={styles.input}
        onChange={setSearchText}
        onSubmit={onSubmit}
      />
      <ButtonIcon
        icon="Settings"
        style={styles.settingsButton}
        onClick={() => {}}
      />
      <ButtonIcon
        showIndicator
        icon="Bell"
        style={styles.notificationButton}
        onClick={() => {}}
      />  
      <ButtonImage
        src={profileImage}
        style={styles.avatar}
        onClick={() => {}}
      />
    </div>
  )
}
