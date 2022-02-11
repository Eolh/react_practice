import React from "react";

function User({ user }){
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

/* Practice add array items */
function UserList2({ users }){
    return (
        <div>
            {users.map(user => (
                <User user = {user} key ={user.id} />
            ))}
        </div>
    )
}

export default React.memo(UserList2);