import { textStyles } from '../../../common/commonStyles'
import { formatDate } from '../../../common/commonUtils'
import { colors } from '../../../common/values'
import { Board, TextSizes } from '../../../types/dataTypes'
import { ButtonBase } from '../../core/button'
import { Text } from '../../core/text'
import { AvatarList } from './AvatarList'
import './dashboardViewStyles.css'

const styles: Record<string, React.CSSProperties> = {
  header: {
    ...textStyles.oneLineClip,
    maxWidth: '75%',
  },
  status: {
    ...textStyles.oneLineClip,
    width: '100%',
  },
  description: {
    ...textStyles.oneLineClip,
    marginTop: 16,
    width: '100%',
  },
  assigned: {
    marginRight: 16,
  },
  manage: {
    border: `1px solid ${colors.neutral6}`,
    borderRadius: 46,
    height: 30,
    width: 99,
    marginLeft: 18,
  },
  users: {
    border: '1px solid white',
  },
  moreMembers: {
    border: '1px solid white',
    borderRadius: '50%',
    zIndex: 4,
    padding: 0,
    marginTop: 1,
  },
  moreMembersText: {
    width: '100%',
    textAlign: 'center',
  },
}

type BoardDataViewProps = {
  board: Board
}
export const BoardDataView = ({ board }: BoardDataViewProps) => {
  return (
    <div id="board-container">
      <div id="board-header-container">
        <Text
          textType={TextSizes.EXTRA_LARGE_BOLD}
          text={board?.name}
          textColor={colors.neutral1}
          style={styles.header}
        />
        <div id="board-status">
          <Text
            textType={TextSizes.EXTRA_SMALL}
            text={board?.status}
            textColor={colors.neutral3}
            style={styles.status}
          />
        </div>
      </div>
      <Text
        textType={TextSizes.LARGE}
        text={board?.description}
        textColor={colors.neutral5}
        style={styles.description}
      />
      <div id="member-container">
        <Text
          textType={TextSizes.LARGE}
          text={'assigned'}
          textColor={colors.neutral5}
          style={styles.assigned}
        />
        <AvatarList
          users={board.assignees}
          avatarSize={24}
          onClickMember={() => {}}
          onClickMore={() => {}}
        />
        <ButtonBase
          rightIcon="Pencil"
          color={colors.white}
          textType={TextSizes.SMALL_SEMI_BOLD}
          textColor={colors.neutral5}
          label={'Manage'}
          style={styles.manage}
          onClick={() => {}}
        />
      </div>
      <hr />
      <Text
        textType={TextSizes.MEDIUM}
        text={`Last updated on: ${formatDate(board.last_update)}`}
        textColor={colors.neutral5}
      />
    </div>
  )
}
