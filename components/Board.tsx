'use client';

import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react';
// react beautiful dnd
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

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

  const handleOnDragEnd = (result: DropResult) => {};
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='board' direction='horizontal' type='column'>
          {(provided) => (
            <div
              className='gird gird-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* id column을 비구조 분해 할당 한 것 */}
              {Array.from(board.columns.entries()).map(
                ([id, column], index) => (
                  <Column key={id} id={id} todos={column.todos} index={index} />
                )
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <h1>hello</h1>
    </>
  );
}

export default Board;
