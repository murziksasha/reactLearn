
import React, {Component} from 'react';

import  './App.css';



class LightningCounter extends Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0
    };
    // this.timerTick = this.timerTick.bind(this);
  }

  componentDidMount(){
    setInterval(this.timerTick, 1000);
  }

  timerTick = ()=> {
    this.setState((prevState)=>({

        strikes: prevState.strikes + 100

    }))

  }

  render(){

    return (
      <h1>{this.state.strikes}</h1>
    )

  }
}


class LightningCounterDisplay extends Component {
  render(){
    const divStyle = {
      width: 250,
      textAlign: 'center',
      backgroundColor: 'black',
      padding: 40,
      fontFamily: 'sans-serif',
      color: '#999',
      borderRadius: 10
    };
    return(
      <div style={divStyle}>
        <LightningCounter/>
        <h2>Flash Lightning</h2>
        <h2>on the Earth</h2>
        <p>from start code moment</p>
      </div>
    )
  }

}


function App() {


  return (


    <div className='App'>
      <LightningCounterDisplay/>


    </div>


  );

}


export default App;
