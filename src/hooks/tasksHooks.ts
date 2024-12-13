import { useEffect, useState, useMemo } from 'react'
import { Task, TaskData, TaskStatusTypes } from '../types/dataTypes'
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

    const droppedOverTaskId = droppedId.split('-').pop()

    if (!updatingTask || droppedOverTaskId === taskId) return

    const updatedTask = { ...updatingTask, status: newStatus }

    const updatedPrevStatusTasks = prevTasks[
      prevStatus as TaskStatusTypes
    ].filter((item) => item.id !== taskId)

    let updatedNewStatusTasks = []

    if (prevStatus === newStatus) {
      if (droppedId === 'task-bottom-space') {
        updatedNewStatusTasks = [...updatedPrevStatusTasks, updatedTask]
      } else {
        const nextTaskId = droppedOverTaskId

        if (nextTaskId === taskId) return

        updatedNewStatusTasks = updatedPrevStatusTasks.reduce((acc, task) => {
          if (task.id === nextTaskId) {
            acc.push(updatedTask)
          }
          acc.push(task)
          return acc
        }, [] as Task[])
      }
    } else if (droppedId === 'task-bottom-space') {
      updatedNewStatusTasks = [
        ...prevTasks[newStatus as TaskStatusTypes],
        updatedTask,
      ]
    } else {
      const nextTaskId = droppedOverTaskId

      if (!nextTaskId) return

      updatedNewStatusTasks = prevTasks[newStatus as TaskStatusTypes].reduce(
        (acc, task) => {
          if (task.id === nextTaskId) {
            acc.push(updatedTask)
          }
          acc.push(task)
          return acc
        },
        [] as Task[]
      )
    }

    const updatedTaskData = {
      ...prevTasks,
      ...(prevStatus !== newStatus && {
        [prevStatus as TaskStatusTypes]: updatedPrevStatusTasks,
      }),
      [newStatus as TaskStatusTypes]: updatedNewStatusTasks,
    }

    localStorage.setItem('tasks', JSON.stringify(updatedTaskData))
    setTaskData(updatedTaskData)
  }

  const tasks = useMemo(() => taskData, [taskData])

  return { tasks, setTaskData, updateTasks }
}
