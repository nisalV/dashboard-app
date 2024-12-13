import { useEffect, useState, useMemo } from 'react'
import { Projects } from '../types/dataTypes'
import storedProjects from '../assets/data/projects.json'

const InitialData = {
  projects: [],
}

export const useFetchProjects = () => {
  const [projectsData, setProjectsData] = useState<Projects>(() => {
    const storedTasks = localStorage.getItem('projects')
    return storedTasks ? JSON.parse(storedTasks) : InitialData
  })

  useEffect(() => {
    const loadProjects = () => {
      if (!projectsData?.projects.length) {
        try {
          localStorage.setItem('projects', JSON.stringify(storedProjects))
          setProjectsData(storedProjects)
        } catch (error) {
          console.error('Error loading projects:', error)
        }
      }
    }

    loadProjects()
  }, [projectsData])

  const projects = useMemo(() => projectsData.projects, [projectsData])

  return { projects }
}
