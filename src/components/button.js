import React from 'react';

const Button = (props) => {
    return ( <div className='btn-container'>
        <button disabled={props.isRunning} className='start btn' onClick={props.run}>Start</button>
        <button disabled={!props.isRunning} className='stop btn' onClick={props.stop}>Stop</button>
        <button className='reset btn' onClick={props.reset}>Reset</button>
    </div> );
}
 
export default Button;