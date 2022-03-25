
import React, {Component} from 'react';
import styled from 'styled-components';


import './App.css';
import BootstrapTest from './bootstrapTest';
import 'bootstrap/dist/css/bootstrap.min.css';





const Header = () => {
  return <h2>Hello React!</h2>
}



class Field extends Component {

  changeValue = (e) => {
    console.log(e.target.value);
  }

  render(){
    const holder = 'Enter here'
    const styleField = {
      backgroundColor: 'yellow',
      width: '300px',
      height: '50px'
    };
 
return <input onChange = {this.changeValue} type="text" placeholder={holder} style={styleField}/>
  }
}

const EmpItem = styled.div`
  padding: 20px;
  margin-botton: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;


export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

class WhoAmI extends Component {
  constructor(props){
    super(props);
    this.state = {
      years: 27,
      position: ''
    }
  }

  nextYear = (e)=>{
    console.log('hello' + e);
  }

  render(){
    const {name, surname, link} = this.props;
    return (
      <>
      <EmpItem>
        <a href={link}>Some Link</a>
        <Button onClick={this.nextYear}>{'Enter'}</Button>
      </EmpItem>
     
      </>
      
    )
  };

}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
  color: red;
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border-'+props.color}>
      {
              React.Children.map(props.children, child => {
                return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded' })
              })
      }

    </div>
  )
}

const Message = (props) => {
  return (
    <h2>the counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter +1
    }))
  }

  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

function App() {
  return (
    <Wrapper>

      <Counter render = {counter => (
        <Message counter = {counter}/>
      )}/>
        
      

      <BootstrapTest
        
        left = {
          <DynamicGreating color={'primary'}>
              <h2>Ones heading 2 type</h2>
              <h2>Second heading 2 types</h2>
          </DynamicGreating>
        }
        right = {
            <DynamicGreating color={'primary'}>
                  <h2>right block Heading</h2>
            </DynamicGreating>
        }
      />

      <WhoAmI name="Alexander" surname="Grygoriev" link="google.com"/>
      <Header/>
      <Field/>
    </Wrapper>
  );
}


export default App;
