import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let image_arr = imageData()
  // code here
  return(
    <>
      <h1 className='header'>Kalviam Gallery</h1>
      <div className='Images'>
        
        <img src={elephant} className='image' alt="" />
        <img src={elephant} className='image' alt="" />
        <img src={elephant} className='image' alt="" />
        <img src={elephant} className='image' alt="" />
   
      </div>
    </>
  )
}

export default App;
