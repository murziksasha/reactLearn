
import {Component} from 'react';
import './App.css';


const Header = () => {
  return <h2>Hello React!</h2>
}



class Field extends Component {
  render(){
    const holder = 'Enter here'
    const styleField = {
      backgroundColor: 'yellow',
      width: '300px',
      height: '50px'
    };
 
return <input type="text" placeholder={holder} style={styleField}/>
  }
}

function Btn() {
  const text = "Log in";
  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>
}

function WhoAmI(props) {
  return (
    <div>
      <h1>My name is {props.name}, surname is {props.surname}</h1>
      <a href={props.link}>Some Link</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="Alexander" surname="Grygoriev" link="google.com"/>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}


export default App;
