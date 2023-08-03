import React ,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const Managemarathon = () => {
  const [marathon, setMarathon] = useState([]);
  useEffect(() => {
    getMarathon();
  }, []);
  const getMarathon = async () => {
    let result = await fetch("http://localhost:8080/marathon");
    result = await result.json();
    setMarathon(result);
  };
  return (
    <div className="wholeareaDashboard">
      <div className="adminDashboard">
        <div className="adminDashboardUpper">
          <div className="leftText">Marathon List</div>
          {/* <button className="rightButton">CREATE USER</button> */}
          <Link to={"/createmarathon"} className="rightbutton1">
            Create Marathon
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

        <div className="tableDashboard">
        <div className="tableman">
  <ul className="headingman">
    <li className="headinglistman">S.No</li>
    <li className="headinglistman">Marathon Name</li>
    <li className="headinglistman">View</li>
    <li className="headinglistman">Tenure</li>
    <li className="headinglistman">Description</li>
    <li className="headinglistman">Image</li>
    <li className="headinglistman">Start Date</li>
    <li className="headinglistman">Action</li>
    <li className="headinglistman">Copy Marathon Url</li>
    <li className="headinglistman">Copy Gift Url</li>
  </ul>
  {marathon.length > 0 ? (
    marathon.map((item, index) => (
      <ul key={item.id} className="belowlistman">
        <li>{index + 1}</li>
        <li>{item.title}</li>
        <li>{}</li>
        <li>{item.noofdays}</li>
        <li>{item.description}</li>
        <li>{item.image}</li>
        <li>{item.startdate}</li>
        <li>{item.action}</li>
        <li>
          <input className='buttoncour' type="button" value="Copy Marathon URL" readOnly />
        </li>
        <li>
          <input className='buttoncour' type="button" value="Copy Gift URL" readOnly />
        </li>
      </ul>
    ))
  ) : (
    <h2 className="no-dataman">No Data Found</h2>
  )}
</div>

        </div>
        </div>
        </div>
        
        
  )
}

export default Managemarathon