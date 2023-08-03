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
        <div className="tablecour">
  <ul className="headingcour">
    <li className="headinglistcour">S.No</li>
    <li className="headinglistcour">Course Name</li>
    <li className="headinglistcour">Course Sub Title</li>
    <li className="headinglistcour">Tenure</li>
    <li className="headinglistcour">Image</li>
    <li className="headinglistcour">Start Date</li>
    <li className="headinglistcour">Copy Marathon Url</li>
    <li className="headinglistcour">Copy Gift Url</li>
  </ul>
  {course.length > 0 ? (
    course.map((item, index) => (
      <ul key={item.id} className="belowlistcour">
        <li>{index + 1}</li>
        <li>{item.title}</li>
        <li>{item.subtitle}</li>
        <li>{item.tenure}</li>
        <li>{item.image}</li>
        <li>{item.startdate}</li>
        <li>
          <input className='buttoncour' type="button" value="Copy Marathon URL" readOnly />
        </li>
        <li>
          <input className='buttoncour' type="button" value="Copy Gift URL" readOnly />
        </li>
      </ul>
    ))
  ) : (
    <h2 className="no-datacour">No Data Found</h2>
  )}
</div>

        </div>
        </div>
        </div>
        
  )
}

export default Course