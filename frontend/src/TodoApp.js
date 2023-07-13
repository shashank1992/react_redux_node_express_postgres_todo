import TodoList from "./TodoList";
import BoardList from './BoardList';
import {Grid, Container} from 'semantic-ui-react';
import { connect} from 'react-redux';
import { getBoardSaga, getTodoSaga } from "./actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function TodoApp({}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoardSaga());
        dispatch(getTodoSaga());
    }, [dispatch])

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