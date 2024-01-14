import type { ButtonProps } from './types'
import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useButtonController } from './controller'

export const Button = withErrorBoundary(({ prop }: ButtonProps) => {

  const controller = useButtonController();
  console.log(controller)

  return (
    <div>
      <button className="btn btn-primary">Button</button>

      {prop}</div>
  )
}, errorBoundaryConfig)
