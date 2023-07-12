import {List, Icon, Divider} from 'semantic-ui-react';

export default function TodoItems({entries, deleteItem, completeItem}) { 
    const listItemStyle = {
        "display":"flex",
        "justifyContent":"space-between",
    }

    return (
        <List className="theList"> 
            {entries.map((task) =>  (
            <List.Item  key={task.id}> 
            <div style={listItemStyle}>
                <p>{task.text} </p>
                <div>
                <Icon link name='delete' onClick={()=>deleteItem(task.id)} />
                <Icon link onClick={()=>completeItem(task.id)} name="checkmark" />
                </div>
            </div>
            <Divider />
            </List.Item>
            )
            )}
        </List>
    )
}