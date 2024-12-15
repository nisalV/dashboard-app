import { createContext, useState } from 'react'
import { LayoutContextTypes } from '../types/componentTypes'
import { Board } from '../types/dataTypes'

type LayoutProps = {
  children: React.ReactNode
}

export const LayoutContext = createContext<LayoutContextTypes | undefined>(
  undefined
)

export const LayoutProvider = ({ children }: LayoutProps) => {
  const [board, setBoard] = useState<Board | null>(null)
  const [showLeftPanel, setShowLeftPanel] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string | null>(null)

  return (
    <LayoutContext.Provider
      value={{
        board,
        showLeftPanel,
        searchQuery,
        setBoard,
        setShowLeftPanel,
        setSearchQuery,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
