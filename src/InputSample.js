import React, { useState } from "react";

/* Practice Input state management */
function InputSample(){
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange = {onChange} value = {text} />
            <button onClick = {onReset}>reset</button>
            <div>
                <b>value : {text}</b>
            </div>
        </div>
    );
}

export default InputSample;