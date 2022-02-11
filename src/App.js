import React, { useCallback, useMemo, useRef, useState } from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import Hello3 from './Hello3';
import Hello4 from './Hello4';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import InputSample3 from './InputSample3';
import UserList from './UserList';
import UserList2 from './UserList2';
import CreateUser from './CreateUser';
import UserList3 from './UserList3';
import UserList4 from './UserList4';
import UserList5 from './UserList5';

import logo from './logo.svg';
import './App.css';

function countActiveUsers(users){
  console.log("Counting actived users..");
  return users.filter(user => user.active).length;
}

function App() {
  const name = "react";
  const style = {
    backgroundColor : 'black', // css style '-' change camelCase in jsx
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  };

  const [inputs, setInputs] = useState({
    username : "",
    email : ""
  });

  const {username, email} = inputs;

  const onChange = useCallback(e => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name] : value
      })
    },[]
  );

  const [users, setUsers] = useState([
    {
      id : 1,
      username : "velopert",
      email : "public.velopert@gmail.com",
      active : true
    },
    {
      id : 2,
      username : "tester",
      email : "tester@example.com",
      active : false
    },
    {
      id : 3,
      username : "liz",
      email : "liz@exmaple.com",
      active : false
    }
  ])

  const nextId  = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
    };

    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username : '',
      email : ''
    })

    nextId.current += 1;
    }, [username, email]
  );

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    }, []
  );

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user => user.id === id ? {...user, active : !user.active} : user)
      )
    }, []
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <> {/* react needs close tag
        * '<br>','<input>' auto self close in html tag need self close tag! ex.'<br />', '<input />'
        * only one return tag -> temporary div tag or react Fragment  */}

      {/* how to use comment
        * {} <- necessary in jsx
        * only '/*' used show web page 
        */}

      <Hello /> {/* component test */}

      <Hello2 name = "react" color = "red" /> {/* component test with props */}
      <Hello2 color = "lightgreen" /> {/* component test with a part of props */}
      <Hello2 /> {/* component test with props only defaultProp */}

      <Hello3 name = "react" color = "green" /> {/* component test with props ver.short */}
      <Hello3 name = "react" /> {/* component test with a part of props ver.short */}
      <Hello3 /> {/* component test with props only defaultProp ver.short  */}

      <Wrapper> {/* wrapper component test */}
        <Hello />
        <Hello4 name = "react" color = "darkred" isSpecial = {true} /> {/* conditional properties test (true) <- true is javascript value, Using javascript value with brace( "{ }" ) */}
        <Hello4 color = "lightblue" /> {/* conditional properties test (false) */}
        <Hello4 color = "darkgray" isSpecail /> {/* conditional properties test (skip property value == true) */}
      </Wrapper>

      <div style = {style}>{name}</div> {/* variable test */}
      <div className = 'gray-box'></div> {/* classname test */}

      {/* Hook Function */}
      <Counter /> {/* useState function test */}
      <InputSample /> {/* input state management */}
      <InputSample2 /> {/* multiple inputs state management */}
      <InputSample3 /> {/* multiple inputs state management, useRef test */}
      {/* Hook Function */}
      <br />
      {/* Array test */}
      <UserList />
      <br />
      <CreateUser username = {username} email = {email} onChange = {onChange} onCreate = {onCreate} /> {/* add array items test */}
      <UserList2 users = {users} /> {/* add array items test */}
      <UserList3 users = {users} onRemove = {onRemove} /> {/* remove array items test */}
      <UserList4 users = {users} onRemove = {onRemove} onToggle = {onToggle} /> {/* update array items test */}
      <UserList5 users = {users} onRemove = {onRemove} onToggle = {onToggle} /> {/* update array items test */}
      <div>active user : {count} </div> {/* useMemo test */}
      {/* Array test */}

      <div className = "App">
        <header className = "App-header">
          <img src = {logo} className = "App-logo" alt = "logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
