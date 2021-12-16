import React from 'react';

const Button = (props) => {
    return ( <div className='btn-container'>
        {props.isRunning ? "" : <button className='start btn' onClick={props.run}>Start</button>}
        {props.isRunning ? <button className='stop btn' onClick={props.stop}>Stop</button> : ""}
        <button className='reset btn' onClick={props.reset}>Reset</button>
    </div> );
}
 
export default Button;