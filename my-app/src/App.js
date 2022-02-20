
import {Component, StrictMode} from 'react';
import './App.css';

const HelloW = ()=>{
  return <h2>Hello World!</h2>
};

class Field extends Component{
  render(){
    const holder ='Enter Here'
    const styleComp ={
      width:'400px'
    };

    return <input placeholder={holder} 
      type={'text'} 
      style={styleComp}/>
  }
}

function Btn(){
  const text = 'Log In'
  const logged = false;
  
  return <button>{logged?'Enter': text}</button>
}


function App() {
  return (
    <div className="App">
      <StrictMode>
        <HelloW/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
