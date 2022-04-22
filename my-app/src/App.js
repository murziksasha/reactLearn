
import React, {useState, useEffect, useCallback, useContext} from 'react';
import './App.css';



import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function useLogger(value){  //следим закаким то значением
    useEffect(()=>{
      console.log(value)
    }, [value])
  
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = event => setValue(event.target.value);

  const clear = () => setValue('');

  return {
    bind:{value, onChange},
    value,
    clear
  }
}


function App() {

const input = useInput('');

useLogger(input.value);

  return (

    <Container>

      <h1>Hello: {input.value}</h1>

    <input type='text' value={input.value} 
    {...input.bind}/>  {/*Прием что б jsx не полчал по спреду никаких лишних свойств*/}
      <button className="btn btn-warning"
      onClick={input.clear}>Clear</button>
    </Container>


  );

}


export default App;
