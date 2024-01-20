import { errorBoundaryConfig } from '../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import Layout from '../../layout/Layout';
import { cn } from '../../../styles/utility';

export const Root = withErrorBoundary(() => {

  return (
    <div className={cn('w-screen h-screen bg-base-200')}>
      <Layout />
    </div>
  )
}, errorBoundaryConfig)
