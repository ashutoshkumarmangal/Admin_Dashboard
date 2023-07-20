import React, {useEffect, useState} from 'react'
import {Link } from "react-router-dom"

const Managecomments = () => {

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
      <div className="wholeareanotifications">
        <div className="uppernavbar">Messages</div>
        <div className="notifications1line">
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

          <div className="notification1">
            <span>SSC </span>
            <select className="selectauditlog">
              <option disabled selected>
                --Select Name--
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="notification1">
            <span>Extension </span>
            <select className="selectauditlog">
              <option disabled selected>
                --Select Name--
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

        </div><div className='rightbutton2'>
          <button className="rightButton">New Comments</button>
          </div>
<div className='container3'>
<div className='somelinks'>
  <div className='inprogress1'>

  <Link to={""} className="inprogresslink1">
            New
          </Link>
      </div>
      <div className="inprogress1">
      <Link to={""} className="inprogresslink1">
            All
          </Link>
      </div>
      <div className="inprogress1">
      <Link to={""} className="inprogresslink1">
            Waiting for approval
          </Link>     
  </div>

  <div className="inprogress1">
      <Link to={""} className="inprogresslink1">
            Not Replied
          </Link>
      </div>
      <div className="inprogress1">
      <Link to={""} className="inprogresslink1">
            Delete
          </Link>
      </div>
      </div>
    
    <div class="dropdown4">
      <span className='show'>Show</span>
      <select className='select4'>
        <option value="option1">100</option>
        <option value="option2">200</option>
        <option value="option3">300</option>
        <option value="option3">500</option>
      </select>
      </div>
      <div class="search-container">
      <input type="text" placeholder="Search"  />
    </div>
  
 
        </div>

        <div className="table4">
            <ul className="heading">
            <li className="headinglist">S.No</li>
              <li className="headinglist">Marathon Name</li>
              <li className="headinglist">View</li>
              <li className="headinglist">Tenure</li>
              <li className="headinglist">Description</li>
              <li className="headinglist">image</li>
              <li className="headinglist">Start Date </li>
              <li className="headinglist">Action</li>
              <li className="headinglist">Copy Marathon Url</li>
              <li className="headinglist">Copy Gift Url</li>
            </ul>
            </div>
        </div>
        </div>
        
  )
}

export default Managecomments