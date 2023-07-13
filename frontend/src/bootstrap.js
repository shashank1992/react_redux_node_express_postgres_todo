import {orm} from './models';

export default function bootstrap() {
    console.log('calling bootstrap')
    const state = orm.getEmptyState();
    console.log('the state',state)
    const session = orm.mutableSession(state);

    const {TodoModel, BoardModel} = session;

    BoardModel.create({
        id: 0,
        name: 'Getting Started'
    });

    TodoModel.create({
        id:0,
        text:'Sample Todo',
        isCompleted:false,
        boardId: 0
    });
    
    return {
        orm: session.state,
        selectedBoardId: 0
    }
}