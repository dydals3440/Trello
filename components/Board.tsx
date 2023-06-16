'use client'

import React, { useEffect } from 'react';
// react beautiful dnd
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
    useEffect(() => {
        // get Board
    })
  return (
    <DragDropContext>
      <Droppable
        droppableId='board'
        direction='horizontal'
        type='column' {(provided) => (
            <div>{/* rendering all the columns */}</div>
        )}
      ></Droppable>
    </DragDropContext>
  );
}

export default Board;
