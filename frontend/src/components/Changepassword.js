import React from 'react'

const Changepassword = () => {
  return (
    <div className='wholeareadashboard'>
    <div className='wholeareaprofile'>
      <div className='uppernavbar'>
        View Profile
      </div>
      <div className='wholeareaprofile2'>
        <div className='uppernavbar2'>Change Password</div>
      
      <div className='changepasswordsection'>
        <div className='namesection'>
        <label>Enter old Password</label>
        <input type='text'></input>
        </div>

        <div className='namesection'>
        <label>Enter new Password</label>
        <input type='text'></input>
        </div>

        <div className='namesection'>
        <label>Confirm Password</label>
        <input type='text'></input>
        </div>

        <div className='buttonsentryarea'>
          <button className='savebutton'>Save Changes</button>
          <button className='cancelbutton'>Cancel</button>
          </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Changepassword