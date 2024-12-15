import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TaskView } from '../../src/components/views/dashboard/swimlines/TaskView'
import { Task, Categories } from '../../src/types/dataTypes'
import React from 'react'

const mockTask: Task = {
  id: '1',
  category: Categories.DESIGN,
  title: 'Design Task',
  priority: 'High',
  assignees: [],
  image: '',
  'link-count': 2,
  'comment-count': 5,
  notification: 'notification',
  'due-date': '2024-12-12T00:00:00.000Z',
  status: 'Low',
}

const mockHandlers = {
  onDragStart: vi.fn(),
  handleDragEnd: vi.fn(),
  setDropIndicatorColor: vi.fn(),
  removeDropIndicatorColor: vi.fn(),
}

describe('TaskView Component', () => {
  it('renders task details correctly', () => {
    render(
      <TaskView
        task={mockTask}
        status="TODO"
        draggingTask={null}
        {...mockHandlers}
      />
    )

    expect(screen.getByText('Design Task')).toBeInTheDocument()
    expect(screen.getByText('High')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('December 12, 2024')).toBeInTheDocument()
  })

  it('calls onDragStart when drag starts', () => {
    render(
      <TaskView
        task={mockTask}
        status="TODO"
        draggingTask={null}
        {...mockHandlers}
      />
    )

    const taskElement = screen.getByText('Design Task').closest('.task-item')
    fireEvent.dragStart(taskElement!)
    expect(mockHandlers.onDragStart).toHaveBeenCalledWith('1', 'TODO')
  })

  it('calls handleDragEnd when drag ends', () => {
    render(
      <TaskView
        task={mockTask}
        status="TODO"
        draggingTask={null}
        {...mockHandlers}
      />
    )

    const taskElement = screen.getByText('Design Task').closest('.task-item')
    fireEvent.dragEnd(taskElement!)
    expect(mockHandlers.handleDragEnd).toHaveBeenCalled()
  })
})
