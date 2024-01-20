import { errorBoundaryConfig } from '../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useMainController } from './controller'
import { cn } from '../../../styles/utility';
import { DragDropWrapper } from '../../components/system/DragDropWrapper';

import { Container } from '../../components/draggable/Container';
import { DraggableBox } from '../../components/draggable/DraggableBox';
import { DragAndDropContextProvider } from '../../../context/dnd-context/ContextProvider';
import { CustomDragLayer } from '../../components/draggable/CustomDragLayer';
import { PinchInOutWrapper } from '../../components/system/PinchInOutWrapper';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import { useState } from 'react';
import { ItemCarouselContainer } from '../../components/system/ItemCarouselContainer';
import { ItemCarousel } from '../../components/system/ItemCarousel';

export const Main = withErrorBoundary(() => {

  const controller = useMainController();
  console.log(controller)

  const [isMoveable, setIsMoveable] = useState<boolean>(true);

  // const onDrag = () => {
  //   setIsMoveable(true)

  // }
  // const onStop = () => {
  //   setIsMoveable(false)
  // }

  return (
    <div className={cn('w-full h-full')}>
      <DragAndDropContextProvider>
        <TransformWrapper
          initialScale={1}
          disabled={isMoveable}
          minScale={1}
          maxScale={1.2}
          limitToBounds={false}
          pinch={{ step: 5 }}
          panning={{
            disabled: true,
            excluded: ["item-carousel-container"]
          }}

        >
          <PinchInOutWrapper>
            <DragDropWrapper>
              <Container>
                {/* <DraggableBox
                  isDragging={(isDragging) => {
                    if (isDragging) {
                      onDrag()
                    } else {
                      onStop()
                    }
                  }}
                  id={"a"}
                  title='something'
                /> */}
                <ItemCarouselContainer>
                  <ItemCarousel />
                  <DraggableBox
                    isDragging={(isDragging) => {
                      setIsMoveable(isDragging)
                    }}
                    id={"a"}
                    title='something'
                  />
                </ItemCarouselContainer>
              </Container>
              <CustomDragLayer />
            </DragDropWrapper>
          </PinchInOutWrapper>
        </TransformWrapper>

      </DragAndDropContextProvider>
    </div >
  )
}, errorBoundaryConfig)
