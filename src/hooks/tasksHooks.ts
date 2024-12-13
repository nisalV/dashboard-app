import { useEffect, useState, useMemo } from 'react'
import { TaskData, TaskStatusTypes } from '../types/dataTypes'
import storedTasks from '../assets/data/tasks.json'

const InitialData = {
  'project-id': '',
  'project-name': '',
  'to-do': [],
  'in-progress': [],
  approved: [],
  reject: [],
}

export const useFetchTasks = () => {
  const [taskData, setTaskData] = useState<TaskData>(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : InitialData
  })

  useEffect(() => {
    const loadTasks = () => {
      if (!taskData['project-id'].length) {
        try {
          localStorage.setItem('tasks', JSON.stringify(storedTasks))
          setTaskData(storedTasks)
        } catch (error) {
          console.error('Error loading tasks:', error)
        }
      }
    }

    loadTasks()
  }, [taskData])

  const updateTasks = (
    taskId: string,
    droppedId: string,
    prevStatus: string,
    newStatus: string
  ) => {
    const prevTasks = { ...taskData }

    const updatingTask = prevTasks[prevStatus as TaskStatusTypes].find(
      (item) => item.id === taskId
    )

    if (!updatingTask) return

    const updatedTask = { ...updatingTask, status: newStatus }

    const updatedPrevStatusTasks = prevTasks[
      prevStatus as TaskStatusTypes
    ].filter((item) => item.id !== taskId)

    let updatedNewStatusTasks = []

    if (droppedId === 'task-bottom-space') {
      updatedNewStatusTasks = [
        ...prevTasks[newStatus as TaskStatusTypes],
        updatedTask,
      ]
    } else {
      const nextTaskId = droppedId.split('-')?.[1]

      if (!nextTaskId) return

      updatedNewStatusTasks = prevTasks[newStatus as TaskStatusTypes].reduce(
        (acc, task) => {
          if (task.id === nextTaskId) {
            acc.push(updatedTask)
          }
          acc.push(task)
          return acc
        },
        [] as (typeof prevTasks)[TaskStatusTypes]
      )
    }

    const updatedTaskData = {
      ...prevTasks,
      [prevStatus as TaskStatusTypes]: updatedPrevStatusTasks,
      [newStatus as TaskStatusTypes]: updatedNewStatusTasks,
    }

    localStorage.setItem('tasks', JSON.stringify(updatedTaskData))
    setTaskData(updatedTaskData)
  }

  const tasks = useMemo(() => taskData, [taskData])

  return { tasks, setTaskData, updateTasks }
}
