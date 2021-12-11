import React from 'react'
import { useDrag } from 'react-dnd'

function ListItem({ item }: any) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'sonam', // type of element to be dragged
    item,
    options: { dropEffect: 'move' },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }), // to collect dragging information
  }))
  return (
    <div>
      {!isDragging ? (
        <li
          ref={drag}
          key={item.id}
          style={{
            border: '1px solid green',
            height: '30px',
            width: '200px',
          }}
        >
          {item.name}
        </li>
      ) : (
        <li
          ref={dragPreview}
          key={item.id}
          style={{
            border: '1px solid yellow',
            height: '30px',
            width: '200px',
          }}
        >
          {item.name}
        </li>
      )}
    </div>
  )
}

export default ListItem
