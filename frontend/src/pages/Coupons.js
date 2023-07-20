import React,{useState,useEffect} from 'react'

const Coupons = () => {
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
    <div className="adminDashboard">
        <div className="adminDashboardUpper">
          <div className="leftText">Marathon
          </div>
          <select className="selectorder">
            <option disabled selected>
              --Select Marathon--
            </option>
            {marathon.map((item,index)=>(
              <option>{item.title}</option>
              ))}
          </select></div>


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
  )
}

export default Coupons