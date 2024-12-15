import { useMemo } from 'react'
import { textStyles } from '../../../../common/commonStyles'
import {
  CategoryColors,
  colors,
  placeholder,
  spaces,
} from '../../../../common/values'
import {
  Categories,
  DraggingTask,
  Task,
  TextSizes,
} from '../../../../types/dataTypes'
import { ButtonIcon } from '../../../core/button'
import { Text } from '../../../core/text'
import { AvatarList } from '../AvatarList'
import Icon from '../../../core/Icon'
import { Image } from '../../../core/image'
import { formatDate } from '../../../../common/commonUtils'

const styles: Record<string, React.CSSProperties> = {
  category: {
    ...textStyles.oneLineClip,
    maxWidth: 200,
  },
  title: {
    ...textStyles.oneLineClip,
    maxWidth: 200,
    marginTop: 2,
  },
  dots: {
    marginLeft: 'auto',
    padding: 2,
  },
  priority: {
    ...textStyles.oneLineClip,
    marginLeft: 4,
    maxWidth: 150,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: 4,
    margin: '14px 0',
    objectFit: 'contain',
  },
  footerText: {
    ...textStyles.oneLineClip,
    marginLeft: 4,
    marginTop: 2,
  },
}

type TaskProps = {
  task: Task
  status: string
  draggingTask: DraggingTask | null
  onDragStart: (id: string, status: string) => void
  handleDragEnd: () => void
  setDropIndicatorColor: (e: React.DragEvent<HTMLDivElement>) => void
  removeDropIndicatorColor: (e: React.DragEvent<HTMLDivElement>) => void
}

export const TaskView = ({
  task,
  status,
  draggingTask,
  onDragStart,
  handleDragEnd,
  setDropIndicatorColor,
  removeDropIndicatorColor,
}: TaskProps) => {
  const categoryColor = useMemo(() => {
    switch (task.category) {
      case Categories.DESIGN:
        return CategoryColors.design
      case Categories.FEEDBACK:
        return CategoryColors.feedback
      case Categories.INTERFACE:
        return CategoryColors.interface
      case Categories.PRESENTATION:
        return CategoryColors.presentation
      case Categories.RESEARCH:
        return CategoryColors.research
      case Categories.UX_RESEARCH:
        return CategoryColors.uxResearch
      case Categories.OTHER:
        return CategoryColors.other
      default:
        return CategoryColors.other
    }
  }, [task.category])

  const footerData = [
    task['link-count'] && {
      icon: { name: 'Link' },
      text: `${task['link-count']}`,
      color: colors.neutral4,
    },
    task['comment-count'] && {
      icon: { name: 'Comment', width: 16, height: 16, fill: colors.neutral4 },
      text: `${task['comment-count']}`,
      color: colors.neutral4,
    },
    task.notification && {
      icon: { name: 'Bell', width: 16, height: 16, fill: colors.primary },
      text: `${task.notification}`,
      color: colors.primary,
    },
    task['report-count'] && {
      icon: { name: 'Info', width: 17, height: 17, fill: colors.task2 },
      text: `${task['report-count']}`,
      color: colors.neutral4,
    },
    task['due-date'] && {
      icon: { name: 'Calendar', width: 16, height: 16, fill: colors.neutral4 },
      text: `${formatDate(task['due-date'])}`,
      color: colors.neutral4,
    },
  ]

  const filteredFooterData = footerData.filter((item) => !!item)

  return (
    <>
      <div
        id={`task-up-${task.id}`}
        className="task-item-up"
        onDragOver={setDropIndicatorColor}
        onDragLeave={removeDropIndicatorColor}
      />
      <div
        id={`task-${task.id}`}
        className="task-item"
        draggable={true}
        onDragStart={() => onDragStart(task.id, status)}
        onDragEnd={handleDragEnd}
      >
        {!!draggingTask && draggingTask.taskId !== task.id && (
          <div id={`overlay-${task.id}`} className="overlay" />
        )}
        <div className="task-category">
          <div
            className="category-color"
            style={{ backgroundColor: categoryColor }}
          />
          <Text
            textType={TextSizes.SMALL}
            text={task.category}
            textColor={colors.neutral5}
            style={styles.category}
          />
          <ButtonIcon
            icon={'Dots'}
            iconColor={colors.neutral5}
            iconHeight={14}
            iconWidth={14}
            style={styles.dots}
            onClick={() => {}}
          />
        </div>
        <Text
          textType={TextSizes.MEDIUM_BOLD}
          text={task.title}
          textColor={colors.black}
          style={styles.title}
        />
        <div className="task-avatar-list-container">
          <AvatarList
            users={task.assignees}
            avatarSize={20}
            onClickMember={() => {}}
            onClickMore={() => {}}
          />
          <div className="priority-container">
            <Icon name="Flash" width={12} height={12} />
            <Text
              textType={TextSizes.SMALLEST}
              text={task.priority}
              textColor={colors.neutral5}
              style={styles.priority}
            />
          </div>
        </div>
        {task?.image ? (
          <Image src={placeholder} style={styles.image} />
        ) : (
          <div className="without-image-spacer" />
        )}
        <div className="task-footer">
          {filteredFooterData.map((data, index) => (
            <div
              key={index}
              className="foter-items"
              style={{
                marginRight:
                  index === filteredFooterData.length - 1 ? 0 : spaces.medium,
              }}
            >
              <Icon {...data.icon} />
              <Text
                text={data.text}
                textType={TextSizes.SMALL_SEMI_BOLD}
                textColor={data.color}
                style={styles.footerText}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
