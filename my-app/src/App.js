
import React, {Component} from 'react';

import  './App.css';

class LightningCounter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      strikes: 0
    }
  };

  render() {
    return(
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
