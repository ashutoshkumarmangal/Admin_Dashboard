import React,{useState,useEffect} from 'react'
import {Link } from "react-router-dom"
//import Coursetable from '../components/Coursetable'

const Course = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getCourse();
  }, []);
  const getCourse = async () => {
    let result = await fetch("http://localhost:8080/course");
    result = await result.json();
    setCourse(result);
  };
  return (
    <div className="wholeareaDashboard">
      <div className="adminDashboard">
        <div className="adminDashboardUpper">
          <div className="leftText">Course List</div>
          {/* <button className="rightButton">CREATE USER</button> */}
          <Link to={"/createcourse"} className="rightbutton1">
            Create Course
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
              <li className="headinglist">Course Name</li>
              <li className="headinglist">course Sub Title</li>
              <li className="headinglist">Tenure</li>
              
              <li className="headinglist">image</li>
              <li className="headinglist">Start Date </li>
              
              <li className="headinglist">Copy Marathon Url</li>
              <li className="headinglist">Copy Gift Url</li>
            </ul>
            {course.length >0?(
            
              course.map((item, index) => (
                
                <ul className="heading">
                <li className="belowlist">{index +1}</li>
              <li className="belowlist">{item.title}</li>
              <li className="belowlist">{item.subtitle}</li>
              <li className="belowlist">{item.tenure}</li>
              <li className="belowlist">{item.image}</li>
              <li className="belowlist">{item.startdate}</li>
              <li className="belowlist">{} </li>
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

export default Course