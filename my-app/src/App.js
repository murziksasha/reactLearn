
import {useState, useEffect} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const multyply = () => {
  console.log('rendering multiply');
  return Math.trunc(Math.random()*20);
}



function App() {
  const [counter, setCounter] = useState(()=> multyply());

  const summator = (i) => {
    setCounter((prevCounter)=>prevCounter + i);
    setCounter((prevCounter)=>prevCounter + i);
  }


  return (

    <Container>
      <div className="App">
        <h1>Counter {counter}</h1>
        <button className='btn btn-primary'
        onClick={()=>summator(1)}>ADD</button>
        <button className='btn btn-success'
        onClick={()=> summator(-1)}>INC</button>
      </div>
    </Container>


  );

}


export default App;
