import React from 'react'

const Modules = () => {
  return (
    <div className='wholeareadashboard'>
    <div className='wholeareaprofile'>
      <div className="adminDashboardUpper">
          <div className="leftText">Modules Lists</div>
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
              <li className="headinglist">Modules</li>
              <li className="headinglist">Font</li>
              
             
            </ul>
</div>
</div></div>
</div>
)}


export default Modules