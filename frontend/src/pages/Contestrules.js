import React from 'react'
import {Link} from "react-router-dom";

const Contestrules = () => {
  return (
    <div className="wholeareaDashboard">
      <div className="adminDashboard">
        <div className="adminDashboardUpper">
          <div className="leftText">Contest Rule List</div>
          {/* <button className="rightButton">CREATE USER</button> */}
          <Link to={"/createrule"} className="rightbutton1">
            Create Rule
          </Link>
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
              <input type="text" placeholder="Search" /*onChange={searchHandle}*/ />
            </div>
          </div>
        </div>
        <div className="table1">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Marathon</li>
              <li className="headinglist">Date</li>
              <li className="headinglist">Rule</li>
              </ul>
          </div>
        </div>
        </div>
  )
}

export default Contestrules