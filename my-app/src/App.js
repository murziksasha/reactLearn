
import {useState, useEffect, useCallback} from 'react';
import './App.css';

import ItemsList from './ItemList';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);


  const styles ={
    color: colored ? 'yellow': 'purple'
  }

  const generateItemsFromApi = useCallback( () => {
    return new Array(count).fill('').map((_, i) => `Item ${i + 1}`)
  },[count])


  return (

    <Container>
      <h1 style={styles}>Countable Props {count}</h1>
      <button className='btn btn-success'
      onClick={() => setCount(prev =>prev+1)}>ADD</button>
      <button className='btn btn-danger'
      onClick={() => setColored(prev => !prev)}>INC</button>

      <ItemsList getItems={generateItemsFromApi}/>

    </Container>


  );

}


export default App;
