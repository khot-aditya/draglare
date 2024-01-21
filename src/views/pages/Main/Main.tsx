import { errorBoundaryConfig } from '../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useMainController } from './controller'
import { cn } from '../../../styles/utility';
import { DragAndDropContextProvider } from '../../../context/dnd-context/ContextProvider';
import { PinchInOutWrapper } from '../../components/system/PinchInOutWrapper';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import { DragAndDropCanvas } from '../../components/system/DragAndDropCanvas';

export const Main = withErrorBoundary(() => {

  const controller = useMainController();
  console.log(controller)

  return (
    <div className={cn('w-full h-full bg-slate-100')}>
      <DragAndDropContextProvider>
        <TransformWrapper
          initialScale={1}
          disabled={true}
          minScale={1}
          maxScale={1.2}
          limitToBounds={true}
          pinch={{ step: 5 }}
          panning={{
            disabled: true,
          }}>
          <PinchInOutWrapper>
            <DragAndDropCanvas />
          </PinchInOutWrapper>
        </TransformWrapper>
      </DragAndDropContextProvider>
    </div >
  )
}, errorBoundaryConfig)
