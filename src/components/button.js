import React, { Component } from 'react';

const Button = (props) => {
    return ( <div className='btn-container'>
        <button className='start' onClick={props.run}>Start</button>
        <button className='stop' onClick={props.stop}>Stop</button>
        <button className='reset' onClick={props.reset}>Reset</button>
    </div> );
}
 
export default Button;