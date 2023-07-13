import {
    CREATE_BOARD,
    DELETE_BOARD,
    TOGGLE_TODO,
    CREATE_TODO,
    DELETE_TODO,
    SELECT_BOARD,
    CREATE_BOARD_SAGA,
    DELETE_BOARD_SAGA,
    TOGGLE_TODO_SAGA,
    CREATE_TODO_SAGA,
    DELETE_TODO_SAGA,
    GET_BOARD_SAGA,
    GET_TODO_SAGA,

}   from './actionTypes';

export const selectBoard = id => {
    return {
        type : SELECT_BOARD,
        payload: id,
    };
}

export const createBoard = props => {
    return {
        type: CREATE_BOARD,
        payload: props
    }
}

export const deleteBoard = id => {
    return {
        type : DELETE_BOARD,
        payload: id
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const createTodo = props => {
    return {
        type: CREATE_TODO,
        payload: props
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

//SAGAS

export const createBoardSaga = props => {
    return {
        type: CREATE_BOARD_SAGA,
        payload: props
    }
}

export const getBoardSaga = props => {
    return {
        type: GET_BOARD_SAGA,
        payload: props
    }
}

export const getTodoSaga = props => {
    return {
        type: GET_TODO_SAGA,
        payload: props
    }
}

export const deleteBoardSaga = id => {
    return {
        type : DELETE_BOARD_SAGA,
        payload: id
    }
}

export const toggleTodoSaga = id => {
    return {
        type: TOGGLE_TODO_SAGA,
        payload: id
    }
}

export const createTodoSaga = props => {
    return {
        type: CREATE_TODO_SAGA,
        payload: props
    }
}

export const deleteTodoSaga = id => {
    return {
        type: DELETE_TODO_SAGA,
        payload: id
    }
}