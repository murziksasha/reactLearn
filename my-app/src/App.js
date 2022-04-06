
import React, {Component} from 'react';

import  './App.css';



class Colorizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      color:'',
      bgColor:'white'
    }
  }



  colorValue = (e) => {
    this.setState({
      color: e.target.value
    });
    console.log(e.target.value);
  }

  setNewColor = (e) => {
    e.preventDefault();
    this.setState({
      bgColor: this.state.color
      });

      this._input.focus();
      this._input.value = '';
  }

  render(){
    const squareStyle = {
      backgroundColor: this.state.bgColor
    }
    return(
      <div className="colorArea">
        <div style={squareStyle} className='colorSquare'> </div>

        <form onSubmit={this.setNewColor}>
          <input onChange={this.colorValue}
          placeholder='What color you want?'
          ref={(el) => this._input=el} />
          <button type='submit'>OK</button>
        </form>
      </div>
    );
  }
}




function App() {
 

  return (


    <div className='App'>

        <Colorizer/>

    </div>


  );

}


export default App;
