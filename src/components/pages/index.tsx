import React from 'react'
import { Route, Routes } from 'react-router'
import { LeftPanel } from '../views/leftPanel'
import { FloatButton } from '../views/FloatButton'
import './pageStyles.css'

const DashboardPage = React.lazy(() => import('./dashboard'))
const BoardEmptyPage = React.lazy(() => import('./BoardEmpty'))
const NotFoundPage = React.lazy(() => import('./NotFound'))

export const Pages = () => {
  return (
    <>
      <LeftPanel />
      <div id="page-container">
        <Routes>
          <Route path="/" element={<BoardEmptyPage />} />
          <Route path=":boardId" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <FloatButton />
    </>
  )
}
