import React from "react";

/* Practice conditional component */
function Hello4({ name, color, isSpecial }){
    return (
        <div style = {{ color }}>
            { isSpecial ? <b>*</b> : null } {/* ternary operator */}
            Hello { name }
            { isSpecial && <b>*</b> } {/* logical operator */}
        </div>)
}

/* When called component without properties, set defaultProperties */
Hello4.defaultProps = {
    name : 'undefinded',
    color : 'green'
}

export default Hello4;