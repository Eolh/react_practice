import React from "react";

function User({ user, onRemove }){
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
            <button onClick = {() => onRemove(user.id)}>remove</button>
        </div>
    )
}

function UserList3({ users, onRemove }){
    return (
        <div>
            {users.map(user => (
                <User user = {user} key = {user.id} onRemove = {onRemove} />
            ))}
        </div>
    )
}

export default UserList3;