import type { ItemCarouselProps } from './types'
import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useItemCarouselController } from './controller'

export const ItemCarousel = withErrorBoundary(({ prop }: ItemCarouselProps) => {
  
  const controller = useItemCarouselController();
  console.log(controller)
  
  return (
    <div>{prop}</div>
  )
}, errorBoundaryConfig)
