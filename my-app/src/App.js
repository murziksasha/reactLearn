
import {useState, useRef, useEffect} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [text, setText] = useState('');


  const myRef = useRef(1);

  useEffect(()=>{
    myRef.current = text;
    
  })


  return (

    <div className='App'>
      <Container >
        <form className='w-50 border mt-5 p-3 m-auto'>
            <div className="mb-3">
              <label htmlFor="exampleFromControlInput1">Email address</label>
              <input onChange={(e)=>setText(e.target.value)}
               type='email'
              className='from-label' placeholder='name@forexample'
              id="exampleFromControlInput1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFromControlTextArea1">Email address</label>
              <textarea value={myRef.current}
               id="exampleFromControlTextArea1" cols="30" rows="10"
              className='form-control' rows='3'></textarea>
            </div>

        </form>
      </Container>
    </div>


  );

}




export default App;
