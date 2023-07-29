import React from 'react'

const Editprofile = () => {
  return (
    <div className='wholeareadashboard'>
      <div className='wholeareaprofile'>
        <div className='uppernavbar'>
         Edit Profile
          </div>
          <div className='editprofileheading'>
            Edit Profile
          </div>
          <div className='areaofuploadandtext'>
          <div className='photouploadarea'>
          <img src="" alt=""  width="100px" height="100px"/>
          <br></br>
          <div className='uploadbuttonsection'>
          <p>Upload a different File</p>
          <input type="file"></input>
          </div>

          </div>
          <div className='entryarea'>
          <p>Personal Info</p>
          <label>First Name:</label>
          <input type='text'></input>
          
        
          <label>Last Name:</label>
          <input type='text'></input>
          
           <div className='buttonsentryarea'>
          <button className='savebutton' >Save Changes</button>
          <button className='cancelbutton' >Cancel</button>
          </div>

          </div>

          </div>
          </div>
          </div>
  )
}

export default Editprofile