import { useEffect, useState, useMemo } from 'react'
import { Task, TaskData, TaskStatusTypes } from '../types/dataTypes'
import storedTasks from '../assets/data/tasks.json'

const initialData = {
  'board-id': '',
  'board-name': '',
  'to-do': [],
  'in-progress': [],
  approved: [],
  reject: [],
}

export const useFetchTasks = (boardId: string) => {
  const [taskData, setTaskData] = useState<TaskData>(() => {
    const storedTasks = localStorage.getItem(`tasks_${boardId}`)
    return storedTasks ? JSON.parse(storedTasks) : initialData
  })

  useEffect(() => {
    const loadTasks = () => {
      if (boardId !== storedTasks['board-id']) {
        localStorage.setItem(`tasks_${boardId}`, JSON.stringify(initialData))
        setTaskData(initialData)
        return
      }
      if (!taskData['board-id'].length) {
        try {
          localStorage.setItem(`tasks_${boardId}`, JSON.stringify(storedTasks))
          setTaskData(storedTasks)
        } catch (error) {
          console.error('Error loading tasks:', error)
        }
      }
    }

    loadTasks()
  }, [boardId, taskData])

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

    if (!updatingTask || droppedOverTaskId === taskId || !droppedOverTaskId)
      return

    const updatedTask = { ...updatingTask, status: newStatus }

    const updatedPrevStatusTasks = prevTasks[
      prevStatus as TaskStatusTypes
    ].filter((item) => item.id !== taskId)

    let updatedNewStatusTasks = []

    if (prevStatus === newStatus) {
      if (droppedId === 'task-bottom-space') {
        updatedNewStatusTasks = [...updatedPrevStatusTasks, updatedTask]
      } else {
        if (droppedOverTaskId === taskId) return

        updatedNewStatusTasks = updatedPrevStatusTasks.reduce((acc, task) => {
          if (task.id === droppedOverTaskId) {
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
      if (!droppedOverTaskId) return

      updatedNewStatusTasks = prevTasks[newStatus as TaskStatusTypes].reduce(
        (acc, task) => {
          if (task.id === droppedOverTaskId) {
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

    localStorage.setItem(`tasks_${boardId}`, JSON.stringify(updatedTaskData))
    setTaskData(updatedTaskData)
  }

  const tasks = useMemo(() => taskData, [taskData])

  return { tasks, setTaskData, updateTasks }
}
