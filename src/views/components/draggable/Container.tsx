import update from 'immutability-helper'
import type { CSSProperties, FC, PropsWithChildren } from 'react'
import { useCallback, useContext } from 'react'
import { useDrop } from 'react-dnd'

import type { DragItem } from './interfaces'
import { ItemTypes } from './ItemTypes'
import { DragAndDropContext } from '../../../context/dnd-context/ContextProvider'

const styles: CSSProperties = {
  width: "100%",
  height: "100%",
  position: 'relative',
}

export const Container: FC<PropsWithChildren> = ({ children }) => {
  const { boxes, setBoxes } = useContext(DragAndDropContext);

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number
          y: number
        }

        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)


        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )

  return (
    <div ref={drop} style={styles}>
      {children}
    </div>
  )
}
