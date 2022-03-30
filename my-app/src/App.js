
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  'color':'blue',
  'fontSize': '35px'
}

const Header = () => {
  return <h2 style={style}> Hello world!</h2>
}


class Field extends Component {
  render(){
    return (
      <input type="text" placeholder='text here' />
    )
  }
}

const ButtonSome = () => {
  const text = () => {
   return 'Log in';
  }
  return <button>{text()}</button>
}

function WhoAmI ({name, surname, link}) {
  return (
    <div style={style} >
      <h2>My name is {name} surname - {surname}</h2>
      <a href={link}>Link for my profile</a>
    </div>
  )
}


function App() {
  return (
    <div className='App'>
      <Header />
      <Field/>
      <ButtonSome/>
      <WhoAmI name={'Ivan'} surname={"Petrechenko"}
      link={"https://bing.com"}/>     
      <WhoAmI name={'Sasha'} surname={"Grygoriev"}
      link={"https://www.google.com"}/>
    </div>


  );

}


export default App;
