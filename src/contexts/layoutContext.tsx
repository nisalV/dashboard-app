import { createContext, useEffect, useState } from 'react'
import { LayoutContextTypes } from '../types/componentTypes'
import { useWindowDimensions } from '../hooks/layoutHooks'

type LayoutProps = {
  children: React.ReactNode
}

export const LayoutContext = createContext<LayoutContextTypes | undefined>(
  undefined
)

export const LayoutProvider = ({ children }: LayoutProps) => {
  const { windowWidth } = useWindowDimensions()
  const [showLeftPanel, setShowLeftPanel] = useState<boolean>(false)

  // useEffect(() => {
  //   if (windowWidth !== null) {
  //     setShowLeftPanel(windowWidth > 700)
  //   }
  // }, [windowWidth])

  return (
    <LayoutContext.Provider value={{ showLeftPanel, setShowLeftPanel }}>
      {children}
    </LayoutContext.Provider>
  )
}
