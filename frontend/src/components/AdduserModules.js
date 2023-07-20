import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdduserModules = () => {
  const navigate = useNavigate();
  const handleBack = () =>{
    navigate("/adminuser");
  }
  return (
    <div className='wholeareadashboard'>
      <div className='wholeareaprofile'>
        <div className='uppernavbar'>
          Add User Modules
        </div>
        <div className='cardarea'>
        <div className='card1'>
        <div className='addarea'>
          ADD 
        </div>
        <div className='slidingarea'>
          <ul>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
          </ul>
        </div>
        <div className="card1buttons">
        <button className="button1a">All</button>
          <button className="button1a">None</button>
        </div>
        </div>

        <div className='card2'>
        <div className='addarea'>
          REMOVE 
        </div>
        <div className='slidingarea'>
          <ul>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
            <li className='listofsliding'> a</li>
          </ul>
        </div>
        <div className="card1buttons">
        <button className="button1a">All</button>
          <button className="button1a">None</button>
        </div>
        
        </div>
        </div>
        <div className='lowerbuttonarea'>
        <div className="card1buttons">
        <button className="button1a">Update</button>
          <button className="button1a" onClick={handleBack}>Back</button>
        </div>
        </div>
        </div>
        </div>
        
  )
}

export default AdduserModules