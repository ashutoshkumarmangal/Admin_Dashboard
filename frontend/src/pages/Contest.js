import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Contest = () => {


  const [marathon, setMarathon] = useState([]);
useEffect(()=>{
  getMarathon();

},[]);
const getMarathon  = async()=>{
  let result = await fetch("http://localhost:8080/marathon");
  result = await result.json();
  setMarathon(result);
}


const [contestback, setContestback] = useState([]);
useEffect(()=>{
  getContestback();

},[]);
const getContestback  = async()=>{
  let result = await fetch("http://localhost:8080/contestback");
  result = await result.json();
  setContestback(result);
}
  return (
    <div className="wholeareadashboard">
      <div className="wholeareacontest">
        <div className="notification1contest">
          <span>Marathon </span>
          <select className="selectcontest6">
          {marathon.map((item,index)=>(
              <option>{item.title}</option>
            ))}
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
              <img src="/images/34_right.png" alt="34 right" width="120px" height="120px" border="1px solid black"/>
              <img src="/images/34_right.png" alt="34 left" width="120px" height="120px" border="1px solid black"/>
            </div>
            <div class="image-row2">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="/images/Frontview.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="/images/Frontview.png" alt="front view" width="120px" height="120px"  border="1px solid black"/>
            </div>
            <div class="image-row3">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="/images/Back_view.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="/images/Back_view.png" alt="front view" width="120px" height="120px" border="1px solid black"/>
            </div>
            <div class="image-row4">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="/images/34_to_the_left.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="/images/34_to_the_left.png" alt="front view" width="120px" height="120px" border="1px solid black"/>
            </div>

            <div class="image-row5">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="/images/Right_profile.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="/images/Right_profile.png" alt="front view" width="120px" height="120px" border="1px solid black"/>
            </div>

            <div class="image-row6">
            <input type="checkbox" className="checkboxcontest"></input>
              <img src="/images/Left_profile.png" alt="back view" width="120px" height="120px" border="1px solid black"/>
              <img src="/images/Left_profile.png" alt="front view" width="120px" height="120px" border="1px solid black"/>
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
  <div className="table">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Full name</li>
              <li className="headinglist">email</li>
              <li className="headinglist">download</li>
              <li className="headinglist">Finalist</li>
              <li className="headinglist">collage</li>
              <li className="headinglist">login as user </li>
              <li className="headinglist">send notification</li>
              
            </ul>
            {contestback.length >0?(
            
            contestback.map((item, index) => (
              
              <ul key={item._id} className="heading">
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.fullname}</li>
                <li className="belowlist">{item.email}</li>
                <li className="belowlist">{item.download}</li>
                <li className="belowlist">{item.finalist}</li>
                <li className="belowlist">{item.collage}</li>
                <li className="belowlist">{item.loginasuser}</li>
                <li className="belowlist">{item.notification}</li>
                
              </ul>
              
            ))
          ):(<h2 className="no-users">No Users Found</h2>
          )}
          
        </div>
          </div>
</div>
      </div>
      </div>
    
  );
};

export default Contest;
