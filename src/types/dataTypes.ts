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

export type Task = {
  id: string
  title: string
  status: Status
}

export type IconData = {
  fill?: string
  width?: number
  height?: number
  stroke?: string
  strokeWidth?: number
}
