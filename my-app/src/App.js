
import {useState, useEffect, useCallback, useMemo} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const countTotal = (num) => {
  console.log('counting...');
  return num + 10;
}

const Slider = (props) => {

  const [slide, setSlide] = useState(() => 0);
  const [autoplay, setAutoplay] = useState(() => false);

  const getSomeImages = useCallback(() => {
    console.log('fetching');
    return [
      'https://media.istockphoto.com/photos/planet-earth-with-some-clouds-americas-view-picture-id186019678?k=20&m=186019678&s=612x612&w=0&h=E9ZFggtDpeOkSlOBg8QgdaOoq5xsOunmBCNMGc2VNFg=',
      'https://media.istockphoto.com/photos/planet-earth-with-some-clouds-americas-view-picture-id186019678?k=20&m=186019678&s=612x612&w=0&h=E9ZFggtDpeOkSlOBg8QgdaOoq5xsOunmBCNMGc2VNFg='
    ]
  },[]); 


  function logging() {
    console.log('log!');
  }

  useEffect(()=>{
    console.log('effect');
    document.title = `Slide ${slide}`;

    window.addEventListener('click', logging);

    return () => {
      window.removeEventListener('click', logging);
    }

  },[slide])

  useEffect(() => {
    console.log('toggle state');

  }, [autoplay])

  const changeSlide = (i) => {
    setSlide(slide => slide + i)
  }

  const toggleAutoplay = () => {
    setAutoplay(autoplay => !autoplay)
  }

  const total = useMemo(()=> {
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(()=>({
    
      color: slide > 4 ? 'red': 'black'
    
  }),[slide])

  useEffect(()=>{
    console.log('styling....');
  },[style]);

    return (

      <Container>
        <div className="slider w-50 m-auto">

        <Slide getSomeImages={getSomeImages}/> 

        <div className="text-center mt-5"
        style={style}>Total {total}</div>

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

const Slide = ({getSomeImages}) => {
  const [images, setImages]  =  useState([]);
  useEffect(()=>{ 
    setImages(getSomeImages())   

  },[getSomeImages]) 
  return (
    <>
    {images.map((url, i) =><img key ={i} src={url} alt="Earth Planet" 
              className='d-block w-50'/>)}
    </>
  )
}

function App() {

  const [slider, setSlider] = useState(()=>true);

  return (

    <div className='App'>
      <button onClick={() => setSlider(false) }>Click me</button>
     {(slider)?<Slider/>:null}
    </div>


  );

}




export default App;
