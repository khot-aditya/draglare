import { errorBoundaryConfig } from '../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useIndexController } from './controller'
import { SettingsPane } from '../../components/system/SettingsPane';
import { cn } from '../../../styles/utility';
import { DragDropWrapper } from '../../components/system/DragDropWrapper';

import { CustomDragLayer } from '../../components/draggable/CustomDragLayer';
import { Container } from '../../components/draggable/Container';

export const Index = withErrorBoundary(() => {

  const controller = useIndexController();
  console.log(controller)

  return (
    <DragDropWrapper>
      <div className={cn('w-screen h-screen bg-gray-100 flex')}>
        <Container>

          <SettingsPane />
        </Container>
        <CustomDragLayer />
      </div>
    </DragDropWrapper>
  )
}, errorBoundaryConfig)
