
import React, {Component} from 'react';

import  './App.css';

class Card extends Component {
  render() {
    return (
      <div className='card'>
        <Square color={this.props.color} />
        <Lebel {...this.props} />
      </div>
    )
  }
}

class Square extends Component {


  render() {
    return (
      <div className='square'
      style={{backgroundColor: 'pink'}}>

      </div>
    )
  }
}

class Lebel extends Component{
  render() {
    return (
      <div className='lebel'>
        <p>{this.props.color}</p>
      </div>
    )
  }
}


function App() {
  return (
    <div className='App'>
      <Card color ="red">

      </Card>
    </div>


  );

}


export default App;
