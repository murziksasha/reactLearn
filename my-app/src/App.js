
import {Component} from 'react';
import styled from 'styled-components';
import './App.css';


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

const Header2 = styled.h2`
  font-size: 22px;
  color: blue;
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
        <Header2>My name is {name}, surname is {surname}, age = {this.state.years}</Header2>
        <a href={link}>Some Link</a>
        <Button onClick={this.nextYear}>{'Enter'}</Button>
      </EmpItem>
     
      <Header2>Some header</Header2>
      </>
      
    )
  };

}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
  color: red;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name="Alexander" surname="Grygoriev" link="google.com"/>
      <Header/>
      <Field/>
    </Wrapper>
  );
}


export default App;
