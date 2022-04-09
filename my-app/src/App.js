
import React, {useState, useEffect} from 'react';
import './App.css';



function Example () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы ${count} раз`;
  });

  const minus = () => {
    (
      setCount(count -1)
    )
  }

  return (
    <>
        <p>You click {count} ways</p>
      <button style={{'marginRight': '30px'}} 
      onClick={() => setCount(count+1)}
      >Click me</button>
            <button onClick={minus}
      >minus click</button>
    </>

  )
}

function App() {


  return (

    <div className='App'>
      <Example/>

    </div>


  );

}


export default App;
