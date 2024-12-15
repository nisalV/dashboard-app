import { Board } from './dataTypes'

export type LayoutContextTypes = {
  board: Board | null
  showLeftPanel: boolean
  searchQuery: string | null
  setSearchQuery: (text: string | null) => void
  setBoard: (proj: Board | null) => void
  setShowLeftPanel: (show: boolean) => void
}
