
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import BootstrapTest from './bootstrapTest';
import 'bootstrap/dist/css/bootstrap.min.css';






class Form extends Component {

  state = {
    advOpen: false
  }

  componentDidMount() {
    setTimeout(this.handleClick, 3000);
  }

  handleClick = () => {
    this.setState(({advOpen}) => ({
      advOpen: !advOpen
    }))
  }

  render() {
    return(
      <Container>
        <form onClick={this.handleClick}
        className='w-50 border mt-5 p-3 m-auto'
        style={{'position':'relative',
                'overflow':'hidden'}}>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className="form-label">Email Address</label>
            <input type="email" className='form-control' id='exampleFormControlInput1'placeholder='name@example.com' />
          </div>
          <div className='mb-3'>
            <label htmlFor="exampleFormControlTextArea1" className='form-label'>Example Text-Area</label>
            <textarea 
            className='form-control' id='exampleFormControlTextArea1' rows='3'></textarea>
          </div>
          {
            this.state.advOpen ? 
            <Portal>
              <Msg/>
            </Portal> : null
          }

        </form>
      </Container>
    )
  }
}

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  return ReactDom.createPortal(props.children, node);
}

const Msg = () => {
  return(
    <div
        style={{'width': '500px',
                'height': '150px',
                'backgroundColor': 'red',
                'position': 'absolute',
                'right': '0',
                'bottom': '0'}

    }>
      Hello
    </div>
  )
}

function App() {
  return (
    <Form/>
  );

}


export default App;
