
import {useState, useEffect, useCallback} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Slider = (props) => {

  const [slide, setSlide] = useState(() => 0);
  const [autoplay, setAutoplay] = useState(() => false);

  const getSomeImages = useCallback(() => {
    console.log('fetching');
    return [
      'https://media.istockphoto.com/photos/planet-earth-with-some-clouds-americas-view-picture-id186019678?k=20&m=186019678&s=612x612&w=0&h=E9ZFggtDpeOkSlOBg8QgdaOoq5xsOunmBCNMGc2VNFg=',
      'https://media.istockphoto.com/photos/planet-earth-with-some-clouds-americas-view-picture-id186019678?k=20&m=186019678&s=612x612&w=0&h=E9ZFggtDpeOkSlOBg8QgdaOoq5xsOunmBCNMGc2VNFg='
    ]
  },[]); {/* в зависимоти указываем пустой массив это значит что мы получили картинки один раз и будет вызываться эта функция не каждый
раз - а только если что то поменяться или url картинки или сама картинка */}


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

    return (

      <Container>
        <div className="slider w-50 m-auto">
{/* 
        {
          getSomeImages().map((url, i) => {
            return (
              <img key ={i} src={url} alt="Earth Planet" 
              className='d-block w-50'/>
            )          
          })
        } */}

        <Slide getSomeImages={getSomeImages}/> {/*как провс передается useCallback в дочерний компонент */}

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
  const [images, setImages]  =  useState([]); //состояние массив которое потом заполнится изображениями
  useEffect(()=>{ //когда компонент будет создан и если он вдруг измениться то тогда перерендериться
    setImages(getSomeImages())   //устанавливает наше состояние в images
            //а внутри используется запрос получения картинок

  },[getSomeImages]) //в зависимость указываем саму функцию по установлению картинки (может измениться адресс картинки и др)
  //дословно когда эта функция измениться - то только тогда будет запускатся useEffect повторно
  return ( //возвращаем из этого копонента
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
