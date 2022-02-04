import React from "react";

/* Practice component with properties(ver.short - using properties name) */
function Hello3({ color, name }){
    return <div style = {{ color }}>Hello { name }</div>
}

/* When called component without properties, set defaultProperties */
Hello3.defaultProps = {
    name : 'noname',
    color : 'blue'
}

export default Hello3;