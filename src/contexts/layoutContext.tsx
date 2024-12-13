import { createContext, useState } from 'react'
import { LayoutContextTypes } from '../types/componentTypes'
import { Project } from '../types/dataTypes'

type LayoutProps = {
  children: React.ReactNode
}

export const LayoutContext = createContext<LayoutContextTypes | undefined>(
  undefined
)

export const LayoutProvider = ({ children }: LayoutProps) => {
  const [project, setProject] = useState<Project | null>(null)
  const [showLeftPanel, setShowLeftPanel] = useState<boolean>(false)

  return (
    <LayoutContext.Provider
      value={{ project, showLeftPanel, setProject, setShowLeftPanel }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
