import { useCallback, useContext, useLayoutEffect, useState } from 'react'
import { LayoutContextTypes } from '../types/componentTypes'
import { LayoutContext } from '../contexts/layoutContext'

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = useCallback(() => {
    const windowWidth = hasWindow ? window.innerWidth : null
    const windowHeight = hasWindow ? window.innerHeight : null
    const isTabSizeLarge = hasWindow && window.innerWidth < 800
    const isTabSizeMedium = hasWindow && window.innerWidth < 700

    return {
      windowWidth,
      windowHeight,
      isTabSizeLarge,
      isTabSizeMedium,
    }
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useLayoutEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow, getWindowDimensions])

  return windowDimensions
}

export const useLayout = (): LayoutContextTypes => {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}
