import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  let d =  new Date();
  const [daten,setDaten] = useState(0)
  const [timeOne,setTimeOne] = useState("");
  const [timeTwo,setTimeTwo] = useState("");

  useEffect(()=>{
    if(timeOne!="" && timeTwo !=""){
      axios.post('http://localhost:3000/api/calculate', {
        timeOne: timeOne,
        timeTwo: timeTwo
      })
      .then((response) => {
        console.log(response);
        setDaten(response.data)
      }, (error) => {
        console.log(error);
      });      
      //let date1 = new Date(timeOne)
      //let date2 = new Date(timeTwo)
      //setDaten(Math.abs(date1-date2)/1000)
    }else{
      setDaten(0)
      setDaten("Select the Times")
    }
  },[timeOne,timeTwo])
  
  function handleChangeNoOne (e){
    setTimeOne(e.target.value)
  }

  function handleChangeNoTwo(e){
    setTimeTwo(e.target.value)
    
  }
  
  return (
    <>
      <h1>Find the Seconds differnet between the Timestamps</h1>
      <div className='datetime-inputbox'>
        <h2>Select the time</h2>
        <div className='datetime-inputbox-content'>
          <div>
            <input value={timeOne} type="datetime-local"  step="1" onChange={(event) =>{handleChangeNoOne(event);}}/>  
          </div>
          <input value={timeTwo} type="datetime-local"  step="1" onChange={(event) =>{handleChangeNoTwo(event);}}/>
        </div>
        <div>
          <h2>Second</h2>
          <h1>{daten}</h1>
        </div>
      </div>
      
    </>
  )
}

export default App
