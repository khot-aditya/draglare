import { errorBoundaryConfig } from '../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import Layout from '../../layout/Layout';

export const Root = withErrorBoundary(() => {

  return (
    <div>
      <Layout />
    </div>
  )
}, errorBoundaryConfig)
