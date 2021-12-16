import React, { Component } from 'react';
import './App.css';
import Time from './components/time';
import Button from './components/button';
import { updateTimer } from './actions';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: '',
      isRunning: false
    }
  }

  run = () => {
    var { time } = this.props
    if (this.state.isRunning === false) {
      var milisec = time.ms, sec = time.s, min = time.m, hr = time.h;
      this.setState({
        counter: setInterval(() => {
          milisec++;

          if (milisec === 99) {
            sec++;
            milisec = 0;
          }

          if (sec === 60) {
            min++;
            sec = 0;
          }

          if (min === 60) {
            hr++;
            min = 0;
          }

          this.props.updateTime({ ms: milisec, s: sec, m: min, h: hr })
          this.setState({ isRunning: true })
        }, 10)
      })
    }
  }

  stop = () => {
    clearInterval(this.state.counter)
    this.setState({ isRunning: !this.state.isRunning })
  }

  reset = () => {
    if (!this.state.isRunning){
      this.props.updateTime({ ms: 0, s: 0, m: 0, h: 0 })
      this.setState({ counter: '' })
    } 
  }

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <div className='body-container'>
            <div className='time-container'>
              <Time time={this.props.time} />
            </div>
            <div>
              <Button run={this.run} stop={this.stop} reset={this.reset} isRunning={this.state.isRunning} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  time: store.time
})

const mapDispatchToProps = (dispatch) => ({
  updateTime: (payload) => dispatch(updateTimer(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


//   Without Redux //
//-----------------------
// import React, { Component } from 'react';
// import './App.css';
// import Time from './components/time';
// import Button from './components/button';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: { ms: 0, s: 0, m: 0, h: 0 },
//       counter: '',
//       isRunning: false
//     }
//   }

//   run = () => {
//     var { time } = this.state
//     if (this.state.isRunning === false) {
//       var milisec = time.ms, sec = time.s, min = time.m, hr = time.h;
//       this.setState({
//         counter: setInterval(() => {
//           milisec++;

//           if (milisec === 99) {
//             sec++;
//             milisec = 0;
//           }

//           if (sec === 60) {
//             min++;
//             sec = 0;
//           }

//           if (min === 60) {
//             hr++;
//             min = 0;
//           }

//           return this.setState({ time: { ms: milisec, s: sec, m: min, h: hr } })

//         }, 10)
//       })
//       this.setState({ isRunning: true })
//     }
//   }

//   stop = () => {
//     clearInterval(this.state.counter)
//     this.setState({ isRunning: !this.state.isRunning })
//   }

//   reset = () => {
//     if (!this.state.isRunning) this.setState({ time: { ms: 0, s: 0, m: 0, h: 0 } })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className='App-header'>
//           <div className='body-container'>
//             <div className='time-container'>
//               <Time time={this.state.time} />
//             </div>
//             <div>
//               <Button run={this.run} stop={this.stop} reset={this.reset} isRunning={this.state.isRunning} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


/////////////////////////////       Using Function Component   ///////////////////////////////////
//--------------------------------------------------------------------------------------------//
// import React, { useState } from 'react';
// import './App.css';
// import Time from './components/time';
// import Button from './components/button';

// function App() {
//   const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
//   const [counter, setCounter] = useState()
//   const [isRunning, setRunning] = useState(false)

//   var milisec = time.ms, sec = time.s, min = time.m, hr = time.h;

//   const start = () => {

//     milisec++;

//     if (milisec === 99) {
//       sec++;
//       milisec = 0;
//     }

//     if (sec === 60) {
//       min++;
//       sec = 0;
//     }

//     if (min === 60) {
//       hr++;
//       min = 0;
//     }

//     return setTime({ ms: milisec, s: sec, m: min, h: hr })
//   }

//   const run = () => {
//     if (isRunning === false) {
//       setCounter(setInterval(function () {
//         start();
//       }, 10))
//       setRunning(true)
//     }
//   }

//   const stop = () => {
//     clearInterval(counter)
//     setRunning(false)
//   }

//   const reset = () => {
//     if (!isRunning) setTime({ ms: 0, s: 0, m: 0, h: 0 })
//   }

//   return (
//     <div className="App">
//       <div className='App-header'>
//         <div className='body-container'>
//           <div className='time-container'>
//             <Time time={time} />
//           </div>
//           <div>
//             <Button run={run} stop={stop} reset={reset} isRunning={isRunning}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;