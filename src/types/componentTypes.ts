import { Project } from './dataTypes'

export type LayoutContextTypes = {
  project: Project | null
  showLeftPanel: boolean
  setProject: (proj: Project | null) => void
  setShowLeftPanel: (show: boolean) => void
}
