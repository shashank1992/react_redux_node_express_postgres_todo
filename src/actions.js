import {
    CREATE_BOARD,
    DELETE_BOARD,
    TOGGLE_TODO,
    CREATE_TODO,
    DELETE_TODO,
    SELECT_BOARD
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
