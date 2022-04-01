
import React, {Component} from 'react';

import  './App.css';



class LightningCounter extends Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0
    };
    this.timerTick = this.timerTick.bind(this);
  }

  timerTick() {
    this.setState(()=>{

        strikes: this.state.strikes + 100

    })
  }
}


function App() {


  return (

    <div className='App'>


    </div>


  );

}


export default App;
