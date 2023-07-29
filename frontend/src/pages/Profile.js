import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='wholeareadashboard'>
      <div className='wholeareaprofile'>
        <div className='uppernavbar'>
          Profile
        </div>
        <div className='wholeareaprofile2'>
          <div className='uppernavbar2'>Profile</div>
          <div class="button-on-profile">
          <div className='buttoneditprofile'>
  
   
   <Link to={"/editprofile"} className="edit-button-profile">
            Edit Profile
          </Link>
  </div>
  <div className='buttonchangepassword'>
  
   
   <Link to={"/changepassword"} className="edit-button-profile2">
            Change Password
          </Link>
</div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Profile