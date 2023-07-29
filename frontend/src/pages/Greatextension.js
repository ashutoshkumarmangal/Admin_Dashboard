import React, {useState, useEffect} from 'react'
import {Link } from "react-router-dom"

const Greatextension = () => {
  const [greatextension, setGreatextension] = useState([]);
  useEffect(() => {
    getGreatextension();
  }, []);
  const getGreatextension = async () => {
    let result = await fetch("http://localhost:8080/greatextension");
    result = await result.json();
    setGreatextension(result);
  };

  return (
    <div className="wholeareaDashboard">
    <div className="adminDashboard">
      <div className="adminDashboardUpper">
        <div className="leftText">Extension List</div>
        {/* <button className="rightButton">CREATE USER</button> */}
        <Link to={"/creategreatextension"} className="rightbutton1">
          Create Great Extension
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
      <div className="table4">
            <ul className="heading">
            <li className="headinglist">S.No</li>
              <li className="headinglist">Title</li>
              <li className="headinglist">Subtitle</li>
              <li className="headinglist">Tenure</li>
              <li className="headinglist">Cost</li>
              <li className="headinglist">Image</li>
              <li className="headinglist">Start Date </li>
              <li className="headinglist">Status</li>
              
            </ul>

            {greatextension.length >0?(
            
            greatextension.map((item, index) => (
              /*<ul key={item._id}>*/
              <ul className="heading">
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.title}</li>
                <li className="belowlist">{item.subtitle}</li>
                <li className="belowlist">{item.tenure}</li>
                <li className="belowlist">{item.cost}</li>
                <li className="belowlist">{item.image}</li>
                <li className="belowlist">{item.startdate}</li>
                <li className="belowlist">{item.status}</li>
               
        
                
              </ul>
              
            ))
          ):(<h2 className="no-users">No Users Found</h2>
          )}

            </div>
      </div>
      </div>
  )
}

export default Greatextension