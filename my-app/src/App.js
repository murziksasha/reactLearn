
import {useState} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';


const Slider = (props) => {

  const [slide, setSlide] = useState(() => 0);
  const [autoplay, setAutoplay] = useState(() => false);

  const changeSlide = (i) => {
    setSlide(slide => slide + i)
  }

  const toggleAutoplay = () => {
    setAutoplay(autoplay => !autoplay)
  }

    return(

      <Container>
        <div className="slider w-50 m-auto">
          <img src="https://media.istockphoto.com/photos/planet-earth-with-some-clouds-americas-view-picture-id186019678?k=20&m=186019678&s=612x612&w=0&h=E9ZFggtDpeOkSlOBg8QgdaOoq5xsOunmBCNMGc2VNFg=" alt="Earth Planet" style={{'width':100}} />
          <div className="text-center mt-5">Active slide {slide} <br/>{autoplay?'auto':null}</div>
          <div className="buttons mt-3">
          <button
              className='btn btn-primary me-2'
              onClick={() => changeSlide(-1)}>-1</button>            
              <button
              className='btn btn-primary me-2'
              onClick={() => changeSlide(1)}>+1</button>            
              <button
              className='btn btn-primary me-2'
              onClick={()=>toggleAutoplay()}>Toggle auto play</button>
          </div>
        </div>
        </Container>
    )
}

function App() {


  return (

    <div className='App'>
      <Slider/>

    </div>


  );

}


export default App;
