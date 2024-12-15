import { Route, Routes } from 'react-router'
import './dashboardStyles.css'
import { FloatButton } from './FloatButton'
import { Text } from '../../core/text'
import { TextSizes } from '../../../types/dataTypes'
import { colors } from '../../../common/values'
import React from 'react'

const Board = React.lazy(() => import('./Board'))

const BoardEmptyView = () => {
  return (
    <div className="empty-container">
      <Text
        textType={TextSizes.EXTRA_LARGE_BOLD}
        text={'Select a Board'}
        textColor={colors.neutral4}
      />
    </div>
  )
}

const NotFoundView = () => {
  return (
    <div className="empty-container">
      <Text
        textType={TextSizes.EXTRA_LARGE_BOLD}
        text={'Page not found'}
        textColor={colors.neutral4}
      />
    </div>
  )
}

export const DashboardView = () => {
  return (
    <>
      <div id="container">
        <Routes>
          <Route path="/" element={<BoardEmptyView />} />
          <Route path=":boardId" element={<Board />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </div>
      <FloatButton />
    </>
  )
}
