import React from 'react'
import Coursetable from '../components/Coursetable'

const Course = () => {
  return (
    <div className='wholeareadashboard'>
    <div className="adminDashboard">
        <div className="adminDashboardUpper">
          <div className="leftText">Course List</div>
          <button className="rightButton">CREATE COURSE</button>
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
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="tableDashboard">
          <div className="tablecontent">
            <Coursetable />
          </div>
        </div>
      </div>
      </div>
  )
}

export default Course