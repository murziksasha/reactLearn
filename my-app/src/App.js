
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  'color':'blue',
  'fontSize': '35px'
}

class WhoAmI extends Component {

  constructor(props){
    super(props);
    this.state = {
      years: 27,
      text: '++'
    }

  }

  nextYear = () =>{
    this.setState(state => ({
      years: state.years +1
    }))
  }
  
  render(){
    const {name, surname, link} = this.props;
      return (

        <div style={style} >
          <button onClick={this.nextYear}>{this.state.text}</button>
          <h2>My name is {name} surname - {surname}, age {this.state.years}</h2>
          <a href={link}>Link for my profile</a>
        </div>
      )
  }

}


function App() {


  return (
    <div className='App'>

      <WhoAmI name={'Ivan'} surname={"Petrechenko"}
      link={"https://bing.com"}/>
      <br/>
      <hr/>
      <br/>     
      <WhoAmI name={'Sasha'} surname={"Grygoriev"}
      link={"https://www.google.com"}/>
    </div>


  );

}


export default App;
