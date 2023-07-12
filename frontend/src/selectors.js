import {orm} from './models';
import {createSelector} from 'redux-orm';


export const todos = createSelector(
    orm,
    state => state.selectedBoardId,
    (session, boardId) => {
        console.log('running todos selector');
        return session.TodoModel.all().toRefArray().filter((todo)=>todo.boardId === boardId);
    }
)

export const boards = createSelector(
    orm,
    session => {
        console.log('Running board selector');
        return session.BoardModel.all().toRefArray();
    }
);

export const currentBoard = createSelector(
    orm,
    state => state.selectedBoardId,
   (session, boardId) => {
        console.log('running currentBoard selector');
        return boardId;
    }
);
