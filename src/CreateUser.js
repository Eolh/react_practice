import React from "react";

/* regist user info component */
function CreateUser({ username, email, onChange, onCreate }){
    return (
        <div>
            <input name = "username" placeholder = "username" onChange = {onChange} value = {username} />
            <input name = "email" placeholder = "email" onChange = {onChange} value = {email} />
            <button onClick = {onCreate}>regist</button>
        </div>
    )
}

export default React.memo(CreateUser);