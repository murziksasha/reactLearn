
import React, {Component} from 'react';

import  './App.css';



class Circle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  someClick = (e) => {
    let currentCount = this.state.number;

    if(e.shiftKey) {
      currentCount += 10;
    } 
    else {
      currentCount += 1;
    }

    this.setState({
      number: currentCount
    })
  }

  incrClick = (e) => {
 
    let currentCount = this.state.number;

    if(e.shiftKey) {
      currentCount -= 10;
    } 
    else {
      currentCount -= 1;
    }

    this.setState({
      number: currentCount
    })
  }

  render() {
    const circleStyle = {
      padding : 10,
      margin : 20,
      display: 'inline-block',
      backgroundColor: this.props.bgColor,
      width: 200,
      height: 200
    }
    const {number} = this.state;
    return(
   
      <div style={circleStyle}>
        <span style={{color: 'white', marginRight: '20px'}}>{number}</span>
        <button  onClick={this.someClick}>+</button>
        <button onClick={this.incrClick}>-</button>
      </div>
    )
  }
}


function App() {


  return (


    <div className='App'>

    <Circle bgColor='#999'/>

    </div>


  );

}


export default App;
