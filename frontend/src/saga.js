import { call, put, takeEvery,takeLatest } from 'redux-saga/effects';
import api from './api';

import { createTodo,
         deleteTodo, 
         toggleTodo, 
         createBoard, 
         deleteBoard, 
         selectBoard } from "./actions";

import { CREATE_BOARD_SAGA,
         DELETE_BOARD_SAGA,
         CREATE_TODO_SAGA,
         DELETE_TODO_SAGA,
         TOGGLE_TODO_SAGA,
         GET_BOARD_SAGA,
         GET_TODO_SAGA} from './actionTypes';

function* onBoardCreate(action) {
    try{
        const {payload} = action
        const response = yield call(api.post,'/board',payload);
        yield put(createBoard(response.data));
        yield put(selectBoard(response.data.id));
    } catch(e) {
        console.error(e);
    }        
}

function* onBoardDelete(action) {
    try {
        const {payload} = action
        yield call(api.delete,`/board/${payload}`);
        yield put(deleteBoard(payload));
        yield put(selectBoard(0));
    } catch (e) {
        console.error('Error deleting item', e);
    }
}

function* onGetBoard(action){
    try{
        const response = yield call(api.get,'/board')
        console.log(response.data);
        yield put(createBoard(response.data));
    } catch (e) {
        console.error('Error fetching boards', e)
    }
}

function* onGetTodo(action){
    console.log('called onGetTodo')
    try{
        const response = yield call(api.get, `/todo`)
        yield put(createTodo(response.data))
    } catch(e) {
        console.error('Error fetching todos for board',e)
    }
}

function* onTodoCreate(action) {
    try {
        const {payload} = action
        const response = yield call(api.post,'/todo', payload);
        yield put(createTodo(response.data));
    } catch (e) {
        console.error('Error creating todo', e)
    }
}

function* onTodoDelete(action) {
    try {
        const {payload} = action
        yield call(api.delete,`/todo/${payload}`);
        yield put(deleteTodo(payload))
    } catch (e) {
        console.error('Error deleting item', e);
    }
}

function* onTodoToggle(action){
    try {
        const {payload} = action
        yield call(api.put,`/todo/${payload}`);
        yield put(toggleTodo(payload))
    } catch (e) {
        console.error('Error updating item', e);
    }
}

export function* createBoardSaga() {
    yield takeEvery(CREATE_BOARD_SAGA, onBoardCreate)
}

export function* deleteBoardSaga() {
    yield takeEvery(DELETE_BOARD_SAGA, onBoardDelete)
}

export function* createTodoSaga() {
    yield takeEvery(CREATE_TODO_SAGA, onTodoCreate)
}

export function* getBoardSaga() {
    yield takeLatest(GET_BOARD_SAGA, onGetBoard)
}

export function* getTodoSaga() {
    yield takeLatest(GET_TODO_SAGA, onGetTodo)
}
export function* deleteTodoSaga() {
    yield takeEvery(DELETE_TODO_SAGA, onTodoDelete)
}

export function* toggleTodoSaga() {
    yield takeEvery(TOGGLE_TODO_SAGA, onTodoToggle)
}
