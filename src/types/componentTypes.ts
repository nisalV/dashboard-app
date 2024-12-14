import { Board } from './dataTypes'

export type LayoutContextTypes = {
  board: Board | null
  showLeftPanel: boolean
  setBoard: (proj: Board | null) => void
  setShowLeftPanel: (show: boolean) => void
}
