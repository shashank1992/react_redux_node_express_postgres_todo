import React from 'react';
import ReactDOM from 'react-dom/client';
import {createReducer} from 'redux-orm';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';
import { createLogger } from 'redux-logger';
import {orm} from './models';
import { selectedBoardReducer } from './reducers';
import bootstrap from './bootstrap';
import './index.css';
import TodoApp from './TodoApp';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import {createBoardSaga, deleteBoardSaga, createTodoSaga,
   deleteTodoSaga,toggleTodoSaga, getBoardSaga, getTodoSaga } from './saga';

const rootReducer = combineReducers({
  orm: createReducer(orm),
  selectedBoardId : selectedBoardReducer,
})

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, createLogger())(createStore)

const store = createStoreWithMiddleware(rootReducer, bootstrap());

sagaMiddleware.run(createBoardSaga);
sagaMiddleware.run(deleteBoardSaga);
sagaMiddleware.run(createTodoSaga);
sagaMiddleware.run(deleteTodoSaga);
sagaMiddleware.run(toggleTodoSaga);
sagaMiddleware.run(getBoardSaga);
sagaMiddleware.run(getTodoSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <TodoApp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
