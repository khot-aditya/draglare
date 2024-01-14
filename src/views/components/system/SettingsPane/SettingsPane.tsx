import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useSettingsPaneController } from './controller'
import { cn } from '../../../../styles/utility';
import { DraggableBox } from '../../draggable/DraggableBox';

export const SettingsPane = withErrorBoundary(() => {

  const controller = useSettingsPaneController();
  console.log(controller)

  return (
    <div
      className={cn('w-1/3 min-w-[450px] max-w-[600px] h-full')}
    >
      <div
        className={cn(
          'w-full h-full bg-white'
        )}>
        <DraggableBox
          id='a'
          title='Hello'
        />
      </div>
    </div>
  )
}, errorBoundaryConfig)
