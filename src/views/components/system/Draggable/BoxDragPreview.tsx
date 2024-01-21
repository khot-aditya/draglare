import type { CSSProperties, FC } from 'react'
import { memo, useEffect, useState } from 'react'

import { Box } from './Box'

const styles: CSSProperties = {
  display: 'inline-block',
}

export interface BoxDragPreviewProps {
  title: string
}

export interface BoxDragPreviewState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tickTock: any
}

export const BoxDragPreview: FC<BoxDragPreviewProps> = memo(
  function BoxDragPreview({ title }) {
    const [tickTock, setTickTock] = useState(false)

    useEffect(
      function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500)
        return () => clearInterval(interval)
      },
      [tickTock],
    )

    return (
      <div style={styles}>
        <Box title={title} yellow={tickTock} preview />
      </div>
    )
  },
)
