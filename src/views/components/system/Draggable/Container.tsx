import update from 'immutability-helper'
import type { CSSProperties, } from 'react'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox'
import { ComponentToImage } from '../ComponentToImage'

export interface BoxMap {
  [key: string]: { top: number; left: number; title: string }
}

const styles: CSSProperties = {
  width: "100%",
  height: "100%",
  position: 'relative',
}

export interface DragItem {
  id: string
  type: string
  left: number
  top: number
}


export const Container = () => {

  const [boxes, setBoxes] = useState<BoxMap>({
    a: { top: 20, left: 80, title: 'Drag me around' },
    b: { top: 80, left: 80, title: 'Drag me too' },
  })

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
      accept: "BOX",
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number
          y: number
        }

        console.log(item)
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)

        console.log(item.left, delta.x)

        moveBox(item.id, left, top)


        return undefined
      },
    }),
    [moveBox],
  )



  return (
    <>
      <ComponentToImage>

        <div ref={drop} style={styles}>



          {Object.keys(boxes).map(value => {
            return (
              <DraggableBox
                left={boxes[value].left}
                top={boxes[value].top}
                id={value}
                title={value}
                isDragging={() => { }} />
            )
          })}
        </div>

      </ComponentToImage>
      <button className='fixed bottom-10 bg-white' onClick={() => {
        setBoxes(prev => {
          return {
            ...prev,
            [Math.random()]: {
              left: 0,
              top: 0,
              title: 'som',
            }
          }
        })
      }}>
        Add
      </button>
    </>
  )
}
