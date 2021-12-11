import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import DropArea from './dropArea'
import List from './list'

function ReactDnd() {
  return (
    <DndProvider backend={HTML5Backend}>
      <List />
      <DropArea />
    </DndProvider>
  )
}

export default ReactDnd
