import type { PinchInOutWrapperProps } from './types'
import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { usePinchInOutWrapperController } from './controller'
import { TransformComponent } from "react-zoom-pan-pinch";


export const PinchInOutWrapper = withErrorBoundary(({ children }: PinchInOutWrapperProps) => {

  const controller = usePinchInOutWrapperController();
  console.log(controller)

  return (
    <TransformComponent
      wrapperStyle={{
        width: '100%',
        height: '100%'
      }}
      contentStyle={{
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </TransformComponent>
  )
}, errorBoundaryConfig)
