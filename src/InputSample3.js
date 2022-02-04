import React, { useRef, useState } from "react";

/* Practice useRef <- select dom element  */
function InputSample3(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    })

    const nameInput = useRef();

    const {name, nickname} = inputs; // get value, name in e.target

    const onChange = e => {
        const {name, value} = e.target; 
        setInputs({
            ...inputs, // exsiting value copy
            [name] : value // getting  name key value, set value
        })
    }

    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <input name = "name" placeholder = "name" onChange = {onChange} value = {name} ref = {nameInput}/>
            <input name = "nickname" placeholder = "nickname" onChange = {onChange} value = {nickname} />
            <button onClick = {onReset}>reset</button>
            <div>
                <b>value : </b>
                {name} {nickname ? "(" + nickname + ")" : null}
            </div>
        </div>
    )
}

export default InputSample3;