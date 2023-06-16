'use client';

import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react';
// react beautiful dnd
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    // get Board()
    getBoard();
  }, [getBoard]);
  return (
    // <DragDropContext>
    //   <Droppable
    //     droppableId='board'
    //     direction='horizontal'
    //     type='column' {(provided) => (
    //         <div>{/* rendering all the columns */}</div>
    //     )}
    //   ></Droppable>
    // </DragDropContext>
    <h1>hello</h1>
  );
}

export default Board;
