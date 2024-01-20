import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useItemCarouselContainerController } from './controller'
import { PropsWithChildren } from 'react'
import { cn } from '../../../../styles/utility'

export const ItemCarouselContainer = withErrorBoundary(({ children }: PropsWithChildren) => {

  const controller = useItemCarouselContainerController();
  console.log(controller)

  return (
    <div id="item-carousel-container" className={cn('w-full h-16 bg-slate-400 max-w-96 fixed bottom-10 left-1/2 -translate-x-1/2 shadow-sm')}>

      {children}
    </div>
  )
}, errorBoundaryConfig)
