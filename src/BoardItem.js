import { Menu, Label, Icon} from 'semantic-ui-react';

export default function BoardItem({entries, deleteBoard, boardExpand, currentId}) {

    return (
            <>
                {entries.map(board => (
                    <Menu.Item name={board.name+board.id}
                        active={currentId ===board.id}
                        onClick={()=>boardExpand(board.id)}
                        key={board.id}
                    >
                        {board.name}
                   {board.id!==0 && <Label onClick={()=>deleteBoard(board.id)} ><Icon link size="large" name="delete" /></Label>}
                    </Menu.Item>
                )
                )}
           </> 
    );
}