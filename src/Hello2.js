import React from "react";

/* Practice component with properties */
function Hello2(props){
    return <div style = {{ color : props.color }}>Hello { props.name }</div>
}

/* When called component without properties, set defaultProperties */
Hello2.defaultProps = {
    name : 'nonames',
    color : 'pink'
}

export default Hello2;