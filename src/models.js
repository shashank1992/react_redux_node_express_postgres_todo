import {ORM, Model , fk} from 'redux-orm';
import { CREATE_BOARD, CREATE_TODO, DELETE_BOARD, DELETE_TODO, TOGGLE_TODO } from './actionTypes';

export class BoardModel extends Model {
    static reducer(action,BoardModel, session) {
        const {payload, type} = action;
        switch(type) {
            case CREATE_BOARD:
                BoardModel.create(payload);
                break;
            case DELETE_BOARD:
                BoardModel.withId(payload).todo.delete();
                BoardModel.withId(payload).delete();
                break;
        }
    }
}
BoardModel.modelName = 'BoardModel';

export class TodoModel extends Model {
    static reducer (action, TodoModel, session) {
        const {payload, type} = action;
        switch(type) {
            case CREATE_TODO:
                console.log('dispatched create_todo')
                TodoModel.create(payload);
                break;
            case TOGGLE_TODO:
                const completeState = TodoModel.withId(payload).isCompleted
                TodoModel.withId(payload).set('isCompleted',!completeState)
                break;
            case DELETE_TODO:
                TodoModel.withId(payload).delete();
                break;
        }
    }

}

TodoModel.modelName = 'TodoModel';

TodoModel.fields = {
    boardId: fk('BoardModel','todo'), 
};

export const orm = new ORM({
    stateSelector: state => state.orm,
});
orm.register(BoardModel, TodoModel);
export default orm;


