import React,{useEffect,useState} from 'react'
import Barchart from '../components/Barchart';


const Revenue = () => {

  const [marathon, setMarathon] = useState([]);
useEffect(()=>{
  getMarathon();

},[]);
const getMarathon  = async()=>{
  let result = await fetch("http://localhost:8080/marathon");
  result = await result.json();
  setMarathon(result);
}
  return (
   <div className="wholeareadashboard">
    <div className="wholeareaappsetting">
    <div className='revenueheading'><h2>Total Order:- </h2></div>

    <div className="notification1">
            <span>Marathon </span>
            <select className="selectauditlog">
              <option disabled selected>
                --Select Name--
              </option>
              {marathon.map((item,index)=>(
              <option>{item.title}</option>
            ))}
            </select>
          </div>
          <div className='barchart'>
      
      <Barchart />
    </div>
    </div>
    </div>
  )
}

export default Revenue