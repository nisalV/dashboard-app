import React, { useState, useCallback } from 'react'
import { colors, spaces, values } from '../../../common/values'
import { useFetchTasks } from '../../../hooks/tasksHooks'
import { DraggingTask, TaskStatusTypes } from '../../../types/dataTypes'
import './dashboardStyles.css'
import { FloatButton } from './FloatButton'

const styles: Record<string, React.CSSProperties> = {
  taskItem: {
    backgroundColor: 'white',
    margin: '0 14px',
    height: 300,
    borderRadius: spaces.small,
    padding: spaces.small,
    width: 'calc(100% - 52px)',
  },
}

const setDropIndicatorColor = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  const target = e.target as HTMLElement
  if (target?.id?.endsWith('up')) {
    const element = document.getElementById(target?.id)

    if (!element) return

    element.style.backgroundColor = colors.primary
  }
}

const removeDropIndicatorColor = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  const target = e.target as HTMLElement
  if (target?.id?.endsWith('up')) {
    const element = document.getElementById(target?.id)

    if (!element) return

    element.style.backgroundColor = colors.transparent
  }
}

export const DashboardView = () => {
  const { tasks, updateTasks } = useFetchTasks()
  const [draggingTask, setDraggingTask] = useState<DraggingTask | null>(null)

  const onDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, taskId: string, status: string) => {
      setDraggingTask({ taskId, status })
    },
    []
  )

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    status: TaskStatusTypes
  ) => {
    removeDropIndicatorColor(e)
    draggingTask &&
      updateTasks(
        draggingTask?.taskId,
        (e.target as HTMLElement)?.id || '',
        draggingTask?.status,
        status
      )
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDragEnd = () => {
    setDraggingTask(null)
  }

  return (
    <>
      <div id="container">
        <div id="project-container"></div>
        <div id="swimlanes-container" onDragOver={handleDragOver}>
          {values.taskStatus.map((status) => (
            <div
              key={`${status}`}
              id={`swimlane-${status}`}
              className="swimlane"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, status as TaskStatusTypes)}
            >
              {tasks[status as TaskStatusTypes]?.map((task, taskIndex) => (
                <div
                  key={`${task.id}-${taskIndex}`}
                  id={`task-container-${task.id}`}
                >
                  <div
                    id={`task-${task.id}-up`}
                    className="task-item-up"
                    onDragOver={setDropIndicatorColor}
                    onDragLeave={removeDropIndicatorColor}
                  />
                  <div
                    id={`task-${task.id}`}
                    className="task-item"
                    draggable={true}
                    onDragStart={(e) => onDragStart(e, task.id, status)}
                    onDragEnd={handleDragEnd}
                    style={styles.taskItem}
                  >
                    <div>{task.title}</div>
                    <div>{task.category}</div>
                  </div>
                </div>
              ))}

              <div
                id="task-bottom-space"
                style={{
                  width: '100%',
                  minHeight: 12,
                  flexGrow: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <FloatButton />
    </>
  )
}
