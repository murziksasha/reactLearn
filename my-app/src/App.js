
import {useState} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function useInputWithValidate (initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value)
  }

  const validateInput = () => {
    return value.search(/\d/) >=0
  }

  return {value, onChange, validateInput}

}

function App() {

  const input =  useInputWithValidate('');
  const textArea = useInputWithValidate('');

 

  const color = input.validateInput() ? 'text-danger' : null;



  return (

    <div className='App'>
      <Container >
        <form className='w-150 border mt-5 p-3 m-auto'>
            <div className="mb-3">
              <input value={`${input.value}  /  ${textArea.value}`} type="text" readOnly />
              <label htmlFor="exampleFromControlInput1"
              >Email address</label>
              <input
              onChange={input.onChange}
               type='email'
               value={input.value}
              className={`from-label ${color}`} placeholder='name@forexample'
              id="exampleFromControlInput1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFromControlTextArea1">Descriebe something</label>
              <textarea
               id="exampleFromControlTextArea1" cols="30" rows="10"
              className='form-control' rows='3'
              onChange={textArea.onChange}
              value={textArea.value}></textarea>
              
            </div>

        </form>
      </Container>
    </div>


  );

}




export default App;
