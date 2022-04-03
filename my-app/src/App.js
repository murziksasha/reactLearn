
import React, {Component} from 'react';
import './App.css';

const style = {
  'color':'blue',
  'fontSize': '35px'
}

class WhoAmI extends Component {

  constructor(props){
    super(props);
    this.state = {
      years: 27,
      text: '++',
      enterText: ''
    }

  }

  nextYear = () =>{
    this.setState(state => ({
      years: state.years +1
    }))
  }

  changeText = (e) => {
    this.setState({
      enterText: e.target.value
    })
  }
  
  render(){
    const {name, surname, link} = this.props;
    const {text, years, enterText} = this.state;

    console.log(this);

      return (

        <div style={style} >
          <button onClick={this.nextYear}>{text}</button>
          <h2>My name is {name} surname - {surname}, age {years}</h2>
          <a href={link}>Link for my profile</a>
          <form >
            <span>Enter some text</span>
            <input type="text" onChange={this.changeText} />
            <p>{enterText}</p>
          </form>
        </div>
      )
  }

}


function App() {


  return (

    <div className='App'>

      <WhoAmI name={'Ivan'} surname={"Petrechenko"}
      link={"https://bing.com"}/>
      <br/>
      <hr/>
      <br/>     
      <WhoAmI name={'Sasha'} surname={"Grygoriev"}
      link={"https://www.google.com"}/>
    </div>


  );

}


export default App;
