
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

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}


export default App;
