
import {Component} from 'react';
import './App.css';


class WhoAmI extends Component{
  constructor(props){
    super(props);
    this.state= {
      years: 27,
      text: 'myButonToADD'
    }
      
    }

    nextYear=()=>{
      this.setState (state=> ({
        years : this.state.years+1
      }))
    }

    commitInputChanges = (e,color)=>{
      console.log(color)
      this.setState({
        position:e.target.value
      })
    }
  render(){
    const {name, surname, link} = this.props;
    const {position, years} = this.state;

    console.log(this);

    return(
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h2>My name is {name}, surname {surname} , 
        age {years}, 
        position-{position}</h2>
        <a href={link}>my link</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e)=>this.commitInputChanges(e,"some color")} />
        </form>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <WhoAmI name= 'JOhn' surname = "Petrov" link="yandex.ru"/>
      <WhoAmI name= 'Alex' surname = "Sidorov" link="facebook.com"/>
    </div>
  );
}

export default App;
