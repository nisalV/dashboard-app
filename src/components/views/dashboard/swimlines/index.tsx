import React, { useState, useCallback } from 'react'
import { colors, values } from '../../../../common/values'
import { useFetchTasks } from '../../../../hooks/tasksHooks'
import { DraggingTask, TaskStatusTypes } from '../../../../types/dataTypes'
import { SwimlaneHeader } from './SwimlaneHeader'
import { TaskView } from './TaskView'
import './swimlineStyles.css'

const setDropIndicatorColor = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  const target = e.target as HTMLElement
  if (target?.id?.startsWith('task-up')) {
    const element = document.getElementById(target?.id)

    if (!element) return

    element.style.backgroundColor = colors.primary
  }
}

const removeDropIndicatorColor = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  const target = e.target as HTMLElement
  if (target?.id?.startsWith('task-up')) {
    const element = document.getElementById(target?.id)

    if (!element) return

    element.style.backgroundColor = colors.transparent
  }
}

type swimlanesProps = {
  boardId?: string
}

export const Swimlines = ({ boardId }: swimlanesProps) => {
  const { tasks, updateTasks } = useFetchTasks(boardId || '')
  const [draggingTask, setDraggingTask] = useState<DraggingTask | null>(null)

  const onDragStart = useCallback((taskId: string, status: string) => {
    setDraggingTask({ taskId, status })
  }, [])

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
    setDraggingTask(null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDragEnd = () => {
    setDraggingTask(null)
  }

  return (
    <div id="swimlanes-container" onDragOver={handleDragOver}>
      {values.taskStatus.map((status, index) => (
        <div className="swimlane-content-container" key={`${status}`}>
          <SwimlaneHeader index={index} />
          <div
            id={`swimlane-${status}`}
            className="swimlane"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, status as TaskStatusTypes)}
          >
            {tasks[status as TaskStatusTypes]?.map((task, taskIndex) => (
              <TaskView
                key={`${task.id}-${taskIndex}`}
                task={task}
                taskIndex={taskIndex}
                status={status}
                draggingTask={draggingTask}
                onDragStart={onDragStart}
                handleDragEnd={handleDragEnd}
                setDropIndicatorColor={setDropIndicatorColor}
                removeDropIndicatorColor={removeDropIndicatorColor}
              />
            ))}

            <div id="task-bottom-space" />
          </div>
        </div>
      ))}
    </div>
  )
}
