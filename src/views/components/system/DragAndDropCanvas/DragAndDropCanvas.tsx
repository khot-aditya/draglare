
import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useDragAndDropCanvasController } from './controller'
import { cn } from '../../../../styles/utility'
import { Container } from '../Draggable/Container'
import { DndProvider } from 'react-dnd'
import { CustomDragLayer } from '../Draggable/CustomDragLayer'
import { TouchBackend } from 'react-dnd-touch-backend'


export const DragAndDropCanvas = withErrorBoundary(() => {

  const controller = useDragAndDropCanvasController();
  console.log(controller)

  return (
    <div className={cn('w-full h-full')}>
      <DndProvider
        options={{
          enableMouseEvents: true,
        }}
        backend={TouchBackend}>

        <CustomDragLayer />
        <Container />
      </DndProvider>
    </div>
  )
}, errorBoundaryConfig)
