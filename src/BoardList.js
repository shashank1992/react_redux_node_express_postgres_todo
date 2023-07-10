import {useState} from 'react';
import BoardItem from './BoardItem';
import {Form , Button, Modal, Menu} from 'semantic-ui-react';
import { connect} from 'react-redux';
import { createBoard, deleteBoard, selectBoard } from "./actions";
import {currentBoard, boards} from './selectors';

export function BoardList ({currentBoard, createBoard, selectBoard, deleteBoard, boards}) {
    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        createBoard({name});
        setIsModalOpen(false);
        setName('');
        e.preventDefault();
    }

    const handleDelete = (key) => {
        deleteBoard(key);
        selectBoard(0);
    }

    const handleBoardExpand = (key) => {
        selectBoard(key);
    }

    return (
        <Menu fluid>
           {boards.length > 0 && <BoardItem entries={boards} 
           deleteBoard={handleDelete}
           boardExpand={handleBoardExpand}
           currentId={currentBoard}/>}
           <Menu.Menu position='right'>
            <Menu.Item>
           <Button onClick={()=>setIsModalOpen(true)}>Add Board</Button>
           </Menu.Item>
           </Menu.Menu>
           <Modal open={isModalOpen} onClose={()=>setIsModalOpen(false)}>
            <Modal.Header> Add New Board </Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Button type="submit"> Add </Button>
                </Form>
            </Modal.Content>
           </Modal>
        </Menu>    
    )
}

function stateToProps(state) {
    return {
        boards: boards(state),
        currentBoard: currentBoard(state)
    }
}

const dispatchToProps = {
    createBoard,
    deleteBoard,
    selectBoard
}

export default connect(stateToProps, dispatchToProps)(BoardList)