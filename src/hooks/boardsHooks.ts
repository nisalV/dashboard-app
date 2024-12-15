import { useEffect, useState, useMemo } from 'react'
import { Board, Boards } from '../types/dataTypes'
import storedBoards from '../assets/data/boards.json'

const InitialData = {
  boards: [],
}

export const useFetchBoards = () => {
  const [boardsData, setBoardsData] = useState<Boards>(() => {
    const storedBoards = localStorage.getItem('boards')
    return storedBoards ? JSON.parse(storedBoards) : InitialData
  })

  useEffect(() => {
    const loadBoards = () => {
      if (!boardsData?.boards.length) {
        try {
          localStorage.setItem('boards', JSON.stringify(storedBoards))
          setBoardsData(storedBoards)
        } catch (error) {
          console.error('Error loading boards:', error)
        }
      }
    }

    loadBoards()
  }, [boardsData])

  const boards = useMemo(() => boardsData.boards, [boardsData])

  return { boards }
}

export const useFetchBoard = (boardId: string) => {
  const [boardData, setBoardData] = useState<Board | null>(() => {
    const storedTasks = localStorage.getItem(`board_${boardId}`)
    return storedTasks ? JSON.parse(storedTasks) : null
  })

  useEffect(() => {
    if (!boardId) return

    const loadBoards = () => {
      if (!boardData || boardData.id !== boardId) {
        try {
          const boardAvailable = storedBoards.boards?.find(
            (item) => item.id === boardId
          )
          if (!boardAvailable) {
            setBoardData(null)
            return
          }
          localStorage.setItem(
            `board_${boardId}`,
            JSON.stringify(boardAvailable)
          )
          setBoardData(boardAvailable)
        } catch (error) {
          console.error('Error loading board:', error)
        }
      }
    }

    loadBoards()
  }, [boardId, boardData])

  const board = useMemo(() => boardData, [boardData])

  return { board }
}
