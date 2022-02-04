import React, { useState } from "react";

/* Practice useState function */
function Counter(){

    /* Set first element is current state, second element is Setter function
        const numberState = useState(0)
        const number = numberState[0]
        const setNumber = numberState[1] */
    const [number, setNumber] = useState(0); 
    /* useState function internal example
        let previosValue = 0;
        function setState(callback) {
        previosValue = callback(previosValue);
        } */

    const onIncrese = () => {
        setNumber(prevNumber => prevNumber + 1); // Functional Update(prevNumber is temporary name ) <- When component optimization
        // setNumber(number + 1); normal method
        // console.log('+1');
    }

    const onDecrese = () => {
        setNumber(prevNumber => prevNumber - 1); // Functional Update <- When component optimization
        // setNumber(number - 1); normal method
        // console.log('-1');
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {onIncrese}>+1</button> {/* onEventname = {call functionName }  *onEventName = {call functionName()} <- When rendering, call function */}
            <button onClick = {onDecrese}>-1</button> {/* onEventname = {call functionName }  *onEventName = {call functionName()} <- When rendering, call function */}
        </div>
    )
}

export default Counter;