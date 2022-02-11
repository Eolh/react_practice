import React from "react";

function Users({ user }){
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

/* Practice array rendering */
function UserList(){
    const users = [ /* duplicate key in same array, occur error */
        {
            id : 1,
            username : "velopert",
            email : "public.velopert@gmail.com"
        },
        {
            id : 2,
            username : "tester",
            email : "tester@example.com"
        },
        {
            id : 3,
            username : "liz",
            email : "liz@exmaple.com"
        }
    ];

    return (
        <div>
           {/* simple way 
            <Users user = {users[0]} />
            <Users user = {users[1]} />
            <Users user = {users[2]} /> 
            */}
            {users.map(user => (  /* dynamic array rendering way (array rendering need unique key in react) */
                <Users user = {user} key = {user.id}/>
            ))}
            <br />
            {users.map((user, index) => (  /* dynamic array rendering way dont have key value */
                <Users user = {user} key = {index}/>
            ))}

            {/* Key existence or absence
                
                absence : array = ['a','b','c','d'] 
                * add 'z' between 'b' and 'c'
                    rerendering 'c' change 'z'
                                'd' change 'c'
                                add 'd'
                * remove 'a' 
                    rerendering 'a' change 'b'
                                'b' change 'z'
                                'z' change 'c'
                                'c' change 'd'
                                remove 'd'
                
                existence : array = [
                                        {
                                            id : 0,
                                            text : 'a'
                                        },
                                        {
                                            id : 1,
                                            text : 'b'
                                        },
                                        {
                                            id : 2,
                                            text : 'c'
                                        },
                                        {
                                            id : 3,
                                            text : 'd'
                                        },
                                    ]

                * add (id : 5, text : 'z') between 'b' and 'c'
                    exsiting value as it is stand, just add 'z' between 'b' and 'c'

                * remove (id : 0, text: 'a')
                    exsiting value as it is stand, just remove 'a'
            */}
            
        </div>
    )
}

export default UserList;