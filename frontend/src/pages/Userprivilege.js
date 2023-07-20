import React, { useEffect, useState } from 'react'

const Userprivilege = () => {
    const[user,setUsers] = useState([]);
    useEffect(()=>{
        getUsers();

    }, []);
    const getUsers = async ()=>{
        let result = await fetch("http://localhost:8080/users");
        result = await result.json();
        setUsers(result);
    }
  return (
    <div className='wholeareadashboard'>
      <div className='wholeareaprofile'>
        <div className='uppernavbar'>
          User Privelege
        </div>
        <div className="upperselectbar1"> Select User
          <select className="selectauditlog">
            <option >
              --Select User--
            </option>
            {user.map((item, index) => (
                
                
                  <option>{item.name +" " +item.lastName}</option>
                 
                
                
              ))}
            
          </select>
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
          <button className="button1a" >Back</button>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Userprivilege