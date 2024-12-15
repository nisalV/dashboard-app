import { useParams } from 'react-router'
import { Text } from '../../core/text'
import { TextSizes } from '../../../types/dataTypes'
import { useFetchBoard } from '../../../hooks/boardsHooks'
import { Swimlines } from '../../views/dashboard/swimlines'
import './dashboardStyles.css'
import { BoardDataView } from '../../views/dashboard/BoardDataView'

const Dashboard = () => {
  const { boardId } = useParams()
  const { board } = useFetchBoard(boardId || '')

  if (!board) {
    return (
      <div className="empty-container">
        <Text
          textType={TextSizes.EXTRA_LARGE_BOLD}
          text={'Board unavailable!!'}
        />
      </div>
    )
  }

  return (
    <>
      <BoardDataView board={board} />
      <Swimlines boardId={boardId} />
    </>
  )
}

export default Dashboard
