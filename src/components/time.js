import React, { Component, useState } from 'react';

const Time = (props) => {

    return ( <div className='time-container'>
        <span>{(props.time.h < 10) ? '0'+props.time.h : props.time.h} : </span>
        <span>{(props.time.m < 10) ? '0'+props.time.m : props.time.m} : </span>
        <span>{(props.time.s < 10) ? '0'+props.time.s : props.time.s} : </span>
        <span>{(props.time.ms < 10) ? '0'+props.time.ms : props.time.ms}</span>
    </div> );
}
 
export default Time;