export enum Status {
  TO_DO = 'To Do',
  IN_PROGRESS = 'In Progress',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export enum ButtonTypes {
  SUMBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export enum TextSizes {
  SMALLEST = 'smallest',
  SMALLEST_BOLD = 'smallestBold',
  EXTRA_SMALL = 'extraSmall',
  SMALL = 'small',
  SMALL_SEMI_BOLD = 'smallSemiBold',
  SMALL_BOLD = 'smallBold',
  MEDIUM_LIGHT = 'mediumLight',
  MEDIUM = 'medium',
  MEDIUM_BOLD = 'mediumBold',
  LARGE = 'large',
  LARGE_BOLD = 'largeBold',
  EXTRA_LARGE_BOLD = 'extraLargeBold',
}

export type TaskStatusTypes = 'to-do' | 'in-progress' | 'approved' | 'reject'

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'MEDIUM',
  HIGH = 'High',
}

export enum Categories {
  RESEARCH = 'Research',
  DESIGN = 'Design',
  FEEDBACK = 'Feedback',
  PRESENTATION = 'Presentation',
  UX_RESEARCH = 'UX Research',
  OTHER = 'Other',
  INTERFACE = 'Interface',
}

export type IconData = {
  fill?: string
  width?: number
  height?: number
  stroke?: string
  strokeWidth?: number
}

export type Task = {
  id: string
  title: string
  category: string
  status: string
  priority: string
  assignees: User[]
  'link-count'?: number
  'comment-count'?: number
  'report-count'?: number
  'due-date'?: string
  notification?: string
  image?: string
}

export type TaskData = {
  'board-id': string
  'board-name': string
  'to-do': Task[]
  'in-progress': Task[]
  approved: Task[]
  reject: Task[]
}

export type DraggingTask = {
  taskId: string
  status: string
}

export type User = {
  id: string
  name: string
  image: string
}

export type Board = {
  id: string
  name: string
  description: string
  status: string
  last_update: string
  assignees: User[]
}

export type Boards = {
  boards: Board[]
}
