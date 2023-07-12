import {List, Icon, Divider} from 'semantic-ui-react';

export default function DoneItems({entries, deleteItem}) { 
    const listItemStyle = {
        "display":"flex",
        "justifyContent":"space-between",
        "padding": "5px"
    }

    return (
        <List className="theList"> 
            {entries.map((task) =>  (
            <List.Item  key={task.id}>
                <div style={listItemStyle}>
                <s>{task.text} </s>
                <Icon link name="delete" onClick={()=>deleteItem(task.id)}/>
                </div> 
            <Divider />
            </List.Item>
            )
            )}
        </List>
    )
}