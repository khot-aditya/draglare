import type { DragDropWrapperProps } from './types'
import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useDragDropWrapperController } from './controller'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'

export const DragDropWrapper = withErrorBoundary(({ children }: DragDropWrapperProps) => {

  const controller = useDragDropWrapperController();
  console.log(controller)

  return (
    <DndProvider
      options={{
        enableMouseEvents: true,
      }}
      backend={TouchBackend}>
      {children}
    </DndProvider>
  )
}, errorBoundaryConfig)
