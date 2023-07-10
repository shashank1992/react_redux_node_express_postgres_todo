import TodoList from "./TodoList";
import BoardList from './BoardList';
import {Grid, Container} from 'semantic-ui-react';
import { connect} from 'react-redux';
import { selectBoard, createBoard, deleteBoard, createTodo, deleteTodo, toggleTodo } from "./actions";
import {todos, boards, currentBoard} from './selectors';

export function TodoApp({todos, boards, currentBoard, selectBoard, createBoard,
deleteBoard, createTodo, deleteTodo, toggleTodo}) {
    return (
        <Container>
        <Grid centered>
        <Grid.Row>
            <Grid.Column width={16}>
                <h1>TodoApp</h1>
            </Grid.Column>   
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                <BoardList />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column computer={8}>
                <TodoList/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
    )
}

function stateToProps(state){
    return {
        todos: todos(state),
        selectedBoard : currentBoard(state),
        boards: boards(state),
    }
}

const dispatchToProps = {
    selectBoard,
    createBoard,
    deleteBoard,
    createTodo,
    deleteTodo,
    toggleTodo
}

export default connect(stateToProps, dispatchToProps)(TodoApp)