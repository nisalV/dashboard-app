import { TextSizes, User } from '../../../types/dataTypes'
import { colors } from '../../../common/values'
import { ButtonBase, ButtonImageRound } from '../../core/button'
import fallbackTeam from '../../../assets/images/fallback-team.svg'
import './dashboardViewStyles.css'

const styles: Record<string, React.CSSProperties> = {
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

type AvatarListProps = {
  users: User[]
  avatarSize: number
  leftOffset?: number
  onClickMember: (member: User) => void
  onClickMore: () => void
}

export const AvatarList = ({
  users,
  avatarSize,
  leftOffset,
  onClickMember,
  onClickMore,
}: AvatarListProps) => {
  return (
    <div className="avatar-list-container">
      {users?.map((asignee, index) => {
        if (index > 2) return null
        return (
          <ButtonImageRound
            key={index}
            src={asignee.image}
            fallback={fallbackTeam}
            size={avatarSize}
            style={{
              ...styles.users,
              zIndex: index,
              marginLeft: index === 0 ? 0 : leftOffset ? leftOffset : -10,
            }}
            onClick={() => onClickMember(asignee)}
          />
        )
      })}

      {users?.length > 3 && (
        <ButtonBase
          label={users.length > 99 ? '+99' : `+${users.length - 3}`}
          color={colors.neutral6}
          textColor={colors.neutral3}
          textType={TextSizes.SMALLEST_BOLD}
          textStyles={styles.moreMembersText}
          style={{
            ...styles.moreMembers,
            marginLeft: leftOffset ? leftOffset : -10,
            width: avatarSize,
            height: avatarSize,
          }}
          onClick={onClickMore}
        />
      )}
    </div>
  )
}
