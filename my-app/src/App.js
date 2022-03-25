
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import BootstrapTest from './bootstrapTest';
import 'bootstrap/dist/css/bootstrap.min.css';






class Form extends Component {

setInputRef = (elem) => {
  this.myRef = elem;
}


  focusIT = () => {
    if(this.myRef) {
      this.myRef.focus();
    }
  }


  render() {
    return(
      <Container>
        <form className='w-50 border mt-5 p-3 m-auto'>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className="form-label">Email Address</label>
            <input ref={this.setInputRef} type="email" className='form-control' id='exampleFormControlInput1'placeholder='name@example.com' />
          </div>
          <div className='mb-3'>
            <label htmlFor="exampleFormControlTextArea1" className='form-label'>Example Text-Area</label>
            <textarea 
            onClick={this.focusIT}
            className='form-control' id='exampleFormControlTextArea1' rows='3'></textarea>
          </div>
        </form>
      </Container>
    )
  }
}

function App() {
  return (
    <Form/>
  );

}


export default App;
