import { useParams } from 'react-router'
import { Swimlines } from './Swimlines'
import { useFetchProjects } from '../../../hooks/projectsHooks'
import { useEffect, useState } from 'react'
import { Text } from '../../core/text'
import { Project, TextSizes } from '../../../types/dataTypes'

export const Board = () => {
  const { boardId } = useParams()
  const { projects } = useFetchProjects()

  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const projectAvailable = projects?.find((item) => item.id === boardId)
    !!projectAvailable && setProject(projectAvailable)
  }, [projects, boardId])

  if (!project) {
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
      <div id="project-container">{project?.name}</div>
      <Swimlines />
    </>
  )
}
