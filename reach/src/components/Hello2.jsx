import React from 'react'

function Hello2(props){



    return (
        <h1 style={{color: props.textColor, backgroundColor: props.bgColor}}>{props.text}</h1>
    );
}
export default Hello2;