import type { CSSProperties, FC } from 'react'
import { memo, useEffect } from 'react'
import type { DragSourceMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

import { Box } from './Box'
function getStyles(
  left: number | undefined,
  top: number | undefined,
  isDragging: boolean,
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
}

export interface DraggableBoxProps {
  id?: string
  title: string
  left?: number
  top?: number
  isDragging?: (isDragging: boolean) => void
}

export const DraggableBox: FC<DraggableBoxProps> = memo(function DraggableBox(
  props,
) {


  const { id, title, left, top } = props

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "BOX",
      item: { id, left, top, title },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),

      }),
    }),
    [id, left, top, title],
  )

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  useEffect(() => {
    if (props.isDragging)
      props.isDragging(isDragging)
  }, [isDragging])
  return (
    <div
      ref={drag}
      style={getStyles(left, top, isDragging)}
      role="DraggableBox"
    >
      <Box title={title} />
    </div>
  )
})
