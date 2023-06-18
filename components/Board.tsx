'use client';

import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react';
// react beautiful dnd
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  // board, getBoard정보를 두개 받고싶을때 같은 store에 있을떄 아래와 같이 접근 가능!
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  useEffect(() => {
    // get Board()
    getBoard();
  }, [getBoard]);
  console.log(board);
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
