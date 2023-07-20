import React from "react";
import { Link } from "react-router-dom";

const Contest = () => {
  return (
    <div className="wholeareadashboard">
      <div className="wholeareacontest">
        <div className="notification1contest">
          <span>Marathon </span>
          <select className="selectcontest1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="nameareacontest">
          <input type="checkbox" className="checkboxcontest"></input>
          Irina Bugrova
        </div>
        <div className="beforeafterarea">
          <div>Before</div>
          <div>After</div>
        </div>
        <div className="imageareaofcontest">
          <div class="image-container">
          
            <div class="image-row1" >
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="./images/34_right.png" alt="34 right" width="120px" height="120px" border="1px solid black"/>
              <img src="./images/34_right.png" alt="34 left" width="120px" height="120px" border="1px solid black"/>
            </div>
            <div class="image-row2">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="./images/Frontview.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="./images/Frontview.png" alt="front view" width="120px" height="120px"  border="1px solid black"/>
            </div>
            <div class="image-row3">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="./images/Back_view" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="./images/Back_view" alt="front view" width="120px" height="120px" border="1px solid black"/>
            </div>
            <div class="image-row4">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="./images/34_to_the_left.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="./images/34_to_the_left.png" alt="front view" width="120px" height="120px" border="1px solid black"/>
            </div>

            <div class="image-row5">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="./images/Right_profile.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="./images/Right_profile.png" alt="front view" width="120px" height="120px" border="1px solid black"/>
            </div>

            <div class="image-row6">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="./images/Left_profile.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="./images/Left_profile.png" alt="front view" width="120px" height="120px" border="1px solid black"/>
            </div>
          </div>
        </div>
        <div className="wholeareacontest2">
        <div className="belowDashboard">
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
      <div className="inprogress">
      <Link to={"/inprogresspage"} className="inprogresslink">
            In Progress
          </Link>
      </div>
      <div className="inprogress">
      <Link to={"/allpage"} className="inprogresslink">
            All
          </Link>
      </div>
      <div className="inprogress">
      <Link to={"/finalistpage"} className="inprogresslink">
            Finalist
          </Link>
      </div>
    
    <div class="search-container">
      <input type="text" placeholder="Search"  />
    </div>
  </div>
  <div className="table1">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Order no.</li>
              <li className="headinglist">Transaction id</li>
              <li className="headinglist">Coupons</li>
              <li className="headinglist">Transaction Amount</li>
              <li className="headinglist">Status</li>
              <li className="headinglist">Order Active </li>
              <li className="headinglist">Title</li>
              <li className="headinglist">Full Name </li>
            </ul>
          </div>
</div>
      </div>
      </div>
    </div>
  );
};

export default Contest;
