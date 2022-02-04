import React, { useState } from "react";

/* Practice multiple inputs state management */
function InputSample2(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    })

    const {name, nickname} = inputs;
        
    const onChange = (e) => {
        const {value, name} = e.target; // get value, name in e.target
        
        //https://react.vlpt.us/basic/09-multiple-inputs.html 
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
    }

    return (
        <div>
            <input name = "name" onChange = {onChange} value = {name} placeholder = "name"/>
            <input name = "nickname" onChange = {onChange} value = {nickname} placeholder = "nickname"/>
            <button onClick = {onReset}>reset</button>
            <div>
                <b>value : </b>
                {name} {nickname ? "("+ nickname+")" : null}
            </div>
        </div>
    )
}

export default InputSample2;