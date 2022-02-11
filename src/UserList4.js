import React from "react";


function User({ user, onRemove, onToggle }){
    return (
        <div>
            <b style = {{ cursor : 'pointer', color : user.active ? 'green' : 'black' }} onClick = {() => onToggle(user.id)} >{user.username}</b><span>({user.email})</span>
            <button onClick = {() => onRemove(user.id)} >remove</button>
        </div>
    )
}

/* Practice update array items */
function UserList4({ users, onRemove, onToggle }){
    return (
        <div>
            {users.map(user =>(
                <User user = {user} key = {user.id} onRemove = {onRemove} onToggle = {onToggle} />
            ))}
        </div>
    )
}

export default React.memo(UserList4);