import React, { useCallback, useEffect, useMemo } from 'react'
import { textStyles } from '../../../common/commonStyles'
import {
  colors,
  fallbackTeam,
  layoutBreakPoint,
  spaces,
} from '../../../common/values'
import { useLayout, useWindowDimensions } from '../../../hooks/layoutHooks'
import { useFetchBoards } from '../../../hooks/boardsHooks'
import { Board, TextSizes } from '../../../types/dataTypes'
import { ButtonBase, ButtonIcon } from '../../core/button'
import { Avatar } from '../../core/image'
import { Text } from '../../core/text'
import { useLocation, useNavigate } from 'react-router'
import './leftPanelStyles.css'

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
  folderButton: {
    border: '2px solid #f4f5f6',
  },
  logoutText: {
    marginLeft: 8,
  },
  boardButton: {
    width: 'calc(100% - 5px)',
    margin: '2px 0 0 3px',
    paddingLeft: 8,
    paddingRight: 4,
  },
  boardText: {
    marginLeft: -spaces.smallest,
  },
}

const MessageCount = () => {
  return (
    <div id="message-count-container">
      <Text
        text="3"
        textColor={colors.white}
        textType={TextSizes.SMALL_SEMI_BOLD}
      />
    </div>
  )
}

export const LeftPanel = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { showLeftPanel, board, setBoard } = useLayout()
  const { windowWidth } = useWindowDimensions()
  const { boards } = useFetchBoards()

  const [showBoards, setShowBoards] = React.useState(false)

  const selectedBoard = useMemo(() => {
    return boards?.find(
      (item) => item.id === location.pathname?.split('/')?.[1]
    )
  }, [location.pathname, boards])

  useEffect(() => {
    if (selectedBoard) {
      setBoard(selectedBoard)
      setShowBoards(true)
    }
  }, [selectedBoard, setBoard])

  const showPanel = useMemo(
    () =>
      showLeftPanel ||
      (!!windowWidth && windowWidth > layoutBreakPoint.leftPanel),
    [showLeftPanel, windowWidth]
  )

  const onClickBoard = useCallback(
    (item: Board) => {
      setBoard(item)
      navigate(`/${item.id}`)
    },
    [setBoard, navigate]
  )

  const toggleBoards = () => setShowBoards((prev) => !prev)

  const handleMenuClick = () => setShowBoards(false)

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
          rightIcon={showBoards ? 'ArrowUp' : 'ArrowDown'}
          color={colors.white}
          textColor={showBoards ? colors.primary : colors.neutral4}
          textType={TextSizes.LARGE_BOLD}
          width={'100%'}
          style={{
            ...styles.buttonCommon,
            ...(showBoards && styles.folderButton),
          }}
          textStyles={styles.logoutText}
          onClick={toggleBoards}
        />

        <div
          className={`board-list ${boards.length > 0 && showBoards ? 'show' : 'hide'}`}
        >
          {boards.map((item) => (
            <ButtonBase
              key={item.id}
              label={item.name}
              leftIcon="ArrowRight"
              color={colors.white}
              textColor={
                board?.id === item.id ? colors.primary : colors.neutral4
              }
              textType={TextSizes.MEDIUM}
              style={styles.boardButton}
              textStyles={styles.boardText}
              onClick={() => onClickBoard(item)}
            />
          ))}
        </div>

        <ButtonBase
          label={'Messages'}
          leftIcon="Comment"
          color={colors.white}
          textColor={colors.neutral4}
          rightElement={<MessageCount />}
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
