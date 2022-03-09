
import {Component} from 'react';
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
      <div>
        <h1>My name is {name}, surname is {surname}, age = {this.state.years}</h1>
        <a href={link}>Some Link</a>
        <button onClick={this.nextYear}>{'Enter'}</button>
      </div>
    )
  };

}

function App() {
  return (
    <div className="App">
      <WhoAmI name="Alexander" surname="Grygoriev" link="google.com"/>
      <Header/>
      <Field/>
    </div>
  );
}


export default App;
