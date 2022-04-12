
import {useState, useEffect} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

const [type, setType] = useState('users');
const [data, setData] = useState([]);
const [pos, setPos] = useState({
  x:0, y:0
})

// useEffect(()=>{
//   console.log('some effect');
// })

const mouseMoveHandler = event => {
  setPos({
    x: event.clientX,
    y: event.clientY
  })
}

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))
},[type])

useEffect(() => {
  window.addEventListener('mousemove', mouseMoveHandler)

  return () => {
    window.removeEventListener(mouseMoveHandler)
  }
}, [])

  return (

    <Container>
      <div className="App">
        <h1>Resurses {type}</h1>
        <button className='btn btn-primary'
        onClick={()=>setType('users')}>some</button>
        <button
        onClick={()=>setType('todos')}>ToDo</button>
        <button className='btn btn-danger'
        onClick={()=>setType('posts')}>Posts</button>
        <pre>{JSON.stringify(pos)}</pre>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Container>


  );

}


export default App;
