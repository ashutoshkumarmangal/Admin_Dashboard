import React from 'react'

const Usersessionlogs = () => {
  return (
    <div className='wholeareadashboard'>
    <div className='wholeareaprofile'>
      <div className='uppernavbar'>
        User Session Logs
      </div>

<div className="belowDashboard">
  <div class="container">
    <div class="dropdown">
      <span>Show</span>
      <select>
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
</div>
<div className="tableDashboard">
          <div className="table">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Email</li>
              <li className="headinglist">Session count</li>
              <li className="headinglist">Ip List</li>
             
            </ul>
</div>
</div></div>
</div>
)}

export default Usersessionlogs