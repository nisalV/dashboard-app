import { Route, Routes } from 'react-router'
import './dashboardStyles.css'
import { FloatButton } from './FloatButton'
import { Text } from '../../core/text'
import { BoardView } from './Board'
import { TextSizes } from '../../../types/dataTypes'

const BoardEmptyView = () => {
  return (
    <div className="empty-container">
      <Text textType={TextSizes.EXTRA_LARGE_BOLD} text={'Select a Board'} />
    </div>
  )
}
export const DashboardView = () => {
  return (
    <>
      <div id="container">
        <Routes>
          <Route path="/" element={<BoardEmptyView />} />
          <Route path=":boardId" element={<BoardView />} />
        </Routes>
      </div>
      <FloatButton />
    </>
  )
}
