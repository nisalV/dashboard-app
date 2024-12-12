import { createContext, useState } from 'react'
import { LayoutContextTypes } from '../types/componentTypes'

type LayoutProps = {
  children: React.ReactNode
}

export const LayoutContext = createContext<LayoutContextTypes | undefined>(
  undefined
)

export const LayoutProvider = ({ children }: LayoutProps) => {
  const [showLeftPanel, setShowLeftPanel] = useState<boolean>(false)

  return (
    <LayoutContext.Provider value={{ showLeftPanel, setShowLeftPanel }}>
      {children}
    </LayoutContext.Provider>
  )
}
