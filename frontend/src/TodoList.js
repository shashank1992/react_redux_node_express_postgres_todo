import {useState} from 'react';
import TodoItems from './TodoItems';
import DoneItems from './DoneItems';
import { Button, Input } from 'semantic-ui-react';
import './TodoItems.css';
import { connect} from 'react-redux';
import { createTodoSaga, deleteTodoSaga, toggleTodoSaga } from "./actions";
import {currentBoard, todos} from './selectors';

export function TodoList({todos, currentBoard, createTodoSaga, deleteTodoSaga, toggleTodoSaga}) {
    const [todo,setTodo] = useState('');

    const itemListCompleted = todos.filter(item=>item.isCompleted);
    const itemListTodo = todos.filter(item=>!item.isCompleted);

    function handleDelete(key) {
        deleteTodoSaga(key)
    }

    function handleTodoChange(e) {
        setTodo(e.target.value)
    }

    function handleComplete(key) {
        toggleTodoSaga(key)
    }

    function addItem(e) {
        console.log('submitted');
        createTodoSaga({
            "text":todo,
            "isCompleted":false,
            "boardId":currentBoard
        });
        setTodo('');
        e.preventDefault();
    }
    return (
        <div className='todoListMain'>
            <div className='header'>
                <form onSubmit={addItem}>
                    <Input placeholder='enter task'
                    value={todo}
                    onChange={handleTodoChange}
                    />
                    <Button primary type='submit'>
                        add
                    </Button>
                </form>
            </div>
            {itemListTodo.length>0 && <h3> New Tasks </h3>}
            <TodoItems entries={itemListTodo} 
            deleteItem={handleDelete} 
            completeItem={handleComplete}/>
            {itemListCompleted.length >0 && <h3> Completed Tasks </h3>}
            <DoneItems entries={itemListCompleted} 
            deleteItem={handleDelete}/>
        </div>
    )
}

function stateToProps(state){
    return {
        todos: todos(state),
        currentBoard: currentBoard(state)

    }
}

const dispatchToProps = {
    createTodoSaga,
    deleteTodoSaga,
    toggleTodoSaga
}

export default connect(stateToProps, dispatchToProps)(TodoList)