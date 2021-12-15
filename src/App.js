import React, { Component, useState } from 'react';
import './App.css';
import Time from './components/time';
import Button from './components/button';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [counter, setCounter] = useState()
  const [isRunning, setRunning] = useState(false)

  var milisec = time.ms, sec=time.s, min=time.m, hr=time.h;

  const start = () => {
    milisec++;

    if(milisec === 99){
      sec++;
      milisec = 0;
    }

    if(sec === 60){
      min++;
      sec = 0;
    }

    if(min === 60){
      hr++;
      min = 0;
    }

    return setTime({ms: milisec, s: sec, m:min, h:hr})
  }

  const run = () => {
    if(isRunning === false){
      setCounter(setInterval(function(){
        start();
      }, 10))
      setRunning(true)
    }
  }

  const stop = () => {
    clearInterval(counter)
    setRunning(false)
  }

  const reset = () => {
    if(!isRunning) setTime({ms: 0, s: 0, m:0, h:0})
  }

  return (
    <div className="App">
      <Time time={time}/>
      <Button run={run} stop={stop} reset={reset}/>
    </div>
  );
}

export default App;
