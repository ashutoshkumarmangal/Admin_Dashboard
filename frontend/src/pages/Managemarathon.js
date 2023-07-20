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
          <div className="table">
            <ul className="heading">
            <li className="headinglist">S.No</li>
              <li className="headinglist">Marathon Name</li>
              <li className="headinglist">View</li>
              <li className="headinglist">Tenure</li>
              <li className="headinglist">Description</li>
              <li className="headinglist">image</li>
              <li className="headinglist">Start Date </li>
              <li className="headinglist">Action</li>
              <li className="headinglist">Copy Marathon Url</li>
              <li className="headinglist">Copy Gift Url</li>
            </ul>
            {marathon.length >0?(
            
              marathon.map((item, index) => (
                
                <ul className="heading">
                <li className="belowlist">{index +1}</li>
              <li className="belowlist">{item.title}</li>
              <li className="belowlist">view</li>
              <li className="belowlist">{item.noofdays}</li>
              <li className="belowlist">{item.description}</li>
              <li className="belowlist">{item.image}</li>
              <li className="belowlist">{item.startdate} </li>
              <li className="belowlist">{}</li>
              <li className="belowlist">{}</li>
              <li className="belowlist">{}</li>
                 
                  
                </ul>
                
              ))
            ):(<h2 className="no-data">No Data Found</h2>
            )}

        </div>
        </div>
        </div>
        </div>
        
        
  )
}

export default Managemarathon