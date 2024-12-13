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
  EXTRA_SMALL = 'extraSmall',
  SMALL = 'small',
  SMALL_SEMI_BOLD = 'smallSemiBold',
  SMALL_BOLD = 'smallBold',
  MEDIUM = 'medium',
  MEDIUM_BOLD = 'mediumBold',
  LARGE = 'large',
  LARGE_BOLD = 'largeBold',
  EXTRA_LARGE_BOLD = 'extraLargeBold',
}

export type TaskStatusTypes = 'to-do' | 'in-progress' | 'approved' | 'reject'

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
}

export type TaskData = {
  'project-id': string
  'project-name': string
  'to-do': Task[]
  'in-progress': Task[]
  approved: Task[]
  reject: Task[]
}

export type DraggingTask = {
  taskId: string
  status: string
}
