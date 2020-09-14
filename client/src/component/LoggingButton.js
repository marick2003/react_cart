import React from 'react';

function LoggingButton(){
    return (<button onClick={handleClick}>Click me</button> );
}
function handleClick(){
    console.log('this is:', this);
}

export default LoggingButton;