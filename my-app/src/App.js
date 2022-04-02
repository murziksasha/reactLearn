
import React, {Component} from 'react';

import  './App.css';


class WhoAmI extends Component {

  constructor(props){
    super(props);
    this.state = {
      years: 27,
      text: '++',
      valueText: ''
    }

  }


  nextYear = () =>{
    this.setState(state => ({
      years: state.years +1
    }));
  }

  commitInputChanges = (e) => {
    this.setState ({
      valueText:  e.target.value
    })

  }
  
  render(){
    const {name, surname, link} = this.props;
    const {valueText, years} = this.state;
      return (

        <div >
          <button onClick={this.nextYear}>{this.state.text}</button>
          <h2>My name is {name} surname - {surname}, age {years}</h2>
          <a href={link}>Link for my profile</a>
          <form>
            <span>Enter the position</span>
            <input type="text" onChange={this.commitInputChanges} />
            <p>{valueText}</p>
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
