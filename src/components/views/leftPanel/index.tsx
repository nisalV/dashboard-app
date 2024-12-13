import React, { useCallback, useEffect, useMemo } from 'react'
import { textStyles } from '../../../common/commonStyles'
import {
  colors,
  fallbackTeam,
  layoutBreakPoint,
  spaces,
} from '../../../common/values'
import { useLayout, useWindowDimensions } from '../../../hooks/layoutHooks'
import { useFetchProjects } from '../../../hooks/projectsHooks'
import { Project, TextSizes } from '../../../types/dataTypes'
import { ButtonBase, ButtonIcon } from '../../core/button'
import { Avatar } from '../../core/image'
import { Text } from '../../core/text'
import './leftPanelStyles.css'
import { useLocation, useNavigate } from 'react-router'

const styles: Record<string, React.CSSProperties> = {
  rootText: {
    width: 136,
    ...textStyles.oneLineClip,
  },
  buttonCommon: {
    borderRadius: 8,
    paddingRight: 9,
    marginBottom: 14,
  },
  boardButton: {
    border: '2px solid #f4f5f6',
  },
  logoutText: {
    marginLeft: 8,
  },
  projectButton: {
    width: 'calc(100% - 5px)',
    margin: '2px 0 0 3px',
    paddingLeft: 8,
    paddingRight: 4,
  },
  projectText: {
    marginLeft: -spaces.smallest,
  },
}

const ProjectsList = React.memo(
  ({
    projects,
    project,
    onClickBoard,
    showProjects,
  }: {
    projects: Project[]
    project: Project | null
    onClickBoard: (item: Project) => void
    showProjects: boolean
  }) => {
    if (!projects || !showProjects) return null

    return (
      <div className={`project-list ${showProjects ? 'show' : 'hide'}`}>
        {projects.map((item) => (
          <ButtonBase
            key={item.id}
            label={item.name}
            leftIcon="ArrowRight"
            color={colors.white}
            textColor={
              project?.id === item.id ? colors.primary : colors.neutral4
            }
            textType={TextSizes.MEDIUM}
            style={styles.projectButton}
            textStyles={styles.projectText}
            onClick={() => onClickBoard(item)}
          />
        ))}
      </div>
    )
  }
)

export const LeftPanel = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { showLeftPanel, project, setProject } = useLayout()
  const { windowWidth } = useWindowDimensions()
  const { projects } = useFetchProjects()

  const [showProjects, setShowProjects] = React.useState(false)

  const selectedProject = useMemo(() => {
    return projects?.find(
      (item) => item.id === location.pathname?.split('/')?.[1]
    )
  }, [location.pathname, projects])

  useEffect(() => {
    if (selectedProject) {
      setProject(selectedProject)
      setShowProjects(true)
    }
  }, [selectedProject, setProject])

  const showPanel = useMemo(
    () =>
      showLeftPanel ||
      (!!windowWidth && windowWidth > layoutBreakPoint.leftPanel),
    [showLeftPanel, windowWidth]
  )

  const onClickBoard = useCallback(
    (item: Project) => {
      setProject(item)
      navigate(`/${item.id}`)
    },
    [setProject, navigate]
  )

  const toggleProjects = () => setShowProjects((prev) => !prev)

  const handleMenuClick = () => setShowProjects(false)

  return (
    <div className={`left-panel-container ${showPanel ? 'show' : 'hide'}`}>
      <div id="folder-container">
        <div id="root-data-container">
          <Avatar width={30} height={30} src={''} fallback={fallbackTeam} />
          <div>
            <Text
              text="workspace"
              textType={TextSizes.MEDIUM_LIGHT}
              style={styles.rootText}
            />
            <Text
              text="Root folder"
              textType={TextSizes.LARGE_BOLD}
              textColor={colors.neutral3}
              style={styles.rootText}
            />
          </div>
          <ButtonIcon icon={'ArrowDown'} onClick={() => {}} />
        </div>
        <ButtonBase
          label={'Dashboard'}
          leftIcon="Grid"
          color={colors.white}
          textColor={colors.neutral4}
          textType={TextSizes.LARGE_BOLD}
          width={'100%'}
          style={styles.buttonCommon}
          textStyles={styles.logoutText}
          onClick={handleMenuClick}
        />
        <ButtonBase
          label={'Boards'}
          leftIcon="Folder"
          rightIcon={showProjects ? 'ArrowUp' : 'ArrowDown'}
          color={colors.white}
          textColor={showProjects ? colors.primary : colors.neutral4}
          textType={TextSizes.LARGE_BOLD}
          width={'100%'}
          style={{
            ...styles.buttonCommon,
            ...(showProjects && styles.boardButton),
          }}
          textStyles={styles.logoutText}
          onClick={toggleProjects}
        />

        <ProjectsList
          projects={projects || []}
          project={project}
          onClickBoard={onClickBoard}
          showProjects={showProjects}
        />

        <ButtonBase
          label={'Messages'}
          leftIcon="Comment"
          color={colors.white}
          textColor={colors.neutral4}
          textType={TextSizes.LARGE_BOLD}
          width={'100%'}
          style={styles.buttonCommon}
          textStyles={styles.logoutText}
          onClick={handleMenuClick}
        />
        <ButtonBase
          label={'Calendar'}
          leftIcon="Calendar"
          color={colors.white}
          textColor={colors.neutral4}
          textType={TextSizes.LARGE_BOLD}
          width={'100%'}
          style={styles.buttonCommon}
          textStyles={styles.logoutText}
          onClick={handleMenuClick}
        />
        <ButtonBase
          label={'Team members'}
          leftIcon="User"
          color={colors.white}
          textColor={colors.neutral4}
          textType={TextSizes.LARGE_BOLD}
          width={'100%'}
          style={styles.buttonCommon}
          textStyles={styles.logoutText}
          onClick={handleMenuClick}
        />
      </div>
      <ButtonBase
        label={'Support'}
        leftIcon="Info"
        color={colors.white}
        textColor={colors.neutral4}
        textType={TextSizes.LARGE_BOLD}
        width={'100%'}
        style={styles.buttonCommon}
        textStyles={styles.logoutText}
        onClick={() => {}}
      />
      <ButtonBase
        label={'Logout'}
        leftIcon="SignOut"
        color={colors.neutral3}
        textType={TextSizes.LARGE_BOLD}
        width={'100%'}
        style={styles.buttonCommon}
        textStyles={styles.logoutText}
        onClick={() => {}}
      />
    </div>
  )
}
