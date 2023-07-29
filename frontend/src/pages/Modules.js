import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"

const Modules = () => {

  const [module, setModule] = useState([]);
  useEffect(() => {
    getModule();
  }, []);
  const getModule = async () => {
    let result = await fetch("http://localhost:8080/module");
    result = await result.json();
    setModule(result);

  };
  return (
    <div className='wholeareadashboard'>
    <div className='wholeareaprofile'>
      <div className="adminDashboardUpper">
          <div className="leftText">Modules Lists</div>
          
           <Link to={"/createmodules"} className="rightbutton1">
            Create Modules
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

            {module.length >0?(
            
            module.map((item, index) => (
              /*<ul key={item._id}>*/
              <ul className="heading">
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.module}</li>
                <li className="belowlist">{item.font}</li>
                
              </ul>
              /*</ul>*/
            ))
          ):(<h2 className="no-users">No data Found</h2>
          )}
</div>
</div></div>
</div>
)}


export default Modules