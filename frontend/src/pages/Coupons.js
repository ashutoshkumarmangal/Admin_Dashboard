import React,{useState,useEffect} from 'react'

const Coupons = () => {

  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    getCoupons();
  }, []);
  const getCoupons = async () => {
    let result = await fetch("http://localhost:8080/couponsback");
    result = await result.json();
    setCoupons(result);
  };



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
        <div className="tablecou">
  <ul className="headingcou">
    <li className="headinglistcou">S.No</li>
    <li className="headinglistcou">Email</li>
    <li className="headinglistcou">Coupons</li>
    <li className="headinglistcou">Created Date</li>
    <li className="headinglistcou">Discount</li>
    <li className="headinglistcou">Discount Type</li>
    <li className="headinglistcou">Marathon Name</li>
    <li className="headinglistcou">Order No</li>
    <li className="headinglistcou">No of Uses</li>
    <li className="headinglistcou">Consumed Count</li>
    <li className="headinglistcou">Valid</li>
  </ul>

  {coupons.length > 0 ? (
    coupons.map((item, index) => (
      <ul key={item.id} className="belowlistcou">
        <li>{index + 1}</li>
        <li className="email-cell">{item.email}</li>
        <li>{item.couponcode}</li>
        <li>{item.startdate}</li>
        <li>{item.discount}</li>
        <li>{item.discounttype}</li>
        <li>{item.marathon}</li>
        <li>{item.orderno}</li>
        <li>{item.noofuses}</li>
        <li>{item.consumedcount}</li>
        <li>
          <input type='checkbox' />
        </li>
      </ul>
    ))
  ) : (
    <h2 className="no-userscou">No Coupons Found</h2>
  )}
</div>

        </div>
      
  )
}

export default Coupons