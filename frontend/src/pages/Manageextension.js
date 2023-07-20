import { text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'

const Manageextension = () => {
const [marathon, setMarathon] = useState([]);
useEffect(()=>{
  getMarathon();

},[]);
const getMarathon  = async()=>{
  let result = await fetch("http://localhost:8080/marathon");
  result = await result.json();
  setMarathon(result);
}

  return (
    <div className="wholeareaDashboard">
      <div className="admindashboardmanageextension">
        <div className="adminDashboardUpper">
          <div className="leftText">Create Extension
          </div>
          </div>
          <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">isAvailable for IOS</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox" value={text} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Select Marathon</div>
        </div>
        <div className="block-type-area">
          <select className="selectauditlogmanageextension">
            <option disabled selected>
              --Select Marathon--
            </option>
            {marathon.map((item,index)=>(
              <option>{item.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Course Title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={text} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Course Sub title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={text} />
        </div>
      </div>
      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Tenure(in days)</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={text} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Cost</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={text} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">USD cost</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={text} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon"></div>
        </div>
        <div className="block-type-area">
        <button className="nextButton">Create Extension</button>
        </div>
      </div>


  </div>
  <div className="admindashboardmanageextension1">
        <div className="adminDashboardUpper">
          <div className="leftText">Extension List
          </div></div>
          <div className="belowDashboard1">
          <div class="container1">
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
              <input type="text" placeholder="Search"/>
            </div>
          </div>
        </div>
        {/* <div className="tableDashboard"> */}
          <div className="table1">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Title</li>
              <li className="headinglist">Sub Title</li>
              <li className="headinglist">Tenure</li>
              <li className="headinglist">Cost</li>
              <li className="headinglist">Image</li>
              <li className="headinglist">Status</li>
            </ul>
          </div>
          
</div>
  </div>
  // </div>
  
)}

export default Manageextension