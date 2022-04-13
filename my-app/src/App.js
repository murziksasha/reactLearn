
import {useState, useEffect, useMemo} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const complexCompute = (num) => {
  let i = 0;
  while (i < 1000000000) i++
  return num*2
}


function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    return complexCompute(number);
  },[number])

  const styles = useMemo(() => ({
    color: colored ? 'yellow': 'purple'
  }),[colored])

  useEffect(() =>{
    console.log('Styles changed');
  },[styles])


  return (

    <Container>
      <h1 style={styles}>Countable Props {number}   and {computed}</h1>
      <button className='btn btn-success'
      onClick={() => setNumber(prev =>prev+1)}>ADD</button>
      <button className='btn btn-danger'
      onClick={() => setNumber(prev =>prev-1)}>INC</button>
      <button className='btn btn-warning'
      onClick={() => setColored(prev => !prev)}>Change Color</button>

    </Container>


  );

}


export default App;
