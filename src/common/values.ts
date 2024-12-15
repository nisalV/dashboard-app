import logo1 from '../assets/images/named-logo.svg'
import logo2 from '../assets/images/logo.svg'
import fallbackTeamImage from '../assets/images/fallback-team.svg'
import placeholderImage from '../assets/images/image-placeholder.png'

export const namedLogo = logo1
export const logo = logo2
export const fallbackTeam = fallbackTeamImage
export const placeholder = placeholderImage

export const colors = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  orange: '#FF5C00',
  primary: '#3772FF',
  neutral1: '#141416',
  neutral3: '#353945',
  neutral4: '#777E90',
  neutral5: '#B1B5C3',
  neutral6: '#E6E8EC',
  neutral7: '#F4F5F6',
  task1: '#AEE753',
  task2: '#F90430',
  task5: '#FFA800',
}

export const storage = {
  comments: 'comments',
  commentSortState: 'commentSortState',
}

export const sizes = {
  avatar: {
    medium: 30,
  },
  icon: {
    small: 12,
    medium: 18,
    large: 30,
  },
  button: {
    medium: 30,
    large: 48,
  },
}

export const spaces = {
  smallest: 3,
  extraSmall: 6,
  small: 12,
  medium: 24,
  large: 48,
}

export const values = {
  taskStatus: ['to-do', 'in-progress', 'approved', 'reject'],
  inputMaxLength: {
    search: 100,
  },
}

export const layoutBreakPoint = {
  leftPanel: 1250,
}

export const taskStatusHeaders = [
  { name: 'To Do', color: colors.neutral6, textColor: colors.neutral3 },
  { name: 'In Progress', color: colors.task5, textColor: colors.neutral3 },
  { name: 'Approved', color: colors.task1, textColor: colors.neutral3 },
  { name: 'Reject', color: colors.task2, textColor: colors.white },
]

export const CategoryColors = {
  research: colors.task1,
  design: colors.task2,
  feedback: colors.primary,
  presentation: colors.orange,
  uxResearch: colors.task5,
  other: colors.neutral4,
  interface: colors.neutral3,
}

export const taskStringFields = [
  'title',
  'category',
  'status',
  'priority',
  'notification',
]
